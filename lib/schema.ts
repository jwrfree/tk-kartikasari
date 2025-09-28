import { fallbackContent } from "@/lib/fallback-content";
import type { OfficialProfile, SiteSettings } from "@/lib/types/site";

const defaultSiteSettings = fallbackContent.siteSettings;
const defaultOfficialProfile = fallbackContent.about.officialProfile;

type PreschoolSchemaOptions = {
  siteSettings?: SiteSettings;
  officialProfile?: OfficialProfile;
  coordinates?: { latitude: number; longitude: number };
};

export function preschoolSchema({
  siteSettings = defaultSiteSettings,
  officialProfile = defaultOfficialProfile,
  coordinates,
}: PreschoolSchemaOptions = {}) {
  const jsonLd: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Preschool",
    "@id": `${siteSettings.siteUrl}#organization`,
    name: siteSettings.schoolName,
    description:
      "Taman Kanak-kanak di Bulaksari, Bantarsari, Cilacap dengan lingkungan hangat dan kegiatan tematik.",
    url: siteSettings.siteUrl,
    telephone: siteSettings.whatsapp,
    hasMap: siteSettings.mapsUrl,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteSettings.address,
      addressLocality: officialProfile.locationArea ?? "Bantarsari",
      addressRegion: "Jawa Tengah",
      postalCode: "53258",
      addressCountry: "ID",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "07:00",
        closes: siteSettings.openingHours.includes("13") ? "13:00" : "13:00",
      },
    ],
  };

  if (coordinates) {
    jsonLd.geo = {
      "@type": "GeoCoordinates",
      latitude: coordinates.latitude,
      longitude: coordinates.longitude,
    };
  }

  return JSON.stringify(jsonLd);
}
