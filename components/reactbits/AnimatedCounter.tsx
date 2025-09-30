"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useInView } from "framer-motion";

import { cn } from "@/lib/utils";

type AnimatedCounterProps = {
  value: string;
  className?: string;
  durationMs?: number;
};

type ParsedValue = {
  prefix: string;
  number: number | null;
  suffix: string;
  decimals: number;
};

const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

function parseValue(rawValue: string): ParsedValue {
  const value = rawValue.trim();
  const match = value.match(/^(?<prefix>[^\d+-]*)(?<number>[-+]?\d+[\d.,]*)(?<suffix>.*)$/);

  if (!match || !match.groups?.number) {
    return {
      prefix: "",
      number: null,
      suffix: value,
      decimals: 0,
    };
  }

  const prefix = match.groups.prefix ?? "";
  const suffix = match.groups.suffix ?? "";
  const numericPart = match.groups.number.replaceAll(".", "").replace(",", ".");
  const number = Number.parseFloat(numericPart);
  const decimals = match.groups.number.includes(",") || match.groups.number.includes(".") ? 1 : 0;

  if (!Number.isFinite(number)) {
    return {
      prefix,
      number: null,
      suffix,
      decimals: 0,
    };
  }

  return {
    prefix,
    number,
    suffix,
    decimals,
  };
}

export default function AnimatedCounter({ value, className, durationMs = 1600 }: AnimatedCounterProps) {
  const { prefix, number, suffix, decimals } = useMemo(() => parseValue(value), [value]);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-20% 0px" });
  const [displayValue, setDisplayValue] = useState(value);

  useEffect(() => {
    if (!isInView || number === null) {
      return;
    }

    let animationFrame: number;
    const start = performance.now();

    const step = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / durationMs, 1);
      const eased = easeOutCubic(progress);
      const current = number * eased;
      const formatted = new Intl.NumberFormat("id-ID", {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      }).format(current);
      setDisplayValue(`${prefix}${formatted}${suffix}`.trim());
      if (progress < 1) {
        animationFrame = requestAnimationFrame(step);
      }
    };

    animationFrame = requestAnimationFrame(step);

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, [decimals, durationMs, isInView, number, prefix, suffix]);

  useEffect(() => {
    if (number === null) {
      setDisplayValue(value);
    }
  }, [number, value]);

  return (
    <span ref={ref} className={cn("tabular-nums", className)}>
      {displayValue}
    </span>
  );
}
