import Link from "next/link";

import CTAButton from "@/components/CTAButton";
import AnimateIn from "@/components/AnimateIn";
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
      className="relative border-y border-white/50 bg-gradient-to-br from-primary/10 via-white to-secondary/10"
      padding="tight"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute left-8 top-8 h-40 w-40 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute right-12 bottom-12 h-48 w-48 rounded-full bg-secondary/20 blur-3xl" />
      </div>
      <AnimateIn className="relative">
        <SectionHeader
          align="center"
          eyebrow={copy.eyebrow}
          eyebrowVariant="primary"
          title={copy.title}
          description={copy.description}
        />
      </AnimateIn>
      <TimelineSteps steps={steps} className="relative mt-12" />
      <div className="relative mt-12 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-center">
        <Link href="/ppdb" className="btn-primary w-full sm:w-auto">
          {copy.primaryCtaLabel}
        </Link>
        <CTAButton ctaKey="visitSchedule" className="w-full sm:w-auto" />
      </div>
    </PageSection>
  );
}
