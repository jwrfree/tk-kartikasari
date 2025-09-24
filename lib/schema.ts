import site from "@/data/site.json";

export function preschoolSchema(lat?: number, lng?: number) {
  const jsonLd: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Preschool",
    "@id": `${site.siteUrl}#organization`,
    name: site.schoolName,
    description:
      "Taman Kanak-kanak di Bulaksari, Bantarsari, Cilacap dengan lingkungan hangat dan kegiatan tematik.",
    url: site.siteUrl,
    telephone: site.whatsapp,
    hasMap: site.mapsUrl,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address,
      addressLocality: "Bantarsari",
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
        closes: "13:00",
      },
    ],
  };

  if (lat && lng) {
    jsonLd.geo = {
      "@type": "GeoCoordinates",
      latitude: lat,
      longitude: lng,
    };
  }

  return JSON.stringify(jsonLd);
}
