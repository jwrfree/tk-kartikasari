"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { Variants } from "framer-motion";

import { mainNav } from "@/data/navigation";

const menuVariants: Variants = {
  hidden: {
    opacity: 0,
    y: -16,
    scale: 0.96,
    filter: "blur(12px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      type: "spring",
      stiffness: 220,
      damping: 22,
      mass: 0.9,
    },
  },
  exit: {
    opacity: 0,
    y: -12,
    scale: 0.98,
    filter: "blur(8px)",
    transition: {
      duration: 0.18,
      ease: "easeInOut",
    },
  },
};

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
        className="inline-flex items-center justify-center rounded-full border border-white/60 bg-white/50 p-2.5 text-text shadow-soft backdrop-blur-sm backdrop-saturate-150 transition hover:border-primary hover:bg-white/60 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
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
            key="mobile-nav"
            id="mobile-nav"
            className="absolute left-0 right-0 top-[calc(100%+0.75rem)] z-50 overflow-hidden rounded-3xl border border-white/50 bg-white/60 p-4 shadow-2xl backdrop-blur-xl backdrop-saturate-150"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            style={{ transformOrigin: "top center" }}
          >
            <nav className="flex flex-col gap-1 text-base font-medium text-text">
              {mainNav.map((item, index) => {
                const isActive =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname === item.href || pathname.startsWith(`${item.href}/`);
                return (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.22, delay: 0.08 + index * 0.04, ease: "easeOut" }}
                  >
                    <Link
                      href={item.href}
                      onClick={closeMenu}
                      aria-current={isActive ? "page" : undefined}
                      className={`block rounded-full px-4 py-2 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 ${
                        isActive
                          ? "bg-primary/10 text-primary"
                          : "text-text-muted hover:bg-white/60 hover:text-text"
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
    </div>
  );
}
