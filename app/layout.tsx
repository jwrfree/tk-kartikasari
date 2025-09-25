
import { cn } from "@/lib/utils";
import "@/app/globals.css";
import { Metadata, Viewport } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsappButton";
import Analytics from "@/components/Analytics"; // Impor komponen Analytics
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
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  const organizationJsonLd = createOrganizationJsonLd();
  const webSiteJsonLd = createWebSiteJsonLd();
  const localBusinessJsonLd = createLocalBusinessJsonLd();

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
      </head>
      <body
        className={cn(
          "min-h-screen bg-surfaceAlt text-text font-sans antialiased",
          inter.variable
        )}
      >
        <Analytics /> {/* Tambahkan komponen Analytics di sini */}
        <div className="relative flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        <WhatsAppButton />
      </body>
    </html>
  );
}
