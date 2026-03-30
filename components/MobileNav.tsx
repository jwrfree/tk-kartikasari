'use client';

import { clsx } from 'clsx';

interface MobileNavProps {
  isOpen: boolean;
  onToggle: () => void;
}

export default function MobileNav({ isOpen, onToggle }: MobileNavProps) {
  return (
    <div className="relative z-50 lg:hidden">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls="mobile-nav"
        className="relative z-50 inline-flex h-11 w-11 transform-gpu items-center justify-center rounded-full border border-border/70 bg-surface text-text transition active:scale-95"
      >
        <span className="sr-only">Toggle navigation</span>
        <span className="relative block h-5 w-6" aria-hidden>
          <span
            className={clsx(
              'absolute left-0 h-0.5 w-full rounded bg-current transition-transform duration-300 ease-in-out',
              isOpen ? 'top-1/2 -translate-y-1/2 rotate-45' : 'top-1 rotate-0',
            )}
          />
          <span
            className={clsx(
              'absolute left-0 h-0.5 w-full rounded bg-current transition-transform duration-300 ease-in-out',
              isOpen ? 'top-1/2 -translate-y-1/2 -rotate-45' : 'bottom-1 rotate-0',
            )}
          />
        </span>
      </button>
    </div>
  );
}
