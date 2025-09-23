import site from "@/data/site.json";
import MapEmbed from "@/components/MapEmbed";
import CTAButton from "@/components/CTAButton";
import { contactConsultationCTA } from "@/content/cta";

const info = [
  { label: "Alamat", value: site.address },
  { label: "WhatsApp", value: site.whatsapp },
  { label: "Kepala Sekolah", value: site.headmaster },
  { label: "Jam Buka", value: site.openingHours },
];

export default function Page() {
  return (
    <div className="container py-8 space-y-6">
      <header className="space-y-3">
        <p className="text-sm font-semibold uppercase tracking-wide text-secondary">Kontak</p>
        <h1 className="text-3xl font-bold sm:text-4xl">Hubungi TK Kartikasari</h1>
        <p className="max-w-2xl text-text-muted">
          Kami siap membantu informasi seputar PPDB, jadwal kunjungan sekolah, maupun kebutuhan administrasi lainnya. Gunakan
          detail di bawah ini atau langsung hubungi kami melalui WhatsApp.
        </p>
      </header>

      <section className="grid gap-4 md:grid-cols-[1.1fr,0.9fr] md:items-start">
        <div className="card p-6 space-y-4">
          <h2 className="text-2xl font-semibold">Informasi Sekolah</h2>
          <ul className="space-y-3 text-sm text-text">
            {info.map((item) => (
              <li key={item.label}>
                <p className="text-xs uppercase tracking-wide text-secondary">{item.label}</p>
                <p className="mt-1 text-base font-medium">{item.value}</p>
              </li>
            ))}
          </ul>
          <div className="pt-2">
            <CTAButton config={contactConsultationCTA} className="w-full sm:w-auto" />
          </div>
        </div>
        <div className="card p-6 space-y-3 bg-secondary/5 text-sm text-text-muted">
          <h3 className="text-lg font-semibold text-secondary">Cara Berkunjung</h3>
          <p>
            Silakan informasikan kedatangan Anda terlebih dahulu agar kami dapat menyiapkan guru pendamping. Parkir tersedia di
            halaman sekolah dan lingkungan sekitar.
          </p>
          <p>
            Untuk kebutuhan administrasi seperti legalisir rapor atau permohonan surat, mohon bawa fotokopi dokumen yang
            diperlukan.
          </p>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">Lokasi di Peta</h2>
        <p className="max-w-2xl text-sm text-text-muted">
          Gunakan peta interaktif berikut untuk menentukan rute terbaik menuju TK Kartikasari di Bulaksari, Cilacap.
        </p>
        <MapEmbed />
      </section>
    </div>
  );
}
