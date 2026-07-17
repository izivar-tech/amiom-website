import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";
import { BRAND, CONTACT_PAGE } from "@amiom/constants";

interface LeadConfirmationProps {
  name: string;
  phone: string;
  loanType: string;
  loanAmount?: string;
  city?: string;
  companyPhone: string;
  companyEmail: string;
  siteUrl: string;
}

export function LeadConfirmationEmail({
  name,
  phone,
  loanType,
  loanAmount,
  city,
  companyPhone,
  companyEmail,
  siteUrl,
}: LeadConfirmationProps) {
  return (
    <Html lang="en">
      <Head />
      <Preview>
        We've received your {loanType} enquiry — Amiom Corporate Finance
      </Preview>
      <Body style={body}>
        {/* ── Header ── */}
        <Section style={header}>
          <Container style={headerInner}>
            <Text style={logoText}>Amiom Corporate Finance</Text>
          </Container>
        </Section>

        {/* ── Card ── */}
        <Container style={card}>
          {/* Green accent bar */}
          <Section style={accentBar} />

          <Section style={cardBody}>
            {/* Greeting */}
            <Heading style={h1}>Hi {name},</Heading>
            <Text style={para}>
              Thank you for reaching out to <strong>Amiom Corporate Finance</strong>.
              We've received your loan enquiry and our advisor will contact you on{" "}
              <strong>+91-{phone}</strong> within <strong>{CONTACT_PAGE.advisorCallbackTime}</strong> with
              the best available offers.
            </Text>

            {/* Divider */}
            <Hr style={divider} />

            {/* Enquiry summary */}
            <Heading style={h2}>Your Enquiry Summary</Heading>

            <table style={summaryTable} width="100%" cellPadding={0} cellSpacing={0}>
              <tbody>
                <SummaryRow label="Loan Type" value={loanType} />
                {loanAmount && <SummaryRow label="Loan Amount" value={loanAmount} />}
                {city && <SummaryRow label="City" value={city} />}
                <SummaryRow label="Contact Number" value={`+91-${phone}`} />
              </tbody>
            </table>

            <Hr style={divider} />

            {/* What happens next */}
            <Heading style={h2}>What Happens Next?</Heading>
            <table cellPadding={0} cellSpacing={0} width="100%">
              <tbody>
                {steps.map((step, i) => (
                  <tr key={i}>
                    <td style={stepText}>
                      <strong>{i + 1}. {step.title}</strong> — {step.desc}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <Hr style={divider} />

            {/* CTA */}
            <Section style={{ textAlign: "center" as const, paddingTop: "8px" }}>
              <Link href={`${siteUrl}/services`} style={ctaButton}>
                Explore Loan Products
              </Link>
            </Section>

            <Text style={note}>
              Have urgent questions? Call us directly at{" "}
              <Link href={`tel:${companyPhone}`} style={link}>
                {companyPhone}
              </Link>{" "}
              or email{" "}
              <Link href={`mailto:${companyEmail}`} style={link}>
                {companyEmail}
              </Link>
              .
            </Text>
          </Section>
        </Container>

        {/* ── Footer ── */}
        <Container style={footer}>
          <Text style={footerText}>
            © {new Date().getFullYear()} Amiom Corporate Finance Private Limited
          </Text>
          <Text style={footerText}>
            Amiom is a registered Direct Selling Agent (DSA). It does not lend
            directly. Loan approval is subject to the lending institution's
            policies and your credit profile.
          </Text>
          <Text style={footerLinks}>
            <Link href={`${siteUrl}/privacy`} style={footerLink}>Privacy Policy</Link>
            {" · "}
            <Link href={`${siteUrl}/terms`} style={footerLink}>Terms</Link>
            {" · "}
            <Link href={`${siteUrl}/disclaimer`} style={footerLink}>Disclaimer</Link>
          </Text>
        </Container>
      </Body>
    </Html>
  );
}

// ── Sub-component ─────────────────────────────────────────────────────────────
function SummaryRow({ label, value }: { label: string; value: string }) {
  return (
    <tr>
      <td style={summaryLabel}>{label}</td>
      <td style={summaryValue}>{value}</td>
    </tr>
  );
}

// ── Data ──────────────────────────────────────────────────────────────────────
const steps = [
  {
    title: "Advisor call",
    desc: `Our loan advisor will call you within ${CONTACT_PAGE.advisorCallbackTime}.`,
  },
  {
    title: "Document checklist",
    desc: "We'll share the exact documents needed for your chosen loan.",
  },
  {
    title: "Best offer",
    desc: "We compare rates across our partner banks and NBFCs to find you the best deal.",
  },
  {
    title: "Quick disbursal",
    desc: "Once approved, funds are disbursed directly by the lending institution.",
  },
];

// ── Styles ────────────────────────────────────────────────────────────────────
const PRIMARY   = BRAND.colors.primary;
const NAVY      = BRAND.colors.dark;
const TEXT      = "#1a1a2e";
const MUTED     = "#6b7280";
const BG        = "#f4f6f9";
const CARD_BG   = "#ffffff";

const body: React.CSSProperties = {
  backgroundColor: BG,
  fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif",
  margin: 0,
  padding: "24px 0 48px",
};

const header: React.CSSProperties = {
  backgroundColor: NAVY,
  padding: "20px 0",
};

const headerInner: React.CSSProperties = {
  maxWidth: "560px",
  margin: "0 auto",
  padding: "0 24px",
};

const logoText: React.CSSProperties = {
  color: "#ffffff",
  fontSize: "18px",
  fontWeight: 700,
  margin: 0,
  letterSpacing: "0.01em",
};

const card: React.CSSProperties = {
  maxWidth: "560px",
  margin: "24px auto 0",
  backgroundColor: CARD_BG,
  borderRadius: "12px",
  overflow: "hidden",
  boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
};

const accentBar: React.CSSProperties = {
  backgroundColor: PRIMARY,
  height: "4px",
};

const cardBody: React.CSSProperties = {
  padding: "32px 36px 36px",
};

const h1: React.CSSProperties = {
  color: TEXT,
  fontSize: "22px",
  fontWeight: 700,
  margin: "0 0 12px",
};

const h2: React.CSSProperties = {
  color: TEXT,
  fontSize: "14px",
  fontWeight: 700,
  textTransform: "uppercase" as const,
  letterSpacing: "0.06em",
  margin: "0 0 12px",
};

const para: React.CSSProperties = {
  color: MUTED,
  fontSize: "14px",
  lineHeight: "1.6",
  margin: "0 0 8px",
};

const divider: React.CSSProperties = {
  borderColor: "#e5e7eb",
  margin: "24px 0",
};

const summaryTable: React.CSSProperties = {
  borderCollapse: "collapse" as const,
  width: "100%",
};

const summaryLabel: React.CSSProperties = {
  color: MUTED,
  fontSize: "12px",
  paddingBottom: "10px",
  paddingRight: "16px",
  whiteSpace: "nowrap" as const,
  width: "130px",
};

const summaryValue: React.CSSProperties = {
  color: TEXT,
  fontSize: "13px",
  fontWeight: 600,
  paddingBottom: "10px",
};

const stepText: React.CSSProperties = {
  color: MUTED,
  fontSize: "13px",
  lineHeight: "1.5",
  paddingBottom: "12px",
  verticalAlign: "top",
};

const ctaButton: React.CSSProperties = {
  backgroundColor: PRIMARY,
  borderRadius: "100px",
  color: "#ffffff",
  display: "inline-block",
  fontSize: "14px",
  fontWeight: 600,
  padding: "12px 28px",
  textDecoration: "none",
};

const note: React.CSSProperties = {
  color: MUTED,
  fontSize: "12px",
  lineHeight: "1.6",
  marginTop: "20px",
  textAlign: "center" as const,
};

const link: React.CSSProperties = {
  color: PRIMARY,
  textDecoration: "underline",
};

const footer: React.CSSProperties = {
  maxWidth: "560px",
  margin: "0 auto",
  padding: "20px 24px 0",
  textAlign: "center" as const,
};

const footerText: React.CSSProperties = {
  color: "#9ca3af",
  fontSize: "11px",
  lineHeight: "1.5",
  margin: "2px 0",
};

const footerLinks: React.CSSProperties = {
  color: "#9ca3af",
  fontSize: "11px",
  marginTop: "8px",
};

const footerLink: React.CSSProperties = {
  color: "#9ca3af",
  textDecoration: "underline",
};

export default LeadConfirmationEmail;
