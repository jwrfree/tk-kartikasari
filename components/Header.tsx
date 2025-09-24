'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import site from '@/data/site.json';
import { waLink } from '@/lib/utils';
import DesktopNav from '@/components/DesktopNav';
import MobileNav from '@/components/MobileNav';
import MobileMenu from '@/components/MobileMenu';

export default function Header() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen((prev) => !prev);
  const closeMobileMenu = () => setMobileMenuOpen(false);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-white/40 bg-white/60 shadow-lg backdrop-blur-xl backdrop-saturate-150">
        <div className="container">
          <div className="relative flex w-full items-center gap-3 py-3 md:gap-5 md:py-4">
            <Link
              href="/"
              className="flex shrink-0 items-center gap-3 text-text transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/60 bg-white/70 shadow-soft backdrop-blur-sm">
                <img src={site.logo} alt="Logo TK Kartikasari" className="h-8 w-8 object-contain" />
              </span>
              <span className="flex min-w-0 flex-col leading-tight">
                <span className="truncate text-base font-semibold md:text-lg">{site.schoolName}</span>
                <span className="hidden text-xs text-text-muted sm:inline">Bulaksari, Bantarsari, Cilacap</span>
              </span>
            </Link>
            <DesktopNav />
            <div className="ml-auto flex flex-1 items-center justify-end gap-2 sm:gap-3 lg:ml-0 lg:flex-none">
              <Link
                href="/ppdb"
                className="hidden rounded-full border border-border/70 px-4 py-2 text-sm font-semibold text-text transition hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 md:inline-flex"
              >
                Info PPDB
              </Link>
              <a
                href={waLink('Halo Bu Mintarsih, saya ingin info PPDB TK Kartikasari.')}
                className="hidden rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white shadow-soft transition hover:brightness-[1.05] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 md:inline-flex"
              >
                Chat WhatsApp
              </a>
              <Link
                href="/ppdb"
                className="inline-flex items-center rounded-full border border-border/70 px-3 py-2 text-sm font-semibold text-text transition hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 md:hidden"
              >
                PPDB
              </Link>
              <MobileNav isOpen={isMobileMenuOpen} onToggle={toggleMobileMenu} />
            </div>
          </div>
        </div>
      </header>
      <MobileMenu isOpen={isMobileMenuOpen} onClose={closeMobileMenu} />
    </>
  );
}
