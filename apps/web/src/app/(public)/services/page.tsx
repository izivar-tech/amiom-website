import type { Metadata } from "next";
import { SERVICES_PAGE, SERVICES } from "@amiom/constants";
import {
  FeatureGrid,
  CtaSection,
  Section,
  Container,
  FadeIn,
} from "@amiom/ui";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Loan Products & Services — Personal, Home, Business Loans & More",
  description:
    "Explore our complete range of loan products — Personal Loans, Home Loans, Business Loans, Loan Against Property, Education Loans, Vehicle Loans, and Credit Cards from leading banks and NBFCs.",
  path: "/services",
});

export default function ServicesPage() {
  const { hero } = SERVICES_PAGE;
  const items = SERVICES.map((s) => ({
    title: s.title,
    description: s.shortDescription,
    icon: s.icon,
    href: `/services/${s.slug}`,
  }));

  return (
    <>
      {/* ── Page Header ── */}
      <section className="border-b border-border/40 bg-white pb-8 pt-16 md:pt-20">
        <Container>
          <FadeIn>
            <p className="mb-2 text-xs font-bold uppercase tracking-widest text-primary">
              Our Services
            </p>
            <h1 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
              {hero.headline}
            </h1>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              {hero.subheadline}
            </p>
          </FadeIn>
        </Container>
      </section>

      {/* ── Service Cards ── */}
      <Section className="pb-8 pt-10 md:pb-10 md:pt-12">
        <Container>
          <FeatureGrid items={items} columns={4} />
        </Container>
      </Section>

      {/* ── CTA ── */}
      <CtaSection
        headline="Not Sure Which Loan Is Right for You?"
        description="Our loan advisors can help you choose the best product based on your needs, eligibility, and budget."
        action={{ label: "Talk to an Advisor", href: "/contact" }}
      />
    </>
  );
}
