import { m } from "framer-motion";

import type { ProgramItem } from "./types";

type ProgramsSectionProps = {
  programs: ProgramItem[];
};

export default function ProgramsSection({ programs }: ProgramsSectionProps) {
  return (
    <section id="program" className="relative py-20">
      <div className="container grid gap-12 lg:grid-cols-[1fr,1fr] lg:items-start">
        <m.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-secondary/10 px-4 py-2 text-sm font-semibold text-secondary">
            Program unggulan
          </span>
          <h2 className="text-3xl font-bold leading-tight text-text sm:text-4xl">
            Tiga jalur belajar yang disesuaikan dengan tahap tumbuh kembang anak
          </h2>
          <p className="text-lg leading-relaxed text-text-muted">
            Setiap kelas dipandu guru inti dan guru pendamping dengan rasio kecil. Kami menyeimbangkan stimulasi akademik, karakter, dan kegiatan bermain bebas.
          </p>
          <ul className="space-y-3 text-sm text-text-muted">
            <li className="flex items-start gap-3">
              <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary/15 text-xs font-semibold text-primary">
                1
              </span>
              Observasi minat dan kebutuhan anak sebelum penempatan kelas.
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary/15 text-xs font-semibold text-primary">
                2
              </span>
              Rencana belajar individual yang dikirim ke orang tua di awal tema.
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary/15 text-xs font-semibold text-primary">
                3
              </span>
              Evaluasi menyenangkan melalui pameran karya dan pertunjukan kecil.
            </li>
          </ul>
        </m.div>
        <div className="grid gap-6">
          {programs.map((program, index) => (
            <m.div
              key={program.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              className="card h-full border-white/70 bg-white/90 p-7 shadow-soft"
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wide text-secondary">
                    {program.age}
                  </p>
                  <h3 className="mt-1 text-2xl font-semibold text-text">{program.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-text-muted">
                    {program.description}
                  </p>
                </div>
                <span className="inline-flex h-12 min-w-[3rem] items-center justify-center rounded-2xl bg-primary/15 text-2xl">
                  ✨
                </span>
              </div>
              <ul className="mt-6 space-y-2 text-sm text-text-muted">
                {program.points.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-secondary/10 text-xs font-semibold text-secondary">
                      ✓
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
}
