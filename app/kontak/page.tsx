import Link from 'next/link';

import CTAButton from '@/components/CTAButton';
import PageHeader from '@/components/layout/PageHeader';
import PageSection from '@/components/layout/PageSection';
import MapEmbed from '@/components/MapEmbed';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { CardSurface } from '@/components/ui/CardSurface';
import { FactRail } from '@/components/ui/FactRail';
import { createPageMetadata } from '@/lib/metadata';
import { getContactPageData } from '@/lib/sanity.queries';

const contactDescription =
  'Gunakan halaman ini untuk menanyakan kuota, biaya terbaru, kelompok yang cocok, dan langkah pendaftaran TK Kartikasari langsung ke sekolah.';

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
  const whatsappNumber = siteSettings.whatsapp.startsWith('0') ? `62${siteSettings.whatsapp.slice(1)}` : siteSettings.whatsapp;
  const institutionalMessage = encodeURIComponent(
    'Halo, saya ingin menanyakan observasi, magang, atau studi banding ke TK Kartikasari. Berikut asal instansi dan tujuan kami.',
  );
  const institutionalWhatsappHref = `https://wa.me/${whatsappNumber}?text=${institutionalMessage}`;

  return (
    <>
      <PageHeader
        eyebrow="Kontak"
        title="Gunakan halaman ini untuk mulai membahas pendaftaran dengan sekolah."
        description="Hubungi sekolah untuk menanyakan kuota, kelompok yang sesuai, biaya terbaru, atau langkah administrasi. Jika memang diperlukan, kunjungan bisa dijadwalkan setelah itu."
      >
        <CTAButton ctaKey="contactConsultation" className="sm:w-auto" />
      </PageHeader>

      <PageSection padding="tight">
        <div className="editorial-grid items-start">
          <div className="space-y-5">
            <Badge tone="secondary" size="sm">
              Mulai percakapan
            </Badge>
            <h2 className="max-w-[14ch] text-balance text-3xl font-semibold sm:text-4xl lg:text-[2.9rem]">
              Mulailah dari hal yang paling penting: kuota, kecocokan anak, biaya awal, dan langkah daftar.
            </h2>
            <p className="max-w-2xl text-base leading-relaxed text-text-muted">
              Dengan percakapan awal seperti ini, Anda tidak perlu datang dalam keadaan bingung. Sekolah bisa membantu
              menjelaskan apakah cukup lewat chat, perlu kunjungan, atau sudah waktunya menyiapkan administrasi awal.
            </p>
            <CardSurface tone="gradient" padding="xl" className="space-y-4">
              <h3 className="text-2xl font-semibold">Sebelum chat</h3>
              <div className="space-y-3">
                <p className="text-sm leading-relaxed text-text-muted">
                  Sampaikan usia anak atau kelompok yang sedang Anda pertimbangkan agar sekolah bisa memberi jawaban yang
                  lebih relevan.
                </p>
                <p className="text-sm leading-relaxed text-text-muted">
                  Jika tujuan Anda soal PPDB, tanyakan dulu kuota, biaya terbaru, dan dokumen dasar yang sebaiknya
                  disiapkan.
                </p>
                <p className="text-sm leading-relaxed text-text-muted">
                  Jika setelah itu perlu melihat sekolah langsung, barulah kunjungan dijadwalkan di waktu yang paling
                  pas.
                </p>
              </div>
            </CardSurface>
          </div>

          <FactRail
            eyebrow="Informasi sekolah"
            title="Detail sekolah yang biasanya dicatat sebelum keluarga menghubungi admin."
            items={[
              { label: 'WhatsApp', value: siteSettings.whatsapp },
              { label: 'Kepala sekolah', value: siteSettings.headmaster },
              { label: 'Jam buka', value: siteSettings.openingHours },
              { label: 'Alamat', value: siteSettings.address },
              ...(siteSettings.email ? [{ label: 'Email', value: siteSettings.email }] : []),
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
              Peta tetap tersedia jika Anda perlu memastikan titik sekolah sebelum berangkat.
            </h2>
          </div>
          <MapEmbed contentClassName="aspect-[16/8]" />
        </div>
      </PageSection>

      <PageSection padding="relaxed">
        <div className="grid gap-5 md:grid-cols-[1.1fr,0.9fr]">
          <CardSurface tone="translucent" padding="xl" className="space-y-4">
            <Badge tone="secondary" size="sm">
              Keperluan institusional
            </Badge>
            <h2 className="max-w-[16ch] text-balance text-3xl font-semibold">
              Jika Anda datang dari kampus atau lembaga, gunakan jalur ini.
            </h2>
            <p className="max-w-2xl text-base leading-relaxed text-text-muted">
              Kirim pesan singkat berisi nama instansi, tujuan, jumlah peserta, dan usulan waktu. Jalur ini kami
              pisahkan agar pertanyaan PPDB dan kebutuhan observasi atau magang tidak tercampur.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button asChild>
                <a href={institutionalWhatsappHref} target="_blank" rel="noopener noreferrer">
                  Kirim via WhatsApp
                </a>
              </Button>
              {siteSettings.email ? (
                <Button asChild variant="outline">
                  <Link href={`mailto:${siteSettings.email}`}>Kirim via email</Link>
                </Button>
              ) : null}
            </div>
          </CardSurface>
          <CardSurface tone="soft" padding="xl" className="space-y-4">
            <h3 className="text-2xl font-semibold">Informasi yang sebaiknya dicantumkan</h3>
            <div className="space-y-3 text-sm leading-relaxed text-text-muted">
              <p>Nama instansi atau kampus.</p>
              <p>Tujuan kedatangan: observasi, magang, audit, atau studi banding.</p>
              <p>Perkiraan jumlah peserta dan waktu yang diusulkan.</p>
            </div>
          </CardSurface>
        </div>
      </PageSection>
    </>
  );
}
