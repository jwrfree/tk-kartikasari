import AnimateIn from "@/components/AnimateIn";
import PageSection from "@/components/layout/PageSection";
import SectionHeader from "@/components/layout/SectionHeader";
import type { HomeHighlight } from "@/app/types/home";
import { CardSurface } from "@/components/ui/CardSurface";

type HighlightsCopy = {
  eyebrow: string;
  title: string;
  description: string;
};

type HighlightsSectionProps = {
  highlights: HomeHighlight[];
  copy: HighlightsCopy;
};

export function HighlightsSection({ highlights, copy }: HighlightsSectionProps) {
  return (
    <PageSection
      className="relative border-y border-white/50 bg-white/50 backdrop-blur-sm backdrop-saturate-150"
      padding="tight"
    >
      <AnimateIn>
        <SectionHeader
          align="center"
          eyebrow={copy.eyebrow}
          eyebrowVariant="primary"
          title={copy.title}
          description={copy.description}
        />
      </AnimateIn>
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {highlights.map((item) => (
          <AnimateIn key={item.title}>
            <CardSurface tone="soft" padding="lg" className="h-full text-left">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/15 text-2xl" aria-hidden="true">
                {item.icon}
              </span>
              <h3 className="mt-6 text-xl font-semibold text-text">{item.title}</h3>
              <p className="mt-3 text-base leading-relaxed text-text-muted">{item.description}</p>
            </CardSurface>
          </AnimateIn>
        ))}
      </div>
    </PageSection>
  );
}
