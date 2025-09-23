"use client";

import CTAButton from "@/components/CTAButton";
import TestimonialList from "@/components/TestimonialList";
import PageSection from "@/components/layout/PageSection";
import SectionHeader from "@/components/layout/SectionHeader";
import type { CTAConfig } from "@/content/cta";
import type {
  HomeFaq,
  HomeHighlight,
  HomeJourneyItem,
  HomeProgram,
  HomeStat,
} from "@/content/home";
import { LazyMotion, domAnimation, m } from "framer-motion";

type HomePageContentProps = {
  schoolName: string;
  stats: HomeStat[];
  highlights: HomeHighlight[];
  programs: HomeProgram[];
  journey: HomeJourneyItem[];
  faqs: HomeFaq[];
  heroCta: CTAConfig;
  faqCta: CTAConfig;
  visitCta: CTAConfig;
};

export default function HomePageContent({
  schoolName,
  stats,
  highlights,
  programs,
  journey,
  faqs,
  heroCta,
  faqCta,
  visitCta,
}: HomePageContentProps) {
  return (
    <LazyMotion features={domAnimation}>
      <>
        <PageSection
          className="relative overflow-hidden"
          padding="none"
          containerClassName="relative grid gap-16 pb-24 pt-20 md:grid-cols-[1.05fr,0.95fr] md:items-center"
        >
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -top-32 right-16 h-72 w-72 rounded-full bg-secondary/20 blur-3xl" />
            <div className="absolute -left-32 top-24 h-80 w-80 rounded-full bg-primary/25 blur-3xl" />
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-hero-gradient" />
          </div>
          <m.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative space-y-8"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-white/50 bg-white/80 px-4 py-2 text-sm font-semibold text-secondary shadow-soft">
              <span className="h-2.5 w-2.5 rounded-full bg-secondary" />
              {schoolName} • Bulaksari
            </span>
            <h1 className="text-balance text-4xl font-bold leading-tight text-text sm:text-5xl">
              Belajar ceria, tumbuh percaya diri bersama sahabat baru setiap hari
            </h1>
            <p className="max-w-xl text-pretty text-lg text-text-muted sm:text-xl">
              Lingkungan hangat, fasilitas aman, dan kegiatan tematik yang menumbuhkan rasa ingin tahu anak usia dini di Bantarsari, Cilacap.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <CTAButton config={heroCta} className="w-full sm:w-auto" />
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
                  <dd className="mt-1 text-base text-text-muted">{item.label}</dd>
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
            <div className="absolute -bottom-4 left-0 h-28 w-28 rounded-full bg-secondary/30 blur-2xl md:-bottom-8" />
            <div className="relative space-y-5">
              <div className="card overflow-hidden border-white/60 bg-white/90 p-6 shadow-soft">
                <div className="flex items-center justify-between text-base font-semibold text-text">
                  <span>Agenda Hari Ini</span>
                  <span className="rounded-full bg-secondary/10 px-3 py-1 text-sm font-semibold text-secondary">
                    Tema Pelangi
                  </span>
                </div>
                <ul className="mt-4 space-y-3 text-base text-text-muted">
                  <li className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary/15 text-xs font-semibold">
                      07.00
                    </span>
                    Sambutan pagi & permainan pemanasan
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary/15 text-xs font-semibold">
                      08.30
                    </span>
                    Eksperimen warna di laboratorium mini
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary/15 text-xs font-semibold">
                      10.00
                    </span>
                    Bermain air & pasir di taman sensori
                  </li>
                </ul>
              </div>
              <div className="ml-auto w-[85%] rounded-3xl border border-white/60 bg-white/70 p-6 shadow-soft backdrop-blur">
                <p className="text-base font-semibold text-secondary">Lingkungan Aman</p>
                <p className="mt-3 text-base leading-relaxed text-text-muted">
                  Semua area belajar dipantau CCTV, dilengkapi akses kontrol, serta peralatan ramah anak.
                </p>
                <div className="mt-4 flex items-center gap-3 text-base font-semibold text-text">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/15 text-lg">
                    😊
                  </span>
                  Rasio guru : murid 1 : 8
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl border border-white/60 bg-white/90 p-5 shadow-soft">
                  <p className="text-base font-semibold text-secondary">Fokus Harian</p>
                  <p className="mt-2 text-base text-text-muted">
                    Motorik, bahasa, sosial-emosi, dan kemandirian.
                  </p>
                </div>
                <div className="rounded-3xl border border-white/60 bg-white/90 p-5 shadow-soft">
                  <p className="text-base font-semibold text-secondary">Menu Sehat</p>
                  <p className="mt-2 text-base text-text-muted">
                    Snack buah segar & susu rendah gula.
                  </p>
                </div>
              </div>
            </div>
          </m.div>
        </PageSection>

        <PageSection
          className="relative border-y border-white/60 bg-white/80"
          padding="tight"
        >
          <m.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
          >
            <SectionHeader
              align="center"
              eyebrow="Mengapa orang tua memilih kami"
              eyebrowVariant="primary"
              description="Tim pengajar kami merancang pengalaman belajar yang menyeluruh, menyenangkan, dan penuh perhatian."
              title="Sekolah yang menumbuhkan rasa ingin tahu dan karakter positif sejak dini"
            />
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
                <p className="mt-3 text-base leading-relaxed text-text-muted">{item.description}</p>
              </m.div>
            ))}
          </div>
        </PageSection>

        <PageSection
          id="program"
          padding="tight"
          containerClassName="grid gap-12 lg:grid-cols-[1fr,1fr] lg:items-start"
        >
          <m.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <SectionHeader
              eyebrow="Program unggulan"
              eyebrowVariant="secondary"
              title="Tiga jalur belajar yang disesuaikan dengan tahap tumbuh kembang anak"
              description="Setiap kelas dipandu guru inti dan guru pendamping dengan rasio kecil. Kami menyeimbangkan stimulasi akademik, karakter, dan kegiatan bermain bebas."
            />
            <ul className="space-y-3 text-base text-text-muted">
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
                  <div className="space-y-3">
                    <p className="text-sm font-semibold uppercase tracking-wide text-secondary">
                      {program.age}
                    </p>
                    <h3 className="text-2xl font-semibold text-text">{program.name}</h3>
                    <p className="text-base leading-relaxed text-text-muted">
                      {program.description}
                    </p>
                  </div>
                  <span className="inline-flex h-12 min-w-[3rem] items-center justify-center rounded-2xl bg-primary/15 text-2xl">
                    ✨
                  </span>
                </div>
                <ul className="mt-6 space-y-2 text-base text-text-muted">
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
        </PageSection>

        <PageSection
          id="pengalaman"
          className="relative overflow-hidden"
          padding="tight"
          containerClassName="relative grid gap-12 lg:grid-cols-[0.9fr,1.1fr] lg:items-center"
        >
          <div className="absolute inset-0 bg-grid-dots [background-size:24px_24px] opacity-40" />
          <m.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            className="relative space-y-6"
          >
            <SectionHeader
              eyebrow="Suasana belajar harian"
              eyebrowVariant="surface"
              title="Jadwal penuh aktivitas yang menstimulasi seluruh aspek perkembangan anak"
              description="Guru kami menyiapkan transisi yang mulus dari aktivitas indoor ke outdoor sehingga anak tetap bersemangat hingga waktu pulang."
            />
            <div className="rounded-3xl border border-white/60 bg-white/90 p-6 shadow-soft">
              <p className="text-base font-semibold text-secondary">Kolaborasi dengan orang tua</p>
              <p className="mt-3 text-base leading-relaxed text-text-muted">
                Orang tua mendapatkan ringkasan kegiatan dan foto terbaik anak setiap hari melalui kanal komunikasi khusus.
              </p>
            </div>
          </m.div>
          <div className="relative space-y-4">
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
                <p className="text-base leading-relaxed text-text-muted sm:pl-4">{item.description}</p>
              </m.div>
            ))}
          </div>
        </PageSection>

        <TestimonialList />

        <PageSection
          id="faq"
          padding="tight"
          containerClassName="grid gap-12 lg:grid-cols-[0.9fr,1fr] lg:items-start"
        >
          <m.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <SectionHeader
              eyebrow="Pertanyaan populer"
              title="Informasi penting seputar pendaftaran dan kegiatan sekolah"
              description="Jika ada pertanyaan lain, kami dengan senang hati menjawab melalui WhatsApp ataupun ketika Anda berkunjung langsung."
            />
            <CTAButton config={faqCta} className="w-full sm:w-auto" />
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
                <p className="text-lg font-semibold text-text">{faq.question}</p>
                <p className="mt-3 text-base leading-relaxed text-text-muted">{faq.answer}</p>
              </m.div>
            ))}
          </div>
        </PageSection>

        <PageSection className="relative pb-36" padding="tight">
          <m.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            className="card flex flex-col gap-6 overflow-hidden border-white/70 bg-gradient-to-br from-secondary/10 via-white to-primary/10 p-10 text-center md:flex-row md:items-center md:justify-between md:text-left"
          >
            <div className="max-w-xl space-y-4">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-secondary">
                Siap bergabung
              </span>
              <h2 className="text-balance text-3xl font-semibold text-text sm:text-4xl">
                Jadwalkan tur sekolah dan rasakan langsung keceriaan anak-anak TK Kartikasari
              </h2>
              <p className="text-base leading-relaxed text-text-muted">
                Kami membuka sesi kunjungan setiap Senin dan Kamis. Tim kami akan menemani Anda berkeliling kelas, taman bermain, hingga ruang kegiatan khusus.
              </p>
            </div>
            <div className="flex flex-col gap-3 md:flex-row md:items-center">
              <CTAButton config={visitCta} className="w-full md:w-auto" />
              <a href="#program" className="btn-outline w-full md:w-auto">
                Lihat program kembali
              </a>
            </div>
          </m.div>
        </PageSection>
      </>
    </LazyMotion>
  );
}
