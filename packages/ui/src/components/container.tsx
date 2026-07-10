import * as React from "react";
import { cn } from "../lib/utils";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: React.ElementType;
  size?: "default" | "narrow" | "wide" | "full";
}

const containerSizes = {
  default: "max-w-7xl",
  narrow: "max-w-4xl",
  wide: "max-w-[1400px]",
  full: "max-w-full",
};

const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, as: Comp = "div", size = "default", ...props }, ref) => {
    return (
      <Comp
        ref={ref}
        className={cn("mx-auto w-full px-4 sm:px-6 lg:px-8", containerSizes[size], className)}
        {...props}
      />
    );
  },
);
Container.displayName = "Container";

export { Container };
