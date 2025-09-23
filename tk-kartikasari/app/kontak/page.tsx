import CTAButton from "@/components/CTAButton";
import PageHeader from "@/components/layout/PageHeader";
import PageSection from "@/components/layout/PageSection";
import MapEmbed from "@/components/MapEmbed";
import { contactConsultationCTA } from "@/content/cta";
import site from "@/data/site.json";
import { createPageMetadata } from "@/lib/metadata";

const contactDescription =
  "Kami siap membantu informasi seputar PPDB, jadwal kunjungan sekolah, maupun kebutuhan administrasi lainnya. Gunakan detail di bawah ini atau langsung hubungi kami melalui WhatsApp.";

export const metadata = createPageMetadata({
  title: "Kontak",
  description: contactDescription,
  path: "/kontak",
});

const info = [
  { label: "Alamat", value: site.address },
  { label: "WhatsApp", value: site.whatsapp },
  { label: "Kepala Sekolah", value: site.headmaster },
  { label: "Jam Buka", value: site.openingHours },
];

export default function Page() {
  return (
    <>
      <PageHeader
        eyebrow="Kontak"
        title="Hubungi TK Kartikasari"
        description={contactDescription}
      />

      <PageSection padding="tight" containerClassName="grid gap-6 md:grid-cols-[1.1fr,0.9fr] md:items-start">
        <div className="card space-y-5 p-7">
          <h2 className="text-3xl font-semibold">Informasi Sekolah</h2>
          <ul className="space-y-4 text-base text-text">
            {info.map((item) => (
              <li key={item.label}>
                <p className="text-xs uppercase tracking-wide text-secondary">{item.label}</p>
                <p className="mt-1 text-lg font-medium">{item.value}</p>
              </li>
            ))}
          </ul>
          <div className="pt-2">
            <CTAButton config={contactConsultationCTA} className="w-full sm:w-auto" />
          </div>
        </div>
        <div className="card space-y-4 bg-secondary/5 p-7 text-base text-text-muted">
          <h3 className="text-xl font-semibold text-secondary">Cara Berkunjung</h3>
          <p>
            Silakan informasikan kedatangan Anda terlebih dahulu agar kami dapat menyiapkan guru pendamping. Parkir tersedia di
            halaman sekolah dan lingkungan sekitar.
          </p>
          <p>
            Untuk kebutuhan administrasi seperti legalisir rapor atau permohonan surat, mohon bawa fotokopi dokumen yang
            diperlukan.
          </p>
        </div>
      </PageSection>

      <PageSection padding="tight" containerClassName="space-y-4">
        <div>
          <h2 className="text-3xl font-semibold">Lokasi di Peta</h2>
          <p className="max-w-2xl text-base text-text-muted">
            Gunakan peta interaktif berikut untuk menentukan rute terbaik menuju TK Kartikasari di Bulaksari, Cilacap.
          </p>
        </div>
        <MapEmbed />
      </PageSection>
    </>
  );
}
