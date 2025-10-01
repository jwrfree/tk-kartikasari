import CTAButton from "@/components/CTAButton";
import AnimateIn from "@/components/AnimateIn";
import PageSection from "@/components/layout/PageSection";
import { AuroraBackground } from "@/components/reactbits/AuroraBackground";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

type FinalCtaCopy = {
  eyebrow: string;
  title: string;
  description: string;
  secondaryCtaLabel: string;
};

type FinalCtaSectionProps = {
  copy: FinalCtaCopy;
};

export function FinalCtaSection({ copy }: FinalCtaSectionProps) {
  return (
    <PageSection className="relative pb-36" padding="tight">
      <AuroraBackground className="rounded-[2.5rem] border border-white/70 bg-white/60 p-[1.5px]">
        <AnimateIn className="relative flex flex-col gap-6 rounded-[2.5rem] bg-gradient-to-br from-secondary/10 via-white to-primary/10 p-10 text-center shadow-soft md:flex-row md:items-center md:justify-between md:text-left">
          <div className="max-w-xl space-y-4">
            <Badge tone="surface" className="uppercase text-secondary">
              {copy.eyebrow}
            </Badge>
            <h2 className="text-balance text-3xl font-semibold text-text sm:text-4xl">{copy.title}</h2>
            <p className="text-base leading-relaxed text-text-muted">{copy.description}</p>
          </div>
          <div className="flex flex-col gap-3 md:flex-row md:items-center">
            <CTAButton ctaKey="visitSchedule" />
            <Button asChild variant="outline" fullWidth className="sm:w-auto">
              <a href="#program">{copy.secondaryCtaLabel}</a>
            </Button>
          </div>
        </AnimateIn>
      </AuroraBackground>
    </PageSection>
  );
}
