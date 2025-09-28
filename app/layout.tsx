
import { cn } from "@/lib/utils";
import "@/app/globals.css";
import { Metadata, Viewport } from "next";
import LayoutClient from "@/app/LayoutClient";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import { Analytics as VercelAnalytics } from "@vercel/analytics/react";
import { createOrganizationJsonLd, createWebSiteJsonLd, createLocalBusinessJsonLd } from "@/lib/json-ld";
import { inter } from "@/app/fonts";
import { fallbackContent } from "@/lib/fallback-content";
import { SiteDataProvider } from "@/app/providers/SiteDataProvider";
import { getGlobalSiteData } from "@/lib/sanity.queries";

const fallbackSite = fallbackContent.siteSettings;

export const metadata: Metadata = {
  title: {
    default: fallbackSite.schoolName,
    template: `%s - ${fallbackSite.schoolName}`,
  },
  description: fallbackSite.address,
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

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { siteSettings, navigation, ctas, officialProfile } = await getGlobalSiteData();

  return (
    <html lang="id" className="scroll-smooth">
      <body className={cn(inter.className, "antialiased")}> 
        <SiteDataProvider siteSettings={siteSettings} navigation={navigation} ctas={ctas}>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(createOrganizationJsonLd(siteSettings)) }}
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(createWebSiteJsonLd(siteSettings)) }}
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(
                createLocalBusinessJsonLd({ siteSettings, officialProfile }),
              ),
            }}
          />

          <LayoutClient>{children}</LayoutClient>

          <GoogleAnalytics />
          <VercelAnalytics />
        </SiteDataProvider>
      </body>
    </html>
  );
}
