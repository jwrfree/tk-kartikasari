import Image from 'next/image';
import { CheckCircle, Image as ImageIcon, PlayCircleFill } from 'react-bootstrap-icons';

import PageHeader from '@/components/layout/PageHeader';
import PageSection from '@/components/layout/PageSection';
import { Badge } from '@/components/ui/Badge';
import { CardSurface } from '@/components/ui/CardSurface';
import { MediaBand } from '@/components/ui/MediaBand';
import { createPageMetadata } from '@/lib/metadata';
import { fetchSanityData } from '@/lib/sanity-client';
import { urlFor } from '@/lib/sanity-image';
import { FactRail } from '@/components/ui/FactRail';

export const metadata = createPageMetadata({
  title: 'Fasilitas Sekolah',
  description:
    'Lihat ruang belajar, area bermain, dan fasilitas pendukung yang dipakai anak setiap hari di TK Kartikasari.',
  path: '/fasilitas',
});

type VirtualTour = {
  title?: string;
  description?: string;
  videoUrl?: string;
} | null;

type Facility = {
  _id: string;
  name: string;
  description?: string;
  features?: string[];
  image?: unknown;
};

const SANITY_SKIP_MESSAGE = 'Sanity fetch skipped after previous network failure';
let hasLoggedFasilitasError = false;
let hasLoggedFasilitasSkip = false;

async function getFacilitiesData(): Promise<{ virtualTour: VirtualTour; facilities: Facility[] }> {
  try {
    const virtualTour = await fetchSanityData<VirtualTour>('*[_type == "virtualTour"][0]');
    const facilities = await fetchSanityData<Facility[]>('*[_type == "facility"] | order(_createdAt asc)');

    return {
      virtualTour: virtualTour ?? null,
      facilities: facilities ?? [],
    };
  } catch (error) {
    if (!hasLoggedFasilitasError) {
      console.error('Failed to fetch fasilitas from Sanity:', error);
      hasLoggedFasilitasError = true;
    } else if (!hasLoggedFasilitasSkip && error instanceof Error && error.message.includes(SANITY_SKIP_MESSAGE)) {
      console.warn('Skipping fasilitas fetch after previous Sanity network failure.');
      hasLoggedFasilitasSkip = true;
    }
    return { virtualTour: null, facilities: [] };
  }
}

export default async function FasilitasPage() {
  const { virtualTour, facilities } = await getFacilitiesData();

  return (
    <>
      <PageHeader
        eyebrow="Fasilitas"
        title="Lihat ruang yang dipakai anak setiap hari di sekolah."
        description="Halaman ini membantu keluarga memahami bagaimana ruang kelas, area bermain, dan fasilitas pendukung dipakai dalam keseharian sekolah."
      />

      <PageSection padding="relaxed">
        <MediaBand
          eyebrow="Tur singkat"
          title={virtualTour?.title || 'Jelajahi sekolah kami'}
          description={
            virtualTour?.description ||
            'Lihat gambaran singkat lingkungan sekolah sebelum bertanya lebih lanjut atau menjadwalkan kunjungan.'
          }
        >
          {virtualTour?.videoUrl ? (
            <a
              href={virtualTour.videoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white transition hover:bg-primary/90"
            >
              <PlayCircleFill className="h-4 w-4" />
              Buka tur fasilitas
            </a>
          ) : null}
        </MediaBand>
      </PageSection>

      <PageSection padding="relaxed">
        <div className="editorial-grid items-start">
          <div className="space-y-4">
            <Badge tone="secondary" size="sm">
              Lingkungan belajar
            </Badge>
            <h2 className="max-w-[14ch] text-balance text-3xl font-semibold sm:text-4xl lg:text-[2.9rem]">
              Orang tua bisa melihat seperti apa kelas, area bermain, dan ruang pendukung dipakai anak di sini.
            </h2>
            <p className="max-w-2xl text-base leading-relaxed text-text-muted">
              Setiap area dijelaskan lewat kegiatannya, supaya keluarga tidak hanya melihat nama ruang, tetapi juga
              fungsinya dalam keseharian anak.
            </p>
          </div>
          <FactRail
            eyebrow="Yang diperhatikan"
            title="Cara membaca halaman fasilitas."
            items={[
              {
                label: 'Keamanan',
                value: 'Ruang yang ramah anak',
                description: 'Keluarga bisa melihat apakah ruangnya terang, tertata, dan mudah dipakai anak.',
              },
              {
                label: 'Fungsi',
                value: 'Fungsi tiap area',
                description: 'Setiap area dijelaskan lewat kegiatan yang biasa dilakukan anak di sana.',
              },
              {
                label: 'Fallback',
                value: 'Tetap utuh tanpa foto',
                description: 'Jika dokumentasi belum lengkap, halaman tetap bisa dipakai tanpa terasa terputus.',
              },
            ]}
            sticky
          />
        </div>
      </PageSection>

      <PageSection padding="relaxed" tone="muted">
        <div className="space-y-14">
          {facilities.length === 0 ? (
            <CardSurface tone="soft" padding="xl" className="text-center">
              <h2 className="text-2xl font-semibold text-text">Data fasilitas belum tersedia</h2>
              <p className="mt-3 text-base text-text-muted">
                Dokumentasi fasilitas akan ditambahkan begitu konten terbarunya siap ditampilkan.
              </p>
            </CardSurface>
          ) : (
            facilities.map((facility, index) => (
              <div key={facility._id} className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
                <div
                  className={`relative aspect-square overflow-hidden rounded-[1.8rem] border border-border/70 bg-surface shadow-soft lg:aspect-[4/3] ${
                    index % 2 === 1 ? 'lg:order-2' : ''
                  }`}
                >
                  {facility.image ? (
                    <Image
                      src={urlFor(facility.image).width(800).height(600).url()}
                      alt={facility.name}
                      fill
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      className="object-cover"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center text-center text-text-muted">
                      <div>
                        <ImageIcon className="mx-auto h-12 w-12" />
                        <h3 className="mt-2 text-lg font-semibold">Foto menyusul</h3>
                      </div>
                    </div>
                  )}
                </div>

                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-secondary">
                    Fasilitas sekolah
                  </p>
                  <h3 className="mt-3 text-3xl font-semibold text-text">{facility.name}</h3>
                  <p className="mt-4 text-base leading-relaxed text-text-muted">{facility.description}</p>
                  {facility.features && facility.features.length > 0 ? (
                    <ul className="mt-6 space-y-3">
                      {facility.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3 text-sm leading-relaxed text-foreground/85">
                          <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              </div>
            ))
          )}
        </div>
      </PageSection>
    </>
  );
}
