import AnimateIn from "@/components/AnimateIn";
import PageSection from "@/components/layout/PageSection";
import SectionHeader from "@/components/layout/SectionHeader";
import { CardSurface } from "@/components/ui/CardSurface";
import type { HomeCredential, HomeTimelineMilestone } from "@/app/types/home";

type CredentialsCopy = {
  eyebrow: string;
  title: string;
  description: string;
  legalTitle: string;
  timelineTitle: string;
};

type CredentialsSectionProps = {
  credentials: HomeCredential[];
  timeline: HomeTimelineMilestone[];
  copy: CredentialsCopy;
};

export function CredentialsSection({ credentials, timeline, copy }: CredentialsSectionProps) {
  return (
    <PageSection padding="tight" className="relative">
      <AnimateIn className="space-y-8">
        <SectionHeader
          eyebrow={copy.eyebrow}
          eyebrowVariant="secondary"
          title={copy.title}
          description={copy.description}
        />
        <div className="grid gap-6 lg:grid-cols-[1.1fr,0.9fr]">
          <CardSurface tone="soft" padding="lg" className="h-full space-y-5">
            <h3 className="text-2xl font-semibold text-text">{copy.legalTitle}</h3>
            <ul className="space-y-4">
              {credentials.map((item) => (
                <CardSurface
                  key={item.label}
                  tone="translucent"
                  padding="md"
                  className="transition-transform duration-300 hover:-translate-y-1 hover:border-secondary/60 hover:shadow-lg"
                >
                  <p className="text-xs font-semibold uppercase tracking-wide text-secondary">{item.label}</p>
                  <p className="mt-1 text-lg font-semibold text-text">{item.value}</p>
                  <p className="mt-1 text-sm leading-relaxed text-text-muted">{item.description}</p>
                </CardSurface>
              ))}
            </ul>
          </CardSurface>
          <CardSurface tone="gradient" padding="lg" className="h-full space-y-5">
            <h3 className="text-2xl font-semibold text-text">{copy.timelineTitle}</h3>
            <div className="relative">
              <span className="absolute left-4 top-2 bottom-2 w-px bg-secondary/30" aria-hidden="true" />
              <ul className="space-y-6">
                {timeline.map((milestone) => (
                  <li key={`${milestone.year}-${milestone.title}`} className="relative pl-10">
                    <span className="absolute left-0 top-1 inline-flex h-8 w-8 items-center justify-center rounded-full bg-secondary-50 text-sm font-semibold text-secondary">
                      {milestone.year}
                    </span>
                    <div className="space-y-1">
                      <p className="text-base font-semibold text-text">{milestone.title}</p>
                      <p className="text-sm leading-relaxed text-text-muted">{milestone.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </CardSurface>
        </div>
      </AnimateIn>
    </PageSection>
  );
}
