import PageHeader from "@/components/PageHeader";
import agenda from "@/data/agenda.json";
import { agendaPageHeader } from "@/data/content";

type AgendaItem = (typeof agenda)[number];

function formatDate(value: string) {
  return new Date(value).toLocaleDateString("id-ID", {
    weekday: "long",
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

export default function Page() {
  const items = [...agenda].sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
  );

  return (
    <div className="container py-8 space-y-6">
      <PageHeader {...agendaPageHeader} />

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
