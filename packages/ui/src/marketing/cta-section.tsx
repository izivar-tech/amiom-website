"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { cn } from "../lib/utils";
import { Container } from "../components/container";
import { Button } from "../components/button";

interface CtaSectionProps {
  headline: string;
  description: string;
  action: { label: string; href: string };
  className?: string;
}

export function CtaSection({ headline, description, action, className }: CtaSectionProps) {
  return (
    <section className={cn("relative overflow-hidden py-16 md:py-24", className)}>
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-primary" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary via-primary to-primary/80" />
      <motion.div
        className="absolute -right-20 -top-20 -z-10 h-[300px] w-[300px] rounded-full bg-white/10 blur-3xl"
        animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-20 -left-20 -z-10 h-[300px] w-[300px] rounded-full bg-accent-gold/20 blur-3xl"
        animate={{ scale: [1.3, 1, 1.3], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <Container>
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl lg:text-5xl">
            {headline}
          </h2>
          <p className="mt-4 text-lg text-primary-foreground/80 md:text-xl">{description}</p>
          <div className="mt-8">
            <Button
              asChild
              size="lg"
              className="group bg-white text-primary shadow-lg hover:bg-white/90"
            >
              <Link href={action.href}>
                {action.label}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
