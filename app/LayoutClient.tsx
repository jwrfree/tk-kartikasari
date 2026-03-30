'use client';

import { usePathname } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsappButton';
import BackToTop from '@/components/ui/BackToTop';
import { useSiteData } from '@/app/providers/SiteDataProvider';
import { useState, useEffect } from 'react';

// SimpleFooter component for the login page
function SimpleFooter() {
  const { siteSettings } = useSiteData();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <footer className="border-t border-border/70 bg-surfaceAlt" aria-labelledby="footer-heading">
      <div className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
        <div className="pt-6">
          <p className="text-center text-xs leading-5 text-text-muted">
            &copy; {mounted ? new Date().getFullYear() : ''} {siteSettings.schoolName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default function LayoutClient({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isLoginPage = pathname === '/login';

  return (
    <>
      {!isLoginPage && <Header />}
      <main>{children}</main>
      {isLoginPage ? <SimpleFooter /> : <Footer />}
      {!isLoginPage && <WhatsAppButton />}
      {!isLoginPage && <BackToTop />}
    </>
  );
}
