"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import { ChevronDown } from "react-bootstrap-icons";

import { useSiteData } from "@/app/providers/SiteDataProvider";
import { cn } from "@/lib/utils";

const smoothEase = [0.4, 0, 0.2, 1] as const;

const menuVariants: Variants = {
  hidden: {
    opacity: 0,
    y: "-100%",
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: smoothEase,
      delayChildren: 0.15,
      staggerChildren: 0.08,
    },
  },
  exit: {
    opacity: 0,
    y: "-100%",
    transition: {
      duration: 0.45,
      ease: [0.4, 0, 1, 1],
      when: "afterChildren",
      staggerChildren: 0.06,
      staggerDirection: -1,
    },
  },
};

const navItemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: smoothEase,
    },
  },
  exit: {
    opacity: 0,
    y: 20,
    transition: {
      duration: 0.3,
      ease: "easeIn",
    },
  },
};

const accordionContentVariants: Variants = {
  hidden: { opacity: 0, height: 0, transition: { duration: 0.35, ease: smoothEase } },
  visible: { opacity: 1, height: "auto", transition: { duration: 0.45, ease: smoothEase } },
  exit: { opacity: 0, height: 0, transition: { duration: 0.35, ease: smoothEase } },
};

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const pathname = usePathname();
  const { navigation } = useSiteData();
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  useEffect(() => {
    if (!isOpen) {
      setOpenAccordion(null);
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  const toggleAccordion = (label: string) => {
    setOpenAccordion((current) => (current === label ? null : label));
  };

  const items = useMemo(() => navigation, [navigation]);

  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <motion.div
          key="mobile-nav"
          id="mobile-nav"
          role="dialog"
          aria-modal="true"
          aria-hidden={!isOpen}
          className="fixed inset-0 z-40 overflow-y-auto bg-surface pt-24 pb-12"
          variants={menuVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <nav className="flex flex-col gap-1 px-4 text-xl font-medium text-text">
            {items.map((item) => {
              if ("children" in item) {
                const isAccordionOpen = openAccordion === item.label;

                return (
                  <motion.div key={item.label} variants={navItemVariants}>
                    <button
                      onClick={() => toggleAccordion(item.label)}
                      aria-expanded={isAccordionOpen}
                      className="flex w-full items-center justify-between rounded-full px-4 py-2 text-left transition-colors duration-200 hover:bg-surfaceAlt focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-500/40"
                    >
                      <span className="font-semibold text-text">{item.label}</span>
                      <ChevronDown
                        className={cn(
                          "h-5 w-5 text-text-muted transition-transform duration-300",
                          isAccordionOpen ? "rotate-180" : "rotate-0",
                        )}
                        aria-hidden="true"
                      />
                    </button>
                    <AnimatePresence>
                      {isAccordionOpen && (
                        <motion.div
                          key={`${item.label}-content`}
                          className="overflow-hidden pl-4"
                          variants={accordionContentVariants}
                          initial="hidden"
                          animate="visible"
                          exit="exit"
                        >
                          <div className="mt-2 flex flex-col gap-1 border-l border-border py-2 pl-4">
                            {item.children.map((child) => {
                              const isActive = pathname === child.href || pathname.startsWith(`${child.href}/`);
                              return (
                                <Link
                                  key={child.href}
                                  href={child.href}
                                  onClick={onClose}
                                  aria-current={isActive ? "page" : undefined}
                                  className={cn(
                                    "block rounded-full px-5 py-2 text-base transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-500/40",
                                    isActive
                                      ? "bg-pink-100 font-semibold text-pink-700"
                                      : "text-text-muted hover:bg-surfaceAlt hover:text-text",
                                  )}
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

              if (!("href" in item) || !item.href) {
                return null;
              }

              const isActive = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

              return (
                <motion.div key={item.href} variants={navItemVariants}>
                  <Link
                    href={item.href}
                    onClick={onClose}
                    aria-current={isActive ? "page" : undefined}
                    className={cn(
                      "block rounded-full px-4 py-2 font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-500/40",
                      isActive ? "bg-pink-100 font-semibold text-pink-700" : "text-text hover:bg-surfaceAlt",
                    )}
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
