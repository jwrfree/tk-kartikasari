import AnimateIn from "@/components/AnimateIn";
import PageSection from "@/components/layout/PageSection";
import SectionHeader from "@/components/layout/SectionHeader";
import StickyScrollReveal from "@/components/reactbits/StickyScrollReveal";
import type { HomeProgram } from "@/app/types/home";

type ProgramsCopy = {
  eyebrow: string;
  title: string;
  description: string;
  preparationSteps: string[];
  stickyReveal: {
    eyebrow: string;
    heading: string;
    description: string;
  };
};

type ProgramsSectionProps = {
  programs: HomeProgram[];
  copy: ProgramsCopy;
};

export function ProgramsSection({ programs, copy }: ProgramsSectionProps) {
  return (
    <PageSection id="program" padding="tight">
      <AnimateIn className="max-w-3xl space-y-6">
        <SectionHeader
          eyebrow={copy.eyebrow}
          eyebrowVariant="secondary"
          title={copy.title}
          description={copy.description}
        />
        <ul className="space-y-3 text-base text-text-muted">
          {copy.preparationSteps.map((step, index) => (
            <li key={step} className="flex items-start gap-3">
              <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary/15 text-xs font-semibold text-primary" aria-hidden="true">
                {index + 1}
              </span>
              {step}
            </li>
          ))}
        </ul>
      </AnimateIn>
      <StickyScrollReveal
        eyebrow={copy.stickyReveal.eyebrow}
        heading={copy.stickyReveal.heading}
        description={copy.stickyReveal.description}
        items={programs.map((program, index) => ({
          id: `${program.name}-${index}`,
          title: program.name,
          subtitle: program.age,
          description: program.description,
          highlights: program.points,
          icon: "✨",
        }))}
        className="mt-12"
      />
    </PageSection>
  );
}
