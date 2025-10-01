"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

type TimelineStep = {
  key: string;
  title: string;
  description: string;
  icon: string;
  href: string;
  linkLabel: string;
};

type TimelineStepsProps = {
  steps: readonly TimelineStep[];
  className?: string;
};

export default function TimelineSteps({ steps, className }: TimelineStepsProps) {
  return (
    <ol className={cn("relative grid gap-6 lg:grid-cols-2", className)}>
      <div
        className="pointer-events-none absolute inset-0 hidden bg-gradient-to-b from-transparent via-white/30 to-transparent lg:block"
        aria-hidden="true"
      />
      {steps.map((step, index) => (
        <motion.li
          key={step.key}
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.45, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
          className="group relative flex h-full flex-col gap-6 overflow-hidden rounded-3xl border border-white/60 bg-white/70 p-8 shadow-soft backdrop-blur-xl backdrop-saturate-150"
        >
          <span
            className="pointer-events-none absolute inset-x-0 top-0 h-1.5 origin-left scale-x-95 bg-gradient-to-r from-primary/40 via-secondary/40 to-primary/40 transition-transform duration-500 group-hover:scale-x-100"
            aria-hidden="true"
          />
          <div className="flex items-start justify-between gap-4">
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-primary/80">
              <span className="h-2 w-2 rounded-full bg-primary" aria-hidden="true" />
              Langkah {index + 1}
            </span>
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/12 text-2xl">
              {step.icon}
            </span>
          </div>
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-text sm:text-xl">{step.title}</h3>
            <p className="text-sm leading-relaxed text-text-muted">{step.description}</p>
          </div>
          <div className="mt-auto flex flex-wrap items-center gap-3">
            <Link
              href={step.href}
              className="btn-outline btn-sm inline-flex items-center gap-2"
            >
              <span>{step.linkLabel}</span>
              <span aria-hidden="true">→</span>
            </Link>
            <span className="rounded-full border border-secondary/30 bg-secondary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-secondary/80">
              Disiapkan tim PPDB
            </span>
          </div>
          <span
            className="pointer-events-none absolute inset-0 rounded-3xl border border-white/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            aria-hidden="true"
          />
        </motion.li>
      ))}
    </ol>
  );
}
