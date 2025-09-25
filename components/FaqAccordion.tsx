
"use client";

import { useId, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

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

        return (
          <motion.div
            key={item.question}
            initial={revealOnView ? { opacity: 0, y: 40 } : false}
            whileInView={revealOnView ? { opacity: 1, y: 0 } : undefined}
            viewport={revealOnView ? { once: true, amount: 0.3 } : undefined}
            transition={{
              duration: 0.55,
              delay: revealOnView ? index * itemDelay : undefined,
            }}
            // UPDATED: .card class already provides rounding, overflow-hidden will enforce it.
            className={`card overflow-hidden border-white/70 bg-white/70 text-left shadow-soft backdrop-blur-xl backdrop-saturate-150 transition-colors duration-200 ${
              isOpen ? "border-secondary/60 bg-white" : ""
            }`}
          >
            <button
              type="button"
              onClick={() => toggleIndex(index)}
              aria-expanded={isOpen}
              aria-controls={contentId}
              // UPDATED: Added rounded-xl to ensure the focus outline is also rounded.
              className="flex w-full items-center gap-4 rounded-xl px-6 py-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
            >
              <span className="flex-1 text-lg font-semibold text-text">{item.question}</span>
              {/* UPDATED: Changed from rounded-full to rounded-xl for consistency */}
              <span className="relative inline-flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-secondary/10 text-secondary">
                <span className="absolute h-0.5 w-4 rounded bg-current" aria-hidden />
                <motion.span
                  aria-hidden
                  className="absolute h-4 w-0.5 rounded bg-current"
                  animate={{ scaleY: isOpen ? 0 : 1 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  style={{ originY: 0.5 }}
                />
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen ? (
                <motion.div
                  key="content"
                  id={contentId}
                  initial="collapsed"
                  animate="open"
                  exit="collapsed"
                  variants={{
                    open: { height: "auto", opacity: 1 },
                    collapsed: { height: 0, opacity: 0 },
                  }}
                  transition={{ duration: 0.28, ease: [0.4, 0, 0.2, 1] }}
                  className="px-6"
                >
                  <motion.p
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="pb-6 text-base leading-relaxed text-text-muted"
                  >
                    {item.answer}
                  </motion.p>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );
}
