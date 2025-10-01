"use client"

import MapEmbedClient from "./MapEmbedClient"
import { useSiteData } from "@/app/providers/SiteDataProvider"
import { cn } from "@/lib/utils"

const MAP_PREVIEW_IMAGE = {
  src: "/images/map-placeholder.svg",
  alt: "Pratinjau lokasi TK Kartikasari dalam peta",
} as const

type MapEmbedProps = {
  className?: string
  contentClassName?: string
  variant?: "card" | "plain"
}

export default function MapEmbed({ className, contentClassName, variant = "card" }: MapEmbedProps = {}) {
  const { siteSettings } = useSiteData();
  const wrapperClassName = cn(
    variant === "card" ? "card overflow-hidden" : "overflow-hidden",
    className,
  )

  return (
    <div className={wrapperClassName}>
      <MapEmbedClient
        className={contentClassName}
        mapSrc={siteSettings.mapsUrl}
        previewImage={MAP_PREVIEW_IMAGE}
      />
    </div>
  )
}
