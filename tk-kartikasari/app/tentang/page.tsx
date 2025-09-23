import Link from "next/link";

import PageHeader from "@/components/layout/PageHeader";
import PageSection from "@/components/layout/PageSection";
import site from "@/data/site.json";

const profileItems = [
  { label: "Nama Sekolah", value: site.schoolName },
  { label: "Alamat", value: site.address },
  { label: "Kepala Sekolah", value: site.headmaster },
  { label: "WhatsApp", value: site.whatsapp },
  { label: "Jam Buka", value: site.openingHours },
];

const headerHighlights = [
  "Lingkungan aman & ramah anak",
  "Guru komunikatif dengan orang tua",
  "Belajar melalui bermain tematik",
];

const experiencePillars = [
  {
    title: "Hangat & Personal",
    description:
      "Guru menyapa anak satu per satu sambil mengenali kebiasaan, minat, dan kebutuhan unik mereka.",
  },
  {
    title: "Aktivitas Bermakna",
    description:
      "Proyek tematik, bermain peran, dan eksplorasi alam menumbuhkan rasa percaya diri serta imajinasi.",
  },
  {
    title: "Karakter Sehari-hari",
    description:
      "Nilai sopan santun, tanggung jawab, dan empati dipraktikkan melalui rutinitas sederhana yang menyenangkan.",
  },
];

const dailyRhythm = [
  {
    title: "Sesi Pembuka yang Hangat",
    description:
      "Anak mengikuti doa, lagu, dan berbagi perasaan agar siap memulai hari dengan pikiran positif.",
  },
  {
    title: "Eksplorasi Sentra & Outdoor",
    description:
      "Kegiatan berpindah antar sentra, eksperimen sains mini, dan bermain di luar menyalurkan energi anak.",
  },
  {
    title: "Refleksi & Berbagi Cerita",
    description:
      "Anak diajak menceritakan penemuannya, merapikan alat, lalu menutup hari dengan lagu favorit bersama.",
  },
];

const strengths = [
  {
    title: "Ruang Belajar Tematik",
    description:
      "Sentra literasi, sains mini, dan area seni memancing rasa ingin tahu sekaligus melatih motorik halus.",
  },
  {
    title: "Rutinitas Penuh Makna",
    description:
      "Agenda harian menyeimbangkan kegiatan aktif dan tenang sehingga energi anak tetap stabil.",
  },
  {
    title: "Kemitraan dengan Orang Tua",
    description:
      "Catatan perkembangan, foto kegiatan, dan temu wicara rutin menjaga keterlibatan keluarga.",
  },
];

const mission = [
  "Menumbuhkan rasa percaya diri, empati, dan kemandirian melalui kegiatan yang menyenangkan.",
  "Menyediakan pengalaman tematik yang merangsang kreativitas, bahasa, dan numerasi awal.",
  "Menguatkan kolaborasi guru dan orang tua melalui komunikasi harian yang bermakna.",
  "Menghidupkan nilai moral, spiritual, dan cinta lingkungan dalam rutinitas anak.",
  "Menciptakan lingkungan aman, bersih, dan inklusif yang menghargai keberagaman.",
];

