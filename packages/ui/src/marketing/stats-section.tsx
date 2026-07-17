"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "../lib/utils";
import { Container } from "../components/container";

interface StatItem {
  value: string;
  label: string;
}

interface StatsSectionProps {
  stats: readonly StatItem[];
  className?: string;
}

export function StatsSection({ stats, className }: StatsSectionProps) {
  return (
    <section className={cn("relative -mt-16 z-20 pb-8", className)}>
      <Container>
        <motion.div
          className="mx-auto max-w-5xl rounded-2xl border border-border/60 bg-white/80 p-8 shadow-xl shadow-black/5 backdrop-blur-xl md:p-10"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className={cn(
                  "relative text-center",
                  index < stats.length - 1 &&
                    "md:after:absolute md:after:right-0 md:after:top-1/2 md:after:h-12 md:after:-translate-y-1/2 md:after:w-px md:after:bg-border",
                )}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              >
                <p className="text-3xl font-bold tracking-tight text-primary md:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm font-medium text-muted-foreground">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
