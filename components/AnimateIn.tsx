"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";

interface AnimateInProps {
  children: React.ReactNode;
  className?: string;
}

export default function AnimateIn({ children, className }: AnimateInProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const prefersReducedMotion = useReducedMotion();

  const initial = prefersReducedMotion ? false : { opacity: 0, y: 20 };
  const animate = prefersReducedMotion
    ? undefined
    : isInView
      ? { opacity: 1, y: 0 }
      : { opacity: 0, y: 20 };
  const transition = prefersReducedMotion ? undefined : { duration: 0.5 };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={initial}
      animate={animate}
      transition={transition}
    >
      {children}
    </motion.div>
  );
}
