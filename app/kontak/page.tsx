import CTAButton from '@/components/CTAButton';
import PageHeader from '@/components/layout/PageHeader';
import PageSection from '@/components/layout/PageSection';
import MapEmbed from '@/components/MapEmbed';
import { Badge } from '@/components/ui/Badge';
import { CardSurface } from '@/components/ui/CardSurface';
import { FactRail } from '@/components/ui/FactRail';
import { createPageMetadata } from '@/lib/metadata';
import { getContactPageData } from '@/lib/sanity.queries';

const contactDescription =
  'Kami siap membantu informasi seputar PPDB, jadwal kunjungan sekolah, maupun kebutuhan administrasi lainnya. Gunakan detail di bawah ini atau langsung hubungi kami melalui WhatsApp.';

export async function generateMetadata() {
  const { siteSettings } = await getContactPageData();
  return createPageMetadata({
    title: 'Kontak',
    description: contactDescription,
    path: '/kontak',
    siteSettings,
  });
}

export default async function Page() {
  const { siteSettings } = await getContactPageData();

  return (
    <>
      <PageHeader
        eyebrow="Kontak"
        title="Hubungi sekolah dengan jalur yang jelas, lalu datang di waktu yang paling pas."
        description="Halaman ini merangkum siapa yang dihubungi, kapan sebaiknya datang, dan informasi apa yang sebaiknya disiapkan sebelum berkunjung."
      >
        <CTAButton ctaKey="contactConsultation" className="sm:w-auto" />
      </PageHeader>

      <PageSection padding="tight">
        <div className="editorial-grid items-start">
          <div className="space-y-5">
            <Badge tone="secondary" size="sm">
              Datang atau bertanya
            </Badge>
            <h2 className="max-w-[14ch] text-balance text-3xl font-semibold sm:text-4xl lg:text-[2.9rem]">
              Sebelum berkunjung, pastikan dulu tujuan Anda jelas: survei sekolah, tanya PPDB, atau urusan administrasi.
            </h2>
            <p className="max-w-2xl text-base leading-relaxed text-text-muted">
              Dengan begitu tim sekolah bisa menyiapkan waktu yang tepat, dan kunjungan Anda tidak terasa tergesa-gesa.
            </p>
            <CardSurface tone="gradient" padding="xl" className="space-y-4">
              <h3 className="text-2xl font-semibold">Sebelum datang</h3>
              <div className="space-y-3">
                <p className="text-sm leading-relaxed text-text-muted">
                  Kabari lebih dulu jika Anda ingin melihat suasana sekolah saat kegiatan berlangsung.
                </p>
                <p className="text-sm leading-relaxed text-text-muted">
                  Jika tujuan Anda soal PPDB, siapkan pertanyaan tentang kuota, jadwal kunjungan, dan dokumen dasar.
                </p>
                <p className="text-sm leading-relaxed text-text-muted">
                  Jika tujuan Anda administrasi, sampaikan lebih dulu dokumen apa yang perlu dibawa agar staf bisa
                  menyiapkan tindak lanjutnya.
                </p>
              </div>
            </CardSurface>
          </div>

          <FactRail
            eyebrow="Informasi sekolah"
            title="Detail yang biasanya dicatat lebih dulu sebelum keluarga menghubungi sekolah."
            items={[
              { label: 'Alamat', value: siteSettings.address },
              { label: 'WhatsApp', value: siteSettings.whatsapp },
              ...(siteSettings.email ? [{ label: 'Email', value: siteSettings.email }] : []),
              { label: 'Kepala sekolah', value: siteSettings.headmaster },
              { label: 'Jam buka', value: siteSettings.openingHours },
            ]}
            sticky
          />
        </div>
      </PageSection>

      <PageSection padding="relaxed" tone="muted">
        <div className="space-y-5">
          <div className="space-y-3">
            <Badge tone="secondary" size="sm">
              Peta lokasi
            </Badge>
            <h2 className="max-w-[14ch] text-balance text-3xl font-semibold sm:text-4xl">
              Gunakan peta ini untuk memastikan rute dan area sekitar sebelum berangkat.
            </h2>
          </div>
          <MapEmbed contentClassName="aspect-[16/8]" />
        </div>
      </PageSection>
    </>
  );
}
