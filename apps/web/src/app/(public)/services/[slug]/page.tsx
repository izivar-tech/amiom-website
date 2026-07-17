import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { SERVICES, SERVICE_SLUGS } from "@amiom/constants";
import {
  CtaSection,
  Section,
  Container,
  FadeIn,
} from "@amiom/ui";
import {
  CheckCircle2,
  FileText,
  UserCheck,
  IndianRupee,
  Clock,
  Banknote,
  ChevronRight,
} from "lucide-react";
import { createMetadata, createServiceJsonLd } from "@/lib/metadata";
import { getServiceRates } from "@/lib/rates";

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

// Revalidate every hour so Edge Config rate changes reflect without redeploy
export const revalidate = 3600;

export async function generateStaticParams() {
  return SERVICE_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) return {};
  return createMetadata({
    title: `${service.title} — Apply Online | Best Rates from Top Banks`,
    description: `${service.description} Compare rates from leading banks and NBFCs. Quick approval. Apply now with Amiom.`,
    path: `/services/${slug}`,
  });
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) notFound();

  const rates = await getServiceRates(slug);

  const serviceJsonLd = createServiceJsonLd({
    title: service.title,
    description: service.description,
    slug: service.slug,
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />

      {/* ── Page Header ── */}
      <section className="border-b border-border/40 bg-white pb-8 pt-16 md:pt-20">
        <Container>
          <FadeIn>
            {/* Breadcrumb */}
            <div className="mb-3 flex items-center gap-1.5 text-xs text-muted-foreground">
              <Link href="/services" className="hover:text-primary transition-colors">
                Services
              </Link>
              <ChevronRight className="h-3 w-3" />
              <span className="text-foreground">{service.title}</span>
            </div>
            <p className="mb-2 text-xs font-bold uppercase tracking-widest text-primary">
              Loan Product
            </p>
            <h1 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
              {service.title}
            </h1>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              {service.description}
            </p>
            <Link
              href="/contact"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-white transition-all hover:bg-primary/90 active:scale-[0.97]"
            >
              Apply Now
              <ChevronRight className="h-4 w-4" />
            </Link>
          </FadeIn>
        </Container>
      </section>

      {/* ── Quick Info Strip ── */}
      <section className="border-b border-border/30 bg-muted/30">
        <Container>
          <div className="grid grid-cols-3 divide-x divide-border/40">
            <div className="flex items-center gap-3 px-4 py-5">
              <IndianRupee className="h-5 w-5 shrink-0 text-primary" />
              <div>
                <p className="text-xs text-muted-foreground">Loan Amount</p>
                <p className="text-sm font-bold text-foreground">{rates.loanAmount}</p>
              </div>
            </div>
            <div className="flex items-center gap-3 px-4 py-5">
              <Banknote className="h-5 w-5 shrink-0 text-primary" />
              <div>
                <p className="text-xs text-muted-foreground">Interest Rate</p>
                <p className="text-sm font-bold text-foreground">{rates.interestRate}</p>
              </div>
            </div>
            <div className="flex items-center gap-3 px-4 py-5">
              <Clock className="h-5 w-5 shrink-0 text-primary" />
              <div>
                <p className="text-xs text-muted-foreground">Tenure</p>
                <p className="text-sm font-bold text-foreground">{rates.tenure}</p>
              </div>
            </div>
          </div>
          {/* Disclaimer */}
          <p className="border-t border-border/30 py-2 text-center text-[11px] text-muted-foreground/70">
            * Interest rates are indicative and subject to change per RBI guidelines and lender policies. Final rates are determined by the lending institution based on your credit profile.
          </p>
        </Container>
      </section>

      {/* ── Features ── */}
      <Section className="pb-8 pt-10 md:pb-10 md:pt-12">
        <Container size="narrow">
          <div className="grid gap-12 lg:grid-cols-[1fr_2fr]">
            <FadeIn direction="left">
              <div className="lg:pt-1">
                <p className="text-xs font-bold uppercase tracking-widest text-primary">Key Features</p>
                <h2 className="mt-2 text-xl font-bold text-foreground">What You Get</h2>
                <div className="mt-3 h-0.5 w-8 rounded-full bg-primary" />
              </div>
            </FadeIn>
            <FadeIn direction="right">
              <div className="grid gap-3 sm:grid-cols-2">
                {service.features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 rounded-lg border border-border/50 bg-card/50 p-4"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <p className="text-sm text-foreground">{feature}</p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </Container>
      </Section>

      {/* ── Eligibility & Documents ── */}
      <Section className="bg-muted/20 pb-8 pt-8 md:pb-10 md:pt-10">
        <Container size="narrow">
          <div className="grid gap-8 md:grid-cols-2">
            <FadeIn direction="left">
              <div>
                <div className="mb-4 flex items-center gap-2">
                  <UserCheck className="h-5 w-5 text-primary" />
                  <h3 className="text-base font-bold text-foreground">Eligibility</h3>
                </div>
                <ul className="space-y-3">
                  {service.eligibility.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary/60" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
            <FadeIn direction="right">
              <div>
                <div className="mb-4 flex items-center gap-2">
                  <FileText className="h-5 w-5 text-primary" />
                  <h3 className="text-base font-bold text-foreground">Documents Required</h3>
                </div>
                <ul className="space-y-3">
                  {service.documents.map((doc, index) => (
                    <li key={index} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary/60" />
                      {doc}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
        </Container>
      </Section>

      {/* ── CTA ── */}
      <CtaSection
        headline={`Apply for ${service.title} Today`}
        description="Fill out our quick application form and our loan advisors will get back to you with the best offers from our partner banks."
        action={{ label: "Apply Now", href: "/contact" }}
      />
    </>
  );
}
