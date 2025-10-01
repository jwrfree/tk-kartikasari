"use client";

import { useEffect, useMemo, useRef, useState } from "react";

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

  const prefix = match.groups.prefix?.trim() ?? "";
  const suffix = match.groups.suffix?.trim() ?? "";
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
  const [hasEnteredView, setHasEnteredView] = useState(() => number === null);
  const [progress, setProgress] = useState(() => (number === null ? 1 : 0));

  useEffect(() => {
    const element = ref.current;
    if (!element || number === null) {
      return;
    }

    if (typeof IntersectionObserver === "undefined") {
      setHasEnteredView(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setHasEnteredView(true);
            observer.disconnect();
          }
        });
      },
      { root: null, threshold: 0.2, rootMargin: "-20% 0px" },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [number]);

  useEffect(() => {
    if (!hasEnteredView || number === null) {
      return;
    }

    let animationFrame: number;
    const start = performance.now();

    const step = (now: number) => {
      const elapsed = now - start;
      const linearProgress = Math.min(elapsed / durationMs, 1);
      setProgress(easeOutCubic(linearProgress));

      if (linearProgress < 1) {
        animationFrame = requestAnimationFrame(step);
      }
    };

    animationFrame = requestAnimationFrame(step);

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, [durationMs, hasEnteredView, number]);

  const formattedValue = useMemo(() => {
    if (number === null) {
      return value;
    }

    const current = number * progress;

    return new Intl.NumberFormat("id-ID", {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    }).format(current);
  }, [decimals, number, progress, value]);

  if (number === null) {
    return (
      <span ref={ref} className={cn("tabular-nums", className)}>
        {value}
      </span>
    );
  }

  return (
    <span ref={ref} className={cn("inline-flex items-baseline gap-1 tabular-nums", className)}>
      {prefix ? <span className="text-text">{prefix}</span> : null}
      <span className="bg-gradient-to-r from-secondary via-primary to-accent bg-clip-text text-transparent">
        {formattedValue}
      </span>
      {suffix ? <span className="text-text">{suffix}</span> : null}
    </span>
  );
}
