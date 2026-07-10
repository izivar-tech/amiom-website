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
        "group relative h-full overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5",
        href && "cursor-pointer",
        className,
      )}
    >
      {/* Gradient hover overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="relative">
        {Icon && (
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-colors duration-300 group-hover:bg-primary/20">
            <Icon className="h-6 w-6 text-primary" />
          </div>
        )}
        <h3 className="text-lg font-semibold text-foreground">{title}</h3>
        <CardContent className="px-0 pt-2">
          <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
        </CardContent>
        {href && (
          <div className="mt-4 flex items-center text-sm font-medium text-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            Learn more
            <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </div>
        )}
      </div>
    </Card>
  );

  const wrappedContent = href ? <Link href={href}>{content}</Link> : content;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {wrappedContent}
    </motion.div>
  );
}
