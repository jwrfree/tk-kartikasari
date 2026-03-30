import PageHeader from '@/components/layout/PageHeader';
import PageSection from '@/components/layout/PageSection';
import { Badge } from '@/components/ui/Badge';
import { CardSurface } from '@/components/ui/CardSurface';
import { FactRail } from '@/components/ui/FactRail';
import { createPageMetadata } from '@/lib/metadata';
import { getAgendaPageData } from '@/lib/sanity.queries';
import type { AgendaItem } from '@/lib/types/site';

function formatDate(value: string) {
  return new Date(value).toLocaleDateString('id-ID', {
    weekday: 'long',
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });
}

const agendaDescription =
  'Lihat tanggal penting sekolah supaya keluarga bisa menyiapkan waktu, kebutuhan anak, dan kehadiran lebih awal.';

export async function generateMetadata() {
  const { siteSettings } = await getAgendaPageData();
  return createPageMetadata({
    title: 'Agenda',
    description: agendaDescription,
    path: '/agenda',
    siteSettings,
  });
}

export default async function Page() {
  const { agenda } = await getAgendaPageData();
  const items = [...agenda].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  const hasItems = items.length > 0;

  return (
    <>
      <PageHeader
        eyebrow="Agenda"
        title="Tanggal penting sekolah ditampilkan rapi supaya keluarga cepat menangkap yang perlu dicatat."
        description={agendaDescription}
      />

      <PageSection padding="relaxed">
        <div className="editorial-grid items-start">
          <div className="space-y-4">
            <Badge tone="secondary" size="sm">
              Kalender keluarga
            </Badge>
            <h2 className="max-w-[14ch] text-balance text-3xl font-semibold sm:text-4xl lg:text-[2.9rem]">
              Tanggal penting diposisikan sebagai panduan keluarga, bukan sekadar daftar acara.
            </h2>
            <p className="max-w-2xl text-base leading-relaxed text-text-muted">
              Anda bisa melihat kegiatan yang akan datang, kapan waktunya, dan di mana lokasinya tanpa harus membuka
              banyak detail dulu.
            </p>
          </div>
          <FactRail
            eyebrow="Agenda"
            title="Cara membaca agenda ini."
            items={[
              {
                label: 'Urutan',
                value: 'Terdekat lebih dulu',
                description: 'Acara diurutkan berdasarkan tanggal agar mudah direncanakan.',
              },
              {
                label: 'Fokus',
                value: 'Tanggal, waktu, lokasi',
                description: 'Informasi inti selalu tampil paling depan.',
              },
              {
                label: 'Manfaat',
                value: 'Mudah disimpan keluarga',
                description: 'Struktur dibuat ringan dipindai tanpa elemen dekoratif berlebih.',
              },
            ]}
            sticky
          />
        </div>
      </PageSection>

      <PageSection padding="relaxed" tone="muted">
        {hasItems ? (
          <div className="space-y-4">
            {items.map((item: AgendaItem) => (
              <CardSurface key={item.id} tone="translucent" padding="xl" className="space-y-4">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-secondary">
                      {formatDate(item.date)}
                    </p>
                    <h2 className="mt-2 text-3xl font-semibold text-text">{item.title}</h2>
                  </div>
                  <div className="rounded-full border border-secondary/20 bg-secondary/10 px-4 py-2 text-sm font-semibold text-secondary">
                    {item.time}
                  </div>
                </div>
                <div className="grid gap-4 border-t border-border/60 pt-4 sm:grid-cols-[180px,1fr]">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-text-muted">Lokasi</p>
                  <p className="text-base text-foreground/85">{item.location}</p>
                </div>
                <p className="text-base leading-relaxed text-text-muted">{item.description}</p>
              </CardSurface>
            ))}
          </div>
        ) : (
          <CardSurface tone="soft" padding="xl" className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-semibold text-text">Belum ada agenda terbaru</h2>
            <p className="mt-3 text-base text-text-muted">
              Kami sedang memperbarui jadwal kegiatan. Silakan cek kembali atau hubungi pihak sekolah untuk informasi
              terbaru.
            </p>
          </CardSurface>
        )}
      </PageSection>
    </>
  );
}
