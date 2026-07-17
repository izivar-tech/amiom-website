"use server";

import { headers } from "next/headers";
import { z } from "zod";
import { render } from "@react-email/components";
import { COMPANY, CONTACT_PAGE } from "@amiom/constants";
import { checkRateLimit } from "@/lib/rate-limit";
import { LeadConfirmationEmail } from "@/emails/lead-confirmation";
import { LeadNotificationEmail } from "@/emails/lead-notification";

export type LeadResult =
  | { success: true }
  | { success: false; error: string; fieldErrors?: Record<string, string> };

const leadSchema = z.object({
  name: z
    .string()
    .min(2, "Full name must be at least 2 characters")
    .max(100)
    .regex(/^[\p{L}\p{M}\s.'-]+$/u, "Name should contain only letters"),
  phone: z
    .string()
    .min(1, "Phone number is required")
    .regex(/^[6-9]\d{9}$/, "Enter a valid 10-digit Indian mobile number"),
  email: z
    .string()
    .optional()
    .refine((v) => !v || z.string().email().safeParse(v).success, {
      message: "Enter a valid email address",
    }),
  loanType: z.string().min(1, "Please select a loan type"),
  loanAmount: z.string().max(50).optional(),
  city: z.string().max(100).optional(),
  message: z.string().max(2000).optional(),
});

export async function submitLead(formData: FormData): Promise<LeadResult> {
  // ── Rate limit: max 5 submissions per IP per minute ──────────────────────────
  const ip =
    (await headers()).get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (!checkRateLimit(ip, { max: 5 }).allowed) {
    return {
      success: false,
      error: "Too many submissions. Please wait a minute and try again.",
    };
  }

  // ── Honeypot: bots fill the hidden _hp field, humans don't ──────────────────
  const honeypot = (formData.get("_hp") as string)?.trim();
  if (honeypot) return { success: false, error: "Invalid submission." };

  // ── Server-side validation ───────────────────────────────────────────────────
  const parsed = leadSchema.safeParse({
    name:       (formData.get("name")       as string)?.trim(),
    phone:      (formData.get("phone")      as string)?.trim(),
    email:      (formData.get("email")      as string)?.trim() || undefined,
    loanType:   (formData.get("loanType")   as string)?.trim(),
    loanAmount: (formData.get("loanAmount") as string)?.trim() || undefined,
    city:       (formData.get("city")       as string)?.trim() || undefined,
    message:    (formData.get("message")    as string)?.trim() || undefined,
  });

  if (!parsed.success) {
    const fieldErrors: Record<string, string> = {};
    for (const [field, msgs] of Object.entries(parsed.error.flatten().fieldErrors)) {
      if (msgs?.[0]) fieldErrors[field] = msgs[0];
    }
    return { success: false, error: "Please fix the errors below.", fieldErrors };
  }

  const { name, phone, email, loanType, loanAmount, city, message } = parsed.data;

  if (!process.env.RESEND_API_KEY) {
    console.error("[lead] RESEND_API_KEY is not set");
    return {
      success: false,
      error: "Email service is not configured. Please call us directly.",
    };
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://amiom.in";
  const toEmail = process.env.CONTACT_EMAIL ?? COMPANY.email;
  const fromAddress =
    process.env.RESEND_FROM ??
    `Amiom Corporate Finance <noreply@${siteUrl.replace(/https?:\/\//, "")}>`;
  const submittedAt = new Date().toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
    dateStyle: "medium",
    timeStyle: "short",
  });

  try {
    const { Resend } = await import("resend");
    const resend = new Resend(process.env.RESEND_API_KEY);

    // ── 1. Team notification ─────────────────────────────────────────────────
    const notificationHtml = await render(
      LeadNotificationEmail({ name, phone, email, loanType, loanAmount, city, message, submittedAt, siteUrl }),
    );

    await resend.emails.send({
      from:    fromAddress,
      to:      toEmail,
      replyTo: email,
      subject: `🔔 New ${loanType} enquiry from ${name}`,
      html:    notificationHtml,
      text: [
        `New lead from Amiom website (${submittedAt})`,
        ``,
        `Name:         ${name}`,
        `Phone:        ${phone}`,
        `Email:        ${email ?? "—"}`,
        `Loan Type:    ${loanType}`,
        `Loan Amount:  ${loanAmount ?? "—"}`,
        `City:         ${city ?? "—"}`,
        ``,
        `Message:`,
        message ?? "—",
      ].join("\n"),
    });

    // ── 2. Applicant confirmation (only if email provided) ───────────────────
    if (email) {
      const confirmationHtml = await render(
        LeadConfirmationEmail({
          name,
          phone,
          loanType,
          loanAmount,
          city,
          companyPhone: COMPANY.phone,
          companyEmail: COMPANY.email,
          siteUrl,
        }),
      );

      void resend.emails.send({
        from:    fromAddress,
        to:      email,
        subject: `We've received your ${loanType} enquiry — Amiom Corporate Finance`,
        html:    confirmationHtml,
        text: [
          `Hi ${name},`,
          ``,
          `Thank you for reaching out to Amiom Corporate Finance.`,
          `We've received your enquiry for a ${loanType}. Our advisor will call you on ${phone} within ${CONTACT_PAGE.advisorCallbackTime}.`,
          ``,
          loanAmount ? `Loan Amount: ${loanAmount}` : null,
          city ? `City: ${city}` : null,
          ``,
          `For urgent queries, call us at ${COMPANY.phone} or email ${COMPANY.email}.`,
          ``,
          `Best regards,`,
          `Team Amiom Corporate Finance`,
        ].filter(Boolean).join("\n"),
      }).catch((err) => console.error("[lead] confirmation email failed", err));
    }

    return { success: true };
  } catch (err) {
    console.error("[lead] resend failed", err);
    return {
      success: false,
      error: "Failed to send your enquiry. Please try again or call us directly.",
    };
  }
}
