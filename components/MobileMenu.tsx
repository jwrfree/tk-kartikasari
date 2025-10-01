"use client";

import { type TransitionEvent, useEffect, useMemo, useState } from "react";
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
  const [shouldRender, setShouldRender] = useState(isOpen);

  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
    }
  }, [isOpen]);

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

  const handleTransitionEnd = (event: TransitionEvent<HTMLDivElement>) => {
    if (event.target !== event.currentTarget) {
      return;
    }

    if (!isOpen) {
      setShouldRender(false);
    }
  };

  const toggleAccordion = (label: string) => {
    setOpenAccordion((current) => (current === label ? null : label));
  };

  const items = useMemo(() => navigation, [navigation]);

  if (!shouldRender) {
    return null;
  }

  return (
    <div
      id="mobile-nav"
      role="dialog"
      aria-modal="true"
      aria-hidden={!isOpen}
      className={cn(
        "fixed inset-0 z-40 overflow-y-auto bg-surface pt-24 pb-12 transition-opacity duration-200 ease-out",
        isOpen ? "opacity-100" : "pointer-events-none opacity-0",
      )}
      onTransitionEnd={handleTransitionEnd}
    >
      <nav
        className={cn(
          "flex transform flex-col gap-1 px-4 text-xl font-medium text-text transition-transform duration-300 ease-out",
          isOpen ? "translate-y-0" : "-translate-y-3",
        )}
      >
        {items.map((item) => {
          if ("children" in item) {
            const isAccordionOpen = openAccordion === item.label;

            return (
              <div key={item.label}>
                <button
                  onClick={() => toggleAccordion(item.label)}
                  aria-expanded={isAccordionOpen}
                  className="flex w-full items-center justify-between rounded-full px-4 py-2 text-left transition-colors duration-150 hover:bg-surfaceAlt focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-500/40"
                >
                  <span className="font-semibold text-text">{item.label}</span>
                  <ChevronDown
                    className={cn(
                      "h-5 w-5 text-text-muted transition-transform duration-200",
                      isAccordionOpen ? "rotate-180" : "rotate-0",
                    )}
                    aria-hidden="true"
                  />
                </button>
                {isAccordionOpen && (
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
                            "block rounded-full px-5 py-2 text-base transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-500/40",
                            isActive
                              ? "text-pink-500"
                              : "text-text-muted hover:bg-surfaceAlt hover:text-text",
                          )}
                        >
                          {child.label}
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          }

          if (!("href" in item) || !item.href) {
            return null;
          }

          const isActive = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={onClose}
              aria-current={isActive ? "page" : undefined}
              className={cn(
                "block rounded-full px-4 py-2 font-medium transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-500/40",
                isActive ? "bg-surfaceAlt font-semibold text-pink-500" : "text-text hover:bg-surfaceAlt",
              )}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
