import type { Metadata } from "next";
import { HOME_PAGE } from "@amiom/constants";
import {
  HeroSection,
  SectionHeader,
  FeatureGrid,
  CtaSection,
  StatsSection,
  ValueCard,
  Section,
  Container,
} from "@amiom/ui";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Amiom Private Limited — Corporate Finance Solutions That Drive Growth",
  description:
    "Empowering businesses with strategic corporate finance solutions, investment advisory, M&A, and capital market services across India.",
  path: "/",
});

const STATS = [
  { value: "100+", label: "Clients Served" },
  { value: "500Cr+", label: "Transactions Facilitated" },
  { value: "15+", label: "Years Experience" },
  { value: "98%", label: "Client Satisfaction" },
] as const;

export default function HomePage() {
  const { hero, services, whyUs, cta } = HOME_PAGE;

  return (
    <>
      {/* Hero Section - 21st.dev animated hero */}
      <HeroSection
        badge="Corporate Finance Excellence"
        headline={hero.headline}
        subheadline={hero.subheadline}
        primaryAction={hero.cta.primary}
        secondaryAction={hero.cta.secondary}
      />

      {/* Stats Section */}
      <StatsSection stats={STATS} />

      {/* Services Section - Feature cards with hover effects */}
      <Section className="bg-muted/20">
        <Container>
          <SectionHeader
            badge="What We Do"
            title={services.sectionTitle}
            subtitle={services.sectionSubtitle}
          />
          <FeatureGrid items={services.items} columns={4} />
        </Container>
      </Section>

      {/* Why Us Section - Value cards with numbered indicators */}
      <Section>
        <Container>
          <SectionHeader
            badge="Why Amiom"
            title={whyUs.sectionTitle}
            subtitle={whyUs.sectionSubtitle}
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyUs.items.map((item, index) => (
              <ValueCard
                key={item.title}
                title={item.title}
                description={item.description}
                index={index}
              />
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA Section - Gradient with animated blobs */}
      <CtaSection headline={cta.headline} description={cta.description} action={cta.button} />
    </>
  );
}
