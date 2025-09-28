import React from "react";
import { createPageMetadata } from "@/lib/metadata";
import AboutPageContent from "@/components/tentang/AboutPageContent";
import { getAboutPageData } from "@/lib/sanity.queries";
import { fallbackContent } from "@/lib/fallback-content";

const fallbackDescription = fallbackContent.about.mission[0] ?? fallbackContent.home.heroDescription;

export async function generateMetadata() {
  const { about, siteSettings } = await getAboutPageData();
  return createPageMetadata({
    title: "Tentang Kami",
    description: about.mission[0] ?? fallbackDescription,
    path: "/tentang",
    siteSettings,
  });
}

export default async function Page() {
  const { about, teachers, siteSettings } = await getAboutPageData();

  return (
    <AboutPageContent
      mission={about.mission}
      milestones={about.milestones}
      officialProfile={about.officialProfile}
      siteSettings={siteSettings}
      teachers={teachers}
    />
  );
}
