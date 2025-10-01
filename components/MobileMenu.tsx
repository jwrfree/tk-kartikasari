"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown } from "react-bootstrap-icons";

import { useSiteData } from "@/app/providers/SiteDataProvider";
import { cn } from "@/lib/utils";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const pathname = usePathname();
  const { navigation } = useSiteData();
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);
  const [renderMenu, setRenderMenu] = useState(isOpen);
  const [isVisible, setIsVisible] = useState(isOpen);

  useEffect(() => {
    if (!isOpen) {
      setOpenAccordion(null);
    }
  }, [isOpen]);

  useEffect(() => {
    let timeoutId: number | undefined;
    let rafId: number | undefined;

    if (isOpen) {
      setRenderMenu(true);
      rafId = requestAnimationFrame(() => setIsVisible(true));
    } else {
      setIsVisible(false);
      timeoutId = window.setTimeout(() => {
        setRenderMenu(false);
      }, 400);
    }

    return () => {
      if (typeof timeoutId === "number") {
        window.clearTimeout(timeoutId);
      }
      if (typeof rafId === "number") {
        cancelAnimationFrame(rafId);
      }
    };
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

  if (!renderMenu) {
    return null;
  }

  return (
    <div
      id="mobile-nav"
      role="dialog"
      aria-modal="true"
      aria-hidden={!isOpen}
      className={cn(
        "fixed inset-0 z-40 overflow-y-auto bg-surface pt-24 pb-12 transform-gpu transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]",
        isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0",
      )}
    >
      <nav className="flex flex-col gap-1 px-4 text-xl font-medium text-text">
        {items.map((item, index) => {
          const transitionDelay = isVisible ? 0.15 + index * 0.08 : 0;
          const itemClassName = cn(
            "transform-gpu transition-all duration-400 ease-out",
            isVisible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0",
          );

          if ("children" in item) {
            const isAccordionOpen = openAccordion === item.label;

            return (
              <div
                key={item.label}
                className={itemClassName}
                style={{ transitionDelay: `${transitionDelay}s` }}
              >
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
                <div
                  className={cn(
                    "grid transform-gpu pl-4 transition-[grid-template-rows,opacity] duration-400 ease-out",
                    isAccordionOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                  )}
                  role="region"
                  aria-hidden={!isAccordionOpen}
                >
                  <div className="mt-2 flex flex-col gap-1 overflow-hidden border-l border-border py-2 pl-4">
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
                              ? "bg-white text-pink-700"
                              : "text-text-muted hover:bg-surfaceAlt hover:text-text",
                          )}
                        >
                          {child.label}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          }

          if (!("href" in item) || !item.href) {
            return null;
          }

          const isActive = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

          return (
            <div
              key={item.href}
              className={itemClassName}
              style={{ transitionDelay: `${transitionDelay}s` }}
            >
              <Link
                href={item.href}
                onClick={onClose}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "block rounded-full px-4 py-2 font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-500/40",
                  isActive
                    ? "bg-white font-semibold text-pink-700"
                    : "text-text hover:bg-surfaceAlt",
                )}
              >
                {item.label}
              </Link>
            </div>
          );
        })}
      </nav>
    </div>
  );
}
