import type { Metadata } from "next";

import { fallbackContent } from "@/lib/fallback-content";
import type { SiteSettings } from "@/lib/types/site";

type MetadataOptions = {
  title: string;
  description: string;
  path: string;
  image?: string | null;
  siteSettings?: SiteSettings;
};

const defaultSiteSettings = fallbackContent.siteSettings;

export function createPageMetadata({
  title,
  description,
  path,
  image,
  siteSettings = defaultSiteSettings,
}: MetadataOptions): Metadata {
  const url = new URL(path, siteSettings.siteUrl).toString();
  const fullTitle = `${title} | ${siteSettings.schoolName}`;
  const resolvedImage = image ? new URL(image, siteSettings.siteUrl).toString() : undefined;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: siteSettings.schoolName,
      type: "website",
      locale: "id_ID",
      images: resolvedImage
        ? [
            {
              url: resolvedImage,
              alt: title,
            },
          ]
        : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: resolvedImage ? [resolvedImage] : undefined,
    },
  };
}
