
import { cn } from "@/lib/utils";
import "@/app/globals.css";
import { Metadata } from "next";
import Header from "@/components/Header";
import WhatsAppButton from "@/components/WhatsappButton";
import siteData from "@/data/site.json";
import { createOrganizationJsonLd, createWebSiteJsonLd, createLocalBusinessJsonLd } from "@/lib/json-ld";

export const metadata: Metadata = {
  title: {
    default: siteData.schoolName,
    template: `%s - ${siteData.schoolName}`,
  },
  description: siteData.address,
  themeColor: [
    {
      media: "(prefers-color-scheme: light)",
      color: "white",
    },
    {
      media: "(prefers-color-scheme: dark)",
      color: "black",
    },
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
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
          "min-h-screen bg-background font-sans antialiased",
        )}
      >
        <div className="relative flex min-h-screen flex-col">
          <Header />
          <div className="flex-1">{children}</div>
        </div>
        <WhatsAppButton />
      </body>
    </html>
  );
}
