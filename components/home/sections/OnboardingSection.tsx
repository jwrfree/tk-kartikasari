"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";

import CTAButton from "@/components/CTAButton";
import PageSection from "@/components/layout/PageSection";
import SectionHeader from "@/components/layout/SectionHeader";
import TimelineSteps from "@/components/reactbits/TimelineSteps";
import type { HomeOnboardingStep } from "@/app/types/home";

export type OnboardingCopy = {
  eyebrow: string;
  title: string;
  description: string;
  primaryCtaLabel: string;
};

type OnboardingSectionProps = {
  steps: readonly HomeOnboardingStep[];
  copy: OnboardingCopy;
};

export function OnboardingSection({ steps, copy }: OnboardingSectionProps) {
  return (
    <PageSection
      className="relative overflow-hidden border-y border-white/20 bg-surface-alt/50"
      padding="relaxed"
    >
      {/* Decorative Background Elements */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -left-20 top-0 h-[500px] w-[500px] rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute -right-20 bottom-0 h-[500px] w-[500px] rounded-full bg-secondary/5 blur-[120px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative"
      >
        <SectionHeader
          align="center"
          eyebrow={copy.eyebrow}
          eyebrowVariant="primary"
          title={copy.title}
          description={copy.description}
          className="mb-16"
        />
      </motion.div>

      <TimelineSteps steps={steps} className="relative z-10" />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="relative mt-20 flex flex-col items-center gap-6 sm:flex-row sm:justify-center"
      >
        <Link 
          href="/ppdb" 
          className="btn btn-primary min-w-[200px]"
        >
          {copy.primaryCtaLabel}
        </Link>
        <CTAButton ctaKey="visitSchedule" className="min-w-[200px]" />
      </motion.div>
    </PageSection>
  );
}
