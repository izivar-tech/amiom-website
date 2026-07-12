"use client";

import * as React from "react";
import {
  Building2,
  BarChart3,
  Handshake,
  TrendingUp,
  Shield,
  Users,
  Target,
  Lightbulb,
  Home,
  User,
  Briefcase,
  Landmark,
  GraduationCap,
  Car,
  CreditCard,
  type LucideIcon,
} from "lucide-react";
import { cn } from "../lib/utils";
import { FeatureCard } from "./feature-card";

const iconMap: Record<string, LucideIcon> = {
  building: Building2,
  chart: BarChart3,
  handshake: Handshake,
  trending: TrendingUp,
  shield: Shield,
  users: Users,
  target: Target,
  lightbulb: Lightbulb,
  home: Home,
  user: User,
  briefcase: Briefcase,
  landmark: Landmark,
  graduation: GraduationCap,
  car: Car,
  creditcard: CreditCard,
};

interface FeatureItem {
  title: string;
  description: string;
  icon?: string;
  href?: string;
}

interface FeatureGridProps {
  items: readonly FeatureItem[];
  columns?: 2 | 3 | 4 | 5;
  className?: string;
}

const columnStyles = {
  2: "grid-cols-1 md:grid-cols-2",
  3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
  4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
  5: "grid-cols-2 sm:grid-cols-3 lg:grid-cols-5",
};

export function FeatureGrid({ items, columns = 4, className }: FeatureGridProps) {
  return (
    <div className={cn("grid gap-6 md:gap-8", columnStyles[columns], className)}>
      {items.map((item, index) => (
        <FeatureCard
          key={item.title}
          title={item.title}
          description={item.description}
          icon={item.icon ? iconMap[item.icon] : undefined}
          href={item.href}
          index={index}
        />
      ))}
    </div>
  );
}
