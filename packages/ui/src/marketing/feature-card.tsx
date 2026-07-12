"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, type LucideIcon } from "lucide-react";
import { cn } from "../lib/utils";
import { Card, CardContent } from "../components/card";

interface FeatureCardProps {
  title: string;
  description: string;
  icon?: LucideIcon;
  href?: string;
  className?: string;
  index?: number;
}

export function FeatureCard({
  title,
  description,
  icon: Icon,
  href,
  className,
  index = 0,
}: FeatureCardProps) {
  const content = (
    <Card
      className={cn(
        "group relative h-full overflow-hidden border-border/40 bg-white transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/8",
        href && "cursor-pointer",
        className,
      )}
    >
      {/* Gradient top accent bar — appears on hover */}
      <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-primary to-accent-gold opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="relative flex h-full flex-col p-4">
        {Icon && (
          <div className="mb-3">
            <Icon className="h-6 w-6 text-primary transition-transform duration-300 group-hover:scale-110" />
          </div>
        )}
        <h3 className="text-base font-bold text-foreground">{title}</h3>
        <CardContent className="flex-1 px-0 pt-2">
          <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
        </CardContent>
        {href && (
          <div className="mt-3 flex items-center gap-1 text-sm font-semibold text-primary opacity-0 transition-all duration-300 group-hover:opacity-100">
            Learn more
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-150 group-hover:translate-x-0.5" />
          </div>
        )}
      </div>
    </Card>
  );

  const wrappedContent = href ? <Link href={href}>{content}</Link> : content;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {wrappedContent}
    </motion.div>
  );
}
