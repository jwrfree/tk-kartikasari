import type { ReactNode } from 'react';

import { CardSurface } from '@/components/ui/CardSurface';

type QuoteBlockProps = {
  quote: ReactNode;
  author: string;
  subtitle?: string;
};

export function QuoteBlock({ quote, author, subtitle }: QuoteBlockProps) {
  return (
    <CardSurface tone="gradient" padding="xl" className="space-y-5">
      <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-secondary">Catatan sekolah</p>
      <blockquote className="max-w-2xl text-balance font-display text-2xl leading-tight text-foreground sm:text-3xl">
        &ldquo;{quote}&rdquo;
      </blockquote>
      <div>
        <p className="text-base font-semibold text-foreground">{author}</p>
        {subtitle ? <p className="text-sm text-text-muted">{subtitle}</p> : null}
      </div>
    </CardSurface>
  );
}
