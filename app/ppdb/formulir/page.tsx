import Link from 'next/link';
import { Whatsapp } from 'react-bootstrap-icons';

import PageHeader from '@/components/layout/PageHeader';
import PageSection from '@/components/layout/PageSection';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { CardSurface } from '@/components/ui/CardSurface';
import { FactRail } from '@/components/ui/FactRail';
import { createPageMetadata } from '@/lib/metadata';
import { getGlobalSiteData } from '@/lib/sanity.queries';

const pageDescription =
  'Gunakan jalur WhatsApp untuk menanyakan status kuota, menjadwalkan kunjungan, atau meminta langkah pendaftaran berikutnya.';

function normalizeWhatsappNumber(value: string) {
  return value.replace(/[^0-9]/g, '');
}

export async function generateMetadata() {
  const { siteSettings } = await getGlobalSiteData();
  return createPageMetadata({
    title: 'Formulir PPDB',
    description: pageDescription,
    path: '/ppdb/formulir',
    siteSettings,
  });
}

export default async function PpdbFormPage() {
  const { siteSettings } = await getGlobalSiteData();
  const whatsappNumber = normalizeWhatsappNumber(siteSettings.whatsapp);
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  return (
    <>
      <PageHeader
        eyebrow="Formulir PPDB"
        title="Mulai dari percakapan yang jelas sebelum mengisi atau mengirim berkas."
        description={pageDescription}
      />

      <PageSection padding="relaxed">
        <div className="editorial-grid items-start">
          <CardSurface tone="gradient" padding="xl" className="space-y-5">
            <Badge tone="surface" size="sm">
              Langkah cepat
            </Badge>
            <h2 className="max-w-[14ch] text-balance text-3xl font-semibold">Hubungi admin PPDB via WhatsApp.</h2>
            <p className="max-w-2xl text-base leading-relaxed text-text-muted">
              Anda bisa menanyakan kuota, jadwal kunjungan, daftar tunggu, atau dokumen awal yang sebaiknya disiapkan.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button asChild>
                <Link href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <Whatsapp className="h-5 w-5" />
                  Chat via WhatsApp
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/ppdb">Kembali ke halaman PPDB</Link>
              </Button>
            </div>
          </CardSurface>

          <FactRail
            eyebrow="Sebelum chat"
            title="Tiga hal yang sebaiknya sudah Anda siapkan."
            items={[
              {
                label: 'Status yang ingin dicek',
                value: 'Kuota atau waitlist',
                description: 'Supaya admin bisa langsung memberi jawaban yang relevan.',
              },
              {
                label: 'Tujuan',
                value: 'Kunjungan atau pendaftaran',
                description: 'Jelaskan apakah Anda ingin survei dulu atau siap melanjutkan proses.',
              },
              {
                label: 'Dokumen awal',
                value: 'Data dasar keluarga',
                description: 'Akta lahir, KK, dan identitas orang tua biasanya cukup untuk memulai percakapan.',
              },
            ]}
            sticky
          />
        </div>
      </PageSection>
    </>
  );
}
