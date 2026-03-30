'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { AnimatePresence, motion } from 'framer-motion';

import { useSiteData } from '@/app/providers/SiteDataProvider';
import { cn } from '@/lib/utils';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const pathname = usePathname();
  const { navigation } = useSiteData();
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  return (
    <AnimatePresence>
      {isOpen ? (
        <motion.div
          id="mobile-nav"
          role="dialog"
          aria-modal="true"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 overflow-y-auto bg-background/95 px-5 pb-10 pt-28 backdrop-blur-md"
        >
          <nav className="mx-auto flex max-w-2xl flex-col gap-3">
            {navigation.map((item) => {
              if ('children' in item) {
                const isAccordionOpen = openAccordion === item.label;

                return (
                  <div key={item.label} className="card overflow-hidden">
                    <button
                      type="button"
                      onClick={() => setOpenAccordion(isAccordionOpen ? null : item.label)}
                      className="flex w-full items-center justify-between px-5 py-4 text-left"
                    >
                      <span className="text-lg font-semibold text-foreground">{item.label}</span>
                      <ChevronDownIcon
                        className={cn('h-5 w-5 transition-transform', isAccordionOpen && 'rotate-180')}
                      />
                    </button>
                    <AnimatePresence initial={false}>
                      {isAccordionOpen ? (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden border-t border-border/70"
                        >
                          <div className="space-y-2 px-3 py-3">
                            {item.children.map((child) => {
                              const isActive = pathname === child.href || pathname.startsWith(`${child.href}/`);
                              return (
                                <Link
                                  key={child.href}
                                  href={child.href}
                                  onClick={onClose}
                                  className={cn(
                                    'block rounded-[1.2rem] px-4 py-3 text-base',
                                    isActive ? 'bg-primary/10 text-primary' : 'text-foreground/80 hover:bg-surface-alt',
                                  )}
                                >
                                  <span className="block font-medium">{child.label}</span>
                                  {child.description ? (
                                    <span className="mt-1 block text-sm text-text-muted">{child.description}</span>
                                  ) : null}
                                </Link>
                              );
                            })}
                          </div>
                        </motion.div>
                      ) : null}
                    </AnimatePresence>
                  </div>
                );
              }

              if (!('href' in item) || !item.href) return null;
              const isActive =
                item.href === '/' ? pathname === '/' : pathname === item.href || pathname.startsWith(`${item.href}/`);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={onClose}
                  className={cn(
                    'card px-5 py-4 text-lg font-semibold transition',
                    isActive ? 'border-primary/25 bg-primary/10 text-primary' : 'hover:bg-surface-alt',
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
