import { agendaContent, type AgendaItem } from "@/content/agenda";

function formatDate(value: string) {
  return new Date(value).toLocaleDateString("id-ID", {
    weekday: "long",
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

export default function Page() {
  const {
    hero,
    items: agendaItems,
  } = agendaContent;

  const items = [...agendaItems].sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
  );

  return (
    <div className="container py-8 space-y-6">
      <header className="space-y-3">
        <p className="text-sm font-semibold uppercase tracking-wide text-secondary">{hero.eyebrow}</p>
        <h1 className="text-3xl font-bold sm:text-4xl">{hero.title}</h1>
        <p className="max-w-2xl text-text-muted">{hero.description}</p>
      </header>

      <ul className="space-y-3">
        {items.map((item: AgendaItem) => (
          <li key={item.id} className="card p-5">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <h2 className="text-xl font-semibold text-text">{item.title}</h2>
                <p className="text-sm text-text-muted">{formatDate(item.date)}</p>
              </div>
              <div className="rounded-2xl bg-secondary/10 px-4 py-2 text-sm font-semibold text-secondary">
                {item.time}
              </div>
            </div>
            <div className="mt-3 space-y-2 text-sm text-text-muted">
              <p>
                <strong className="font-semibold text-text">Lokasi:</strong> {item.location}
              </p>
              <p>{item.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
