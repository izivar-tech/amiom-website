"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Shield,
  Calculator,
  User,
  Home,
  Briefcase,
  Landmark,
  GraduationCap,
  Car,
  Clock,
  Lock,
  Headphones,
  type LucideIcon,
} from "lucide-react";

const loanProducts: { title: string; sub: string; icon: LucideIcon; iconBg: string; href: string }[] = [
  { title: "Personal Loans",        sub: "For Every Need",    icon: User,          iconBg: "bg-primary",     href: "/services/personal-loans"       },
  { title: "Home Loans",            sub: "Build Your Dreams", icon: Home,          iconBg: "bg-accent-gold", href: "/services/home-loans"            },
  { title: "Business Loans",        sub: "Fuel Your Growth",  icon: Briefcase,     iconBg: "bg-dark-navy",  href: "/services/business-loans"        },
  { title: "Loan Against Property", sub: "Unlock Your Value", icon: Landmark,      iconBg: "bg-primary",     href: "/services/loan-against-property" },
  { title: "Education Loans",       sub: "Invest in Future",  icon: GraduationCap, iconBg: "bg-accent-gold", href: "/services/education-loans"       },
  { title: "Vehicle Loans",         sub: "Drive Your Dreams", icon: Car,           iconBg: "bg-dark-navy",  href: "/services/vehicle-loans"         },
];

const bottomFeatures: { icon: LucideIcon; title: string; sub: string }[] = [
  { icon: Shield,     title: "Trusted DSA Partner", sub: "of Leading Banks"         },
  { icon: Clock,      title: "Quick & Easy",         sub: "Application Process"     },
  { icon: Lock,       title: "100% Secure",           sub: "Data Protection"        },
  { icon: Headphones, title: "End-to-End Support",    sub: "We're With You, Always" },
];

export function HomeHero() {
  return (
    <section className="relative overflow-hidden bg-white">

      {/* ── Hero: two-column grid ── */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 pb-6 pt-10 lg:flex-row lg:items-center lg:gap-0 lg:pb-8 lg:pt-14">

          {/* Left: Copy — always visible, comes first in DOM */}
          <div className="relative z-10 w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-5 flex items-center gap-3"
            >
              <div className="h-px w-8 bg-primary" />
              <span className="text-xs font-bold uppercase tracking-widest text-primary">
                Your Trusted Financial Partner
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-2xl font-bold leading-[1.15] tracking-tight text-dark-navy sm:text-3xl lg:text-4xl"
            >
              Smart Loans.
              <br />
              Better Opportunities.
              <br />
              <span className="text-primary">Stronger Future.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground"
            >
              Amiom Corporate Finance Private Limited is a trusted{" "}
              <strong className="font-semibold text-dark-navy">
                DSA partner for leading banks
              </strong>
              , providing tailor-made loan solutions for every goal in your life.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-10"
            >
              <Link
                href="/services"
                className="inline-flex items-center gap-2 rounded-full bg-dark-navy px-8 py-4 text-sm font-semibold text-white shadow-lg transition-all hover:bg-dark-navy/90 hover:shadow-xl active:scale-[0.97]"
              >
                Explore Our Services
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </div>

          {/* Right: Image */}
          <div className="relative w-full lg:w-1/2">
            <div className="relative mx-auto h-[320px] w-full sm:h-[400px] lg:h-[480px]">

              {/* Hero SVG — entrance only, no infinite loop */}
              <motion.div
                className="relative z-10 h-full w-full"
                initial={{ opacity: 0, x: 50, scale: 0.96 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <Image
                  src="/images/hero/hero.webp"
                  alt="Amiom loan advisors"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-contain object-center"
                  priority
                />
              </motion.div>

            </div>
          </div>
        </div>
      </div>

      {/* ── Loan Products Strip ── */}
      <div className="mx-4 mb-0 overflow-x-auto rounded-2xl bg-white shadow-2xl shadow-black/10 sm:mx-6 lg:mx-8">
        <div className="flex min-w-max items-center justify-start gap-2 px-4 py-5 lg:min-w-0 lg:flex-wrap lg:justify-around">
          {loanProducts.map((product, i) => {
            const Icon = product.icon;
            return (
              <motion.div
                key={product.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
              >
                <Link
                  href={product.href}
                  className="group flex items-center gap-3 rounded-xl px-4 py-3 transition-colors hover:bg-primary/5"
                >
                  <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full ${product.iconBg}`}>
                    <Icon className="h-5 w-5 text-white" />
                  </div>
                  <div className="min-w-max">
                    <p className="text-sm font-bold text-dark-navy transition-colors group-hover:text-primary">
                      {product.title}
                    </p>
                    <p className="text-xs text-muted-foreground">{product.sub}</p>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* ── Bottom Feature Strip ── */}
      <div className="mt-0 flex flex-col lg:flex-row">
        {/* Dark navy */}
        <div className="flex flex-1 flex-wrap items-center justify-around gap-4 bg-dark-navy px-6 py-4">
          {bottomFeatures.map((feat, i) => {
            const Icon = feat.icon;
            return (
              <React.Fragment key={feat.title}>
                {i > 0 && <div className="hidden h-8 w-px bg-white/10 lg:block" />}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex items-center gap-2.5"
                >
                  <Icon className="h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <p className="text-sm font-bold text-white">{feat.title}</p>
                    <p className="text-xs text-white/50">{feat.sub}</p>
                  </div>
                </motion.div>
              </React.Fragment>
            );
          })}
        </div>

        {/* Green CTA */}
        <Link
          href="/contact"
          className="group flex items-center justify-between gap-3 bg-primary px-6 py-4 transition-colors hover:bg-primary/90 lg:min-w-[260px]"
        >
          <div className="flex items-center gap-2.5">
            <Calculator className="h-5 w-5 shrink-0 text-white" />
            <p className="text-sm font-bold leading-snug text-white">
              Let&apos;s Build Your
              <br />
              Better Tomorrow, Together.
            </p>
          </div>
          <ArrowRight className="h-4 w-4 shrink-0 text-white transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  );
}
