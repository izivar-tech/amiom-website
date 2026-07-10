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
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card
        className={cn(
          "group relative h-full overflow-hidden border-border/50 bg-gradient-to-br from-card to-card/80 backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:shadow-lg",
          className,
        )}
      >
        {/* Accent top border */}
        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary via-primary to-accent-gold opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        <div className="relative">
          <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-lg font-bold text-primary">
            {String(index + 1).padStart(2, "0")}
          </div>
          <h3 className="text-xl font-semibold text-foreground">{title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
        </div>
      </Card>
    </motion.div>
  );
}
