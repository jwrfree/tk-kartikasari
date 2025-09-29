
import type {
  BlogPosting,
  Organization,
  WebSite,
  EducationalOrganization,
} from "schema-dts";

import { fallbackContent } from "@/lib/fallback-content";
import type { OfficialProfile, SiteSettings } from "@/lib/types/site";

const DEFAULT_COORDINATES = {
  latitude: -7.538686670001884,
  longitude: 108.9757754284218,
};

const defaultSiteSettings = fallbackContent.siteSettings;
const defaultOfficialProfile = fallbackContent.about.officialProfile;

function resolveLogoUrl(siteSettings: SiteSettings) {
  return siteSettings.logoUrl ?? new URL("/logo.png", siteSettings.siteUrl).toString();
}

export function createOrganizationJsonLd(siteSettings: SiteSettings = defaultSiteSettings): Organization {
  return {
    "@type": "Organization",
    name: siteSettings.schoolName,
    url: siteSettings.siteUrl,
    logo: resolveLogoUrl(siteSettings),
    sameAs: siteSettings.socialLinks.map((link) => link.url),
  };
}

export function createWebSiteJsonLd(siteSettings: SiteSettings = defaultSiteSettings): WebSite {
  return {
    "@type": "WebSite",
    name: siteSettings.schoolName,
    url: siteSettings.siteUrl,
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteSettings.siteUrl}/search?q={search_term_string}`,
      query: "required name=search_term_string",
    },
  };
}

type LocalBusinessOptions = {
  siteSettings?: SiteSettings;
  officialProfile?: OfficialProfile;
  coordinates?: { latitude: number; longitude: number };
};

export function createLocalBusinessJsonLd({
  siteSettings = defaultSiteSettings,
  officialProfile = defaultOfficialProfile,
  coordinates = DEFAULT_COORDINATES,
}: LocalBusinessOptions = {}): EducationalOrganization {
  return {
    "@type": "School",
    name: siteSettings.schoolName,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteSettings.address,
      addressLocality: officialProfile.locationArea ?? "Bantarsari",
      addressRegion: "Cilacap",
      postalCode: "53258",
      addressCountry: "ID",
    },
    telephone: siteSettings.whatsapp,
    openingHours: siteSettings.openingHours,
    geo: {
      "@type": "GeoCoordinates",
      latitude: coordinates.latitude,
      longitude: coordinates.longitude,
    },
    url: siteSettings.siteUrl,
    logo: resolveLogoUrl(siteSettings),
    image: resolveLogoUrl(siteSettings),
  };
}

type CreateBlogPostingJsonLdOptions = {
  title: string;
  description: string;
  date: string;
  authorName: string;
  url: string;
};

export function createBlogPostingJsonLd({
  title,
  description,
  date,
  authorName,
  url,
}: CreateBlogPostingJsonLdOptions): BlogPosting {
  return {
    '@type': 'BlogPosting',
    headline: title,
    description,
    datePublished: date,
    author: {
      '@type': 'Person',
      name: authorName,
    },
    publisher: {
      '@type': 'Organization',
      name: defaultSiteSettings.schoolName,
      logo: {
        '@type': 'ImageObject',
        url: resolveLogoUrl(defaultSiteSettings),
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
  };
}
