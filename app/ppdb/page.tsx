import Link from 'next/link';

import PageHeader from '@/components/layout/PageHeader';
import PageSection from '@/components/layout/PageSection';
import FaqAccordion from '@/components/FaqAccordion';
import TestimonialList from '@/components/TestimonialList';
import { getPpdbPageData } from '@/lib/sanity.queries';
import { createPageMetadata } from '@/lib/metadata';
import { fallbackContent } from '@/lib/fallback-content';
import { ppdbFaqs, ppdbMetaDescription, syaratDanKetentuan } from '@/content/ppdb';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { CardSurface } from '@/components/ui/CardSurface';
import { FactRail } from '@/components/ui/FactRail';
import { StatusPanel } from '@/components/ui/StatusPanel';
import { formatRupiah } from '@/utils/currency';

export async function generateMetadata() {
  const { siteSettings } = await getPpdbPageData();
  return createPageMetadata({
    title: 'PPDB',
    description: ppdbMetaDescription,
    path: '/ppdb',
    siteSettings,
  });
}

export default async function PpdbPage() {
  const { ppdb, biaya, testimonials } = await getPpdbPageData();
  const timeline = ppdb.timeline.length > 0 ? ppdb.timeline : fallbackContent.ppdb.timeline;
  const requirements = syaratDanKetentuan;
  const faqs = ppdbFaqs;
  const strukturBiaya = biaya.costStructure
    .filter((item) => item.includedInCalculator)
    .map((item) => ({
      nama: item.name,
      jumlah: item.amount,
      deskripsi: item.description,
    }));

  return (
    <>
      <PageHeader
        eyebrow="PPDB"
        title="Status pendaftaran, syarat, dan langkah berikutnya harus bisa dipahami tanpa telepon dulu."
        description="Keluarga bisa langsung melihat apakah pendaftaran masih dibuka, dokumen apa yang perlu disiapkan, dan ke mana harus bertanya."
      />

      <PageSection padding="tight">
        <StatusPanel
          state="closed"
          title="PPDB 2025/2026 sudah ditutup karena kuota penuh."
          description={
            <>
              Seluruh kursi untuk tahun ajaran 2025/2026 telah terisi per <strong>5 Juli 2025</strong>. Keluarga yang
              masih berminat dapat menghubungi admin untuk masuk daftar tunggu atau meminta notifikasi saat informasi
              PPDB <strong>2026/2027</strong> diumumkan.
            </>
          }
          action={
            <Button asChild>
              <Link href="/kontak">Hubungi Admin PPDB</Link>
            </Button>
          }
        />
      </PageSection>

      <PageSection padding="relaxed">
        <div className="editorial-grid items-start">
          <div className="space-y-6">
            <Badge tone="secondary" size="sm">
              Alur operasional
            </Badge>
            <h2 className="max-w-[14ch] text-balance text-3xl font-semibold sm:text-4xl lg:text-[2.9rem]">
              Kalau cocok, jalurnya sederhana: tanya kuota, datang, lalu lengkapi administrasi.
            </h2>
            <p className="max-w-2xl text-base leading-relaxed text-text-muted">
              Urutan ini membantu keluarga bergerak dengan tenang. Anda tidak perlu mengumpulkan berkas terlalu awal
              atau datang tanpa tahu apa yang ingin dilihat.
            </p>
            <div className="space-y-4">
              {[
                {
                  title: 'Tanya status dan kuota',
                  description:
                    'Hubungi admin via WhatsApp untuk memastikan periode, daftar tunggu, atau jadwal kunjungan terdekat.',
                },
                {
                  title: 'Datang dan lihat sekolah',
                  description: 'Lihat suasana kelas, temui guru, dan nilai apakah ritme sekolah cocok untuk anak.',
                },
                {
                  title: 'Lengkapi administrasi',
                  description: 'Jika sudah cocok, siapkan dokumen dasar dan lanjutkan ke tahap administrasi.',
                },
              ].map((step, index) => (
                <div
                  key={step.title}
                  className="grid gap-4 border-t border-border/70 py-5 first:border-t-0 first:pt-0 sm:grid-cols-[70px,1fr]"
                >
                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-secondary">Langkah {index + 1}</p>
                    <p className="font-display text-4xl leading-none text-primary">0{index + 1}</p>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold">{step.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-text-muted">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <FactRail
            eyebrow="Yang perlu disiapkan"
            title="Empat hal yang sebaiknya sudah jelas sebelum bergerak."
            items={[
              {
                label: 'Status',
                value: 'Closed / waitlist',
                description: 'Anda langsung tahu apakah masih bisa daftar atau harus masuk daftar tunggu.',
              },
              {
                label: 'Dokumen',
                value: `${requirements.length}+ item`,
                description: 'Siapkan dokumen dasarnya dulu, sisanya bisa dikonfirmasi sambil berjalan.',
              },
              {
                label: 'Biaya',
                value: 'Ringkasan tersedia',
                description: 'Komponen inti bisa dilihat tanpa harus membuka simulasi panjang lebih dulu.',
              },
              {
                label: 'Kontak',
                value: 'Admin sekolah',
                description: 'Jika ada hal yang belum jelas, jalur bertanyanya langsung terlihat.',
              },
            ]}
            sticky
          />
        </div>
      </PageSection>

      <PageSection padding="relaxed" tone="muted">
        <div className="grid gap-5 lg:grid-cols-[1fr,1fr]">
          <CardSurface tone="translucent" padding="xl" className="space-y-5">
            <div className="space-y-3">
              <Badge tone="secondary" size="sm">
                Checklist dokumen
              </Badge>
              <h2 className="max-w-[14ch] text-balance text-3xl font-semibold">
                Sebelum datang, siapkan dokumen dasarnya dulu.
              </h2>
            </div>
            <div className="grid gap-3">
              {requirements.map((syarat) => (
                <div key={syarat.title} className="rounded-[1.35rem] border border-border/60 bg-white/60 px-4 py-4">
                  <p className="text-sm font-semibold text-foreground">{syarat.title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-text-muted">{syarat.description}</p>
                </div>
              ))}
            </div>
          </CardSurface>

          <CardSurface tone="soft" padding="xl" className="space-y-5">
            <div className="space-y-3">
              <Badge tone="secondary" size="sm">
                Timeline periode sebelumnya
              </Badge>
              <h2 className="max-w-[14ch] text-balance text-3xl font-semibold">
                Kalender periode sebelumnya tetap berguna untuk membaca polanya.
              </h2>
            </div>
            <div className="space-y-4">
              {timeline.map((item) => (
                <div
                  key={`${item.date}-${item.title}`}
                  className="grid gap-2 border-t border-border/60 pt-4 first:border-t-0 first:pt-0 sm:grid-cols-[140px,1fr]"
                >
                  <p className="text-sm font-semibold text-secondary">{item.date}</p>
                  <div>
                    <p className="text-base font-semibold text-foreground">{item.title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-text-muted">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardSurface>
        </div>
      </PageSection>

      <PageSection padding="relaxed">
        <div className="editorial-grid items-start">
          <div className="space-y-4">
            <Badge tone="secondary" size="sm">
              Ringkasan biaya
            </Badge>
            <h2 className="max-w-[14ch] text-balance text-3xl font-semibold sm:text-4xl">
              Lihat komponen biaya inti, lalu lanjutkan ke simulasi bila perlu.
            </h2>
            <p className="max-w-2xl text-base leading-relaxed text-text-muted">
              Banyak keluarga hanya perlu tahu gambaran awalnya dulu. Jika ingin menghitung lebih detail, Anda bisa
              lanjut ke halaman biaya.
            </p>
            <Button asChild variant="outline">
              <Link href="/biaya">Buka halaman biaya lengkap</Link>
            </Button>
          </div>

          <CardSurface tone="translucent" padding="xl" className="space-y-4">
            {strukturBiaya.map((item) => (
              <div
                key={item.nama}
                className="flex flex-col gap-2 border-t border-border/60 pt-4 first:border-t-0 first:pt-0 sm:flex-row sm:items-start sm:justify-between"
              >
                <div className="max-w-xl">
                  <p className="text-base font-semibold text-foreground">{item.nama}</p>
                  <p className="mt-1 text-sm leading-relaxed text-text-muted">{item.deskripsi}</p>
                </div>
                <p className="text-base font-semibold text-primary">{formatRupiah(item.jumlah)}</p>
              </div>
            ))}
          </CardSurface>
        </div>
      </PageSection>

      <PageSection padding="relaxed" tone="muted">
        <div className="editorial-grid items-start">
          <div className="space-y-4">
            <Badge tone="secondary" size="sm">
              Pertanyaan umum
            </Badge>
            <h2 className="max-w-[14ch] text-balance text-3xl font-semibold sm:text-4xl">
              Jawaban cepat untuk pertanyaan yang biasanya muncul sebelum menghubungi admin.
            </h2>
          </div>
          <FaqAccordion items={faqs} revealOnView />
        </div>
      </PageSection>

      <PageSection padding="relaxed">
        <div className="mx-auto max-w-5xl">
          <TestimonialList testimonials={testimonials} />
        </div>
      </PageSection>
    </>
  );
}
