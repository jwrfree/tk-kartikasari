import { cn } from "@/lib/utils";
import "@/app/globals.css";
import { Metadata, Viewport } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsappButton";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import { Analytics as VercelAnalytics } from "@vercel/analytics/react";
import siteData from "@/data/site.json";
import { createOrganizationJsonLd, createWebSiteJsonLd, createLocalBusinessJsonLd } from "@/lib/json-ld";
import { inter } from "@/app/fonts";

export const metadata: Metadata = {
  title: {
    default: siteData.schoolName,
    template: `%s - ${siteData.schoolName}`,
  },
  description: siteData.address,
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  verification: {
    google: "-b3idr9SWRK9EynFL2X3x6xdGWsu-7iVYZtDs0VkfEQ",
  },
};

export const viewport: Viewport = {
  themeColor: "#FFFFFF",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className={cn(inter.className, "antialiased")}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(createOrganizationJsonLd()) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(createWebSiteJsonLd()) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(createLocalBusinessJsonLd()) }}
        />
        
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />

        <GoogleAnalytics />
        <VercelAnalytics />
      </body>
    </html>
  );
}
