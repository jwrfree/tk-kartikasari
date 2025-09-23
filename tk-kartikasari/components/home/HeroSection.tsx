import CTAButton from "@/components/CTAButton";
import { m } from "framer-motion";

import type { StatsItem } from "./types";

type HeroSectionProps = {
  schoolName: string;
  stats: StatsItem[];
};

export default function HeroSection({ schoolName, stats }: HeroSectionProps) {
  return (
    <section id="hero" className="relative overflow-hidden pt-16">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 right-16 h-72 w-72 rounded-full bg-secondary/20 blur-3xl" />
        <div className="absolute -left-32 top-24 h-80 w-80 rounded-full bg-primary/25 blur-3xl" />
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-hero-gradient" />
      </div>
      <div className="container relative grid gap-16 pb-24 pt-12 md:grid-cols-[1.05fr,0.95fr] md:items-center">
        <m.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/50 bg-white/80 px-4 py-2 text-sm font-semibold text-secondary shadow-soft">
            <span className="h-2.5 w-2.5 rounded-full bg-secondary" />
            {schoolName} • Bulaksari
          </span>
          <h1 className="text-4xl font-bold leading-tight text-text sm:text-5xl">
            Belajar ceria, tumbuh percaya diri bersama sahabat baru setiap hari
          </h1>
          <p className="max-w-xl text-lg leading-relaxed text-text-muted">
            Lingkungan hangat, fasilitas aman, dan kegiatan tematik yang menumbuhkan rasa ingin tahu anak usia dini di Bantarsari, Cilacap.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <CTAButton
              label="Daftar PPDB & Tur Sekolah"
              className="w-full sm:w-auto"
              message="Halo Bu Mintarsih, saya ingin menjadwalkan kunjungan dan mendapatkan info PPDB TK Kartikasari."
            />
            <a href="#program" className="btn-outline w-full sm:w-auto">
              Lihat program unggulan
            </a>
          </div>
          <dl className="grid gap-6 pt-6 sm:grid-cols-3">
            {stats.map((item) => (
              <div
                key={item.label}
                className="rounded-3xl border border-white/60 bg-white/80 p-5 text-left shadow-soft"
              >
                <dt className="text-3xl font-bold text-text">{item.value}</dt>
                <dd className="mt-1 text-sm text-text-muted">{item.label}</dd>
              </div>
            ))}
          </dl>
        </m.div>

        <m.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative"
        >
          <div className="absolute -top-12 right-10 h-32 w-32 rounded-full bg-accent/40 blur-2xl" />
          <div className="absolute -bottom-8 left-0 h-28 w-28 rounded-full bg-secondary/30 blur-2xl" />
          <div className="relative space-y-5">
            <div className="card overflow-hidden border-white/60 bg-white/90 p-6 shadow-soft">
              <div className="flex items-center justify-between text-sm font-semibold text-text">
                <span>Agenda Hari Ini</span>
                <span className="rounded-full bg-secondary/10 px-3 py-1 text-secondary">
                  Tema Pelangi
                </span>
              </div>
              <ul className="mt-4 space-y-3 text-sm text-text-muted">
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary/15 text-sm">
                    07.00
                  </span>
                  Sambutan pagi & permainan pemanasan
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary/15 text-sm">
                    08.30
                  </span>
                  Eksperimen warna di laboratorium mini
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary/15 text-sm">
                    10.00
                  </span>
                  Bermain air & pasir di taman sensori
                </li>
              </ul>
            </div>
            <div className="ml-auto w-[85%] rounded-3xl border border-white/60 bg-white/70 p-6 shadow-soft backdrop-blur">
              <p className="text-sm font-semibold text-secondary">Lingkungan Aman</p>
              <p className="mt-3 text-sm leading-relaxed text-text-muted">
                Semua area belajar dipantau CCTV, dilengkapi akses kontrol, serta peralatan ramah anak.
              </p>
              <div className="mt-4 flex items-center gap-3 text-sm font-semibold text-text">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/15 text-lg">
                  😊
                </span>
                Rasio guru : murid 1 : 8
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-white/60 bg-white/90 p-5 shadow-soft">
                <p className="text-sm font-semibold text-secondary">Fokus Harian</p>
                <p className="mt-2 text-sm text-text-muted">
                  Motorik, bahasa, sosial-emosi, dan kemandirian.
                </p>
              </div>
              <div className="rounded-3xl border border-white/60 bg-white/90 p-5 shadow-soft">
                <p className="text-sm font-semibold text-secondary">Menu Sehat</p>
                <p className="mt-2 text-sm text-text-muted">
                  Snack buah segar & susu rendah gula.
                </p>
              </div>
            </div>
          </div>
        </m.div>
      </div>
    </section>
  );
}
