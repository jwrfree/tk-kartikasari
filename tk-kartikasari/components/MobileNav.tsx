"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { mainNav } from "@/data/navigation";

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const closeMenu = () => setOpen(false);

  return (
    <div className="relative md:hidden">
      <motion.button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        aria-controls="mobile-nav"
        className="inline-flex items-center justify-center rounded-2xl border border-border/80 bg-white/80 p-2 text-text shadow-soft transition hover:border-primary hover:text-primary"
        whileTap={{ scale: 0.95 }}
      >
        <span className="sr-only">Toggle navigation</span>
        <span className="relative block h-5 w-6" aria-hidden>
          <motion.span
            className="absolute left-0 top-1 h-0.5 w-full rounded bg-current"
            animate={open ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          />
          <motion.span
            className="absolute left-0 top-[9px] h-0.5 w-full rounded bg-current"
            animate={open ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          />
          <motion.span
            className="absolute left-0 bottom-1 h-0.5 w-full rounded bg-current"
            animate={open ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          />
        </span>
      </motion.button>
      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-nav"
            className="absolute right-0 top-12 z-50 w-64 rounded-3xl border border-border/70 bg-white p-4 shadow-xl"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
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
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
