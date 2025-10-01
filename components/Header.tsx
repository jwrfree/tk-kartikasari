
'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import DesktopNav from '@/components/DesktopNav';
import MobileNav from '@/components/MobileNav';
import MobileMenu from '@/components/MobileMenu';
import { useSiteData } from '@/app/providers/SiteDataProvider';

export default function Header() {
  const { siteSettings } = useSiteData();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const tagline = siteSettings.tagline?.trim() || 'PAUD hangat di Bantarsari, Cilacap.';

  const toggleMobileMenu = () => setMobileMenuOpen((prev) => !prev);
  const closeMobileMenu = () => setMobileMenuOpen(false);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled && !isMobileMenuOpen
            ? 'border-b border-white/40 bg-white/60 shadow-lg backdrop-blur-xl backdrop-saturate-150'
            : 'border-b border-transparent'
        }`}
      >
        <div className="container">
          <div className="relative flex w-full items-center gap-3 py-3 md:gap-5 md:py-4">
            <Link
              href="/"
              /* UPDATED: Changed focus ring to match new pink theme */
              className="flex shrink-0 items-center gap-3 text-text transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-500/40"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/60 bg-white/70 shadow-soft backdrop-blur-sm">
                <Image
                  src={siteSettings.logoUrl ?? '/logo-minimal-full.png'}
                  alt={`Logo ${siteSettings.schoolName}`}
                  width={32}
                  height={32}
                  className="h-8 w-8 object-contain"
                  priority
                />
              </span>
              <span className="flex min-w-0 flex-col leading-tight">
                <span className="truncate text-base font-semibold md:text-lg">{siteSettings.schoolName}</span>
                <span
                  className="hidden text-xs text-text-muted sm:block sm:text-sm"
                  title={siteSettings.address}
                >
                  {tagline}
                </span>
              </span>
            </Link>
            <DesktopNav />
            <div className="ml-auto flex flex-1 items-center justify-end gap-2 sm:gap-3 lg:ml-0 lg:flex-none">
              {/* --- FINAL HEADER CLEANUP --- */}
              {/* Semua tombol CTA telah dihapus dari header, karena sudah ditangani oleh FAB WhatsApp dan item navigasi. */}
              
              <MobileNav isOpen={isMobileMenuOpen} onToggle={toggleMobileMenu} />
            </div>
          </div>
        </div>
      </header>
      <MobileMenu isOpen={isMobileMenuOpen} onClose={closeMobileMenu} />
    </>
  );
}
