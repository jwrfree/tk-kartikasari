import { m } from "framer-motion";

import type { JourneyItem } from "./types";

type DailyJourneySectionProps = {
  journey: JourneyItem[];
};

export default function DailyJourneySection({ journey }: DailyJourneySectionProps) {
  return (
    <section id="pengalaman" className="relative overflow-hidden py-20">
      <div className="absolute inset-0 bg-grid-dots [background-size:24px_24px] opacity-40" />
      <div className="container relative grid gap-12 lg:grid-cols-[0.9fr,1.1fr] lg:items-center">
        <m.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-sm font-semibold text-primary">
            Suasana belajar harian
          </span>
          <h2 className="text-3xl font-bold leading-tight text-text sm:text-4xl">
            Jadwal penuh aktivitas yang menstimulasi seluruh aspek perkembangan anak
          </h2>
          <p className="text-lg leading-relaxed text-text-muted">
            Guru kami menyiapkan transisi yang mulus dari aktivitas indoor ke outdoor sehingga anak tetap bersemangat hingga waktu pulang.
          </p>
          <div className="rounded-3xl border border-white/60 bg-white/90 p-6 shadow-soft">
            <p className="text-sm font-semibold text-secondary">Kolaborasi dengan orang tua</p>
            <p className="mt-3 text-sm leading-relaxed text-text-muted">
              Orang tua mendapatkan ringkasan kegiatan dan foto terbaik anak setiap hari melalui kanal komunikasi khusus.
            </p>
          </div>
        </m.div>
        <div className="space-y-4">
          {journey.map((item, index) => (
            <m.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="grid gap-4 rounded-3xl border border-white/60 bg-white/85 p-6 shadow-soft sm:grid-cols-[auto,1fr] sm:items-center"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary/10 text-2xl">
                  {item.icon}
                </span>
                <div>
                  <p className="text-sm font-semibold text-secondary">{item.time} WIB</p>
                  <p className="text-lg font-semibold text-text">{item.title}</p>
                </div>
              </div>
              <p className="text-sm leading-relaxed text-text-muted sm:pl-4">{item.description}</p>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
}
