import type { Metadata } from "next";
import { COMPANY } from "@amiom/constants";
import { Section, Container, Card, FadeIn } from "@amiom/ui";
import { Mail, MapPin, Phone, Clock } from "lucide-react";
import { createMetadata } from "@/lib/metadata";
import { LeadForm } from "@/components/lead-form";

export const metadata: Metadata = createMetadata({
  title: "Contact Us — Apply for a Loan | Get Expert Advice",
  description:
    "Contact Amiom Corporate Finance to apply for Personal Loans, Home Loans, Business Loans, and more. Our loan advisors are ready to help you find the best deal.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      {/* ── Page Header ── */}
      <section className="border-b border-border/40 bg-white pb-8 pt-16 md:pt-20">
        <Container>
          <FadeIn>
            <p className="mb-2 text-xs font-bold uppercase tracking-widest text-primary">
              Contact Us
            </p>
            <h1 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
              Get in Touch
            </h1>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              Fill out the form and our loan advisors will get back to you within 24 hours with the best offers.
            </p>
          </FadeIn>
        </Container>
      </section>

      {/* ── Form + Contact Info ── */}
      <Section className="pb-10 pt-10 md:pb-14 md:pt-12">
        <Container>
          <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-[2fr_3fr]">

            {/* Contact Info — compact single panel */}
            <FadeIn delay={0.15} direction="left">
              <div className="flex flex-col gap-4">

                {/* Contact details */}
                <Card className="border-border/50">
                  <div className="p-6">
                    <h3 className="mb-5 text-sm font-bold uppercase tracking-wider text-foreground">
                      Contact Details
                    </h3>
                    <div className="space-y-5">
                      <a
                        href={`tel:${COMPANY.phone}`}
                        className="group flex items-start gap-3 transition-colors hover:text-primary"
                      >
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                          <Phone className="h-4 w-4 text-primary" />
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground">Phone</p>
                          <p className="mt-0.5 text-sm font-medium text-foreground group-hover:text-primary">
                            {COMPANY.phone}
                          </p>
                        </div>
                      </a>

                      <a
                        href={`mailto:${COMPANY.email}`}
                        className="group flex items-start gap-3 transition-colors hover:text-primary"
                      >
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                          <Mail className="h-4 w-4 text-primary" />
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground">Email</p>
                          <p className="mt-0.5 text-sm font-medium text-foreground group-hover:text-primary">
                            {COMPANY.email}
                          </p>
                        </div>
                      </a>

                      <div className="flex items-start gap-3">
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                          <MapPin className="h-4 w-4 text-primary" />
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground">Office</p>
                          <p className="mt-0.5 text-sm font-medium text-foreground">
                            {COMPANY.address.city}, {COMPANY.address.state}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {COMPANY.address.country} - {COMPANY.address.pincode}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                          <Clock className="h-4 w-4 text-primary" />
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground">Business Hours</p>
                          <p className="mt-0.5 text-sm font-medium text-foreground">
                            Mon – Sat, 9:00 AM – 6:00 PM
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>

                {/* Response time note */}
                <div className="rounded-xl border border-primary/20 bg-primary/5 p-4">
                  <p className="text-xs leading-relaxed text-muted-foreground">
                    <span className="font-semibold text-primary">Quick response:</span> We typically respond within 2–4 business hours. For urgent queries, call us directly.
                  </p>
                </div>

              </div>
            </FadeIn>

            {/* Lead Form */}
            <div>
              <FadeIn delay={0.1} direction="right">
                <Card className="border-border/50">
                  <div className="p-6 md:p-8">
                    <h2 className="mb-6 text-lg font-bold text-foreground">
                      Apply for a Loan
                    </h2>
                    <LeadForm />
                  </div>
                </Card>
              </FadeIn>
            </div>

          </div>
        </Container>
      </Section>
    </>
  );
}
