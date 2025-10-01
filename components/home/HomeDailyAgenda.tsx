import AnimateIn from "@/components/AnimateIn";
import { cardSurfaceVariants, CardSurface } from "@/components/ui/CardSurface";
import type { HomeAgendaItem } from "@/app/types/home";
import { cn } from "@/lib/utils";

type FocusCard = {
  title: string;
  description: string;
};

type AgendaHeader = {
  title: string;
  badge: string;
};

type AgendaInfo = {
  title: string;
  description: string;
  ratioLabel: string;
  defaultNpsn: string;
};

type HomeDailyAgendaProps = {
  items: HomeAgendaItem[];
  header: AgendaHeader;
  info: AgendaInfo;
  focusCards: FocusCard[];
  npsn?: string;
  teacherStudentRatio?: string;
};

export default function HomeDailyAgenda({
  items,
  header,
  info,
  focusCards,
  npsn,
  teacherStudentRatio,
}: HomeDailyAgendaProps) {
  const agendaClasses = cardSurfaceVariants({ tone: "translucent", padding: "none" });
  const resolvedRatio = teacherStudentRatio ?? "1 : 8";
  const resolvedNpsn = npsn ?? info.defaultNpsn;
  const infoDescription = info.description.replace("{{npsn}}", resolvedNpsn);

  return (
    <AnimateIn>
      <details className={cn("group overflow-hidden", agendaClasses)}>
        <summary className="flex cursor-pointer items-center justify-between gap-4 rounded-3xl px-6 py-5 text-base font-semibold text-secondary transition-colors group-open:bg-white/70">
          <span>{header.title}</span>
          <span className="inline-flex items-center gap-2 rounded-full bg-secondary/10 px-3 py-1 text-sm font-semibold text-secondary">
            {header.badge}
          </span>
        </summary>
        <div className="space-y-5 border-t border-white/60 bg-white/70 px-6 py-6">
          <ul className="space-y-3 text-base text-text-muted">
            {items.map((item) => (
              <li key={item.time} className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary/15 text-xs font-semibold">
                  {item.time}
                </span>
                {item.description}
              </li>
            ))}
          </ul>
          <CardSurface tone="translucent" padding="lg">
            <p className="text-base font-semibold text-secondary">{info.title}</p>
            <p className="mt-3 text-base leading-relaxed text-text-muted">{infoDescription}</p>
            <div className="mt-4 flex items-center gap-3 text-base font-semibold text-text">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/15 text-lg" aria-hidden="true">
                😊
              </span>
              {info.ratioLabel} {resolvedRatio}
            </div>
          </CardSurface>
          <div className="grid gap-4 sm:grid-cols-2">
            {focusCards.map((card) => (
              <CardSurface key={card.title} tone="translucent" padding="lg">
                <p className="text-base font-semibold text-secondary">{card.title}</p>
                <p className="mt-2 text-base text-text-muted">{card.description}</p>
              </CardSurface>
            ))}
          </div>
        </div>
      </details>
    </AnimateIn>
  );
}
