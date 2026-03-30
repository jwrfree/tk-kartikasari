import type { ReactNode } from 'react';

import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/Badge';

import PageSection from './PageSection';

type PageHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: ReactNode;
  align?: 'left' | 'center';
  eyebrowClassName?: string;
  className?: string;
  children?: ReactNode;
};

export default function PageHeader({
  eyebrow,
  title,
  description,
  align = 'left',
  eyebrowClassName,
  className,
  children,
}: PageHeaderProps) {
  return (
    <PageSection padding="relaxed" className="overflow-hidden pt-28 sm:pt-32 lg:pt-36" containerClassName="relative">
      <div className="absolute left-0 top-0 h-40 w-40 rounded-full bg-primary/10 blur-3xl" aria-hidden="true" />
      <div className="absolute right-12 top-10 h-32 w-32 rounded-full bg-accent/15 blur-3xl" aria-hidden="true" />
      <header
        className={cn(
          'relative space-y-6',
          align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-4xl',
          className,
        )}
      >
        {eyebrow ? (
          <Badge tone="secondary" size="sm" className={cn(align === 'center' ? 'mx-auto' : '', eyebrowClassName)}>
            {eyebrow}
          </Badge>
        ) : null}
        <h1 className="max-w-[14ch] text-balance text-4xl font-semibold text-text sm:text-5xl lg:text-6xl">{title}</h1>
        {description ? (
          <div className="max-w-3xl text-pretty text-base leading-relaxed text-text-muted sm:text-lg">
            {description}
          </div>
        ) : null}
        {children}
      </header>
    </PageSection>
  );
}
