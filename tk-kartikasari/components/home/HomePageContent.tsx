"use client";

import FaqAccordion from "@/components/FaqAccordion";
import CTAButton from "@/components/CTAButton";
import TestimonialList from "@/components/TestimonialList";
import PageSection from "@/components/layout/PageSection";
import SectionHeader from "@/components/layout/SectionHeader";
import type { CTAConfig } from "@/content/cta";
import type {
  HomeCredential,
  HomeCurriculumPillar,
  HomeFaq,
  HomeHighlight,
  HomeJourneyItem,
  HomeProgram,
  HomeStat,
  HomeTimelineMilestone,
} from "@/app/types/home";
import { LazyMotion, domAnimation, m } from "framer-motion";

type HomePageContentProps = {
  schoolName: string;
  stats: HomeStat[];
  highlights: HomeHighlight[];
  programs: HomeProgram[];
  journey: HomeJourneyItem[];
  faqs: HomeFaq[];
  credentials: HomeCredential[];
  curriculumPillars: HomeCurriculumPillar[];
  timeline: HomeTimelineMilestone[];
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
  credentials,
  curriculumPillars,
  timeline,
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
            <span className="inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/60 px-4 py-2 text-sm font-semibold text-secondary shadow-soft backdrop-blur-sm backdrop-saturate-150">
              <span className="h-2.5 w-2.5 rounded-full bg-secondary" />
              {schoolName} • Kurikulum Merdeka PAUD
            </span>
            <h1 className="text-balance text-4xl font-bold leading-tight text-text sm:text-5xl">
              TK pertama di Bantarsari dengan {stats[0]?.value ?? "26+"} tahun pengalaman menerapkan Kurikulum Merdeka PAUD
            </h1>
            <p className="max-w-xl text-pretty text-lg text-text-muted sm:text-xl">
              Membangun Profil Pelajar Pancasila sejak usia dini melalui pembelajaran terdiferensiasi, projek bermakna, dan pendampingan personal yang selaras data resmi Kemendikbudristek.
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
                  className="rounded-3xl border border-white/60 bg-white/60 p-5 text-left shadow-soft backdrop-blur-lg backdrop-saturate-150"
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
              <div className="card overflow-hidden border-white/60 bg-white/70 p-6 shadow-soft backdrop-blur-xl backdrop-saturate-150">
                <div className="flex items-center justify-between text-base font-semibold text-text">
                  <span>Agenda Kurikulum Merdeka</span>
                  <span className="rounded-full bg-secondary/10 px-3 py-1 text-sm font-semibold text-secondary">
                    Projek Profil Pelajar Pancasila
                  </span>
                </div>
                <ul className="mt-4 space-y-3 text-base text-text-muted">
                  <li className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary/15 text-xs font-semibold">
                      07.00
                    </span>
                    Penyambutan hangat, doa, dan pemetaan emosi anak.
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary/15 text-xs font-semibold">
                      08.30
                    </span>
                    Diskusi nilai Pancasila dan eksplorasi budaya lokal.
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary/15 text-xs font-semibold">
                      10.00
                    </span>
                    Sentra pilihan: STEAM, literasi, seni, atau role play terarah.
                  </li>
                </ul>
              </div>
              <div className="ml-auto w-[85%] rounded-3xl border border-white/60 bg-white/50 p-6 shadow-soft backdrop-blur-xl backdrop-saturate-150">
                <p className="text-base font-semibold text-secondary">Lingkungan aman & terdata resmi</p>
                <p className="mt-3 text-base leading-relaxed text-text-muted">
                  Terdaftar dengan NPSN {credentials[0]?.value ?? "20351273"}, area 440 m² terpantau, dan peralatan ramah anak untuk belajar yang nyaman.
                </p>
                <div className="mt-4 flex items-center gap-3 text-base font-semibold text-text">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/15 text-lg">
                    😊
                  </span>
                  Rasio guru : anak {stats[2]?.value ?? "1 : 8"}
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl border border-white/60 bg-white/60 p-5 shadow-soft backdrop-blur-lg backdrop-saturate-150">
                  <p className="text-base font-semibold text-secondary">Fokus Harian</p>
                  <p className="mt-2 text-base text-text-muted">
                    Nilai agama & budi pekerti, jati diri, serta kecakapan literasi sesuai fase fondasi.
                  </p>
                </div>
                <div className="rounded-3xl border border-white/60 bg-white/60 p-5 shadow-soft backdrop-blur-lg backdrop-saturate-150">
                  <p className="text-base font-semibold text-secondary">Asesmen Autentik</p>
                  <p className="mt-2 text-base text-text-muted">
                    Jurnal perkembangan, dokumentasi karya, dan umpan balik personal setiap pekan.
                  </p>
                </div>
              </div>
            </div>
          </m.div>
        </PageSection>

        <PageSection className="relative" padding="tight">
          <m.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <SectionHeader
              eyebrow="Data resmi sekolah"
              eyebrowVariant="secondary"
              title="Kredensial yang memperkuat kepercayaan orang tua"
              description="Seluruh informasi sekolah tersimpan di basis data Kemendikbudristek dan diperkuat perjalanan panjang layanan kami untuk keluarga Bantarsari."
            />
            <div className="grid gap-6 lg:grid-cols-[1.1fr,0.9fr]">
              <div className="card h-full space-y-5 border-white/70 bg-white/70 p-7 shadow-soft backdrop-blur-xl backdrop-saturate-150">
                <h3 className="text-2xl font-semibold text-text">Legalitas & info resmi</h3>
                <ul className="space-y-4">
                  {credentials.map((item) => (
                    <li
                      key={item.label}
                      className="rounded-3xl border border-white/60 bg-white/60 p-4 transition-all duration-300 backdrop-blur-lg backdrop-saturate-150 hover:-translate-y-1 hover:border-secondary/60 hover:shadow-lg"
                    >
                      <p className="text-xs font-semibold uppercase tracking-wide text-secondary">{item.label}</p>
                      <p className="mt-1 text-lg font-semibold text-text">{item.value}</p>
                      <p className="mt-1 text-sm leading-relaxed text-text-muted">{item.description}</p>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="card h-full space-y-5 border-white/70 bg-gradient-to-br from-primary/10 via-white to-secondary/10 p-7 shadow-soft backdrop-blur-xl backdrop-saturate-150">
                <h3 className="text-2xl font-semibold text-text">Perjalanan {stats[0]?.value ?? "26+"} tahun</h3>
                <div className="relative">
                  <span className="absolute left-4 top-2 bottom-2 w-px bg-secondary/30" aria-hidden="true" />
                  <ul className="space-y-6">
                    {timeline.map((milestone) => (
                      <li key={`${milestone.year}-${milestone.title}`} className="relative pl-10">
                        <span className="absolute left-0 top-1 inline-flex h-8 w-8 items-center justify-center rounded-full bg-secondary/10 text-sm font-semibold text-secondary">
                          {milestone.year}
                        </span>
                        <div className="space-y-1">
                          <p className="text-base font-semibold text-text">{milestone.title}</p>
                          <p className="text-sm leading-relaxed text-text-muted">{milestone.description}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </m.div>
        </PageSection>

        <PageSection
          className="relative border-y border-white/50 bg-white/50 backdrop-blur-sm backdrop-saturate-150"
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
              eyebrow="Mengapa orang tua mempercayakan anaknya"
              eyebrowVariant="primary"
              description={`Legalitas lengkap, pengalaman ${stats[0]?.value ?? "26+"} tahun, dan implementasi Kurikulum Merdeka menghadirkan rasa aman bagi keluarga.`}
              title="Legalitas resmi, pembelajaran modern, dan karakter Pancasila dalam satu sekolah"
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
                className="card h-full border-white/60 bg-white/70 p-7 text-left backdrop-blur-xl backdrop-saturate-150"
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
          id="kurikulum-merdeka"
          className="bg-gradient-to-br from-secondary/10 via-white to-primary/10"
          padding="tight"
        >
          <m.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <SectionHeader
              eyebrow="Implementasi Kurikulum Merdeka"
              eyebrowVariant="secondary"
              title="Fase fondasi yang menguatkan Profil Pelajar Pancasila"
              description="Pembelajaran kami selaras dengan panduan PAUD Merdeka: karakter, jati diri, dan kompetensi dasar tumbuh seimbang melalui projek yang menyenangkan."
            />
            <div className="grid gap-6 md:grid-cols-3">
              {curriculumPillars.map((pillar) => (
                <m.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.55 }}
                  className="card h-full border-white/70 bg-white/70 p-7 text-left shadow-soft backdrop-blur-xl backdrop-saturate-150"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-secondary">
                    {pillar.subtitle}
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold text-text">{pillar.title}</h3>
                  <ul className="mt-5 space-y-2 text-base text-text-muted">
                    {pillar.points.map((point) => (
                      <li key={point} className="flex items-start gap-3">
                        <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-primary/15 text-xs font-semibold text-primary">
                          ✓
                        </span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </m.div>
              ))}
            </div>
          </m.div>
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
              eyebrow="Program Kurikulum Merdeka"
              eyebrowVariant="secondary"
              title="Jalur belajar terdiferensiasi sesuai kebutuhan tumbuh kembang anak"
              description="Guru inti dan guru pendamping berkolaborasi menyeimbangkan karakter, kompetensi dasar, dan kegembiraan bermain melalui projek Profil Pelajar Pancasila."
            />
            <ul className="space-y-3 text-base text-text-muted">
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary/15 text-xs font-semibold text-primary">
                  1
                </span>
                Observasi minat, gaya belajar, serta diskusi orang tua untuk menentukan kebutuhan utama anak.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary/15 text-xs font-semibold text-primary">
                  2
                </span>
                Perumusan tujuan pembelajaran Kurikulum Merdeka dan strategi diferensiasi setiap awal tema.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary/15 text-xs font-semibold text-primary">
                  3
                </span>
                Pameran karya, refleksi projek P5, dan laporan portofolio terstruktur di akhir tema.
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
                className="card h-full border-white/70 bg-white/70 p-7 shadow-soft backdrop-blur-xl backdrop-saturate-150"
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
              eyebrow="Ritme fase fondasi"
              eyebrowVariant="surface"
              title="Transisi lembut yang menjaga rasa aman dan antusiasme anak sepanjang hari"
              description="Rangkaian kegiatan mengikuti struktur Kurikulum Merdeka PAUD: mulai dari pembiasaan nilai, eksplorasi diferensiasi, hingga refleksi dan asesmen autentik."
            />
            <div className="rounded-3xl border border-white/60 bg-white/60 p-6 shadow-soft backdrop-blur-lg backdrop-saturate-150">
              <p className="text-base font-semibold text-secondary">Kolaborasi dengan orang tua</p>
              <p className="mt-3 text-base leading-relaxed text-text-muted">
                Orang tua menerima ringkasan harian, refleksi projek P5, dan rekomendasi penguatan karakter untuk diterapkan di rumah.
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
                className="grid gap-4 rounded-3xl border border-white/60 bg-white/60 p-6 shadow-soft backdrop-blur-lg backdrop-saturate-150 sm:grid-cols-[auto,1fr] sm:items-center"
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
              eyebrow="Sering ditanyakan"
              title="Informasi penting seputar pendaftaran dan kegiatan sekolah"
              description="Jika ada pertanyaan lain, kami dengan senang hati menjawab melalui WhatsApp ataupun ketika Anda berkunjung langsung."
            />
            <CTAButton config={faqCta} className="w-full sm:w-auto" />
          </m.div>
          <FaqAccordion items={faqs} revealOnView className="space-y-4" />
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
              <span className="inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/60 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-secondary backdrop-blur-sm backdrop-saturate-150">
                Siap bergabung
              </span>
              <h2 className="text-balance text-3xl font-semibold text-text sm:text-4xl">
                Jadwalkan tur sekolah dan lihat langsung implementasi Kurikulum Merdeka kami
              </h2>
              <p className="text-base leading-relaxed text-text-muted">
                Kami membuka sesi kunjungan setiap Senin dan Kamis. Tim akan menunjukkan sentra belajar, dokumentasi Projek Profil Pelajar Pancasila, dan bukti legalitas sekolah.
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
