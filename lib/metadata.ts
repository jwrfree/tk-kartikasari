import type { Metadata } from "next";

import site from "@/data/site.json";

type MetadataOptions = {
  title: string;
  description: string;
  path: string;
  image?: string | null;
};

export function createPageMetadata({ title, description, path, image }: MetadataOptions): Metadata {
  const url = new URL(path, site.siteUrl).toString();
  const fullTitle = `${title} | ${site.schoolName}`;
  const resolvedImage = image ? new URL(image, site.siteUrl).toString() : undefined;

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
      siteName: site.schoolName,
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
