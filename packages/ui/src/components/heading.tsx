import * as React from "react";
import { cn } from "../lib/utils";

type HeadingLevel = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  as?: HeadingLevel;
}

const headingStyles: Record<HeadingLevel, string> = {
  h1: "text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl",
  h2: "text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl",
  h3: "text-2xl font-semibold tracking-tight sm:text-3xl",
  h4: "text-xl font-semibold tracking-tight sm:text-2xl",
  h5: "text-lg font-semibold",
  h6: "text-base font-semibold",
};

const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ as: Comp = "h2", className, ...props }, ref) => {
    return (
      <Comp ref={ref} className={cn(headingStyles[Comp], "text-foreground", className)} {...props} />
    );
  },
);
Heading.displayName = "Heading";

export { Heading };
