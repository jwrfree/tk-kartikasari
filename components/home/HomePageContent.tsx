'use client';

import FaqAccordion from "@/components/FaqAccordion";
import CTAButton from "@/components/CTAButton";
import TestimonialList from "@/components/TestimonialList";
import PageSection from "@/components/layout/PageSection";
import SectionHeader from "@/components/layout/SectionHeader";
import HomeDailyAgenda from "./HomeDailyAgenda";
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
import type { Post as BlogPost } from "@/lib/blog";
import type { Testimonial } from "@/lib/types/site";
import { ArrowRight, CheckCircle } from "react-bootstrap-icons";
import Link from "next/link";
import Image from "next/image";
import AnimateIn from "@/components/AnimateIn";
import { homeJourney as homeJourneyStatic } from "@/content/home";
import {
  ppdbMetaDescription,
  syaratDanKetentuan as ppdbRequirementsStatic,
} from "@/content/ppdb";

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
  blogPosts: BlogPost[];
  testimonials: Testimonial[];
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
  blogPosts,
  testimonials,
}: HomePageContentProps) {
  const teacherStudentRatio =
    stats.find((item) => item.label.toLowerCase().includes("rasio"))?.value ?? "1 : 8";
  const schoolNpsn = credentials.find((item) => item.label.toLowerCase() === "npsn")?.value;

  const biayaRequirement = ppdbRequirementsStatic.find((item) =>
    item.title.toLowerCase().includes("biaya"),
  );
  const documentRequirement = ppdbRequirementsStatic.find((item) =>
    item.title.toLowerCase().includes("dokumen"),
  );

  const onboardingSteps = [
    {
      key: "routine",
      href: "#pengalaman",
      icon: "🧭",
      title: "Kenali Rutinitas & Lingkungan",
      description:
        journey[0]?.description ??
        homeJourneyStatic[0]?.description ??
        "Lihat seperti apa agenda harian dan suasana pembelajaran yang menenangkan untuk si kecil.",
      linkLabel: "Lihat rutinitas",
    },
    {
      key: "cost",
      href: "/biaya",
      icon: "💡",
      title: "Cek Perkiraan Biaya",
      description:
        biayaRequirement?.description ??
        "Pelajari struktur biaya dan opsi pembayaran agar Ayah Bunda bisa merencanakan dengan tenang.",
      linkLabel: "Lihat biaya",
    },
    {
      key: "documents",
      href: "/ppdb#requirements",
      icon: "🗂️",
      title: "Siapkan Dokumen Penting",
      description:
        documentRequirement?.description ??
        "Siapkan dokumen dasar seperti akta kelahiran, KK, dan identitas orang tua untuk kelancaran administrasi.",
      linkLabel: "Cek syarat",
    },
    {
      key: "apply",
      href: "/kontak",
      icon: "📍",
      title: "Diskusikan Ketersediaan Kuota",
      description:
        ppdbMetaDescription ??
        "Hubungi admin TK Kartikasari untuk mengetahui status kuota terbaru, daftar tunggu, dan jadwal pembaruan PPDB.",
      linkLabel: "Hubungi admin",
    },
  ] as const;

  return (
      <main>
        {/* Section 1: Hero (Kail) */}
        <PageSection
          className="relative overflow-hidden"
          padding="none"
          containerClassName="relative grid gap-16 pb-24 pt-20 lg:grid-cols-[1.1fr,0.9fr] lg:items-center"
        >
          <div className="pointer-events-none absolute inset-0" aria-hidden="true">
            <div className="absolute -top-32 right-16 h-72 w-72 rounded-full bg-secondary/20 blur-3xl" />
            <div className="absolute -left-32 top-24 h-80 w-80 rounded-full bg-primary/25 blur-3xl" />
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-hero-gradient" />
          </div>
          <AnimateIn
            className="relative space-y-8"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/60 px-4 py-2 text-sm font-semibold text-secondary shadow-soft backdrop-blur-sm backdrop-saturate-150">
              <span className="h-2.5 w-2.5 rounded-full bg-secondary" aria-hidden="true" />
              {schoolName} • Kurikulum Merdeka PAUD
            </span>
            <h1 className="text-balance text-4xl font-bold leading-tight text-text sm:text-5xl">
              Awal Terbaik untuk Si Kecil: Belajar Sambil Ceria di Rumah Kedua Mereka
            </h1>
            <p className="max-w-xl text-pretty text-lg text-text-muted sm:text-xl">
              Sebagai TK berpengalaman di Bantarsari, kami menggabungkan tradisi pengajaran yang hangat dengan Kurikulum Merdeka. Kami memastikan setiap anak mendapat perhatian personal dalam lingkungan yang aman, sehingga mereka tumbuh percaya diri, kreatif, dan siap untuk jenjang sekolah berikutnya.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <CTAButton ctaKey="heroVisit" />
              <Link href="/ppdb" className="btn-secondary w-full sm:w-auto">
                Info PPDB
              </Link>
            </div>
            <div className="grid gap-6 pt-6 sm:grid-cols-2 md:grid-cols-3">
              {stats.map((item) => (
                <div
                  key={item.label}
                  className="rounded-3xl border border-white/60 bg-white/60 p-5 text-left shadow-soft backdrop-blur-lg backdrop-saturate-150"
                >
                  <p className="text-3xl font-bold text-text">{item.value}</p>
                  <p className="mt-1 text-base text-text-muted">{item.label}</p>
                </div>
              ))}
            </div>
          </AnimateIn>

          <AnimateIn className="relative flex justify-center">
            <div className="absolute -top-12 right-6 h-40 w-40 rounded-full bg-accent/30 blur-2xl" aria-hidden="true" />
            <div className="absolute -bottom-6 left-2 h-36 w-36 rounded-full bg-secondary/25 blur-2xl md:-bottom-10" aria-hidden="true" />
            <div className="relative w-full max-w-md space-y-5 rounded-[2.5rem] border border-white/60 bg-white/70 p-8 text-center shadow-soft backdrop-blur-xl backdrop-saturate-150">
              <p className="text-lg font-semibold text-secondary">Belajar aktif & penuh perhatian</p>
              <p className="text-base leading-relaxed text-text-muted">
                Kelas kecil dengan guru pendamping personal membantu anak cepat nyaman, bereksplorasi, dan siap melanjutkan ke jenjang berikutnya.
              </p>
              <div className="flex items-center justify-center gap-3 text-base font-semibold text-text">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/15 text-lg" aria-hidden="true">
                  😊
                </span>
                Rasio guru : anak {teacherStudentRatio}
              </div>
            </div>
          </AnimateIn>
        </PageSection>

        {/* Section 2: Langkah Onboarding */}
        <PageSection
          className="relative border-y border-white/50 bg-gradient-to-br from-primary/10 via-white to-secondary/10"
          padding="tight"
        >
          <div className="pointer-events-none absolute inset-0" aria-hidden="true">
            <div className="absolute left-8 top-8 h-40 w-40 rounded-full bg-primary/20 blur-3xl" />
            <div className="absolute right-12 bottom-12 h-48 w-48 rounded-full bg-secondary/20 blur-3xl" />
          </div>
          <AnimateIn className="relative">
            <SectionHeader
              align="center"
              eyebrow="Mulai dari Sini"
              eyebrowVariant="primary"
              title="Alur singkat bergabung bersama TK Kartikasari"
              description="Gunakan empat langkah ini sebagai panduan mengenal sekolah dan menyiapkan dokumen sebelum periode pendaftaran tatap muka berikutnya dibuka."
            />
          </AnimateIn>
          <div className="relative mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {onboardingSteps.map((step, index) => (
              <AnimateIn
                key={step.key}
                className="h-full"
              >
                <Link
                  href={step.href}
                  className="focus-visible-ring group flex h-full flex-col justify-between rounded-3xl border border-white/60 bg-white/70 p-7 text-left shadow-soft backdrop-blur-xl backdrop-saturate-150 transition-all duration-300 hover:-translate-y-1 hover:border-primary/60"
                >
                  <div>
                    <span className="inline-flex items-center gap-3 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
                      <span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-primary/15 text-base" aria-hidden="true">
                        {index + 1}
                      </span>
                      Langkah {index + 1}
                    </span>
                    <div className="mt-6 flex items-start gap-3">
                      <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-2xl" aria-hidden="true">
                        {step.icon}
                      </span>
                      <div>
                        <h3 className="text-lg font-semibold text-text">{step.title}</h3>
                        <p className="mt-3 text-sm leading-relaxed text-text-muted">{step.description}</p>
                      </div>
                    </div>
                  </div>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-transform group-hover:translate-x-1">
                    {step.linkLabel} <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
              </AnimateIn>
            ))}
          </div>
          <div className="relative mt-12 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-center">
            <Link href="/ppdb" className="btn-primary w-full sm:w-auto">
              Info PPDB 2025/2026
            </Link>
            <CTAButton ctaKey="visitSchedule" className="w-full sm:w-auto" />
          </div>
        </PageSection>

        {/* Section 3: Keunggulan/Highlights (Janji Utama) - REVISED */}
        <PageSection
          className="relative border-y border-white/50 bg-white/50 backdrop-blur-sm backdrop-saturate-150"
          padding="tight"
        >
          <AnimateIn>
            <SectionHeader
              align="center"
              eyebrow="Mengapa orang tua mempercayakan anaknya"
              eyebrowVariant="primary"
              title="Tiga janji utama kami untuk ketenangan Ayah & Bunda"
              description="Komitmen kami adalah menciptakan lingkungan belajar yang aman secara legal, nyaman untuk anak, dan berakar pada nilai-nilai keindonesiaan."
            />
          </AnimateIn>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {highlights.map((item) => (
              <AnimateIn
                key={item.title}
                className="card h-full border-white/60 bg-white/70 p-7 text-left backdrop-blur-xl backdrop-saturate-150"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/15 text-2xl" aria-hidden="true">
                  {item.icon}
                </span>
                <h3 className="mt-6 text-xl font-semibold text-text">{item.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-text-muted">{item.description}</p>
              </AnimateIn>
            ))}
          </div>
        </PageSection>

        {/* Section 3: Kredensial & Sejarah (Bukti Kepercayaan) - REVISED */}
        <PageSection className="relative" padding="tight">
          <AnimateIn
            className="space-y-8"
          >
            <SectionHeader
              eyebrow="Bukti Kepercayaan Anda"
              eyebrowVariant="secondary"
              title="Kredensial Resmi dan Perjalanan Panjang yang Teruji"
              description="Seluruh informasi sekolah tersimpan di basis data Kemendikbudristek dan diperkuat oleh sejarah layanan kami untuk keluarga Bantarsari."
            />
            <div className="grid gap-6 lg:grid-cols-[1.1fr,0.9fr]">
              <div className="card h-full space-y-5 border-white/70 bg-white/70 p-7 shadow-soft backdrop-blur-xl backdrop-saturate-150">
                <h3 className="text-2xl font-semibold text-text">Legalitas & Info Resmi</h3>
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
                <h3 className="text-2xl font-semibold text-text">Jejak Langkah Kami</h3>
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
          </AnimateIn>
        </PageSection>

        {/* Section 4: Pilar Kurikulum (Filosofi) */}
        <PageSection
          id="kurikulum-merdeka"
          className="bg-gradient-to-br from-secondary/10 via-white to-primary/10"
          padding="tight"
        >
          <AnimateIn
            className="space-y-8"
          >
            <SectionHeader
              eyebrow="Filosofi Pendidikan Kami"
              eyebrowVariant="secondary"
              title="Tiga Pilar Kami dalam Membentuk Karakter Anak"
              description="Kami fokus pada tiga area utama untuk memastikan anak tidak hanya pintar, tetapi juga tumbuh menjadi pribadi yang baik, bangga pada budayanya, dan siap untuk belajar lebih lanjut."
            />
            <div className="grid gap-6 md:grid-cols-3">
              {curriculumPillars.map((pillar) => (
                <AnimateIn
                  key={pillar.title}
                  className="card h-full border-white/70 bg-white/70 p-7 text-left shadow-soft backdrop-blur-xl backdrop-saturate-150"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-secondary">
                    {pillar.subtitle}
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold text-text">{pillar.title}</h3>
                  <ul className="mt-5 space-y-2 text-base text-text-muted">
                    {pillar.points.map((point) => (
                      <li key={point} className="flex items-start gap-3">
                        <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-primary" aria-hidden="true" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </AnimateIn>
              ))}
            </div>
          </AnimateIn>
        </PageSection>

        {/* Section 5: Program & Aktivitas Harian (Eksekusi) */}
        <PageSection
          id="program"
          padding="tight"
          containerClassName="grid gap-12 lg:grid-cols-[1fr,1fr] lg:items-start"
        >
          <AnimateIn
            className="space-y-6"
          >
            <SectionHeader
              eyebrow="Program Kurikulum Merdeka"
              eyebrowVariant="secondary"
              title="Jalur Belajar yang Disesuaikan untuk Setiap Anak"
              description="Guru inti dan guru pendamping berkolaborasi untuk menyeimbangkan pengembangan karakter, kemampuan dasar, dan kegembiraan bermain melalui projek-projek yang relevan dengan dunia anak."
            />
            <ul className="space-y-3 text-base text-text-muted">
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary/15 text-xs font-semibold text-primary" aria-hidden="true">
                  1
                </span>
                Observasi minat, gaya belajar, serta diskusi orang tua untuk menentukan kebutuhan utama anak.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary/15 text-xs font-semibold text-primary" aria-hidden="true">
                  2
                </span>
                Perumusan tujuan pembelajaran Kurikulum Merdeka dan strategi diferensiasi setiap awal tema.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary/15 text-xs font-semibold text-primary" aria-hidden="true">
                  3
                </span>
                Pameran karya, refleksi projek P5, dan laporan portofolio terstruktur di akhir tema.
              </li>
            </ul>
          </AnimateIn>
          <div className="grid gap-6">
            {programs.map((program) => (
              <AnimateIn
                key={program.name}
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
                  <span className="inline-flex h-12 min-w-[3rem] items-center justify-center rounded-2xl bg-primary/15 text-2xl" aria-hidden="true">
                    ✨
                  </span>
                </div>
                <ul className="mt-6 space-y-2 text-base text-text-muted">
                  {program.points.map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-secondary" aria-hidden="true" />
                      {point}
                    </li>
                  ))}
                </ul>
              </AnimateIn>
            ))}
          </div>
        </PageSection>

        <PageSection
          id="pengalaman"
          className="relative overflow-hidden"
          padding="tight"
          containerClassName="relative grid gap-12 lg:grid-cols-[0.9fr,1.1fr] lg:items-center"
        >
          <div className="absolute inset-0 bg-grid-dots [background-size:24px_24px] opacity-40" aria-hidden="true" />
          <AnimateIn
            className="relative space-y-6"
          >
            <SectionHeader
              eyebrow="Aktivitas Harian"
              eyebrowVariant="surface"
              title="Transisi Lembut yang Menjaga Antusiasme Anak"
              description="Rangkaian kegiatan mengikuti struktur Kurikulum Merdeka PAUD: mulai dari pembiasaan nilai, eksplorasi, hingga refleksi dan asesmen autentik."
            />
            <div className="rounded-3xl border border-white/60 bg-white/60 p-6 shadow-soft backdrop-blur-lg backdrop-saturate-150">
              <p className="text-base font-semibold text-secondary">Kolaborasi dengan Orang Tua</p>
              <p className="mt-3 text-base leading-relaxed text-text-muted">
                Orang tua menerima ringkasan harian, refleksi projek P5, dan rekomendasi penguatan karakter untuk diterapkan di rumah.
              </p>
            </div>
          </AnimateIn>
          <div className="relative space-y-4">
            <HomeDailyAgenda npsn={schoolNpsn} teacherStudentRatio={teacherStudentRatio} />
            {journey.map((item) => (
              <AnimateIn
                key={item.title}
                className="grid gap-4 rounded-3xl border border-white/60 bg-white/60 p-6 shadow-soft backdrop-blur-lg backdrop-saturate-150 sm:grid-cols-[auto,1fr] sm:items-center"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary/10 text-2xl" aria-hidden="true">
                    {item.icon}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-secondary">{item.time} WIB</p>
                    <p className="text-lg font-semibold text-text">{item.title}</p>
                  </div>
                </div>
                <p className="text-base leading-relaxed text-text-muted sm:pl-4">{item.description}</p>
              </AnimateIn>
            ))}
          </div>
        </PageSection>
        
        {/* Section 6: Testimoni (Bukti Sosial) - REVISED POSITION */}
        <TestimonialList testimonials={testimonials} />

        {/* Section 7: Blog */}
        <PageSection id="blog" padding="tight">
          <AnimateIn
            className="space-y-8"
          >
            <SectionHeader
              eyebrow="Blog & Berita"
              title="Tips Parenting dan Kegiatan Sekolah Terbaru"
              description="Ikuti artikel terbaru dari kami untuk mendapatkan wawasan seputar dunia pendidikan anak usia dini dan melihat keseruan kegiatan di TK Kartikasari."
            />
            {blogPosts.length > 0 ? (
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {blogPosts.slice(0, 3).map((post) => {
                  const coverImage = post.coverImage;
                  const publishedAt = post.date;
                  const rawBody = post.body?.raw ?? '';
                  const normalizedBody = rawBody
                    .replace(/[#*_`>\-]/g, '')
                    .replace(/\[(.*?)\]\(.*?\)/g, '$1')
                    .replace(/\s+/g, ' ')
                    .trim();
                  const description =
                    normalizedBody.length > 160 ? `${normalizedBody.slice(0, 157)}...` : normalizedBody;

                  return (
                    <Link href={`/blog/${post.slug}`} key={post.slug} className="focus-visible-ring group block rounded-2xl">
                      <article className="card h-full transform-gpu bg-white/60 shadow-soft backdrop-blur-xl transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-primary/20">
                        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-t-2xl">
                          {coverImage ? (
                            <Image
                              src={coverImage}
                              alt={post.title}
                              fill
                              className="object-cover"
                              sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                              loading="lazy"
                            />
                          ) : (
                            <div className="flex h-full w-full items-center justify-center bg-secondary/10 text-secondary">
                              <span className="text-sm font-semibold">TK Kartikasari</span>
                            </div>
                          )}
                        </div>
                        <div className="flex h-full flex-col p-6">
                          <p className="text-sm text-text-muted">
                            {new Date(publishedAt).toLocaleDateString('id-ID', {
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric',
                            })}
                          </p>
                          <h3 className="mt-2 text-lg font-semibold text-text">{post.title}</h3>
                          <p className="mt-2 flex-grow text-sm text-text-muted">
                            {description || 'Baca kisah terbaru dari TK Kartikasari.'}
                          </p>
                          <div className="mt-4 flex items-center text-sm font-semibold text-primary transition-transform group-hover:translate-x-1">
                            Baca selengkapnya <ArrowRight className="ml-1 h-4 w-4" />
                          </div>
                        </div>
                      </article>
                    </Link>
                  );
                })}
              </div>
            ) : (
              <div className="card border-white/60 bg-white/70 p-8 text-center shadow-soft backdrop-blur-xl">
                <h3 className="text-xl font-semibold text-text">Belum ada cerita terbaru</h3>
                <p className="mt-3 text-base leading-relaxed text-text-muted">
                  Tim kami sedang mempersiapkan artikel yang bisa membantu Ayah dan Bunda. Sementara itu, silakan jelajahi halaman lain atau hubungi kami untuk informasi langsung.
                </p>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
                  <Link href="/program" className="btn-primary inline-flex items-center justify-center gap-2">
                    Lihat program belajar
                  </Link>
                  <Link href="/kontak" className="btn-secondary inline-flex items-center justify-center gap-2">
                    Hubungi kami
                  </Link>
                </div>
              </div>
            )}
          </AnimateIn>
        </PageSection>

        {/* Section 8: FAQ */}
        <PageSection
          id="faq"
          padding="tight"
          containerClassName="grid gap-12 lg:grid-cols-[0.9fr,1fr] lg:items-start"
        >
          <AnimateIn
            className="space-y-6"
          >
            <SectionHeader
              eyebrow="Sering Ditanyakan"
              title="Informasi Penting Seputar Pendaftaran"
              description="Jika ada pertanyaan lain, kami dengan senang hati menjawab melalui WhatsApp ataupun ketika Anda berkunjung langsung."
            />
            <CTAButton ctaKey="faqInquiry" />
          </AnimateIn>
          <AnimateIn>
            <FaqAccordion items={faqs} revealOnView className="space-y-4" />
          </AnimateIn>
        </PageSection>

        {/* Section 9: CTA Final - REVISED */}
        <PageSection className="relative pb-36" padding="tight">
          <AnimateIn
            className="card flex flex-col gap-6 overflow-hidden border-white/70 bg-gradient-to-br from-secondary/10 via-white to-primary/10 p-10 text-center md:flex-row md:items-center md:justify-between md:text-left"
          >
            <div className="max-w-xl space-y-4">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/60 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-secondary backdrop-blur-sm backdrop-saturate-150">
                Siap Bergabung
              </span>
              <h2 className="text-balance text-3xl font-semibold text-text sm:text-4xl">
                Lihat Langsung Bagaimana Anak-Anak Belajar dengan Gembira
              </h2>
              <p className="text-base leading-relaxed text-text-muted">
                Kami mengundang Anda untuk merasakan sendiri suasana hangat di kelas kami. Lihat sentra belajar yang interaktif dan temukan bagaimana projek seru kami menumbuhkan kreativitas serta rasa percaya diri anak.
              </p>
            </div>
            <div className="flex flex-col gap-3 md:flex-row md:items-center">
              <CTAButton ctaKey="visitSchedule" />
              <a href="#program" className="btn-outline w-full sm:w-auto">
                Lihat Program Kembali
              </a>
            </div>
          </AnimateIn>
        </PageSection>
      </main>
  );
}
