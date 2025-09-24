import React from "react";
import { createPageMetadata } from "@/lib/metadata";
import { aboutMetaDescription } from "@/content/about";
import AboutPageContent from "@/components/tentang/AboutPageContent";

export const metadata = createPageMetadata({
  title: "Tentang Kami",
  description: aboutMetaDescription,
  path: "/tentang",
});

export default function Page() {
  return <AboutPageContent />;
}
