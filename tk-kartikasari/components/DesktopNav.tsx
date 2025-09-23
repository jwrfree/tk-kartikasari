"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { mainNav } from "@/data/navigation";

export default function DesktopNav() {
  const pathname = usePathname();

  return (
    <nav aria-label="Menu utama" className="hidden flex-1 items-center justify-center lg:flex">
      <ul className="flex items-center gap-1 text-base font-medium text-text-muted">
        {mainNav.map((item) => {
          const isActive =
            item.href === "/"
              ? pathname === "/"
              : pathname === item.href || pathname.startsWith(`${item.href}/`);

          return (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={`rounded-full px-4 py-2 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 ${
                  isActive
                    ? "bg-primary/10 text-primary"
                    : "text-text-muted hover:bg-surfaceAlt hover:text-text"
                }`}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
