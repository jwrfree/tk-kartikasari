
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Fragment } from "react";

import { useSiteData } from "@/app/providers/SiteDataProvider";

export default function DesktopNav() {
  const { navigation } = useSiteData();
  const pathname = usePathname();

  return (
    <nav aria-label="Menu utama" className="hidden flex-1 items-center justify-center lg:flex">
      <ul className="flex items-center gap-1 text-base font-medium text-text-muted">
        {navigation.map((item) => {
          if ("children" in item) {
            const isParentActive = item.children.some(
              (child) => pathname === child.href || pathname.startsWith(`${child.href}/`)
            );

            return (
              <li key={item.label}>
                <Popover className="relative">
                  {({ open }) => (
                    <>
                      <Popover.Button
                        className={`flex items-center gap-1 rounded-full px-4 py-2 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-500/40 ${
                          isParentActive || open
                            ? "bg-pink-500/10 text-pink-500"
                            : "text-text-muted hover:bg-surfaceAlt hover:text-text"
                        }`}
                      >
                        <span>{item.label}</span>
                        <ChevronDownIcon
                          className={`h-5 w-5 transition-transform ${
                            open ? "rotate-180" : ""
                          }`}
                        />
                      </Popover.Button>

                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-1"
                      >
                        <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-screen max-w-xs -translate-x-1/2 transform px-4 sm:px-0">
                          <div className="overflow-hidden rounded-2xl shadow-lg ring-1 ring-black/5">
                          <div className="relative grid gap-2 bg-white p-3">
                            {item.children.map((child) => (
                              <Link
                                key={child.href}
                                href={child.href}
                                  className="flex flex-col rounded-lg p-3 transition hover:bg-surfaceAlt"
                                >
                                  <span className="font-semibold text-text">{child.label}</span>
                                  <span className="text-sm text-text-muted">{child.description}</span>
                                </Link>
                              ))}
                            </div>
                          </div>
                        </Popover.Panel>
                      </Transition>
                    </>
                  )}
                </Popover>
              </li>
            );
          }

          if (!("href" in item) || !item.href) {
            return null;
          }

          const isActive =
            item.href === "/"
              ? pathname === "/"
              : pathname === item.href || pathname.startsWith(`${item.href}/`);

          return (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={isActive ? "page" : undefined}
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
