import PageHeader from "@/components/layout/PageHeader";
import PageSection from "@/components/layout/PageSection";
import agenda from "@/data/agenda.json";
import { createPageMetadata } from "@/lib/metadata";

type AgendaItem = (typeof agenda)[number];

function formatDate(value: string) {
  return new Date(value).toLocaleDateString("id-ID", {
    weekday: "long",
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

const agendaDescription =
  "Agenda disusun untuk melibatkan anak dan orang tua dalam pengalaman belajar yang menyenangkan serta penuh kolaborasi. Simpan tanggal penting berikut di kalender keluarga Anda.";

export const metadata = createPageMetadata({
  title: "Agenda",
  description: agendaDescription,
  path: "/agenda",
});

export default function Page() {
  const items = [...agenda].sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
  );
  const hasItems = items.length > 0;

  return (
    <>
      <PageHeader
        eyebrow="Agenda"
        title="Agenda Kegiatan TK Kartikasari"
        description={agendaDescription}
      />

      <PageSection padding="tight">
        {hasItems ? (
          <ul className="space-y-4">
            {items.map((item: AgendaItem) => (
              <li key={item.id} className="card p-6">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <h2 className="text-2xl font-semibold text-text">{item.title}</h2>
                    <p className="text-base text-text-muted">{formatDate(item.date)}</p>
                  </div>
                  <div className="rounded-2xl bg-secondary/10 px-4 py-2 text-base font-semibold text-secondary">
                    {item.time}
                  </div>
                </div>
                <div className="mt-4 space-y-2 text-base text-text-muted">
                  <p>
                    <strong className="font-semibold text-text">Lokasi:</strong> {item.location}
                  </p>
                  <p>{item.description}</p>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <div className="card border border-border/70 bg-secondary/5 p-7 text-center">
            <h2 className="text-2xl font-semibold text-text">Belum ada agenda terbaru</h2>
            <p className="mt-3 text-base text-text-muted">
              Kami sedang memperbarui jadwal kegiatan. Silakan cek kembali atau hubungi pihak sekolah untuk informasi terbaru.
            </p>
          </div>
        )}
      </PageSection>
    </>
  );
}
