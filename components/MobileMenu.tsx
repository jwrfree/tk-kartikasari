
'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { AnimatePresence, motion, Variants } from 'framer-motion';
import { ChevronDown } from 'react-bootstrap-icons';

import { mainNav } from '@/data/navigation';

const smoothEase = [0.4, 0, 0.2, 1];

const menuVariants: Variants = {
  hidden: { opacity: 0, y: '-100%', transition: { duration: 0.3, ease: [0.4, 0, 1, 1] } },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: smoothEase } },
  exit: { opacity: 0, y: '-100%', transition: { duration: 0.3, ease: [0.4, 0, 1, 1] } },
};

const navItemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: 0.1 + i * 0.05, duration: 0.35, ease: smoothEase } }),
  exit: { opacity: 0, y: 20, transition: { duration: 0.2, ease: 'easeIn' } },
};

const accordionContentVariants: Variants = {
  hidden: { opacity: 0, height: 0, transition: { duration: 0.3, ease: smoothEase } },
  visible: { opacity: 1, height: 'auto', transition: { duration: 0.4, ease: smoothEase } },
  exit: { opacity: 0, height: 0, transition: { duration: 0.3, ease: smoothEase } },
};

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const pathname = usePathname();
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  const toggleAccordion = (label: string) => {
    setOpenAccordion(openAccordion === label ? null : label);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="mobile-nav"
          id="mobile-nav"
          className="fixed inset-0 z-40 overflow-y-auto bg-surface pt-24 pb-12"
          variants={menuVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <nav className="flex flex-col gap-1 px-4 text-xl font-medium text-text">
            {mainNav.map((item, index) => {
              if (item.children) {
                const isAccordionOpen = openAccordion === item.label;
                return (
                  <motion.div
                    key={item.label}
                    custom={index}
                    variants={navItemVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                  >
                    <button
                      onClick={() => toggleAccordion(item.label)}
                      aria-expanded={isAccordionOpen}
                      className="flex w-full items-center justify-between rounded-full px-4 py-2 text-left transition-colors duration-200 hover:bg-surfaceAlt focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-500/40"
                    >
                      <span className="font-semibold text-text">{item.label}</span>
                      <ChevronDown
                        className={`h-5 w-5 text-text-muted transition-transform duration-300 ${isAccordionOpen ? 'rotate-180' : ''}`}
                        aria-hidden="true"
                      />
                    </button>
                    <AnimatePresence>
                      {isAccordionOpen && (
                        <motion.div
                          key={`${item.label}-content`}
                          variants={accordionContentVariants}
                          initial="hidden"
                          animate="visible"
                          exit="hidden"
                          className="overflow-hidden pl-4"
                        >
                          <div className="mt-2 flex flex-col gap-1 border-l border-border py-2 pl-4">
                            {item.children.map((child) => {
                              const isActive = pathname === child.href || pathname.startsWith(`${child.href}/`);
                              return (
                                <Link
                                  key={child.href}
                                  href={child.href}
                                  onClick={onClose}
                                  aria-current={isActive ? 'page' : undefined}
                                  className={`block rounded-full px-5 py-2 text-base transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-500/40 ${
                                    isActive
                                      ? 'text-pink-500'
                                      : 'text-text-muted hover:bg-surfaceAlt hover:text-text'
                                  }`}
                                >
                                  {child.label}
                                </Link>
                              );
                            })}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              }

              const isActive = item.href === '/' ? pathname === '/' : pathname.startsWith(item.href);
              return (
                <motion.div
                  key={item.href}
                  custom={index}
                  variants={navItemVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  <Link
                    href={item.href}
                    onClick={onClose}
                    aria-current={isActive ? 'page' : undefined}
                    className={`block rounded-full px-4 py-2 font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-500/40 ${
                      isActive
                        ? 'font-semibold text-pink-500 bg-surfaceAlt'
                        : 'text-text hover:bg-surfaceAlt'
                    }`}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              );
            })}
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
