"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "../lib/utils";
import { Container } from "../components/container";
import { Separator } from "../components/separator";

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
    <section className={cn("border-y bg-muted/30 py-12 md:py-16", className)}>
      <Container>
        <div className="flex flex-col items-center justify-center gap-8 md:flex-row md:gap-0">
          {stats.map((stat, index) => (
            <React.Fragment key={stat.label}>
              {index > 0 && (
                <Separator
                  orientation="vertical"
                  className="mx-8 hidden h-16 md:block"
                />
              )}
              {index > 0 && <Separator className="w-16 md:hidden" />}
              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <p className="text-4xl font-bold tracking-tight text-primary md:text-5xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm font-medium text-muted-foreground">{stat.label}</p>
              </motion.div>
            </React.Fragment>
          ))}
        </div>
      </Container>
    </section>
  );
}
