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
  StaggerContainer,
  StaggerItem,
} from "@amiom/ui";
import { createMetadata } from "@/lib/metadata";
import { HomeHero } from "@/components/home-hero";

export const metadata: Metadata = createMetadata({
  title:
    "Amiom Corporate Finance — Personal Loans, Home Loans, Business Loans | DSA Partner",
  description:
    "Amiom is a trusted DSA partner for leading banks and NBFCs in India. Apply for Personal Loans, Home Loans, Business Loans, Loan Against Property, Education Loans, Vehicle Loans, and Credit Cards with competitive rates and quick approvals.",
  path: "/",
});

export default function HomePage() {
  const { services, whyUs, partnerBanks, cta } = HOME_PAGE;

  return (
    <>
      {/* New split-layout hero matching design reference */}
      <HomeHero />

      {/* Services Section */}
      <Section id="services" className="pt-14 md:pt-20 pb-8 md:pb-10">
        <Container>
          <SectionHeader
            badge="What We Offer"
            title={services.sectionTitle}
            subtitle={services.sectionSubtitle}
          />
          <FeatureGrid items={services.items} columns={3} />
        </Container>
      </Section>

      {/* Why Choose Us */}
      <Section className="pt-6 md:pt-8 pb-8 md:pb-10">
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

      {/* Partner Banks */}
      <Section id="partner-banks" spacing="sm" className="pb-0">
        <Container>
          <SectionHeader
            badge="Our Network"
            title={partnerBanks.sectionTitle}
            subtitle={partnerBanks.sectionSubtitle}
          />
          <StaggerContainer className="flex flex-wrap items-center justify-center gap-4">
            {partnerBanks.partners.map((partner) => (
              <StaggerItem key={partner}>
                <div className="rounded-xl border border-border/50 bg-white px-6 py-3.5 text-sm font-medium text-foreground shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-md">
                  {partner}
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </Section>

      {/* CTA */}
      <CtaSection
        headline={cta.headline}
        description={cta.description}
        action={cta.button}
      />
    </>
  );
}
