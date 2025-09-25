
'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import type { Variants } from 'framer-motion';

import { mainNav } from '@/data/navigation';

// A custom cubic-bezier for a smoother, more "Apple-like" transition
const smoothEase = [0.4, 0, 0.2, 1];

const menuVariants: Variants = {
  hidden: {
    opacity: 0,
    y: '-100%',
    transition: {
      duration: 0.3,
      ease: [0.4, 0, 1, 1],
    },
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: smoothEase,
    },
  },
  exit: {
    opacity: 0,
    y: '-100%',
    transition: {
      duration: 0.3,
      ease: [0.4, 0, 1, 1],
    },
  },
};

const linkVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 + i * 0.05,
      duration: 0.35,
      ease: smoothEase,
    },
  }),
  exit: {
    opacity: 0,
    y: 20,
    transition: {
      duration: 0.2,
      ease: 'easeIn',
    },
  },
};

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const pathname = usePathname();

  return (
    <AnimatePresence>
      {isOpen ? (
        <motion.div
          key="mobile-nav"
          id="mobile-nav"
          className="fixed inset-0 z-40 bg-surface pt-20 text-center"
          variants={menuVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <nav className="flex flex-col gap-4 text-xl font-medium text-text">
            {mainNav.map((item, index) => {
              const isActive =
                item.href === '/'
                  ? pathname === '/'
                  : pathname === item.href || pathname.startsWith(`${item.href}/`);
              return (
                <motion.div
                  key={item.href}
                  custom={index}
                  variants={linkVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  <Link
                    href={item.href}
                    onClick={onClose}
                    aria-current={isActive ? 'page' : undefined}
                    /* UPDATED: Changed focus and active link colors to match new pink theme */
                    className={`block rounded-full px-4 py-2 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-500/40 ${
                      isActive
                        ? 'text-pink-500'
                        : 'text-text-muted hover:bg-surfaceAlt hover:text-text'
                    }`}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              );
            })}
          </nav>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
