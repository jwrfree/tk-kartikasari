import AnimateIn from "@/components/AnimateIn";
import PageSection from "@/components/layout/PageSection";
import SectionHeader from "@/components/layout/SectionHeader";
import { CardSurface } from "@/components/ui/CardSurface";
import HomeDailyAgenda from "@/components/home/HomeDailyAgenda";
import type { HomeJourneyItem, HomeAgendaItem } from "@/app/types/home";

type ExperienceCopy = {
  eyebrow: string;
  title: string;
  description: string;
  parentCollab: {
    title: string;
    description: string;
  };
};

type AgendaContent = {
  header: {
    title: string;
    badge: string;
  };
  items: HomeAgendaItem[];
  info: {
    title: string;
    description: string;
    ratioLabel: string;
    defaultNpsn: string;
  };
  focusCards: {
    title: string;
    description: string;
  }[];
};

type DailyExperienceSectionProps = {
  journey: HomeJourneyItem[];
  teacherStudentRatio: string;
  npsn?: string;
  copy: ExperienceCopy;
  agenda: AgendaContent;
};

export function DailyExperienceSection({
  journey,
  teacherStudentRatio,
  npsn,
  copy,
  agenda,
}: DailyExperienceSectionProps) {
  return (
    <PageSection
      id="pengalaman"
      className="relative overflow-hidden"
      padding="tight"
      containerClassName="relative grid gap-12 lg:grid-cols-[0.9fr,1.1fr] lg:items-center"
    >
      <div className="absolute inset-0 bg-grid-dots [background-size:24px_24px] opacity-40" aria-hidden="true" />
      <AnimateIn className="relative space-y-6">
        <SectionHeader
          eyebrow={copy.eyebrow}
          eyebrowVariant="surface"
          title={copy.title}
          description={copy.description}
        />
        <CardSurface tone="translucent" padding="lg">
          <p className="text-base font-semibold text-secondary">{copy.parentCollab.title}</p>
          <p className="mt-3 text-base leading-relaxed text-text-muted">{copy.parentCollab.description}</p>
        </CardSurface>
      </AnimateIn>
      <div className="relative space-y-4">
        <HomeDailyAgenda
          items={agenda.items}
          header={agenda.header}
          info={agenda.info}
          focusCards={agenda.focusCards}
          npsn={npsn}
          teacherStudentRatio={teacherStudentRatio}
        />
        {journey.map((item) => (
          <AnimateIn
            key={item.title}
            className="grid gap-4 rounded-3xl border border-white/60 bg-white/60 p-6 shadow-soft backdrop-blur-lg backdrop-saturate-150 sm:grid-cols-[auto,1fr] sm:items-center"
          >
            <div className="flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary/10 text-2xl" aria-hidden="true">
                {item.icon}
              </span>
              <div>
                <p className="text-sm font-semibold text-secondary">{item.time} WIB</p>
                <p className="text-lg font-semibold text-text">{item.title}</p>
              </div>
            </div>
            <p className="text-base leading-relaxed text-text-muted sm:pl-4">{item.description}</p>
          </AnimateIn>
        ))}
      </div>
    </PageSection>
  );
}
