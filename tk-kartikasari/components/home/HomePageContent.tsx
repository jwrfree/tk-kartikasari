"use client";

import CTAButton from "@/components/CTAButton";
import StickyActions from "@/components/StickyActions";
import TestimonialList from "@/components/TestimonialList";
import { LazyMotion, domAnimation, m } from "framer-motion";

type StatsItem = {
  value: string;
  label: string;
};

type HighlightItem = {
  icon: string;
  title: string;
  description: string;
};

type ProgramItem = {
  name: string;
  age: string;
  description: string;
  points: string[];
};

type JourneyItem = {
  time: string;
  title: string;
  description: string;
  icon: string;
};

type FAQItem = {
  question: string;
  answer: string;
};

type HomePageContentProps = {
  schoolName: string;
  stats: StatsItem[];
  highlights: HighlightItem[];
  programs: ProgramItem[];
  journey: JourneyItem[];
  faqs: FAQItem[];
};

export default function HomePageContent({
  schoolName,
  stats,
  highlights,
  programs,
  journey,
  faqs,
}: HomePageContentProps) {
  return (
    <LazyMotion features={domAnimation}>
      <>
        <section className="relative overflow-hidden pt-16">
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
              <dl className="grid gap-6 pt-6 sm:grid-cols-2 md:grid-cols-3">
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

        <section className="relative border-y border-white/60 bg-white/80 py-20">
          <div className="container">
            <m.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6 }}
              className="mx-auto max-w-2xl text-center"
            >
              <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
                Mengapa orang tua memilih kami
              </span>
              <h2 className="mt-4 text-3xl font-bold leading-tight text-text sm:text-4xl">
                Sekolah yang menumbuhkan rasa ingin tahu dan karakter positif sejak dini
              </h2>
              <p className="mt-3 text-lg text-text-muted">
                Tim pengajar kami merancang pengalaman belajar yang menyeluruh, menyenangkan, dan penuh perhatian.
              </p>
            </m.div>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {highlights.map((item, index) => (
                <m.div
                  key={item.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.55, delay: index * 0.08 }}
                  className="card h-full border-white/60 bg-white/90 p-7 text-left"
                >
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/15 text-2xl">
                    {item.icon}
                  </span>
                  <h3 className="mt-6 text-xl font-semibold text-text">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-text-muted">{item.description}</p>
                </m.div>
              ))}
            </div>
          </div>
        </section>

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

        <TestimonialList />

        <section id="faq" className="relative py-20">
          <div className="container grid gap-12 lg:grid-cols-[0.9fr,1fr] lg:items-start">
            <m.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
                Pertanyaan populer
              </span>
              <h2 className="text-3xl font-bold leading-tight text-text sm:text-4xl">
                Informasi penting seputar pendaftaran dan kegiatan sekolah
              </h2>
              <p className="text-lg leading-relaxed text-text-muted">
                Jika ada pertanyaan lain, kami dengan senang hati menjawab melalui WhatsApp ataupun ketika Anda berkunjung langsung.
              </p>
              <CTAButton
                label="Tanya langsung via WhatsApp"
                className="w-full sm:w-auto"
                message="Halo Bu Mintarsih, saya ingin menanyakan informasi mengenai TK Kartikasari."
              />
            </m.div>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <m.div
                  key={faq.question}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.55, delay: index * 0.08 }}
                  className="card border-white/70 bg-white/90 p-6 text-left shadow-soft"
                >
                  <p className="text-base font-semibold text-text">{faq.question}</p>
                  <p className="mt-3 text-sm leading-relaxed text-text-muted">{faq.answer}</p>
                </m.div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative pb-36 pt-6">
          <div className="container">
            <m.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6 }}
              className="card flex flex-col gap-6 overflow-hidden border-white/70 bg-gradient-to-br from-secondary/10 via-white to-primary/10 p-10 text-center md:flex-row md:items-center md:justify-between md:text-left"
            >
              <div className="max-w-xl space-y-3">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-secondary">
                  Siap bergabung
                </span>
                <h2 className="text-3xl font-semibold text-text sm:text-4xl">
                  Jadwalkan tur sekolah dan rasakan langsung keceriaan anak-anak TK Kartikasari
                </h2>
                <p className="text-sm leading-relaxed text-text-muted">
                  Kami membuka sesi kunjungan setiap Senin dan Kamis. Tim kami akan menemani Anda berkeliling kelas, taman bermain, hingga ruang kegiatan khusus.
                </p>
              </div>
              <div className="flex flex-col gap-3 md:flex-row md:items-center">
                <CTAButton
                  label="Jadwalkan kunjungan"
                  className="w-full md:w-auto"
                  message="Halo Bu Mintarsih, saya ingin menjadwalkan tur sekolah TK Kartikasari."
                />
                <a href="#program" className="btn-outline w-full md:w-auto">
                  Lihat program kembali
                </a>
              </div>
            </m.div>
          </div>
        </section>

        <StickyActions />
      </>
    </LazyMotion>
  );
}
