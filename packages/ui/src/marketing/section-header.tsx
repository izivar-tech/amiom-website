"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "../lib/utils";
interface SectionHeaderProps {
  badge?: string;
  title: string;
  subtitle?: string;
  className?: string;
  align?: "left" | "center";
}

export function SectionHeader({
  badge,
  title,
  subtitle,
  className,
  align = "center",
}: SectionHeaderProps) {
  return (
    <motion.div
      className={cn(
        "mb-8 md:mb-10",
        align === "center" && "mx-auto max-w-3xl text-center",
        align === "left" && "text-left",
        className,
      )}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
    >
      {badge && (
        <div className={cn("mb-5", align === "center" ? "flex justify-center" : "")}>
          <span className="inline-flex items-center gap-3 rounded-full bg-primary px-6 py-2.5 shadow-md shadow-primary/25">
            <span className="h-1.5 w-1.5 shrink-0 animate-pulse rounded-full bg-white/70" />
            <span className="text-xs font-bold uppercase tracking-wider text-white">
              {badge}
            </span>
            <span className="h-1.5 w-1.5 shrink-0 animate-pulse rounded-full bg-white/70" />
          </span>
        </div>
      )}
      <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{subtitle}</p>
      )}
    </motion.div>
  );
}
