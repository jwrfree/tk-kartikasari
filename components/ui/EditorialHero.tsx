import Image from 'next/image';
import type { ReactNode } from 'react';

import { Badge } from '@/components/ui/Badge';
import { cn } from '@/lib/utils';

type EditorialHeroFact = {
  label: string;
  value: string;
};

type EditorialHeroProps = {
  eyebrow?: string;
  title: ReactNode;
  description: ReactNode;
  primaryAction?: ReactNode;
  secondaryAction?: ReactNode;
  facts?: EditorialHeroFact[];
  imageSrc?: string;
  imageAlt?: string;
  mediaCaption?: string;
  className?: string;
};

export function EditorialHero({
  eyebrow,
  title,
  description,
  primaryAction,
  secondaryAction,
  facts = [],
  imageSrc,
  imageAlt = '',
  mediaCaption,
  className,
}: EditorialHeroProps) {
  return (
    <section className={cn('relative overflow-hidden px-4 pt-28 sm:px-6 sm:pt-32', className)}>
      <div className="absolute left-0 top-10 h-56 w-56 rounded-full bg-primary/12 blur-3xl" aria-hidden="true" />
      <div className="absolute right-0 top-0 h-60 w-60 rounded-full bg-accent/12 blur-3xl" aria-hidden="true" />

      <div className="mx-auto grid max-w-7xl items-end gap-10 lg:grid-cols-[0.96fr,1.04fr]">
        <div className="space-y-7 pb-8 lg:pb-14">
          {eyebrow ? (
            <Badge tone="secondary" size="sm">
              {eyebrow}
            </Badge>
          ) : null}
          <div className="space-y-5">
            <h1 className="max-w-[11ch] text-balance text-[clamp(3rem,8vw,6.4rem)] font-semibold leading-[0.95] text-foreground">
              {title}
            </h1>
            <div className="max-w-2xl text-pretty text-base leading-relaxed text-text-muted sm:text-lg">
              {description}
            </div>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            {primaryAction}
            {secondaryAction}
          </div>

          {facts.length > 0 ? (
            <dl className="grid gap-4 border-t border-border/70 pt-6 sm:grid-cols-3">
              {facts.map((fact) => (
                <div key={`${fact.label}-${fact.value}`} className="space-y-1">
                  <dt className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-text-muted">
                    {fact.label}
                  </dt>
                  <dd className="text-lg font-semibold text-foreground">{fact.value}</dd>
                </div>
              ))}
            </dl>
          ) : null}
        </div>

        <div className="relative min-h-[28rem] overflow-hidden rounded-[2.2rem] border border-border/70 bg-foreground shadow-premium sm:min-h-[36rem]">
          {imageSrc ? (
            <Image src={imageSrc} alt={imageAlt} fill priority className="object-cover" />
          ) : (
            <div className="absolute inset-0 bg-[linear-gradient(160deg,rgba(245,239,230,0.12),rgba(245,239,230,0)_42%),radial-gradient(circle_at_top_right,rgba(215,164,65,0.26),transparent_26%),radial-gradient(circle_at_bottom_left,rgba(197,106,74,0.32),transparent_28%),linear-gradient(180deg,#314037,#1f2a24)]" />
          )}

          <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/18 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-8">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-white/70">
              Gambaran sekolah
            </p>
            <p className="mt-3 max-w-md text-balance font-display text-2xl leading-tight sm:text-[2rem]">
              Lihat kelasnya, kenali gurunya, lalu nilai apakah ritme paginya cocok untuk anak.
            </p>
            {mediaCaption ? (
              <p className="mt-3 max-w-md text-sm leading-relaxed text-white/80">{mediaCaption}</p>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
