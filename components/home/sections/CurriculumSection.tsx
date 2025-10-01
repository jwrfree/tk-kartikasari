import { CheckCircle } from "react-bootstrap-icons";

import AnimateIn from "@/components/AnimateIn";
import PageSection from "@/components/layout/PageSection";
import SectionHeader from "@/components/layout/SectionHeader";
import type { HomeCurriculumPillar } from "@/app/types/home";
import { CardSurface } from "@/components/ui/CardSurface";

type CurriculumCopy = {
  eyebrow: string;
  title: string;
  description: string;
};

type CurriculumSectionProps = {
  pillars: HomeCurriculumPillar[];
  copy: CurriculumCopy;
};

export function CurriculumSection({ pillars, copy }: CurriculumSectionProps) {
  return (
    <PageSection id="kurikulum-merdeka" className="bg-gradient-to-br from-secondary/10 via-white to-primary/10" padding="tight">
      <AnimateIn className="space-y-8">
        <SectionHeader
          eyebrow={copy.eyebrow}
          eyebrowVariant="secondary"
          title={copy.title}
          description={copy.description}
        />
        <div className="grid gap-6 md:grid-cols-3">
          {pillars.map((pillar) => (
            <AnimateIn key={pillar.title}>
              <CardSurface tone="soft" padding="lg" className="h-full text-left">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-secondary">{pillar.subtitle}</p>
                <h3 className="mt-3 text-2xl font-semibold text-text">{pillar.title}</h3>
                <ul className="mt-5 space-y-2 text-base text-text-muted">
                  {pillar.points.map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-primary" aria-hidden="true" />
                      {point}
                    </li>
                  ))}
                </ul>
              </CardSurface>
            </AnimateIn>
          ))}
        </div>
      </AnimateIn>
    </PageSection>
  );
}
