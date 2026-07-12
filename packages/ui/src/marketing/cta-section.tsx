"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Clock, Shield, Sparkles } from "lucide-react";
import { cn } from "../lib/utils";

interface CtaSectionProps {
  headline: string;
  description: string;
  action: { label: string; href: string };
  className?: string;
}

const trustItems = [
  { icon: CheckCircle, label: "No Hidden Charges" },
  { icon: Clock,       label: "Quick Approvals"   },
  { icon: Shield,      label: "100% Secure"        },
];

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

export function CtaSection({ headline, description, action, className }: CtaSectionProps) {
  return (
    <section style={{ backgroundColor: '#0c1a26' }} className={cn("relative overflow-hidden", className)}>

      {/* Central radial spotlight */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_80%_at_50%_50%,rgba(37,171,90,0.12),transparent_65%)]" />

      {/* Animated green orb — top left */}
      <motion.div
        className="absolute -left-24 -top-24 h-[400px] w-[400px] rounded-full blur-[90px]"
        style={{ backgroundColor: 'rgba(37,171,90,0.18)' }}
        animate={{ x: [0, 35, 0], y: [0, -25, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Animated gold orb — bottom right */}
      <motion.div
        className="absolute -bottom-24 -right-24 h-[360px] w-[360px] rounded-full blur-[85px]"
        style={{ backgroundColor: 'rgba(253,196,12,0.10)' }}
        animate={{ x: [0, -30, 0], y: [0, 22, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
      />

      {/* Fine dot grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.85) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Split layout: text left · CTA right */}
      <div className="relative z-10 mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-col items-center gap-10 lg:flex-row lg:items-center lg:justify-between lg:gap-16"
        >

          {/* LEFT — badge + headline + description + trust */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div variants={fadeUp} className="mb-5 flex justify-center lg:justify-start">
              <span className="inline-flex items-center gap-2.5 rounded-full border border-[#25ab5a]/35 bg-[#25ab5a]/10 px-5 py-2 backdrop-blur-sm">
                <Sparkles className="h-3.5 w-3.5 text-[#fdc40c]" />
                <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#25ab5a]">
                  Get Started Today
                </span>
              </span>
            </motion.div>

            <motion.h2
              variants={fadeUp}
              className="text-xl font-extrabold leading-tight tracking-tight text-white sm:text-2xl lg:text-3xl"
            >
              {headline}
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="mt-4 max-w-lg text-base leading-relaxed text-white/55 sm:text-lg lg:max-w-none"
            >
              {description}
            </motion.p>

            {/* Trust items */}
            <motion.div
              variants={fadeUp}
              className="mt-7 flex flex-wrap items-center justify-center gap-x-5 gap-y-3 lg:justify-start"
            >
              {trustItems.map(({ icon: Icon, label }, i) => (
                <React.Fragment key={label}>
                  <div className="flex items-center gap-2">
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#25ab5a]/15 ring-1 ring-[#25ab5a]/25">
                      <Icon className="h-3.5 w-3.5 text-[#25ab5a]" />
                    </div>
                    <span className="text-sm font-medium text-white/70">{label}</span>
                  </div>
                  {i < trustItems.length - 1 && (
                    <div className="hidden h-4 w-px bg-white/15 sm:block" />
                  )}
                </React.Fragment>
              ))}
            </motion.div>
          </div>

          {/* RIGHT — CTA button block */}
          <motion.div
            variants={fadeUp}
            className="flex shrink-0 flex-col items-center gap-3"
          >
            {/* Thin separator on desktop — left border of right panel */}
            <div className="relative inline-flex">
              {/* Outer pulse ring */}
              <motion.span
                className="absolute inset-0 rounded-full bg-primary/50"
                animate={{ scale: [1, 1.55], opacity: [0.55, 0] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: "easeOut" }}
              />
              {/* Inner pulse ring */}
              <motion.span
                className="absolute inset-0 rounded-full bg-primary/30"
                animate={{ scale: [1, 1.28], opacity: [0.45, 0] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: "easeOut", delay: 0.55 }}
              />
              <Link
                href={action.href}
                className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-primary px-10 py-4 text-base font-bold text-white shadow-[0_0_40px_rgba(37,171,90,0.4)] transition-all duration-300 hover:shadow-[0_0_64px_rgba(37,171,90,0.6)] hover:scale-[1.05] active:scale-[0.97]"
              >
                {/* Shimmer sweep on hover */}
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                <span className="relative">{action.label}</span>
                <ArrowRight className="relative h-4 w-4 transition-transform duration-200 group-hover:translate-x-1.5" />
              </Link>
            </div>
            <p className="text-xs text-white/35">Free consultation · No obligation</p>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
