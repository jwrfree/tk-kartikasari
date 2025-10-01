import Image from "next/image";
import Link from "next/link";

import PageHeader from "@/components/layout/PageHeader";
import PageSection from "@/components/layout/PageSection";
import { CardSurface } from "@/components/ui/CardSurface";
import { Button } from "@/components/ui/Button";
import { createPageMetadata } from "@/lib/metadata";
import { getGalleryPageData } from "@/lib/sanity.queries";
import type { GalleryItem } from "@/lib/types/site";

const galeriDescription =
  "Potret kegiatan anak TK Kartikasari dalam suasana belajar yang hangat, aktif, dan menyenangkan. Semua foto dimuat dengan teknik lazy-load agar halaman tetap ringan.";

export async function generateMetadata() {
  const { siteSettings } = await getGalleryPageData();
  return createPageMetadata({
    title: "Galeri",
    description: galeriDescription,
    path: "/galeri",
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
        title="Galeri Kegiatan Anak"
        description={galeriDescription}
      />

      <PageSection padding="tight">
        {hasPhotos ? (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {gallery.map((item: GalleryItem) => (
              <figure
                key={item.id}
                className="overflow-hidden rounded-3xl border border-border/60 bg-white shadow-sm transition hover:shadow-soft"
              >
                <div className="relative h-56 w-full">
                  <Image
                    src={item.imageUrl}
                    alt={item.description || item.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className="space-y-1 p-4 text-base">
                  <p className="font-semibold text-text">{item.title}</p>
                  <p className="text-sm text-text-muted">{item.description}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        ) : (
          <CardSurface tone="soft" padding="xl" className="text-center shadow-soft backdrop-blur-xl">
            <h2 className="text-2xl font-semibold text-text">Dokumentasi segera hadir</h2>
            <p className="mt-3 text-base text-text-muted">
              Tim kami sedang mengkurasi foto kegiatan terbaru agar dapat dibagikan kepada orang tua. Jika Anda membutuhkan
              informasi tambahan, silakan hubungi kami melalui kanal resmi sekolah.
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
