import type { Metadata } from "next";
import { ABOUT_PAGE } from "@amiom/constants";
import {
  SectionHeader,
  ValueCard,
  CtaSection,
  Section,
  Container,
  Card,
  FadeIn,
} from "@amiom/ui";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "About Us — Trusted DSA for Banks & NBFCs",
  description:
    "Learn about Amiom Corporate Finance Private Limited — a registered Direct Selling Agent (DSA) helping individuals and businesses access the best loan products from leading banks and NBFCs in India.",
  path: "/about",
});

export default function AboutPage() {
  const { mission, vision, values, story } = ABOUT_PAGE;

  return (
    <>
      {/* ── Our Story (header merged in) ── */}
      <Section className="pb-8 pt-16 md:pb-10 md:pt-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_2fr]">
            {/* Left — page identity + section label */}
            <FadeIn direction="left">
              <div className="lg:pt-1">
                <p className="text-xs font-bold uppercase tracking-widest text-primary">
                  Who We Are
                </p>
                <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
                  About Amiom
                </h1>
                <div className="mt-4 h-px w-full bg-border/50" />
                <h2 className="mt-4 text-base font-semibold text-foreground">Our Story</h2>
                <div className="mt-2 h-0.5 w-8 rounded-full bg-primary" />
              </div>
            </FadeIn>
            {/* Right — story content */}
            <FadeIn direction="right">
              <div className="space-y-4">
                {story.paragraphs.map((paragraph, index) => (
                  <p key={index} className="text-sm leading-relaxed text-muted-foreground">
                    {paragraph}
                  </p>
                ))}
              </div>
            </FadeIn>
          </div>
        </Container>
      </Section>

      {/* ── Mission & Vision ── */}
      <Section className="bg-muted/30 pb-8 pt-8 md:pb-10 md:pt-10">
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            <FadeIn direction="left">
              <Card className="h-full border-primary/20 bg-white">
                <div className="p-6">
                  <div className="mb-1 h-1 w-8 rounded-full bg-primary" />
                  <h3 className="mt-3 text-base font-bold text-foreground">{mission.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {mission.description}
                  </p>
                </div>
              </Card>
            </FadeIn>
            <FadeIn direction="right">
              <Card className="h-full border-accent-gold/30 bg-white">
                <div className="p-6">
                  <div className="mb-1 h-1 w-8 rounded-full bg-accent-gold" />
                  <h3 className="mt-3 text-base font-bold text-foreground">{vision.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {vision.description}
                  </p>
                </div>
              </Card>
            </FadeIn>
          </div>
        </Container>
      </Section>

      {/* ── Core Values ── */}
      <Section className="pb-8 pt-8 md:pb-10 md:pt-10">
        <Container>
          <SectionHeader badge="Our Foundation" title={values.sectionTitle} />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.items.map((item, index) => (
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

      {/* ── CTA ── */}
      <CtaSection
        headline="Need a Loan? We Can Help."
        description="Tell us what you need and our loan advisors will find the best options for you from our partner banks."
        action={{ label: "Apply Now", href: "/contact" }}
      />
    </>
  );
}
