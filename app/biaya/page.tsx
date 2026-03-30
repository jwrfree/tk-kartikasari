import Link from 'next/link';
import { Telephone } from 'react-bootstrap-icons';

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
      'Dapatkan informasi lengkap dan transparan mengenai rincian biaya pendidikan di TK Kartikasari, termasuk uang pangkal, SPP, dan opsi pembayaran yang fleksibel.',
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
        title="Biaya kami tampilkan sebagai gambaran awal supaya keluarga bisa menghitung dengan tenang."
        description="Di sini Anda bisa melihat komponen utama, estimasi tahun pertama, dan jalur bertanya jika membutuhkan angka terbaru."
      >
        <Button asChild variant="outline">
          <Link href="/kontak">Tanya biaya terbaru</Link>
        </Button>
      </PageHeader>

      <PageSection padding="tight">
        <div className="grid gap-5 lg:grid-cols-[1.1fr,0.9fr]">
          <CardSurface tone="gradient" padding="xl" className="space-y-4">
            <Badge tone="surface" size="sm">
              Catatan penting
            </Badge>
            <h2 className="max-w-[14ch] text-balance text-3xl font-semibold">
              Angka yang tampil dipakai untuk membantu perencanaan awal.
            </h2>
            <p className="max-w-3xl text-base leading-relaxed text-text-muted">
              Komponen yang tampil membantu keluarga memahami susunan biaya masuk dan tahun pertama. Angka resmi tetap
              mengikuti pembaruan administrasi sekolah.
            </p>
            <Button asChild>
              <a href="https://wa.me/6281234567890">
                <Telephone className="h-4 w-4" />
                Hubungi Admin PPDB
              </a>
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
              Jika butuh angka terbaru, tanyakan langsung sebelum mengambil keputusan.
            </h2>
            <p className="text-base leading-relaxed text-text-muted">
              Admin sekolah bisa membantu menjelaskan biaya terbaru, ketersediaan kuota, dan hal-hal yang relevan dengan
              situasi keluarga Anda.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button asChild>
                <Link href="/kontak">Hubungi sekolah</Link>
              </Button>
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
