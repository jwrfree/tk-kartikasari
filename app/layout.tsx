
import { cn } from "@/lib/utils";
import "@/app/globals.css";
import { Metadata } from "next";
import Header from "@/components/Header";
import WhatsAppButton from "@/components/WhatsappButton";
import siteData from "@/data/site.json";

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
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
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
