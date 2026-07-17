import type { Metadata } from "next";
import { LEGAL, COMPANY } from "@amiom/constants";
import { Section, Container } from "@amiom/ui";
import { createMetadata } from "@/lib/metadata";
import { ShieldCheck } from "lucide-react";

export const metadata: Metadata = createMetadata({
  title: "Privacy Policy",
  description: `Read the Privacy Policy of ${COMPANY.name}. Learn how we collect, use, and protect your personal information in compliance with Indian data protection laws.`,
  path: "/privacy",
});

export default function PrivacyPage() {
  const { privacy } = LEGAL;

  return (
    <Section className="pt-16 md:pt-20">
      <Container>
        <div className="mx-auto max-w-3xl">

          {/* Header */}
          <div className="mb-10 flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
              <ShieldCheck className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h1 className="text-3xl font-extrabold tracking-tight text-foreground">
                {privacy.title}
              </h1>
              <p className="mt-1 text-sm text-muted-foreground">
                Last updated:{" "}
                {new Date(privacy.lastUpdated).toLocaleDateString("en-IN", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </p>
            </div>
          </div>

          {/* Intro */}
          <p className="mb-10 rounded-xl border border-border/50 bg-muted/40 px-5 py-4 text-sm leading-relaxed text-muted-foreground">
            {privacy.intro}
          </p>

          {/* Sections */}
          <div className="space-y-8">
            {privacy.sections.map((section, i) => (
              <div key={section.heading} className="scroll-mt-20">
                <div className="mb-3 flex items-center gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                    {i + 1}
                  </span>
                  <h2 className="text-base font-bold text-foreground">
                    {section.heading}
                  </h2>
                </div>
                <ul className="ml-9 space-y-2">
                  {section.points.map((point, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm leading-relaxed text-muted-foreground">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/50" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Footer note */}
          <div className="mt-12 border-t border-border/50 pt-6 text-xs text-muted-foreground">
            This policy is governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of courts in {COMPANY.address.city}, Tamil Nadu.
          </div>

        </div>
      </Container>
    </Section>
  );
}
