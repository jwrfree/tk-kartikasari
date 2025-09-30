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
      <div className="pointer-events-none absolute inset-0 hidden bg-gradient-to-b from-transparent via-white/30 to-transparent lg:block" aria-hidden="true" />
      {steps.map((step, index) => (
        <motion.li
          key={step.key}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.45, delay: index * 0.05 }}
          className="group relative flex flex-col gap-5 overflow-hidden rounded-3xl border border-white/60 bg-white/70 p-7 shadow-soft backdrop-blur-xl backdrop-saturate-150"
        >
          <span className="absolute left-6 top-0 h-1.5 w-12 rounded-full bg-primary/40 transition-transform duration-500 group-hover:translate-x-2" aria-hidden="true" />
          <div className="flex items-center gap-3">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/12 text-2xl">{step.icon}</span>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-secondary">Langkah {index + 1}</p>
              <h3 className="mt-1 text-lg font-semibold text-text">{step.title}</h3>
            </div>
          </div>
          <p className="text-sm leading-relaxed text-text-muted">{step.description}</p>
          <div className="flex items-center justify-between gap-3 text-sm font-semibold text-primary">
            <Link href={step.href} className="inline-flex items-center gap-2 transition-transform duration-300 group-hover:translate-x-1">
              {step.linkLabel}
              <span aria-hidden="true">→</span>
            </Link>
            <span className="rounded-full border border-primary/30 bg-primary/5 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary/80">
              Siap dilanjutkan
            </span>
          </div>
          <span className="pointer-events-none absolute inset-0 rounded-3xl border border-white/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100" aria-hidden="true" />
        </motion.li>
      ))}
    </ol>
  );
}
