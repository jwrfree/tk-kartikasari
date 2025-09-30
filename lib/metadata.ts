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

function normalizeDescription(description: string): string {
  const collapsedWhitespace = description.replace(/\s+/g, " ").trim();

  if (collapsedWhitespace.length <= 155) {
    return collapsedWhitespace;
  }

  const truncated = collapsedWhitespace.slice(0, 155);
  const lastSpace = truncated.lastIndexOf(" ");

  if (lastSpace === -1 || lastSpace < 120) {
    return `${truncated}…`;
  }

  return `${truncated.slice(0, lastSpace)}…`;
}

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
  const normalizedDescription = normalizeDescription(description);

  return {
    title,
    description: normalizedDescription,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: fullTitle,
      description: normalizedDescription,
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
      description: normalizedDescription,
      images: resolvedImage ? [resolvedImage] : undefined,
    },
  };
}
