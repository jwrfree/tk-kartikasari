"use client"

import MapEmbedClient from "./MapEmbedClient"
import { useSiteData } from "@/app/providers/SiteDataProvider"

const MAP_PREVIEW_IMAGE = {
  src: "/images/map-placeholder.svg",
  alt: "Pratinjau lokasi TK Kartikasari dalam peta",
} as const

export default function MapEmbed() {
  const { siteSettings } = useSiteData();
  return (
    <div className="card overflow-hidden">
      <MapEmbedClient mapSrc={siteSettings.mapsUrl} previewImage={MAP_PREVIEW_IMAGE} />
    </div>
  )
}
