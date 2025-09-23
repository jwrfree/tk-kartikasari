import type { Metadata } from "next";

import site from "@/data/site.json";

type MetadataOptions = {
  title: string;
  description: string;
  path: string;
};

export function createPageMetadata({ title, description, path }: MetadataOptions): Metadata {
  const url = new URL(path, site.siteUrl).toString();
  const fullTitle = `${title} | ${site.schoolName}`;

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
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
  };
}
