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
import { BRAND } from "@amiom/constants";

interface LeadNotificationProps {
  name: string;
  phone: string;
  email?: string;
  loanType: string;
  loanAmount?: string;
  city?: string;
  message?: string;
  submittedAt: string;
  siteUrl: string;
}

export function LeadNotificationEmail({
  name,
  phone,
  email,
  loanType,
  loanAmount,
  city,
  message,
  submittedAt,
  siteUrl,
}: LeadNotificationProps) {
  return (
    <Html lang="en">
      <Head />
      <Preview>
        🔔 New {loanType} lead from {name} — {phone}
      </Preview>
      <Body style={body}>
        <Container style={card}>
          {/* Header */}
          <Section style={header}>
            <Heading style={headerTitle}>New Loan Enquiry</Heading>
            <Text style={headerSub}>Received via amiom.in · {submittedAt}</Text>
          </Section>

          {/* Lead type badge */}
          <Section style={badgeRow}>
            <span style={badge}>{loanType}</span>
          </Section>

          <Section style={cardBody}>
            {/* Applicant details */}
            <Heading style={h2}>Applicant Details</Heading>
            <table style={table} width="100%" cellPadding={0} cellSpacing={0}>
              <tbody>
                <Row label="Name"       value={name} />
                <Row label="Phone"      value={phone} isPhone />
                <Row label="Email"      value={email ?? "—"} isEmail={!!email} emailVal={email} />
                <Row label="City"       value={city ?? "—"} />
              </tbody>
            </table>

            <Hr style={divider} />

            {/* Loan details */}
            <Heading style={h2}>Loan Details</Heading>
            <table style={table} width="100%" cellPadding={0} cellSpacing={0}>
              <tbody>
                <Row label="Loan Type"   value={loanType} highlight />
                <Row label="Loan Amount" value={loanAmount ?? "Not specified"} />
              </tbody>
            </table>

            {/* Message */}
            {message && (
              <>
                <Hr style={divider} />
                <Heading style={h2}>Additional Message</Heading>
                <Text style={messageBox}>{message}</Text>
              </>
            )}

            <Hr style={divider} />

            {/* Quick actions */}
            <table width="100%" cellPadding={0} cellSpacing={0}>
              <tbody>
                <tr>
                  <td style={{ paddingRight: "8px" }}>
                    <Link href={`tel:${phone}`} style={actionBtn}>
                      📞 Call Now
                    </Link>
                  </td>
                  {email && (
                    <td>
                      <Link href={`mailto:${email}`} style={actionBtnOutline}>
                        ✉️ Reply by Email
                      </Link>
                    </td>
                  )}
                </tr>
              </tbody>
            </table>
          </Section>

          {/* Footer */}
          <Section style={footer}>
            <Text style={footerText}>
              This lead was submitted via{" "}
              <Link href={siteUrl} style={footerLink}>
                {siteUrl.replace(/https?:\/\//, "")}
              </Link>
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

// ── Sub-component ─────────────────────────────────────────────────────────────
function Row({
  label,
  value,
  highlight,
  isPhone,
  isEmail,
  emailVal,
}: {
  label: string;
  value: string;
  highlight?: boolean;
  isPhone?: boolean;
  isEmail?: boolean;
  emailVal?: string;
}) {
  return (
    <tr>
      <td style={rowLabel}>{label}</td>
      <td style={highlight ? { ...rowValue, color: PRIMARY, fontWeight: 700 } : rowValue}>
        {isPhone ? (
          <Link href={`tel:${value}`} style={{ color: PRIMARY, textDecoration: "none" }}>
            {value}
          </Link>
        ) : isEmail && emailVal ? (
          <Link href={`mailto:${emailVal}`} style={{ color: PRIMARY, textDecoration: "none" }}>
            {value}
          </Link>
        ) : (
          value
        )}
      </td>
    </tr>
  );
}

// ── Styles ────────────────────────────────────────────────────────────────────
const PRIMARY = BRAND.colors.primary;
const NAVY    = BRAND.colors.dark;
const TEXT    = "#1a1a2e";
const MUTED   = "#6b7280";
const BG      = "#f4f6f9";

const body: React.CSSProperties = {
  backgroundColor: BG,
  fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif",
  margin: 0,
  padding: "24px 0 48px",
};

const card: React.CSSProperties = {
  maxWidth: "520px",
  margin: "0 auto",
  backgroundColor: "#ffffff",
  borderRadius: "12px",
  overflow: "hidden",
  boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
};

const header: React.CSSProperties = {
  backgroundColor: NAVY,
  padding: "24px 28px 20px",
};

const headerTitle: React.CSSProperties = {
  color: "#ffffff",
  fontSize: "20px",
  fontWeight: 700,
  margin: "0 0 4px",
};

const headerSub: React.CSSProperties = {
  color: "#94a3b8",
  fontSize: "12px",
  margin: 0,
};

const badgeRow: React.CSSProperties = {
  backgroundColor: "#f0fdf4",
  padding: "10px 28px",
  borderBottom: "1px solid #e5e7eb",
};

const badge: React.CSSProperties = {
  backgroundColor: "#dcfce7",
  borderRadius: "100px",
  color: PRIMARY,
  display: "inline-block",
  fontSize: "12px",
  fontWeight: 700,
  padding: "3px 12px",
};

const cardBody: React.CSSProperties = {
  padding: "24px 28px 28px",
};

const h2: React.CSSProperties = {
  color: MUTED,
  fontSize: "11px",
  fontWeight: 700,
  textTransform: "uppercase" as const,
  letterSpacing: "0.08em",
  margin: "0 0 10px",
};

const table: React.CSSProperties = {
  borderCollapse: "collapse" as const,
};

const rowLabel: React.CSSProperties = {
  color: MUTED,
  fontSize: "12px",
  paddingBottom: "10px",
  paddingRight: "20px",
  verticalAlign: "top",
  whiteSpace: "nowrap" as const,
  width: "110px",
};

const rowValue: React.CSSProperties = {
  color: TEXT,
  fontSize: "13px",
  fontWeight: 500,
  paddingBottom: "10px",
  verticalAlign: "top",
};

const divider: React.CSSProperties = {
  borderColor: "#e5e7eb",
  margin: "16px 0",
};

const messageBox: React.CSSProperties = {
  backgroundColor: "#f9fafb",
  borderLeft: `3px solid ${PRIMARY}`,
  borderRadius: "0 6px 6px 0",
  color: MUTED,
  fontSize: "13px",
  lineHeight: "1.6",
  margin: "0",
  padding: "10px 14px",
};

const actionBtn: React.CSSProperties = {
  backgroundColor: PRIMARY,
  borderRadius: "8px",
  color: "#ffffff",
  display: "inline-block",
  fontSize: "13px",
  fontWeight: 600,
  padding: "10px 20px",
  textDecoration: "none",
};

const actionBtnOutline: React.CSSProperties = {
  backgroundColor: "#ffffff",
  border: `1.5px solid ${PRIMARY}`,
  borderRadius: "8px",
  color: PRIMARY,
  display: "inline-block",
  fontSize: "13px",
  fontWeight: 600,
  padding: "10px 20px",
  textDecoration: "none",
};

const footer: React.CSSProperties = {
  backgroundColor: "#f9fafb",
  borderTop: "1px solid #e5e7eb",
  padding: "12px 28px",
  textAlign: "center" as const,
};

const footerText: React.CSSProperties = {
  color: "#9ca3af",
  fontSize: "11px",
  margin: 0,
};

const footerLink: React.CSSProperties = {
  color: "#9ca3af",
  textDecoration: "underline",
};

export default LeadNotificationEmail;
