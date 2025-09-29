
"use client";

import { usePathname } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsappButton";
import { useSiteData } from "@/app/providers/SiteDataProvider";

// SimpleFooter component for the login page
function SimpleFooter() {
  const { siteSettings } = useSiteData();
  return (
    <footer className="bg-gray-100" aria-labelledby="footer-heading">
      <div className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
        <div className="border-t border-gray-900/10 pt-8">
          <p className="text-xs leading-5 text-gray-500 text-center">
            &copy; {new Date().getFullYear()} {siteSettings.schoolName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default function LayoutClient({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isLoginPage = pathname === "/login";

  return (
    <>
      {!isLoginPage && <Header />}
      <main>{children}</main>
      {isLoginPage ? <SimpleFooter /> : <Footer />}
      {!isLoginPage && <WhatsAppButton />}
    </>
  );
}
