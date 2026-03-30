'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { cn } from '@/lib/utils';
import DesktopNav from '@/components/DesktopNav';
import MobileNav from '@/components/MobileNav';
import MobileMenu from '@/components/MobileMenu';
import { useSiteData } from '@/app/providers/SiteDataProvider';
import { Button } from '@/components/ui/Button';

export default function Header() {
  const { siteSettings } = useSiteData();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-40 px-4 pt-4 sm:px-6">
        <div
          className={cn(
            'mx-auto flex max-w-7xl items-center gap-4 rounded-full border px-4 py-3 transition duration-300 sm:px-5',
            scrolled
              ? 'border-border/70 bg-background/90 shadow-soft backdrop-blur-md'
              : 'border-transparent bg-transparent',
          )}
        >
          <Link href="/" className="flex min-w-0 items-center gap-3">
            <div className="relative flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-full border border-border/70 bg-surface">
              <Image
                src={siteSettings.logoUrl || '/logo-minimal-full.png'}
                alt={`Logo ${siteSettings.schoolName}`}
                fill
                className="object-contain p-2"
                priority
              />
            </div>
            <div className="min-w-0">
              <p className="truncate font-display text-xl leading-none text-foreground sm:text-2xl">TK Kartikasari</p>
              <p className="mt-1 truncate text-[0.68rem] font-medium uppercase tracking-[0.24em] text-text-muted sm:text-[0.72rem]">
                Rumah kedua untuk belajar bertumbuh
              </p>
            </div>
          </Link>

          <DesktopNav />

          <div className="ml-auto flex items-center gap-3">
            <Button asChild className="hidden lg:inline-flex">
              <Link href="/ppdb">Lihat PPDB</Link>
            </Button>
            <MobileNav isOpen={isMobileMenuOpen} onToggle={() => setMobileMenuOpen((current) => !current)} />
          </div>
        </div>
      </header>
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </>
  );
}
