"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState } from "react";

import { mainNav } from "@/data/navigation";

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const closeMenu = () => setOpen(false);

  return (
    <div className="relative md:hidden">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        aria-controls="mobile-nav"
        className="inline-flex items-center justify-center rounded-2xl border border-border/80 bg-white/80 p-2 text-text shadow-soft transition hover:border-primary hover:text-primary"
      >
        <span className="sr-only">Toggle navigation</span>
        <svg
          className="h-5 w-5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        >
          {open ? (
            <path d="M18 6L6 18M6 6l12 12" />
          ) : (
            <path d="M4 7h16M4 12h16M4 17h16" />
          )}
        </svg>
      </button>
      {open ? (
        <div
          id="mobile-nav"
          className="absolute right-0 top-12 z-50 w-[min(16rem,calc(100vw-3rem))] rounded-3xl border border-border/70 bg-white p-4 shadow-xl"
        >
          <nav className="flex flex-col gap-1 text-sm font-medium text-text">
            {mainNav.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className={`rounded-2xl px-4 py-2 transition ${
                    isActive
                      ? "bg-primary/10 text-primary"
                      : "text-text-muted hover:bg-surfaceAlt hover:text-text"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
      ) : null}
    </div>
  );
}
