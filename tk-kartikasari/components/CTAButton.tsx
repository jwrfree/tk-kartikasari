"use client";

import { waLink } from "@/lib/utils";

type Props = {
  label?: string;
  message?: string;
  className?: string;
};

export default function CTAButton({
  label = "Chat via WhatsApp",
  message = "Halo Bu Mintarsih, saya ingin info PPDB TK Kartikasari.",
  className,
}: Props) {
  const classes = [
    "btn-primary",
    "group",
    "hover:-translate-y-0.5",
    "focus-visible:outline-none",
    "focus-visible:ring-2",
    "focus-visible:ring-secondary/60",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <a href={waLink(message)} className={classes}>
      <span className="flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/20 text-white transition group-hover:bg-white/30">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
          >
            <path
              d="M19.5 12c0 4.142-3.582 7.5-8 7.5-.996 0-1.953-.153-2.846-.437L4.5 20.25l1.38-3.611C5.3 15.487 4.75 13.815 4.75 12c0-4.142 3.582-7.5 8-7.5s6.75 3.358 6.75 7.5Z"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity="0.85"
            />
            <path
              d="M9.5 10.6c.25-.8.8-1 1.3-.8 1.5.6 1.6 2 1.6 2s1.2.2 1.6 1c.3.6-.3 1.3-1 1.9"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        <span className="text-base">{label}</span>
      </span>
    </a>
  );
}
