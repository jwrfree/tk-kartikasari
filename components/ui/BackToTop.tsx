"use client";

import { useEffect, useState } from "react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";
import { cn } from "@/lib/utils";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={cn(
        "fixed bottom-24 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-full border border-border/70 bg-surface text-text shadow-floating transition-all duration-300 hover:-translate-y-0.5 hover:bg-surfaceAlt md:bottom-28 md:right-8",
        isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0 pointer-events-none"
      )}
      aria-label="Kembali ke atas"
    >
      <ChevronUpIcon className="h-6 w-6" />
    </button>
  );
}
