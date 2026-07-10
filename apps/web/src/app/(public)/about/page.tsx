import type { Metadata } from "next";
import { ABOUT_PAGE } from "@amiom/constants";
import {
  HeroSection,
  SectionHeader,
  ValueCard,
  CtaSection,
  Section,
  Container,
  Card,
  CardContent,
  FadeIn,
  Separator,
} from "@amiom/ui";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "About Us",
  description:
    "Learn about Amiom Private Limited — our mission, vision, values, and commitment to delivering world-class corporate finance expertise.",
  path: "/about",
});

export default function AboutPage() {
  const { hero, mission, vision, values, story } = ABOUT_PAGE;

  return (
    <>
      {/* Hero */}
      <HeroSection
        badge="About Us"
        headline={hero.headline}
        subheadline={hero.subheadline}
        className="min-h-[50vh] md:min-h-[60vh]"
      />

      {/* Mission & Vision - Glass cards side by side */}
      <Section>
        <Container size="narrow">
          <div className="grid gap-8 md:grid-cols-2">
            <FadeIn direction="left">
              <Card className="h-full border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
                <div className="mb-3 inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm font-semibold text-primary">
                  {mission.title}
                </div>
                <CardContent className="pt-2">
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    {mission.description}
                  </p>
                </CardContent>
              </Card>
            </FadeIn>
            <FadeIn direction="right">
              <Card className="h-full border-accent-gold/20 bg-gradient-to-br from-accent-gold/5 to-transparent">
                <div className="mb-3 inline-block rounded-lg bg-accent-gold/10 px-3 py-1 text-sm font-semibold text-foreground">
                  {vision.title}
                </div>
                <CardContent className="pt-2">
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    {vision.description}
                  </p>
                </CardContent>
              </Card>
            </FadeIn>
          </div>
        </Container>
      </Section>

      {/* Values - Numbered value cards */}
      <Section className="bg-muted/20">
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

      {/* Story */}
      <Section>
        <Container size="narrow">
          <FadeIn>
            <SectionHeader badge="Our Journey" title={story.title} />
            <div className="space-y-6">
              {story.paragraphs.map((paragraph, index) => (
                <FadeIn key={index} delay={index * 0.1}>
                  <p className="text-lg leading-relaxed text-muted-foreground">{paragraph}</p>
                  {index < story.paragraphs.length - 1 && (
                    <Separator className="mt-6 opacity-30" />
                  )}
                </FadeIn>
              ))}
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* CTA */}
      <CtaSection
        headline="Ready to Work With Us?"
        description="Let's discuss how Amiom can help your business achieve its financial goals."
        action={{ label: "Contact Us", href: "/contact" }}
      />
    </>
  );
}
