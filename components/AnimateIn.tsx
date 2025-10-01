"use client";

import { clsx } from "clsx";
import { useEffect, useRef, useState, type ReactNode } from "react";

interface AnimateInProps {
  children: ReactNode;
  className?: string;
  /**
   * Optional delay (in seconds) before the entrance transition starts.
   * Useful for staggering multiple AnimateIn components.
   */
  delay?: number;
}

export default function AnimateIn({ children, className, delay = 0 }: AnimateInProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isInView, setIsInView] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => {
      setPrefersReducedMotion(mediaQuery.matches);
      if (mediaQuery.matches) {
        setIsInView(true);
      }
    };

    updatePreference();
    mediaQuery.addEventListener("change", updatePreference);

    return () => {
      mediaQuery.removeEventListener("change", updatePreference);
    };
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    const node = ref.current;
    if (!node || typeof IntersectionObserver === "undefined") {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry?.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.2,
      },
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, [prefersReducedMotion]);

  const transitionDelay = !prefersReducedMotion && isInView && delay > 0 ? `${delay}s` : undefined;

  return (
    <div
      ref={ref}
      className={clsx(
        "transition-all duration-500 ease-out",
        prefersReducedMotion
          ? null
          : isInView
            ? "translate-y-0 opacity-100"
            : "translate-y-5 opacity-0",
        className,
      )}
      style={{ transitionDelay }}
    >
      {children}
    </div>
  );
}
