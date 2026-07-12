"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { cn } from "../lib/utils";
import { Button } from "../components/button";
import { Badge } from "../components/badge";
import { Container } from "../components/container";

interface HeroAction {
  label: string;
  href: string;
}

interface HeroSectionProps {
  badge?: string;
  headline: string;
  subheadline: string;
  primaryAction?: HeroAction;
  secondaryAction?: HeroAction;
  className?: string;
  children?: React.ReactNode;
}

export function HeroSection({
  badge,
  headline,
  subheadline,
  primaryAction,
  secondaryAction,
  className,
  children,
}: HeroSectionProps) {
  return (
    <section
      className={cn(
        "relative flex min-h-[80vh] items-center overflow-hidden bg-[#0a1628] py-20 md:min-h-[90vh] md:py-32",
        className,
      )}
    >
      {/* Dark gradient background with animated blobs */}
      <div className="pointer-events-none absolute inset-0 -z-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628] via-[#0f2035] to-[#0a1628]" />

        {/* Primary green glow - top right */}
        <motion.div
          className="absolute -right-32 -top-32 h-[600px] w-[600px] rounded-full bg-primary/20 blur-[120px]"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.15, 0.3, 0.15],
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Gold glow - bottom left */}
        <motion.div
          className="absolute -bottom-32 -left-32 h-[500px] w-[500px] rounded-full bg-accent-gold/15 blur-[100px]"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.25, 0.1],
            x: [0, 20, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Small floating accent - center */}
        <motion.div
          className="absolute left-1/2 top-1/3 h-[200px] w-[200px] -translate-x-1/2 rounded-full bg-primary/10 blur-[80px]"
          animate={{
            y: [-20, 20, -20],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Dot grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        {/* Gradient fade at bottom for smooth section transition */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </div>

      <Container className="relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          {badge && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Badge
                variant="outline"
                className="mb-6 border-primary/40 bg-primary/10 px-4 py-1.5 text-sm text-primary backdrop-blur-sm"
              >
                {badge}
              </Badge>
            </motion.div>
          )}

          <motion.h1
            className="bg-gradient-to-b from-white via-white to-white/60 bg-clip-text text-3xl font-bold tracking-tight text-transparent sm:text-4xl lg:text-5xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            {headline}
          </motion.h1>

          <motion.p
            className="mx-auto mt-6 max-w-2xl text-lg text-white/60 sm:text-xl md:mt-8 md:text-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
          >
            {subheadline}
          </motion.p>

          {(primaryAction || secondaryAction) && (
            <motion.div
              className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row md:mt-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              {primaryAction && (
                <Button asChild size="pill-lg" className="group shadow-lg shadow-primary/25">
                  <Link href={primaryAction.href}>
                    {primaryAction.label}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              )}
              {secondaryAction && (
                <Button
                  asChild
                  variant="outline"
                  size="pill-lg"
                  className="border-white/20 bg-white/5 text-white hover:bg-white/10 hover:text-white"
                >
                  <Link href={secondaryAction.href}>{secondaryAction.label}</Link>
                </Button>
              )}
            </motion.div>
          )}

          {children}
        </div>
      </Container>
    </section>
  );
}
