import { CardSurface } from '@/components/ui/CardSurface';
import { cn } from '@/lib/utils';

type FactRailItem = {
  label: string;
  value: string;
  description?: string;
};

type FactRailProps = {
  eyebrow?: string;
  title?: string;
  items: FactRailItem[];
  sticky?: boolean;
  className?: string;
};

export function FactRail({ eyebrow, title, items, sticky = false, className }: FactRailProps) {
  return (
    <CardSurface tone="soft" padding="xl" className={cn('space-y-6', sticky && 'lg:sticky lg:top-28', className)}>
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      {title ? <h3 className="max-w-[14ch] text-2xl font-semibold">{title}</h3> : null}
      <dl className="space-y-5">
        {items.map((item) => (
          <div
            key={`${item.label}-${item.value}`}
            className="border-t border-border/60 pt-5 first:border-t-0 first:pt-0"
          >
            <dt className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-text-muted">{item.label}</dt>
            <dd className="mt-2 text-lg font-semibold text-foreground">{item.value}</dd>
            {item.description ? (
              <p className="mt-2 text-sm leading-relaxed text-text-muted">{item.description}</p>
            ) : null}
          </div>
        ))}
      </dl>
    </CardSurface>
  );
}
