import MapEmbedClient from "./MapEmbedClient"
import site from "@/data/site.json"

const MAP_PREVIEW_IMAGE = {
  src: "/images/map-placeholder.svg",
  alt: "Pratinjau lokasi TK Kartikasari dalam peta",
} as const

export default function MapEmbed() {
  return (
    <div className="card overflow-hidden">
      <MapEmbedClient mapSrc={site.mapsUrl} previewImage={MAP_PREVIEW_IMAGE} />
    </div>
  )
}
