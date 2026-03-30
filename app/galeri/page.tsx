import Image from 'next/image';
import Link from 'next/link';

import PageHeader from '@/components/layout/PageHeader';
import PageSection from '@/components/layout/PageSection';
import { Button } from '@/components/ui/Button';
import { CardSurface } from '@/components/ui/CardSurface';
import { FactRail } from '@/components/ui/FactRail';
import { createPageMetadata } from '@/lib/metadata';
import { getGalleryPageData } from '@/lib/sanity.queries';
import type { GalleryItem } from '@/lib/types/site';

const galeriDescription =
  'Lihat suasana kelas, kegiatan, dan momen harian anak di TK Kartikasari melalui dokumentasi yang ringkas dan mudah dipindai.';

export async function generateMetadata() {
  const { siteSettings } = await getGalleryPageData();
  return createPageMetadata({
    title: 'Galeri',
    description: galeriDescription,
    path: '/galeri',
    siteSettings,
  });
}

export default async function Page() {
  const { gallery } = await getGalleryPageData();
  const hasPhotos = gallery.length > 0;

  return (
    <>
      <PageHeader
        eyebrow="Galeri"
        title="Potret kegiatan sekolah membantu keluarga membayangkan suasana hari-hari anak di sini."
        description={galeriDescription}
      />

      <PageSection padding="relaxed">
        <div className="editorial-grid items-start">
          <div className="space-y-4">
            <h2 className="max-w-[14ch] text-balance text-3xl font-semibold sm:text-4xl lg:text-[2.9rem]">
              Foto yang baik membantu orang tua melihat apakah sekolah ini terasa hidup, tertata, dan cukup dekat dengan
              anak.
            </h2>
            <p className="max-w-2xl text-base leading-relaxed text-text-muted">
              Karena itu kami menampilkan dokumentasi dengan caption singkat dan urutan yang tidak terasa seperti
              katalog padat.
            </p>
          </div>
          <FactRail
            eyebrow="Galeri"
            title="Fungsi galeri ini."
            items={[
              {
                label: 'Tujuan',
                value: 'Membangun rasa percaya',
                description: 'Foto membantu orang tua membayangkan suasana sekolah.',
              },
              {
                label: 'Format',
                value: 'Foto + caption singkat',
                description: 'Caption memberi konteks tanpa memenuhi layar.',
              },
              {
                label: 'Fallback',
                value: 'Tetap rapi tanpa foto',
                description: 'Jika konten belum tersedia, layout tidak terasa kosong atau rusak.',
              },
            ]}
            sticky
          />
        </div>
      </PageSection>

      <PageSection padding="relaxed" tone="muted">
        {hasPhotos ? (
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {gallery.map((item: GalleryItem) => (
              <figure
                key={item.id}
                className="group overflow-hidden rounded-[1.75rem] border border-border/70 bg-surface shadow-soft"
              >
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src={item.imageUrl}
                    alt={item.description || item.title}
                    fill
                    sizes="(min-width: 1280px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <figcaption className="space-y-2 p-5 text-base">
                  <p className="text-lg font-semibold text-text">{item.title}</p>
                  <p className="text-sm leading-relaxed text-text-muted">{item.description}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        ) : (
          <CardSurface tone="soft" padding="xl" className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-semibold text-text">Dokumentasi segera hadir</h2>
            <p className="mt-3 text-base text-text-muted">
              Tim kami sedang mengkurasi foto kegiatan terbaru agar dapat dibagikan kepada orang tua. Jika Anda
              membutuhkan informasi tambahan, silakan hubungi kami melalui kanal resmi sekolah.
            </p>
            <div className="mt-6 flex justify-center">
              <Button asChild fullWidth className="sm:w-auto">
                <Link href="/kontak">Hubungi TK Kartikasari</Link>
              </Button>
            </div>
          </CardSurface>
        )}
      </PageSection>
    </>
  );
}
