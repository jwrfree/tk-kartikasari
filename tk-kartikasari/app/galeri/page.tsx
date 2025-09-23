import data from "@/data/galeri.json";

type GaleriItem = (typeof data)[number];

export default function Page() {
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
    </div>
  );
}
