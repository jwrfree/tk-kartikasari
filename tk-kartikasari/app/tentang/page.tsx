import Link from "next/link";

import PageHeader from "@/components/layout/PageHeader";
import PageSection from "@/components/layout/PageSection";
import {
  aboutDailyRhythm,
  aboutExperiencePillars,
  aboutHeaderHighlights,
  aboutMetaDescription,
  aboutMission,
  aboutStrengths,
} from "@/content/about";
import { officialMilestones, officialProfile } from "@/data/official";
import site from "@/data/site.json";
import { createPageMetadata } from "@/lib/metadata";

const profileItems = [
  { label: "Nama Sekolah", value: site.schoolName },
  { label: "NPSN", value: officialProfile.npsn },
  { label: "Tanggal Berdiri", value: officialProfile.establishmentDate },
  { label: "SK Operasional", value: officialProfile.operationalLicense },
  { label: "Kurikulum", value: officialProfile.curriculum },
  { label: "Luas Lahan", value: officialProfile.landArea },
  { label: "Alamat", value: site.address },
  { label: "Wilayah", value: officialProfile.locationArea },
  { label: "Kepala Sekolah", value: site.headmaster },
  { label: "Email", value: officialProfile.email },
  { label: "WhatsApp", value: site.whatsapp },
  { label: "Jam Buka", value: site.openingHours },
];

export const metadata = createPageMetadata({
  title: "Tentang",
  description: aboutMetaDescription,
  path: "/tentang",
});

