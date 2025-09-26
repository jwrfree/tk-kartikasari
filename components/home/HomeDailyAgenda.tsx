import AnimateIn from "@/components/AnimateIn";

const agendaItems = [
  {
    time: "07.00",
    description: "Penyambutan hangat, doa, dan pemetaan emosi anak.",
  },
  {
    time: "08.30",
    description: "Diskusi nilai Pancasila dan eksplorasi budaya lokal.",
  },
  {
    time: "10.00",
    description: "Sentra pilihan: STEAM, literasi, seni, atau role play terarah.",
  },
];

type HomeDailyAgendaProps = {
  npsn?: string;
  teacherStudentRatio?: string;
};

export default function HomeDailyAgenda({
  npsn,
  teacherStudentRatio = "1 : 8",
}: HomeDailyAgendaProps) {
  return (
    <AnimateIn>
      <details className="group rounded-3xl border border-white/60 bg-white/60 shadow-soft backdrop-blur-lg backdrop-saturate-150 [&_summary::-webkit-details-marker]:hidden">
        <summary className="flex cursor-pointer items-center justify-between gap-4 rounded-3xl px-6 py-5 text-base font-semibold text-secondary transition-colors group-open:bg-white/70">
          <span>Agenda Kurikulum Merdeka</span>
          <span className="inline-flex items-center gap-2 rounded-full bg-secondary/10 px-3 py-1 text-sm font-semibold text-secondary">
            Projek Profil Pelajar Pancasila
          </span>
        </summary>
        <div className="space-y-5 border-t border-white/60 bg-white/70 px-6 py-6">
          <ul className="space-y-3 text-base text-text-muted">
            {agendaItems.map((item) => (
              <li key={item.time} className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary/15 text-xs font-semibold">
                  {item.time}
                </span>
                {item.description}
              </li>
            ))}
          </ul>
          <div className="rounded-3xl border border-white/60 bg-white/60 p-5">
            <p className="text-base font-semibold text-secondary">Lingkungan aman & terdata resmi</p>
            <p className="mt-3 text-base leading-relaxed text-text-muted">
              Terdaftar dengan NPSN {npsn ?? "20351273"}, area 440 m² terpantau, dan peralatan ramah anak untuk belajar yang nyaman.
            </p>
            <div className="mt-4 flex items-center gap-3 text-base font-semibold text-text">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/15 text-lg" aria-hidden="true">
                😊
              </span>
              Rasio guru : anak {teacherStudentRatio}
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl border border-white/60 bg-white/60 p-5">
              <p className="text-base font-semibold text-secondary">Fokus Harian</p>
              <p className="mt-2 text-base text-text-muted">
                Nilai agama & budi pekerti, jati diri, serta kecakapan literasi sesuai fase fondasi.
              </p>
            </div>
            <div className="rounded-3xl border border-white/60 bg-white/60 p-5">
              <p className="text-base font-semibold text-secondary">Asesmen Autentik</p>
              <p className="mt-2 text-base text-text-muted">
                Jurnal perkembangan, dokumentasi karya, dan umpan balik personal setiap pekan.
              </p>
            </div>
          </div>
        </div>
      </details>
    </AnimateIn>
  );
}
