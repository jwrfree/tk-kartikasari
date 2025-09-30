"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

type StickyScrollRevealItem = {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  highlights?: string[];
  icon?: string;
};

type StickyScrollRevealProps = {
  eyebrow?: string;
  heading: string;
  description: string;
  items: StickyScrollRevealItem[];
  className?: string;
};

export default function StickyScrollReveal({ eyebrow, heading, description, items, className }: StickyScrollRevealProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    itemRefs.current.forEach((element, index) => {
      if (!element) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveIndex(index);
            }
          });
        },
        {
          root: null,
          threshold: 0.35,
          rootMargin: "-30% 0px -40%",
        },
      );

      observer.observe(element);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, [items.length]);

  const activeItem = useMemo(() => items[activeIndex] ?? items[0], [items, activeIndex]);

  return (
    <section className={cn("relative", className)}>
      <div className="grid gap-10 lg:grid-cols-[0.85fr,1.15fr] lg:items-start">
        <motion.aside
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.45 }}
          className="sticky top-24 space-y-6 rounded-3xl border border-white/60 bg-white/70 p-8 shadow-soft backdrop-blur-xl backdrop-saturate-150"
        >
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-secondary">
              {eyebrow ?? "Program Utama"}
            </p>
            <h3 className="text-2xl font-semibold text-text">{heading}</h3>
            <p className="text-base text-text-muted">{description}</p>
          </div>
          <div className="space-y-3 rounded-2xl border border-secondary/40 bg-secondary/5 p-5">
            <p className="text-sm font-semibold uppercase tracking-wide text-secondary/90">Sorotan saat ini</p>
            <div className="space-y-1">
              <p className="text-lg font-semibold text-text">{activeItem.title}</p>
              {activeItem.subtitle ? (
                <p className="text-sm font-medium text-secondary">{activeItem.subtitle}</p>
              ) : null}
            </div>
            <p className="text-sm leading-relaxed text-text-muted">{activeItem.description}</p>
            {activeItem.highlights && activeItem.highlights.length > 0 ? (
              <ul className="space-y-2 text-sm text-text">
                {activeItem.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-start gap-2">
                    <span className="mt-1 inline-flex h-2.5 w-2.5 flex-shrink-0 rounded-full bg-secondary" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        </motion.aside>

        <div className="space-y-6">
          {items.map((item, index) => (
            <motion.div
              key={item.id}
              ref={(element) => {
                itemRefs.current[index] = element;
              }}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className={cn(
                "relative overflow-hidden rounded-3xl border border-white/60 bg-white/60 p-7 shadow-soft backdrop-blur-lg transition-all duration-500",
                activeIndex === index ? "ring-2 ring-secondary/50" : "hover:border-secondary/50",
              )}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-white to-primary/10 opacity-80" aria-hidden="true" />
              <div className="relative space-y-4">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-wide text-secondary">{item.subtitle}</p>
                    <h4 className="text-xl font-semibold text-text">{item.title}</h4>
                  </div>
                  {item.icon ? (
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary/10 text-2xl">
                      {item.icon}
                    </span>
                  ) : null}
                </div>
                <p className="text-sm leading-relaxed text-text-muted">{item.description}</p>
                {item.highlights && item.highlights.length > 0 ? (
                  <ul className="space-y-2 text-sm text-text-muted">
                    {item.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-start gap-3">
                        <span className="mt-1 inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">
                          {index + 1}
                        </span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
