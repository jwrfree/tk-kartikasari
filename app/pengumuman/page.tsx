import PageHeader from "@/components/layout/PageHeader";
import PageSection from "@/components/layout/PageSection";
import data from "@/data/pengumuman.json";
import { createPageMetadata } from "@/lib/metadata";

type Pengumuman = (typeof data)[number];

function formatDate(value: string) {
  return new Date(value).toLocaleDateString("id-ID", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

function isExternal(url: string) {
  return url.startsWith("http");
}

const pengumumanDescription =
  "Pantau kabar terbaru terkait PPDB, agenda orang tua, hingga informasi akademik dan libur sekolah. Daftar berikut akan diperbarui secara berkala.";

export const metadata = createPageMetadata({
  title: "Pengumuman",
  description: pengumumanDescription,
  path: "/pengumuman",
});

export default function Page() {
  const items = [...data].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );

  return (
    <>
      <PageHeader
        eyebrow="Pengumuman"
        title="Info Resmi TK Kartikasari"
        description={pengumumanDescription}
      />

      <PageSection padding="tight">
        {items.length === 0 ? (
          <div className="card p-7 text-base leading-relaxed text-text-muted">
            Belum ada pengumuman terkini. Silakan kembali beberapa saat lagi atau hubungi sekolah melalui WhatsApp.
          </div>
        ) : (
          <div className="space-y-4">
            {items.map((item: Pengumuman) => {
              const external = isExternal(item.url);
              return (
                <a
                  key={item.id}
                  href={item.url}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  className="group block rounded-3xl border border-border/60 bg-white p-6 transition hover:border-secondary hover:shadow-soft"
                >
                  <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-wide text-secondary">
                    <span className="rounded-full bg-secondary/10 px-3 py-1 text-secondary">{item.category}</span>
                    <time dateTime={item.date} className="text-text-muted">
                      {formatDate(item.date)}
                    </time>
                  </div>
                  <h2 className="mt-4 text-2xl font-semibold text-text">{item.title}</h2>
                  <p className="mt-3 text-base text-text-muted">{item.excerpt}</p>
                  <span className="mt-3 inline-flex items-center gap-2 text-base font-semibold text-secondary">
                    Selengkapnya
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={1.6}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4 transition group-hover:translate-x-1"
                    >
                      <path d="M5 12h14" />
                      <path d="m13 6 6 6-6 6" />
                    </svg>
                  </span>
                </a>
              );
            })}
          </div>
        )}
      </PageSection>
    </>
  );
}
