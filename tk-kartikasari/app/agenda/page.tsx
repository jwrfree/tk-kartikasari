import agenda from "@/data/agenda.json";

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
  const hasItems = items.length > 0;

  return (
    <div className="container py-8 space-y-6">
      <header className="space-y-3">
        <p className="text-sm font-semibold uppercase tracking-wide text-secondary">Agenda</p>
        <h1 className="text-3xl font-bold sm:text-4xl">Agenda Kegiatan TK Kartikasari</h1>
        <p className="max-w-2xl text-text-muted">
          Agenda disusun untuk melibatkan anak dan orang tua dalam pengalaman belajar yang menyenangkan serta penuh kolaborasi.
          Simpan tanggal penting berikut di kalender keluarga Anda.
        </p>
      </header>

      {hasItems ? (
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
      ) : (
        <div className="card border border-border/70 bg-secondary/5 p-6 text-center">
          <h2 className="text-lg font-semibold text-text">Belum ada agenda terbaru</h2>
          <p className="mt-2 text-sm text-text-muted">
            Kami sedang memperbarui jadwal kegiatan. Silakan cek kembali atau hubungi pihak sekolah untuk informasi terbaru.
          </p>
        </div>
      )}
    </div>
  );
}
