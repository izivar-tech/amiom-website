"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import * as React from "react";

interface RevealProps extends HTMLMotionProps<"div"> {
  width?: "fit" | "full";
  children: React.ReactNode;
}

export function Reveal({ width = "fit", children, ...props }: RevealProps) {
  return (
    <div style={{ position: "relative", width: width === "full" ? "100%" : "fit-content" }}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        {...props}
      >
        {children}
      </motion.div>
    </div>
  );
}
