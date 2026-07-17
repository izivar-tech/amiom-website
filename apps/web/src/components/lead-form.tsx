"use client";

import * as React from "react";
import { z } from "zod";
import { CONTACT_PAGE } from "@amiom/constants";
import { Button } from "@amiom/ui";
import { Send, CheckCircle2 } from "lucide-react";
import { submitLead } from "@/app/(public)/contact/actions";

// ── Validation schema ──────────────────────────────────────────────────────────
const leadSchema = z.object({
  name: z
    .string()
    .min(2, "Full name must be at least 2 characters")
    .max(100)
    .regex(/^[\p{L}\p{M}\s.'\-]+$/u, "Name should contain only letters"),
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
  loanAmount: z.string().optional(),
  city: z.string().optional(),
  message: z.string().max(2000).optional(),
});

type FieldErrors = Partial<Record<keyof z.infer<typeof leadSchema>, string>>;

// ── Shared class helpers ───────────────────────────────────────────────────────
const inputBase =
  "w-full rounded-lg border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors";
const inputNormal = `${inputBase} border-border focus:border-primary`;
const inputError  = `${inputBase} border-red-400 focus:border-red-500 focus:ring-red-200`;

function fieldClass(err?: string) {
  return err ? inputError : inputNormal;
}

// ── Component ─────────────────────────────────────────────────────────────────
export function LeadForm() {
  const formRef      = React.useRef<HTMLFormElement>(null);
  const successRef   = React.useRef<HTMLDivElement>(null);
  const [submitted, setSubmitted]   = React.useState(false);
  const [loading, setLoading]       = React.useState(false);
  const [fieldErrors, setFieldErrors] = React.useState<FieldErrors>({});
  const [serverError, setServerError] = React.useState<string | null>(null);

  React.useEffect(() => {
    if (submitted) successRef.current?.focus();
  }, [submitted]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setServerError(null);

    const fd = new FormData(formRef.current!);

    const parsed = leadSchema.safeParse({
      name:       (fd.get("name")       as string)?.trim(),
      phone:      (fd.get("phone")      as string)?.trim(),
      email:      (fd.get("email")      as string)?.trim() || undefined,
      loanType:   (fd.get("loanType")   as string)?.trim(),
      loanAmount: (fd.get("loanAmount") as string)?.trim() || undefined,
      city:       (fd.get("city")       as string)?.trim() || undefined,
      message:    (fd.get("message")    as string)?.trim() || undefined,
    });

    if (!parsed.success) {
      const errors: FieldErrors = {};
      for (const [field, msgs] of Object.entries(parsed.error.flatten().fieldErrors)) {
        if (msgs?.[0]) errors[field as keyof FieldErrors] = msgs[0];
      }
      setFieldErrors(errors);
      return;
    }

    setFieldErrors({});
    setLoading(true);

    try {
      const result = await submitLead(fd);

      if (result.success) {
        setSubmitted(true);
        if (typeof window !== "undefined" && "gtag" in window) {
          (window as unknown as { gtag: (...args: unknown[]) => void }).gtag( // eslint-disable-line @typescript-eslint/no-explicit-any
            "event",
            "generate_lead",
            { event_category: "contact", event_label: "loan_application" },
          );
        }
      } else {
        if (result.fieldErrors) setFieldErrors(result.fieldErrors as FieldErrors);
        setServerError(result.error);
      }
    } catch {
      setServerError("Something went wrong. Please try again or call us directly.");
    } finally {
      setLoading(false);
    }
  }

  // ── Success state ────────────────────────────────────────────────────────────
  if (submitted) {
    return (
      <div
        ref={successRef}
        tabIndex={-1}
        role="status"
        aria-live="polite"
        className="flex flex-col items-center justify-center py-12 text-center focus:outline-none"
      >
        <CheckCircle2 className="mb-4 h-14 w-14 text-primary" />
        <h3 className="text-xl font-bold text-foreground">Thank You!</h3>
        <p className="mt-2 max-w-md text-sm text-muted-foreground">
          We have received your application. Our loan advisor will contact you
          within {CONTACT_PAGE.advisorCallbackTime} with the best offers from our partner banks.
        </p>
        <Button
          className="mt-6"
          variant="outline"
          onClick={() => { setSubmitted(false); formRef.current?.reset(); }}
        >
          Submit Another Enquiry
        </Button>
      </div>
    );
  }

  const fe = fieldErrors;

  // ── Form ─────────────────────────────────────────────────────────────────────
  return (
    <form ref={formRef} onSubmit={handleSubmit} noValidate className="space-y-5">

      {/* Honeypot — invisible to users, bots fill it */}
      <input name="_hp" type="text" className="sr-only" tabIndex={-1} aria-hidden="true" autoComplete="off" />

      {serverError && (
        <div role="alert" className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {serverError}
        </div>
      )}

      {/* Name + Phone */}
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-foreground">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            maxLength={100}
            placeholder="Enter your full name"
            className={fieldClass(fe.name)}
            aria-invalid={!!fe.name}
            aria-describedby={fe.name ? "err-name" : undefined}
          />
          {fe.name && <p id="err-name" role="alert" className="mt-1 text-xs text-red-600">{fe.name}</p>}
        </div>

        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-foreground">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            maxLength={10}
            inputMode="numeric"
            pattern="[0-9]*"
            placeholder="10-digit mobile number"
            onKeyDown={(e) => {
              if (!/[\d\b]/.test(e.key) && !["Backspace","Delete","Tab","ArrowLeft","ArrowRight","Home","End"].includes(e.key)) {
                e.preventDefault();
              }
            }}
            onPaste={(e) => {
              const text = e.clipboardData.getData("text");
              if (!/^\d+$/.test(text)) e.preventDefault();
            }}
            className={fieldClass(fe.phone)}
            aria-invalid={!!fe.phone}
            aria-describedby={fe.phone ? "err-phone" : undefined}
          />
          {fe.phone && <p id="err-phone" role="alert" className="mt-1 text-xs text-red-600">{fe.phone}</p>}
        </div>
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-foreground">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="your.email@example.com"
          className={fieldClass(fe.email)}
          aria-invalid={!!fe.email}
          aria-describedby={fe.email ? "err-email" : undefined}
        />
        {fe.email && <p id="err-email" role="alert" className="mt-1 text-xs text-red-600">{fe.email}</p>}
      </div>

      {/* Loan Type + Amount */}
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="loanType" className="mb-1.5 block text-sm font-medium text-foreground">
            Loan Type <span className="text-red-500">*</span>
          </label>
          <select
            id="loanType"
            name="loanType"
            defaultValue=""
            className={fieldClass(fe.loanType)}
            aria-invalid={!!fe.loanType}
            aria-describedby={fe.loanType ? "err-loanType" : undefined}
          >
            <option value="" disabled>Select loan type</option>
            {CONTACT_PAGE.form.loanTypes.map((type) => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
          {fe.loanType && <p id="err-loanType" role="alert" className="mt-1 text-xs text-red-600">{fe.loanType}</p>}
        </div>

        <div>
          <label htmlFor="loanAmount" className="mb-1.5 block text-sm font-medium text-foreground">
            Loan Amount (approx.)
          </label>
          <input
            type="text"
            id="loanAmount"
            name="loanAmount"
            placeholder="e.g., ₹5,00,000"
            className={inputNormal}
          />
        </div>
      </div>

      {/* City */}
      <div>
        <label htmlFor="city" className="mb-1.5 block text-sm font-medium text-foreground">
          City
        </label>
        <input
          type="text"
          id="city"
          name="city"
          placeholder="Your city"
          className={inputNormal}
        />
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-foreground">
          Message (optional)
        </label>
        <textarea
          id="message"
          name="message"
          rows={3}
          maxLength={2000}
          placeholder="Any additional details about your requirement..."
          className={`${inputNormal} resize-none`}
        />
      </div>

      <Button type="submit" size="pill-lg" className="w-full" disabled={loading}>
        {loading ? (
          "Submitting..."
        ) : (
          <>
            Submit Application
            <Send className="ml-2 h-4 w-4" />
          </>
        )}
      </Button>

      <p className="text-center text-xs text-muted-foreground">
        {CONTACT_PAGE.form.agreement.split("Privacy Policy")[0]}
        <a href="/privacy" className="underline hover:text-primary">
          Privacy Policy
        </a>
        {CONTACT_PAGE.form.agreement.split("Privacy Policy")[1]}
      </p>
    </form>
  );
}
