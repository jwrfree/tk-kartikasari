import CTAButton from "@/components/CTAButton";
import PageHeader from "@/components/layout/PageHeader";
import PageSection from "@/components/layout/PageSection";
import MapEmbed from "@/components/MapEmbed";
import { CardSurface } from "@/components/ui/CardSurface";
import { Badge } from "@/components/ui/Badge";
import { createPageMetadata } from "@/lib/metadata";
import { getContactPageData } from "@/lib/sanity.queries";

const contactDescription =
  "Kami siap membantu informasi seputar PPDB, jadwal kunjungan sekolah, maupun kebutuhan administrasi lainnya. Gunakan detail di bawah ini atau langsung hubungi kami melalui WhatsApp.";

export async function generateMetadata() {
  const { siteSettings } = await getContactPageData();
  return createPageMetadata({
    title: "Kontak",
    description: contactDescription,
    path: "/kontak",
    siteSettings,
  });
}

export default async function Page() {
  const { siteSettings } = await getContactPageData();
  const info = [
    { label: "Alamat", value: siteSettings.address },
    { label: "WhatsApp", value: siteSettings.whatsapp },
    siteSettings.email ? { label: "Email", value: siteSettings.email } : null,
    { label: "Kepala Sekolah", value: siteSettings.headmaster },
    { label: "Jam Buka", value: siteSettings.openingHours },
  ].filter(Boolean) as { label: string; value: string }[];

  return (
    <>
      <PageHeader
        eyebrow="Kontak"
        title="Hubungi TK Kartikasari"
        description={contactDescription}
      />

      <PageSection padding="tight" containerClassName="grid gap-6 md:grid-cols-[1.1fr,0.9fr] md:items-start">
        <CardSurface tone="translucent" padding="xl" className="space-y-5">
          <h2 className="text-3xl font-semibold">Informasi Sekolah</h2>
          <ul className="space-y-4 text-base text-text">
            {info.map((item) => (
              <li key={item.label}>
                <Badge tone="secondary" size="sm" className="uppercase tracking-wide text-secondary">
                  {item.label}
                </Badge>
                <p className="mt-2 text-lg font-medium">{item.value}</p>
              </li>
            ))}
          </ul>
          <div className="pt-2">
            <CTAButton ctaKey="contactConsultation" className="w-full sm:w-auto" />
          </div>
        </CardSurface>
        <CardSurface tone="soft" padding="xl" className="space-y-4 text-base text-text-muted">
          <h3 className="text-xl font-semibold text-secondary">Cara Berkunjung</h3>
          <p>
            Silakan informasikan kedatangan Anda terlebih dahulu agar kami dapat menyiapkan guru pendamping. Parkir tersedia di
            halaman sekolah dan lingkungan sekitar.
          </p>
          <p>
            Untuk kebutuhan administrasi seperti legalisir rapor atau permohonan surat, mohon bawa fotokopi dokumen yang
            diperlukan.
          </p>
        </CardSurface>
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
