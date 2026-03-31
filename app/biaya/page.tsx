import Link from 'next/link';
import { Telephone } from 'react-bootstrap-icons';

import CTAButton from '@/components/CTAButton';
import PageHeader from '@/components/layout/PageHeader';
import PageSection from '@/components/layout/PageSection';
import BiayaClientComponent from './BiayaClientComponent';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { CardSurface } from '@/components/ui/CardSurface';
import { FactRail } from '@/components/ui/FactRail';
import { createPageMetadata } from '@/lib/metadata';
import { getBiayaPageData } from '@/lib/sanity.queries';

export async function generateMetadata() {
  const { siteSettings } = await getBiayaPageData();
  return createPageMetadata({
    title: 'Rincian Biaya',
    description:
      'Lihat gambaran biaya TK Kartikasari, pahami komponen utamanya, lalu konfirmasi angka terbaru dan langkah pendaftaran ke sekolah.',
    path: '/biaya',
    siteSettings,
  });
}

export default async function BiayaPage() {
  const { biaya } = await getBiayaPageData();
  const temporaryLabelMap: Record<string, string> = {
    'Uang Pangkal': 'Uang Pangkal (Skema)',
    'SPP Bulan Juli': 'SPP Bulan Juli (Estimasi)',
    'Paket Seragam': 'Paket Seragam (Estimasi)',
    'Biaya Kegiatan Tahunan': 'Biaya Kegiatan Tahunan (Estimasi)',
  };

  const biayaPokok = biaya.costStructure
    .filter((item) => item.includedInCalculator)
    .map((item) => ({
      name: temporaryLabelMap[item.name] ?? `${item.name} (Estimasi)`,
      amount: item.amount,
      description: item.description,
      category: item.type === 'per bulan' ? 'bulanan' : item.type,
    }));

  return (
    <>
      <PageHeader
        eyebrow="Biaya"
        title="Lihat gambaran biaya dulu, lalu konfirmasi angka terbaru sebelum mendaftar."
        description="Halaman ini membantu keluarga memahami komponen utama dan estimasi tahun pertama. Untuk angka terbaru, kuota, atau langkah yang paling relevan, lanjutkan ke admin sekolah."
      >
        <CTAButton ctaKey="contactConsultation" className="sm:w-auto" />
      </PageHeader>

      <PageSection padding="tight">
        <div className="grid gap-5 lg:grid-cols-[1.1fr,0.9fr]">
          <CardSurface tone="gradient" padding="xl" className="space-y-4">
            <Badge tone="surface" size="sm">
              Sebelum bertanya
            </Badge>
            <h2 className="max-w-[14ch] text-balance text-3xl font-semibold">
              Angka di halaman ini dipakai untuk gambaran awal, bukan keputusan akhir.
            </h2>
            <p className="max-w-3xl text-base leading-relaxed text-text-muted">
              Gunakan halaman ini untuk memahami susunan biaya masuk dan tahun pertama. Setelah itu, konfirmasi angka
              terbaru dan kaitannya dengan status kuota langsung ke sekolah.
            </p>
            <Button asChild variant="outline">
              <Link href="/ppdb">
                <Telephone className="h-4 w-4" />
                Lihat langkah PPDB
              </Link>
            </Button>
          </CardSurface>

          <FactRail
            eyebrow="Yang perlu diketahui"
            title="Empat hal yang sebaiknya dipahami sebelum menghitung."
            items={[
              {
                label: 'Jenis angka',
                value: 'Estimasi',
                description: 'Belum menjadi keputusan final tahun ajaran berjalan.',
              },
              {
                label: 'Cakupan',
                value: 'Tahun pertama',
                description: 'Kalkulator membantu melihat gambaran awal biaya masuk dan biaya berjalan.',
              },
              {
                label: 'Konfirmasi',
                value: 'Lewat admin',
                description: 'Jika perlu angka terbaru atau skema pembayaran, keluarga bisa bertanya langsung.',
              },
              {
                label: 'CTA',
                value: 'Hubungi admin',
                description:
                  'Jalur komunikasinya langsung ke sekolah, bukan ke formulir yang tidak jelas tindak lanjutnya.',
              },
            ]}
            sticky
          />
        </div>
      </PageSection>

      <PageSection padding="relaxed">
        <BiayaClientComponent biayaPokok={biayaPokok} />
      </PageSection>

      <PageSection padding="relaxed" tone="muted">
        <div className="grid gap-5 md:grid-cols-2">
          <CardSurface tone="translucent" padding="xl" className="space-y-4">
            <Badge tone="secondary" size="sm">
              Panduan keluarga
            </Badge>
            <h2 className="max-w-[14ch] text-balance text-3xl font-semibold">
              Bacalah biaya bersama konteksnya, bukan sebagai angka yang berdiri sendiri.
            </h2>
            <p className="text-base leading-relaxed text-text-muted">
              Yang penting bukan hanya totalnya, tetapi juga apa saja komponennya, mana yang perlu dikonfirmasi, dan
              kapan sebaiknya bertanya lebih lanjut.
            </p>
          </CardSurface>
          <CardSurface tone="soft" padding="xl" className="space-y-4">
            <Badge tone="secondary" size="sm">
              Langkah berikutnya
            </Badge>
            <h2 className="max-w-[14ch] text-balance text-3xl font-semibold">
              Jika angkanya sudah masuk akal, lanjutkan ke admin untuk bahas kuota dan langkah daftar.
            </h2>
            <p className="text-base leading-relaxed text-text-muted">
              Admin sekolah bisa membantu menjelaskan angka terbaru, ketersediaan kuota, dan langkah administrasi yang
              paling relevan dengan situasi keluarga Anda.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <CTAButton ctaKey="contactConsultation" className="w-full sm:w-auto" />
              <Button asChild variant="outline">
                <Link href="/ppdb">Lihat halaman PPDB</Link>
              </Button>
            </div>
          </CardSurface>
        </div>
      </PageSection>
    </>
  );
}
