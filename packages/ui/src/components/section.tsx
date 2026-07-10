import * as React from "react";
import { cn } from "../lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  spacing?: "default" | "sm" | "lg" | "xl";
}

const spacingMap = {
  sm: "py-12 md:py-16",
  default: "py-16 md:py-24",
  lg: "py-20 md:py-32",
  xl: "py-24 md:py-40",
};

const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ className, spacing = "default", ...props }, ref) => {
    return <section ref={ref} className={cn(spacingMap[spacing], className)} {...props} />;
  },
);
Section.displayName = "Section";

export { Section };
