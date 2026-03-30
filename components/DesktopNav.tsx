'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Popover } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

import { useSiteData } from '@/app/providers/SiteDataProvider';
import { cn } from '@/lib/utils';

export default function DesktopNav() {
  const { navigation } = useSiteData();
  const pathname = usePathname();

  return (
    <nav aria-label="Menu utama" className="hidden flex-1 items-center justify-center lg:flex">
      <ul className="flex items-center gap-1">
        {navigation.map((item) => {
          if ('children' in item) {
            const isParentActive = item.children.some(
              (child) => pathname === child.href || pathname.startsWith(`${child.href}/`),
            );

            return (
              <li key={item.label}>
                <Popover className="relative">
                  {({ open, close }) => (
                    <>
                      <Popover.Button
                        className={cn(
                          'inline-flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium transition',
                          isParentActive || open
                            ? 'bg-secondary/12 text-secondary'
                            : 'text-foreground/70 hover:bg-surface hover:text-foreground',
                        )}
                      >
                        <span>{item.label}</span>
                        <ChevronDownIcon className={cn('h-4 w-4 transition-transform', open && 'rotate-180')} />
                      </Popover.Button>

                      <Popover.Panel className="absolute left-1/2 z-50 mt-4 w-[26rem] -translate-x-1/2">
                        <div className="card overflow-hidden p-2">
                          {item.children.map((child) => {
                            const isChildActive = pathname === child.href || pathname.startsWith(`${child.href}/`);
                            return (
                              <Link
                                key={child.href}
                                href={child.href}
                                onClick={() => close()}
                                className={cn(
                                  'flex flex-col rounded-[1.35rem] px-4 py-3 transition',
                                  isChildActive ? 'bg-primary/10 text-primary' : 'hover:bg-surface-alt',
                                )}
                              >
                                <span className="text-sm font-semibold">{child.label}</span>
                                {child.description ? (
                                  <span className="mt-1 text-sm leading-relaxed text-text-muted">
                                    {child.description}
                                  </span>
                                ) : null}
                              </Link>
                            );
                          })}
                        </div>
                      </Popover.Panel>
                    </>
                  )}
                </Popover>
              </li>
            );
          }

          if (!('href' in item) || !item.href) return null;

          const isActive =
            item.href === '/' ? pathname === '/' : pathname === item.href || pathname.startsWith(`${item.href}/`);

          return (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={isActive ? 'page' : undefined}
                className={cn(
                  'inline-flex rounded-full px-4 py-2 text-sm font-medium transition',
                  isActive ? 'bg-primary text-white' : 'text-foreground/70 hover:bg-surface hover:text-foreground',
                )}
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
