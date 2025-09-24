import site from '@/data/site.json'
export default function MapEmbed() {
  return (
    <div className="card overflow-hidden">
      <iframe
        src={site.mapsUrl}
        className="w-full h-[320px]"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Lokasi TK Kartikasari"
        aria-label="Lokasi TK Kartikasari"
      />
    </div>
  )
}
