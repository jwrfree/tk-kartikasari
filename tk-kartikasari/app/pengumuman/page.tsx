import { pengumumanContent, type PengumumanItem } from "@/content/pengumuman";

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

export default function Page() {
  const { hero, emptyState, items: pengumumanItems } = pengumumanContent;

  const items = [...pengumumanItems].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );

  return (
    <div className="container py-8 space-y-6">
      <header className="space-y-3">
        <p className="text-sm font-semibold uppercase tracking-wide text-secondary">{hero.eyebrow}</p>
        <h1 className="text-3xl font-bold sm:text-4xl">{hero.title}</h1>
        <p className="max-w-2xl text-text-muted">{hero.description}</p>
      </header>

      {items.length === 0 ? (
        <div className="card p-6 text-text-muted">
          {emptyState}
        </div>
      ) : (
        <div className="space-y-3">
          {items.map((item: PengumumanItem) => {
            const external = isExternal(item.url);
            return (
              <a
                key={item.id}
                href={item.url}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                className="group block rounded-3xl border border-border/60 bg-white p-5 transition hover:border-secondary hover:shadow-soft"
              >
                <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-wide text-secondary">
                  <span className="rounded-full bg-secondary/10 px-3 py-1 text-secondary">{item.category}</span>
                  <time dateTime={item.date} className="text-text-muted">
                    {formatDate(item.date)}
                  </time>
                </div>
                <h2 className="mt-3 text-xl font-semibold text-text">{item.title}</h2>
                <p className="mt-2 text-sm text-text-muted">{item.excerpt}</p>
                <span className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-secondary">
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
    </div>
  );
}
