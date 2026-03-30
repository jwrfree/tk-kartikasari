import type { ComponentPropsWithoutRef, ReactNode } from 'react';

import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const badgeVariants = cva(
  'inline-flex items-center gap-2 rounded-full border font-semibold tracking-[0.22em] uppercase',
  {
    variants: {
      tone: {
        primary: 'border-primary/20 bg-primary/10 text-primary',
        secondary: 'border-secondary/20 bg-secondary/10 text-secondary',
        surface: 'border-border/70 bg-surface text-foreground',
        muted: 'border-border/70 bg-surface-alt text-text-muted',
        outline: 'border-border/70 bg-transparent text-foreground',
      },
      size: {
        sm: 'px-3 py-1 text-[0.64rem]',
        md: 'px-4 py-1.5 text-[0.68rem]',
      },
    },
    defaultVariants: {
      tone: 'primary',
      size: 'md',
    },
  },
);

export interface BadgeProps extends ComponentPropsWithoutRef<'span'>, VariantProps<typeof badgeVariants> {
  leadingVisual?: ReactNode;
}

export function Badge({ className, tone, size, leadingVisual, children, ...props }: BadgeProps) {
  return (
    <span className={cn(badgeVariants({ tone, size }), className)} {...props}>
      {leadingVisual ? <span aria-hidden="true">{leadingVisual}</span> : null}
      {children}
    </span>
  );
}

export { badgeVariants };
