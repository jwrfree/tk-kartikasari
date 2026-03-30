import type { ComponentPropsWithoutRef } from 'react';

import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

export const cardSurfaceVariants = cva('rounded-[1.75rem] border shadow-soft', {
  variants: {
    tone: {
      translucent: 'border-border/70 bg-surface/95 backdrop-blur-sm',
      soft: 'border-border/70 bg-surface-alt',
      gradient:
        'border-border/50 bg-[radial-gradient(circle_at_top_left,rgba(197,106,74,0.14),transparent_32%),linear-gradient(180deg,rgba(255,255,255,0.84),rgba(255,255,255,0.62))]',
      outline: 'border-border/70 bg-transparent',
    },
    padding: {
      none: 'p-0',
      sm: 'p-4',
      md: 'p-6',
      lg: 'p-7',
      xl: 'p-8 sm:p-10',
    },
  },
  defaultVariants: {
    tone: 'translucent',
    padding: 'md',
  },
});

export type CardSurfaceProps = ComponentPropsWithoutRef<'div'> & VariantProps<typeof cardSurfaceVariants>;

export function CardSurface({ className, tone, padding, ...props }: CardSurfaceProps) {
  return <div className={cn(cardSurfaceVariants({ tone, padding }), className)} {...props} />;
}
