import type { ReactNode } from 'react';

import PageSection from '@/components/layout/PageSection';
import { Badge } from '@/components/ui/Badge';
import { cn } from '@/lib/utils';

type StorySectionProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: ReactNode;
  aside?: ReactNode;
  children: ReactNode;
  reverse?: boolean;
  tone?: 'default' | 'muted';
  className?: string;
};

export function StorySection({
  id,
  eyebrow,
  title,
  description,
  aside,
  children,
  reverse = false,
  tone = 'default',
  className,
}: StorySectionProps) {
  return (
    <PageSection id={id} padding="relaxed" tone={tone} className={className}>
      <div className={cn('editorial-grid items-start', reverse && 'lg:grid-cols-[0.95fr,1.05fr]')}>
        <div className={cn('space-y-6', reverse && 'lg:order-2')}>
          {eyebrow ? (
            <Badge tone="secondary" size="sm">
              {eyebrow}
            </Badge>
          ) : null}
          <h2 className="max-w-[14ch] text-balance text-3xl font-semibold sm:text-4xl lg:text-[2.9rem]">{title}</h2>
          {description ? (
            <div className="max-w-2xl text-base leading-relaxed text-text-muted sm:text-lg">{description}</div>
          ) : null}
        </div>
        <div className={cn('space-y-6', reverse && 'lg:order-1')}>
          {aside}
          {children}
        </div>
      </div>
    </PageSection>
  );
}
