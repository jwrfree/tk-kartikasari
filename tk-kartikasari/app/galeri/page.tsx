import PageHeader from "@/components/PageHeader";
import data from "@/data/galeri.json";
import { galeriPageHeader } from "@/data/content";

type GaleriItem = (typeof data)[number];

export default function Page() {
  return (
    <div className="container py-8 space-y-6">
      <PageHeader {...galeriPageHeader} />

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
