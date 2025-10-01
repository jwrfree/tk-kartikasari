import Link from "next/link";

import CTAButton from "@/components/CTAButton";
import AnimateIn from "@/components/AnimateIn";
import PageSection from "@/components/layout/PageSection";
import { AuroraBackground } from "@/components/reactbits/AuroraBackground";
import AnimatedCounter from "@/components/reactbits/AnimatedCounter";
import type { HomeStat } from "@/app/types/home";
import { CardSurface } from "@/components/ui/CardSurface";

export type HeroCopy = {
  badgeSuffix: string;
  title: string;
  description: string;
  highlight: {
    title: string;
    description: string;
    ratioLabel: string;
  };
  secondaryCtaLabel: string;
};

type HeroSectionProps = {
  schoolName: string;
  stats: HomeStat[];
  teacherStudentRatio: string;
  copy: HeroCopy;
};

export function HeroSection({ schoolName, stats, teacherStudentRatio, copy }: HeroSectionProps) {
  return (
    <AuroraBackground className="rounded-b-[2.5rem] border-b border-white/60 bg-gradient-to-br from-white via-secondary/10 to-primary/10">
      <PageSection
        padding="none"
        containerClassName="relative grid gap-16 pb-24 pt-20 lg:grid-cols-[1.1fr,0.9fr] lg:items-center"
      >
        <div className="relative space-y-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/60 px-4 py-2 text-sm font-semibold text-secondary shadow-soft backdrop-blur-sm backdrop-saturate-150">
            <span className="h-2.5 w-2.5 rounded-full bg-secondary" aria-hidden="true" />
            {schoolName} • {copy.badgeSuffix}
          </span>
          <h1 className="text-balance text-4xl font-bold leading-tight text-text sm:text-5xl">{copy.title}</h1>
          <p className="max-w-xl text-pretty text-lg text-text-muted sm:text-xl">{copy.description}</p>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <CTAButton ctaKey="heroVisit" />
            <Link href="/ppdb" className="btn-secondary w-full sm:w-auto">
              {copy.secondaryCtaLabel}
            </Link>
          </div>
          <div className="grid gap-6 pt-6 sm:grid-cols-2 md:grid-cols-3">
            {stats.map((item) => (
              <CardSurface key={item.label} tone="translucent" padding="lg" className="text-left">
                <p className="text-3xl font-bold text-text">
                  <AnimatedCounter value={item.value} />
                </p>
                <p className="mt-1 text-base text-text-muted">{item.label}</p>
              </CardSurface>
            ))}
          </div>
        </div>

        <AnimateIn className="relative flex justify-center">
          <div className="absolute -top-12 right-6 h-40 w-40 rounded-full bg-accent/30 blur-2xl" aria-hidden="true" />
          <div className="absolute -bottom-6 left-2 h-36 w-36 rounded-full bg-secondary/25 blur-2xl md:-bottom-10" aria-hidden="true" />
          <CardSurface
            tone="translucent"
            padding="xl"
            className="relative w-full max-w-md space-y-5 rounded-[2.5rem] text-center"
          >
            <p className="text-lg font-semibold text-secondary">{copy.highlight.title}</p>
            <p className="text-base leading-relaxed text-text-muted">{copy.highlight.description}</p>
            <div className="flex items-center justify-center gap-3 text-base font-semibold text-text">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/15 text-lg" aria-hidden="true">
                😊
              </span>
              {copy.highlight.ratioLabel} {teacherStudentRatio}
            </div>
          </CardSurface>
        </AnimateIn>
      </PageSection>
    </AuroraBackground>
  );
}