export default function Page() {
  return (
    <>
      <PageHeader
        eyebrow="Tentang Sekolah"
        title="Belajar dengan Hati, Tumbuh dengan Percaya Diri"
        description={
          <>
            TK Kartikasari adalah ruang aman bagi anak usia dini di Bantarsari untuk mengeksplorasi dunia melalui bermain
            bermakna. Kami menenun rasa ingin tahu, keceriaan, dan nilai hidup sehari-hari agar setiap anak pulang dengan
            cerita yang membanggakan.
          </>
        }
      >
        <div className="flex flex-wrap gap-3 pt-4">
          {headerHighlights.map((item) => (
            <span
              key={item}
              className="inline-flex items-center gap-2 rounded-full border border-secondary/40 bg-white/80 px-4 py-2 text-sm font-medium text-secondary transition-all duration-300 hover:-translate-y-0.5 hover:border-secondary hover:bg-secondary/10"
            >
              <span className="h-2 w-2 rounded-full bg-secondary" aria-hidden="true" />
              {item}
            </span>
          ))}
        </div>
      </PageHeader>

      <PageSection
        id="cerita"
        padding="relaxed"
        className="bg-gradient-to-br from-secondary/10 via-white to-primary/10"
        containerClassName="grid gap-8 md:grid-cols-[1.1fr,0.9fr]"
      >
        <article className="card relative overflow-hidden space-y-6 p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl">
          <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-transparent to-primary/10" aria-hidden="true" />
          <div className="relative space-y-6">
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-secondary">Cerita Kami</p>
              <h2 className="text-3xl font-semibold text-text">Tumbuh Bersama dalam Suasana Penuh Rasa Ingin Tahu</h2>
            </div>
            <p className="text-base leading-relaxed text-text-muted">
              Setiap pagi ruang kelas kami dipenuhi sapaan hangat, lagu ceria, dan sudut bermain yang siap dieksplorasi.
              Tim pendidik menyiapkan pengalaman yang memadukan rasa ingin tahu alami anak dengan kegiatan tematik yang
              terstruktur tetapi fleksibel.
            </p>
            <p className="text-base leading-relaxed text-text-muted">
              Kami percaya anak belajar paling baik saat merasa aman dan dihargai. Karena itu, ritme kelas kami selalu
              memberi ruang untuk bergerak, bertanya, dan mencoba hal baru sambil menanamkan kebiasaan baik yang
              sederhana.
            </p>
            <ul className="grid gap-3 sm:grid-cols-3">
              {experiencePillars.map((pillar) => (
                <li
                  key={pillar.title}
                  className="group relative overflow-hidden rounded-2xl border border-white/50 bg-white/80 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-secondary/60 hover:shadow-lg"
                >
                  <span className="mb-2 inline-flex rounded-full bg-secondary/10 px-3 py-1 text-xs font-semibold text-secondary transition-colors duration-300 group-hover:bg-secondary group-hover:text-white">
                    {pillar.title}
                  </span>
                  <p className="text-sm text-text-muted">{pillar.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </article>
        <div className="space-y-6">
          <div className="card space-y-4 p-7 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl">
            <h3 className="text-2xl font-semibold text-text">Pendampingan yang Menyentuh Hati</h3>
            <p className="text-base leading-relaxed text-text-muted">
              Guru melakukan observasi berkala, mendokumentasikan kemajuan kecil, dan menyampaikan catatan positif kepada
              orang tua. Setiap anak mendapat perhatian personal yang menumbuhkan rasa percaya diri.
            </p>
            <p className="text-base leading-relaxed text-text-muted">
              Pendekatan ini membantu kami menyesuaikan strategi pengajaran sehingga anak merasa nyaman dan berani
              bereksplorasi sesuai tahap perkembangannya.
            </p>
          </div>
          <div className="card space-y-4 p-7 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl">
            <h3 className="text-2xl font-semibold text-text">Kemitraan Aktif dengan Orang Tua</h3>
            <p className="text-base leading-relaxed text-text-muted">
              Kami mengundang orang tua untuk terlibat melalui agenda mingguan, sesi berbagi cerita, dan perayaan
              komunitas. Kolaborasi ini memastikan pesan sekolah berlanjut harmonis di rumah.
            </p>
            <p className="text-base leading-relaxed text-text-muted">
              Informasi harian dibagikan melalui pesan singkat sehingga keluarga selalu tahu cerita yang bisa dilanjutkan
              bersama anak setelah pulang.
            </p>
          </div>
        </div>
      </PageSection>

      <PageSection
        id="profil"
        padding="tight"
        containerClassName="grid gap-6 lg:grid-cols-[1.1fr,0.9fr]"
      >
        <div className="card space-y-6 p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl">
          <h2 className="text-3xl font-semibold">Profil Sekolah</h2>
          <p className="text-base leading-relaxed text-text-muted">
            Kami mendampingi anak usia 4–6 tahun dengan pendekatan belajar aktif dan bermain bermakna. Lingkungan sekolah
            yang aman, nyaman, dan penuh warna membantu anak bebas berekspresi sambil dibimbing guru berpengalaman.
          </p>
          <ul className="grid gap-4 sm:grid-cols-2">
            {profileItems.map((item) => (
              <li
                key={item.label}
                className="rounded-2xl border border-border/60 bg-white/90 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-secondary hover:shadow-lg"
              >
                <p className="text-xs uppercase tracking-wide text-secondary">{item.label}</p>
                <p className="mt-1 text-base font-medium text-text">{item.value}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="card space-y-5 bg-secondary/5 p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl">
          <h3 className="text-2xl font-semibold text-secondary">Ritme Sehari di TK Kartikasari</h3>
          <p className="text-base leading-relaxed text-text-muted">
            Rutinitas yang lembut dan konsisten membantu anak merasa aman sekaligus memupuk rasa tanggung jawab kecil.
          </p>
          <ul className="space-y-4">
            {dailyRhythm.map((item, index) => (
              <li
                key={item.title}
                className="group flex gap-4 rounded-2xl border border-transparent bg-white/80 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-secondary/60 hover:shadow-lg"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary/10 text-sm font-semibold text-secondary transition-colors duration-300 group-hover:bg-secondary group-hover:text-white">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h4 className="text-base font-semibold text-text">{item.title}</h4>
                  <p className="mt-1 text-sm text-text-muted">{item.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </PageSection>

      <PageSection id="keunggulan" padding="tight">
        <div className="space-y-10">
          <div className="mx-auto max-w-3xl space-y-4 text-center">
            <h2 className="text-3xl font-semibold text-text">Mengapa Orang Tua Memilih TK Kartikasari</h2>
            <p className="text-base leading-relaxed text-text-muted">
              Kami merancang setiap pengalaman agar anak merasa diterima, tertantang, dan bebas berekspresi. Berikut tiga
              hal yang paling sering disukai keluarga yang telah bergabung.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {strengths.map((item) => (
              <article
                key={item.title}
                className="card h-full space-y-3 p-7 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl"
              >
                <h3 className="text-xl font-semibold text-text">{item.title}</h3>
                <p className="text-base leading-relaxed text-text-muted">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </PageSection>

      <PageSection
        id="visi-misi"
        padding="tight"
        containerClassName="grid gap-6 md:grid-cols-2"
      >
        <div className="card space-y-4 p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl">
          <h2 className="text-3xl font-semibold">Visi</h2>
          <p className="text-base leading-relaxed text-text-muted">
            Menjadi taman kanak-kanak yang penuh kasih, aman, dan inspiratif untuk menumbuhkan kreativitas serta karakter
            mulia anak sebagai bekal masa depan.
          </p>
        </div>
        <div className="card space-y-4 p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl">
          <h2 className="text-3xl font-semibold">Misi</h2>
          <ul className="space-y-3 text-base leading-relaxed text-text-muted">
            {mission.map((point) => (
              <li
                key={point}
                className="rounded-2xl border border-transparent bg-white/80 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-secondary/60 hover:shadow-lg"
              >
                {point}
              </li>
            ))}
          </ul>
        </div>
      </PageSection>

      <PageSection padding="relaxed">
        <div className="card border-none bg-gradient-to-br from-secondary via-secondary/90 to-primary p-10 text-white shadow-2xl transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_35px_60px_-15px_rgba(96,93,255,0.45)]">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="space-y-3">
              <h2 className="text-3xl font-semibold">Siap Mengenal TK Kartikasari Lebih Dekat?</h2>
              <p className="max-w-2xl text-base leading-relaxed text-white/85">
                Kami dengan senang hati menyambut kunjungan keluarga untuk melihat langsung suasana belajar. Mari jadwalkan
                pertemuan atau mulai proses pendaftaran agar anak dapat tumbuh di lingkungan yang penuh perhatian.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/ppdb" className="btn-primary">
                Mulai Pendaftaran
              </Link>
              <Link
                href="/kontak"
                className="btn-outline border-white/80 bg-white/20 text-white hover:border-white hover:bg-white hover:text-secondary"
              >
                Jadwalkan Kunjungan
              </Link>
            </div>
          </div>
        </div>
      </PageSection>
    </>
  );
}
