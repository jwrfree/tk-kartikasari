
"use client";

import { clsx } from "clsx";
import { useId, useState } from "react";

import AnimateIn from "@/components/AnimateIn";

export type FaqItem = {
  question: string;
  answer: string;
};

type FaqAccordionProps = {
  items: FaqItem[];
  className?: string;
  revealOnView?: boolean;
  itemDelay?: number;
  initialOpenIndex?: number | null;
};

export default function FaqAccordion({
  items,
  className,
  revealOnView = false,
  itemDelay = 0.08,
  initialOpenIndex = null,
}: FaqAccordionProps) {
  const baseId = useId();
  const [openIndex, setOpenIndex] = useState<number | null>(() => {
    if (
      typeof initialOpenIndex === "number" &&
      initialOpenIndex >= 0 &&
      initialOpenIndex < items.length
    ) {
      return initialOpenIndex;
    }
    return null;
  });

  const toggleIndex = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  const containerClassName = className ?? "space-y-4";

  return (
    <div className={containerClassName}>
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const contentId = `${baseId}-${index}`;
        const cardClassName = clsx(
          "card overflow-hidden border-white/70 bg-white/70 text-left shadow-soft backdrop-blur-xl backdrop-saturate-150 transition-colors duration-200",
          isOpen && "border-secondary/60 bg-white",
        );

        const content = (
          <>
            <button
              type="button"
              onClick={() => toggleIndex(index)}
              aria-expanded={isOpen}
              aria-controls={contentId}
              className="flex w-full items-center gap-4 rounded-xl px-6 py-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
            >
              <span className="flex-1 text-lg font-semibold text-text">{item.question}</span>
              <span className="relative inline-flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-secondary/10 text-secondary">
                <span className="absolute h-0.5 w-4 rounded bg-current" aria-hidden />
                <span
                  aria-hidden
                  className={clsx(
                    "absolute h-4 w-0.5 rounded bg-current transition-transform duration-200 ease-out",
                    isOpen ? "scale-y-0" : "scale-y-100",
                  )}
                  style={{ transformOrigin: "center" }}
                />
              </span>
            </button>
            <div
              id={contentId}
              role="region"
              aria-hidden={!isOpen}
              className={clsx(
                "grid px-6 transition-[grid-template-rows] duration-300 ease-out",
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
              )}
            >
              <div
                className={clsx(
                  "overflow-hidden text-base leading-relaxed text-text-muted transition-all duration-300 ease-out",
                  isOpen ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0",
                )}
              >
                <p className="pb-6">{item.answer}</p>
              </div>
            </div>
          </>
        );

        if (revealOnView) {
          return (
            <AnimateIn key={item.question} className={cardClassName} delay={index * itemDelay}>
              {content}
            </AnimateIn>
          );
        }

        return (
          <div key={item.question} className={cardClassName}>
            {content}
          </div>
        );
      })}
    </div>
  );
}
