
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
                /* UPDATED: Changed focus and active link colors to match new pink theme */
                className={`rounded-full px-4 py-2 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-500/40 ${
                  isActive
                    ? "bg-pink-500/10 text-pink-500"
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
