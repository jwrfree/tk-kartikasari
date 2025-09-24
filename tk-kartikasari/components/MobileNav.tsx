"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { Variants } from "framer-motion";

import { mainNav } from "@/data/navigation";

const menuVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.98,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.2,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    scale: 0.98,
    transition: {
      duration: 0.15,
      ease: "easeIn",
    },
  },
};

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const closeMenu = () => setOpen(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [open]);

  return (
    <div className="relative z-50 lg:hidden">
      <motion.button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        aria-controls="mobile-nav"
        className="relative z-50 inline-flex items-center justify-center rounded-full border border-border bg-surface p-2.5 text-text shadow-soft transition hover:border-primary hover:bg-surfaceAlt hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
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
            className="fixed inset-0 z-40 flex items-center justify-center bg-surface pt-20 text-center"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <nav className="flex flex-col gap-4 text-xl font-medium text-text">
              {mainNav.map((item, index) => {
                const isActive =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname === item.href || pathname.startsWith(`${item.href}/`);
                return (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{
                      duration: 0.22,
                      delay: 0.15 + index * 0.05,
                      ease: "easeOut",
                    }}
                  >
                    <Link
                      href={item.href}
                      onClick={closeMenu}
                      aria-current={isActive ? "page" : undefined}
                      className={`block rounded-full px-4 py-2 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 ${
                        isActive
                          ? "text-primary"
                          : "text-text-muted hover:bg-surfaceAlt hover:text-text"
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
