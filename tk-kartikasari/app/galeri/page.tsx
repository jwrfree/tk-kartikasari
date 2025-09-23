import Link from "next/link";

import data from "@/data/galeri.json";

type GaleriItem = (typeof data)[number];

export default function Page() {
  const hasPhotos = data.length > 0;

  return (
    <div className="container py-8 space-y-6">
      <header className="space-y-3">
        <p className="text-sm font-semibold uppercase tracking-wide text-secondary">Galeri</p>
        <h1 className="text-3xl font-bold sm:text-4xl">Galeri Kegiatan Anak</h1>
        <p className="max-w-2xl text-text-muted">
          Potret kegiatan anak TK Kartikasari dalam suasana belajar yang hangat, aktif, dan menyenangkan. Semua foto dimuat
          dengan teknik lazy-load agar halaman tetap ringan.
        </p>
      </header>

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
              <figcaption className="space-y-1 p-4 text-sm">
                <p className="font-semibold text-text">{item.caption}</p>
                <p className="text-xs text-text-muted">{item.alt}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      ) : (
        <div className="card border border-border/70 bg-secondary/5 p-8 text-center">
          <h2 className="text-xl font-semibold text-text">Dokumentasi segera hadir</h2>
          <p className="mt-3 text-sm text-text-muted">
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
    </div>
  );
}
