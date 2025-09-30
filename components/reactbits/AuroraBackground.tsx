"use client";

import { motion } from "framer-motion";
import { type PropsWithChildren } from "react";

import { cn } from "@/lib/utils";

const gradients = [
  {
    className: "-top-24 -left-24 h-64 w-64",
    from: "rgba(255, 186, 73, 0.28)",
    via: "rgba(255, 109, 77, 0.24)",
    to: "rgba(255, 207, 150, 0.18)",
  },
  {
    className: "top-1/3 -right-28 h-80 w-80",
    from: "rgba(179, 214, 255, 0.25)",
    via: "rgba(130, 183, 255, 0.2)",
    to: "rgba(102, 126, 234, 0.18)",
  },
  {
    className: "bottom-0 left-1/4 h-96 w-96",
    from: "rgba(255, 255, 255, 0.35)",
    via: "rgba(233, 248, 255, 0.28)",
    to: "rgba(179, 239, 241, 0.24)",
  },
];

type AuroraBackgroundProps = PropsWithChildren<{
  className?: string;
}>;

export function AuroraBackground({ className, children }: AuroraBackgroundProps) {
  return (
    <div className={cn("relative isolate overflow-hidden", className)}>
      <div className="pointer-events-none absolute inset-0 select-none opacity-95" aria-hidden="true">
        {gradients.map((gradient, index) => (
          <motion.div
            key={gradient.className}
            className={cn("absolute rounded-full blur-3xl", gradient.className)}
            style={{
              background: `radial-gradient(circle at 50% 50%, ${gradient.from} 0%, ${gradient.via} 50%, ${gradient.to} 100%)`,
            }}
            animate={{
              scale: [1, 1.05, 1],
              opacity: [0.65, 1, 0.65],
            }}
            transition={{
              duration: 12 + index * 2,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
            }}
          />
        ))}
        <motion.div
          className="absolute inset-x-0 bottom-[-40%] h-[60%] bg-gradient-to-t from-secondary/20 via-transparent to-transparent"
          animate={{ opacity: [0.6, 0.8, 0.6] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
      <div className="relative">{children}</div>
    </div>
  );
}

export default AuroraBackground;
