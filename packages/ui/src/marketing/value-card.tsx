"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "../lib/utils";
import { Card } from "../components/card";

interface ValueCardProps {
  title: string;
  description: string;
  index?: number;
  className?: string;
}

export function ValueCard({ title, description, index = 0, className }: ValueCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <Card
        className={cn(
          "group relative h-full overflow-hidden border-border/40 bg-white transition-all duration-500 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5",
          className,
        )}
      >
        {/* Gradient top accent */}
        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary via-primary to-accent-gold opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        <div className="relative p-6">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/15 to-primary/5 text-lg font-bold text-primary ring-1 ring-primary/10">
            {String(index + 1).padStart(2, "0")}
          </div>
          <h3 className="text-lg font-bold text-foreground">{title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
        </div>
      </Card>
    </motion.div>
  );
}
