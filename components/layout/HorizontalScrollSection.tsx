
'use client';

import { Children } from 'react';
import type { ReactElement } from 'react';

import { cn } from '@/lib/utils';

interface HorizontalScrollSectionProps {
  children: React.ReactNode;
  className?: string;
}

export default function HorizontalScrollSection({ children, className }: HorizontalScrollSectionProps) {
  return (
    <section
      className={cn(
        'relative w-full',
        className,
      )}
      aria-label="Linimasa perjalanan TK Kartikasari"
    >
      <div
        className="flex w-full snap-x snap-mandatory items-stretch gap-6 overflow-x-auto pb-6 pl-4 pr-4 sm:px-12"
        role="list"
      >
        {Children.toArray(children).map((child, index) => (
          <div
            key={(child as ReactElement).key ?? index}
            className="flex-shrink-0 snap-center sm:snap-start"
            role="listitem"
          >
            {child}
          </div>
        ))}
      </div>
    </section>
  );
}
