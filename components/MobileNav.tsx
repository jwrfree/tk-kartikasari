"use client";

import { cn } from "@/lib/utils";

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
        className="relative z-50 inline-flex items-center justify-center p-2.5 text-text transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
      >
        <span className="sr-only">Toggle navigation</span>
        <span className="relative block h-5 w-6" aria-hidden>
          <span
            className={cn(
              "absolute left-0 block h-0.5 w-full rounded bg-current transition-transform duration-200 ease-out",
              isOpen ? "translate-y-2.5 rotate-45" : "translate-y-0 rotate-0",
            )}
            style={{ top: "6px" }}
          />
          <span
            className={cn(
              "absolute left-0 block h-0.5 w-full rounded bg-current transition-transform duration-200 ease-out",
              isOpen ? "-translate-y-2.5 -rotate-45" : "translate-y-0 rotate-0",
            )}
            style={{ bottom: "6px" }}
          />
        </span>
      </button>
    </div>
  );
}
