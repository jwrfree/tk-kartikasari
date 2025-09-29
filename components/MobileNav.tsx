'use client';

import { motion } from 'framer-motion';

interface MobileNavProps {
  isOpen: boolean;
  onToggle: () => void;
}

export default function MobileNav({ isOpen, onToggle }: MobileNavProps) {
  return (
    <div className="relative z-50 lg:hidden">
      <motion.button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls="mobile-nav"
        className="relative z-50 inline-flex items-center justify-center p-2.5 text-text transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
      >
        <span className="sr-only">Toggle navigation</span>
        <span className="relative block h-5 w-6" aria-hidden>
          <motion.span
            className="absolute left-0 top-1 h-0.5 w-full rounded bg-current"
            animate={isOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.32, ease: [0.4, 0, 0.2, 1] }}
          />
          <motion.span
            className="absolute left-0 bottom-1 h-0.5 w-full rounded bg-current"
            animate={isOpen ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.32, ease: [0.4, 0, 0.2, 1] }}
          />
        </span>
      </motion.button>
    </div>
  );
}
