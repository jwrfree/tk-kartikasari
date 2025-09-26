'use client';

import FaqAccordion from "@/components/FaqAccordion";
import CTAButton from "@/components/CTAButton";
import TestimonialList from "@/components/TestimonialList";
import PageSection from "@/components/layout/PageSection";
import SectionHeader from "@/components/layout/SectionHeader";
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
import { BlogPost } from "@/content/blog";
import { ArrowRight, CheckCircle } from "react-bootstrap-icons";
import Link from "next/link";
import AnimateIn from "@/components/AnimateIn";

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
}: HomePageContentProps) {
  return (
      <main>
        {/* Section 1: Hero (Kail) */}
        <PageSection
          className="relative overflow-hidden"
          padding="none"
          containerClassName="relative grid gap-16 pb-24 pt-20 md:grid-cols-[1.05fr,0.95fr] md:items-center"
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
                Daftar Sekarang
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

          <AnimateIn
            className="relative"
          >
            <div className="absolute -top-12 right-10 h-32 w-32 rounded-full bg-accent/40 blur-2xl"  aria-hidden="true" />
            <div className="absolute -bottom-4 left-0 h-28 w-28 rounded-full bg-secondary/30 blur-2xl md:-bottom-8"  aria-hidden="true" />
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
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/15 text-lg" aria-hidden="true">
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
          </AnimateIn>
        </PageSection>

        {/* Section 2: Keunggulan/Highlights (Janji Utama) - REVISED */}
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
        <TestimonialList />

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
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {blogPosts.slice(0, 3).map((post) => (
                <Link href={`/blog/${post.slug}`} key={post.slug} className="focus-visible-ring group block rounded-2xl">
                  <article className="card h-full transform-gpu bg-white/60 shadow-soft backdrop-blur-xl transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-primary/20">
                    <div className="aspect-[16/9] w-full overflow-hidden rounded-t-2xl">
                      <img src={post.image} alt={post.title} className="h-full w-full object-cover" />
                    </div>
                    <div className="flex h-full flex-col p-6">
                      <p className="text-sm text-text-muted">
                        {new Date(post.publishedAt).toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}
                      </p>
                      <h3 className="mt-2 text-lg font-semibold text-text">{post.title}</h3>
                      <p className="mt-2 flex-grow text-sm text-text-muted">{post.description}</p>
                      <div className="mt-4 flex items-center text-sm font-semibold text-primary transition-transform group-hover:translate-x-1">
                        Baca selengkapnya <ArrowRight className="ml-1 h-4 w-4" />
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
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
