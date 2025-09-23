import site from "@/data/site.json";
import MapEmbed from "@/components/MapEmbed";
import CTAButton from "@/components/CTAButton";
export default function Page() {
  return (
    <div className="container py-8 space-y-4">
      <h1 className="text-2xl font-bold">Kontak</h1>
      <div className="card p-4">
        <p><strong>WhatsApp:</strong> {site.whatsapp} ({site.headmaster})</p>
        <p><strong>Alamat:</strong> {site.address}</p>
        <p><strong>Jam buka:</strong> {site.openingHours}</p>
        <div className="mt-3"><CTAButton /></div>
      </div>
      <MapEmbed />
    </div>
  )
}