export default function Page() {
  return (
    <>
      <PageHeader
        eyebrow="Tentang Sekolah"
        title={`${officialProfile.yearsOperating}+ Tahun Menguatkan Profil Pelajar Pancasila di Bantarsari`}
        description={
          <>
            TK Kartikasari berdiri pada {officialProfile.establishmentDate} dengan NPSN {officialProfile.npsn} dan SK
            operasional {officialProfile.operationalLicense}. Kami menjaga akuntabilitas layanan pendidikan anak usia
            dini melalui tata kelola yang transparan dan lingkungan yang aman.
            {" "}
            Saat ini kami menerapkan Kurikulum Merdeka PAUD secara menyeluruh untuk menumbuhkan Profil Pelajar
            Pancasila melalui projek kolaboratif, pembelajaran terdiferensiasi, dan dukungan erat keluarga.
          </>
        }
      >
        <div className="flex flex-wrap gap-3 pt-4">
          {aboutHeaderHighlights.map((item) => (
            <span
              key={item}
              className="inline-flex items-center gap-2 rounded-full border border-secondary/50 bg-white/60 px-4 py-2 text-sm font-medium text-secondary backdrop-blur-sm backdrop-saturate-150 transition-all duration-300 hover:-translate-y-0.5 hover:border-secondary hover:bg-secondary/10"
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
              <h2 className="text-3xl font-semibold text-text">26 Tahun Bertumbuh Bersama Keluarga Bantarsari</h2>
            </div>
            <p className="text-base leading-relaxed text-text-muted">
              Sejak 1998 kami menjaga kehangatan kelas, menyapa anak satu per satu, dan memastikan setiap aktivitas
              berlangsung di ruang yang aman serta sesuai standar Kemendikbudristek. Sentra belajar kami didesain untuk
              memadukan rasa ingin tahu alami anak dengan tujuan perkembangan yang jelas.
            </p>
            <p className="text-base leading-relaxed text-text-muted">
              Implementasi Kurikulum Merdeka PAUD membuat guru lebih leluasa menyesuaikan strategi dengan kebutuhan
              tiap anak. Kami menyeimbangkan kegiatan Projek Profil Pelajar Pancasila, pembelajaran terdiferensiasi, dan
              asesmen autentik agar anak merasa dihargai sekaligus tertantang.
            </p>
            <ul className="grid gap-3 sm:grid-cols-3">
              {aboutExperiencePillars.map((pillar) => (
                <li
                  key={pillar.title}
                  className="group relative overflow-hidden rounded-2xl border border-white/60 bg-white/60 p-4 transition-all duration-300 backdrop-blur-lg backdrop-saturate-150 hover:-translate-y-1 hover:border-secondary/60 hover:shadow-lg"
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
            <h3 className="text-2xl font-semibold text-text">Pendampingan berbasis Kurikulum Merdeka</h3>
            <p className="text-base leading-relaxed text-text-muted">
              Guru melakukan observasi berkala, menyusun asesmen autentik, dan menyampaikan catatan positif kepada
              orang tua. Setiap anak mendapatkan rencana belajar terdiferensiasi yang menumbuhkan rasa percaya diri.
            </p>
            <p className="text-base leading-relaxed text-text-muted">
              Seluruh catatan perkembangan tersimpan rapi sebagai portofolio sehingga guru dan keluarga dapat
              memantau kemajuan karakter, literasi, dan numerasi secara terpadu.
            </p>
          </div>
          <div className="card space-y-4 p-7 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl">
            <h3 className="text-2xl font-semibold text-text">Kemitraan Aktif dengan Orang Tua</h3>
            <p className="text-base leading-relaxed text-text-muted">
              Kami mengundang orang tua terlibat dalam agenda mingguan, sesi refleksi Projek P5, serta perayaan
              komunitas. Kolaborasi ini memastikan nilai Profil Pelajar Pancasila terus hidup di rumah.
            </p>
            <p className="text-base leading-relaxed text-text-muted">
              Informasi harian dibagikan melalui kanal resmi sehingga keluarga dapat melanjutkan cerita dan kebiasaan
              baik bersama anak setelah pulang.
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
            Terdaftar di Kemendikbudristek dengan NPSN {officialProfile.npsn} dan lahan {officialProfile.landArea}, kami
            mendampingi anak usia 4–6 tahun melalui pembelajaran aktif yang aman, nyaman, dan kaya eksplorasi.
          </p>
          <ul className="grid gap-4 sm:grid-cols-2">
            {profileItems.map((item) => (
              <li
                key={item.label}
                className="rounded-2xl border border-white/60 bg-white/60 p-5 transition-all duration-300 backdrop-blur-lg backdrop-saturate-150 hover:-translate-y-1 hover:border-secondary hover:shadow-lg"
              >
                <p className="text-xs uppercase tracking-wide text-secondary">{item.label}</p>
                <p className="mt-1 text-base font-medium text-text">{item.value}</p>
              </li>
            ))}
          </ul>
          <div className="rounded-2xl border border-white/60 bg-white/60 p-5 transition-all duration-300 backdrop-blur-lg backdrop-saturate-150 hover:-translate-y-1 hover:border-secondary/60 hover:shadow-lg">
            <p className="text-xs font-semibold uppercase tracking-wide text-secondary">Perjalanan Singkat</p>
            <ul className="mt-3 space-y-2 text-sm text-text-muted">
              {officialMilestones.map((milestone) => (
                <li key={milestone.year} className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-secondary/10 text-xs font-semibold text-secondary">
                    {milestone.year}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-text">{milestone.title}</p>
                    <p>{milestone.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="card space-y-5 bg-secondary/5 p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl">
          <h3 className="text-2xl font-semibold text-secondary">Ritme Sehari di TK Kartikasari</h3>
          <p className="text-base leading-relaxed text-text-muted">
            Rutinitas Kurikulum Merdeka yang lembut dan konsisten membantu anak merasa aman sambil memupuk tanggung jawab kecil.
          </p>
          <ul className="space-y-4">
            {aboutDailyRhythm.map((item, index) => (
              <li
                key={item.title}
                className="group flex gap-4 rounded-2xl border border-white/60 bg-white/60 p-4 transition-all duration-300 backdrop-blur-lg backdrop-saturate-150 hover:-translate-y-1 hover:border-secondary/60 hover:shadow-lg"
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
              Legalitas lengkap, pengalaman panjang, dan Kurikulum Merdeka yang konsisten membuat orang tua merasa
              tenang. Berikut tiga hal yang paling sering diapresiasi keluarga yang telah bergabung.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {aboutStrengths.map((item) => (
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
            {aboutMission.map((point) => (
              <li
                key={point}
                className="rounded-2xl border border-white/60 bg-white/60 p-4 transition-all duration-300 backdrop-blur-lg backdrop-saturate-150 hover:-translate-y-1 hover:border-secondary/60 hover:shadow-lg"
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
                className="btn-outline border-white/70 bg-white/30 text-white backdrop-saturate-150 hover:border-white hover:bg-white/40 hover:text-secondary"
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
