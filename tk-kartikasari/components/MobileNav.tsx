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
    <div className="lg:hidden">
      <motion.button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        aria-controls="mobile-nav"
        className="inline-flex items-center justify-center rounded-full border border-border/70 bg-white/90 p-2.5 text-text shadow-soft transition hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
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
            className="absolute left-0 right-0 top-[calc(100%+0.75rem)] z-50 rounded-3xl border border-border/70 bg-white/95 p-4 shadow-xl backdrop-blur"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            <nav className="flex flex-col gap-1 text-base font-medium text-text">
              {mainNav.map((item) => {
                const isActive =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname === item.href || pathname.startsWith(`${item.href}/`);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={closeMenu}
                    aria-current={isActive ? "page" : undefined}
                    className={`block rounded-full px-4 py-2 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 ${
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
