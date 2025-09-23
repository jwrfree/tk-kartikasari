import Link from "next/link";

import PageHeader from "@/components/layout/PageHeader";
import PageSection from "@/components/layout/PageSection";
import data from "@/data/galeri.json";

type GaleriItem = (typeof data)[number];

export default function Page() {
  const hasPhotos = data.length > 0;

  return (
    <>
      <PageHeader
        eyebrow="Galeri"
        title="Galeri Kegiatan Anak"
        description="Potret kegiatan anak TK Kartikasari dalam suasana belajar yang hangat, aktif, dan menyenangkan. Semua foto dimuat dengan teknik lazy-load agar halaman tetap ringan."
      />

      <PageSection padding="tight">
        {hasPhotos ? (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {data.map((item: GaleriItem) => (
              <figure
                key={item.id}
                className="overflow-hidden rounded-3xl border border-border/60 bg-white shadow-sm transition hover:shadow-soft"
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  className="h-56 w-full object-cover"
                />
                <figcaption className="space-y-1 p-4 text-base">
                  <p className="font-semibold text-text">{item.caption}</p>
                  <p className="text-sm text-text-muted">{item.alt}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        ) : (
          <div className="card border border-border/70 bg-secondary/5 p-8 text-center">
            <h2 className="text-2xl font-semibold text-text">Dokumentasi segera hadir</h2>
            <p className="mt-3 text-base text-text-muted">
              Tim kami sedang mengkurasi foto kegiatan terbaru agar dapat dibagikan kepada orang tua. Jika Anda membutuhkan
              informasi tambahan, silakan hubungi kami melalui kanal resmi sekolah.
            </p>
            <div className="mt-6 flex justify-center">
              <Link href="/kontak" className="btn-primary w-full sm:w-auto">
                Hubungi TK Kartikasari
              </Link>
            </div>
          </div>
        )}
      </PageSection>
    </>
  );
}
