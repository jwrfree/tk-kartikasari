'use client';
import React from "react";
import CTAButton from "@/components/CTAButton";
import PageHeader from "@/components/layout/PageHeader";
import PageSection from "@/components/layout/PageSection";
import { aboutMetaDescription, aboutMission } from "@/content/about";
import { officialMilestones, officialProfile } from "@/data/official";
import site from "@/data/site.json";
import { createPageMetadata } from "@/lib/metadata";
import { LazyMotion, domAnimation, m } from "framer-motion";
import type { Icon as BootstrapIcon } from "react-bootstrap-icons";
import {
  CalendarHeart,
  CheckCircle,
  ClockHistory,
  EnvelopeHeart,
  GeoAlt,
  Icon123,
  Mortarboard,
  PersonBadge,
  PinMap,
  ShieldCheck,
  Whatsapp,
} from "react-bootstrap-icons";

// Metadata for the page
// export const metadata = createPageMetadata({
//   title: "Tentang Kami",
//   description: aboutMetaDescription,
//   path: "/tentang",
// });

// Main component for the "About Us" page
export default function Page() {
  return (
    <LazyMotion features={domAnimation}>
      <PageHeader
        eyebrow="Tentang TK Kartikasari"
        title="Menjadi Rumah Kedua yang Membentuk Karakter Anak Bantarsari"
        description={
          <>
            Perjalanan kami selama {officialProfile.yearsOperating}+ tahun adalah cerita tentang ribuan tawa anak dan
            kepercayaan keluarga Bantarsari. Berdiri sejak {officialProfile.establishmentDate}, kami merawat lingkungan
            belajar seluas {officialProfile.landArea} agar tetap hangat, aman, dan inspiratif. Dengan legalitas resmi
            Kemendikbudristek (NPSN: {officialProfile.npsn}), kami konsisten menerapkan Kurikulum Merdeka untuk
            menumbuhkan generasi ceria, kreatif, dan berkarakter.
          </>
        }
      >
        <div className="flex flex-wrap items-center gap-3 pt-4">
          <CTAButton ctaKey="heroVisit" />
          <a href="#profil" className="btn-outline w-full sm:w-auto">
            Lihat profil resmi
          </a>
        </div>
      </PageHeader>

      <PageSection
        id="cerita-kami"
        padding="tight"
        className="bg-gradient-to-br from-secondary/5 via-white to-primary/5"
      >
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr,0.95fr]">
          <article className="space-y-6">
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-secondary">Cerita Kami</p>
              <h2 className="text-balance text-3xl font-semibold text-text">
                Dari Ruang Belajar Sederhana Hingga Menjadi Kepercayaan Keluarga
              </h2>
            </div>
            <p className="text-base leading-relaxed text-text-muted">
              Dimulai dari mimpi pendiri kami di tahun 1998, TK Kartikasari hadir untuk menyapa setiap anak dengan
              hangat. Kami percaya bahwa pendidikan terbaik dimulai saat anak merasa aman dan dihargai seperti di rumah
              sendiri.
            </p>
            <p className="text-base leading-relaxed text-text-muted">
              Kini, kami menerapkan Kurikulum Merdeka yang memungkinkan guru untuk benar-benar memahami dan merespons
              kebutuhan unik setiap anak. Melalui{" "}
              <strong className="font-semibold text-text">pembelajaran terdiferensiasi</strong>, kami memastikan tidak
              ada anak yang tertinggal. Jika seorang anak gemar bergerak, ia akan belajar melalui aktivitas fisik. Jika
              ia pemalu, kami memberinya ruang untuk tumbuh dengan percaya diri.
            </p>
            <p className="text-base leading-relaxed text-text-muted">
              Kolaborasi dengan orang tua adalah kunci. Kami secara aktif membagikan perkembangan anak melalui{" "}
              <strong className="font-semibold text-text">asesmen autentik</strong>—bukan sekadar angka, melainkan
              cerita tentang kemajuan karakter dan kreativitas mereka—agar pembelajaran di sekolah dan di rumah saling
              menguatkan.
            </p>
          </article>

          <div className="relative rounded-3xl bg-white/50 p-8 shadow-soft backdrop-blur-lg">
            <h3 className="text-2xl font-semibold text-text">Kemitraan Aktif dengan Orang Tua</h3>
            <p className="mt-3 text-base leading-relaxed text-text-muted">
              Kami percaya pendidikan adalah perjalanan bersama. Orang tua adalah mitra utama kami dalam membentuk Profil
              Pelajar Pancasila.
            </p>
            <ul className="mt-6 space-y-4">
              <li className="flex items-start gap-4">
                <CheckCircle className="h-6 w-6 flex-shrink-0 text-secondary" />
                <div>
                  <h4 className="font-semibold text-text">Komunikasi Harian</h4>
                  <p className="text-sm text-text-muted">
                    Anda akan menerima ringkasan kegiatan dan momen spesial anak setiap hari melalui kanal komunikasi
                    resmi sekolah.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <CheckCircle className="h-6 w-6 flex-shrink-0 text-secondary" />
                <div>
                  <h4 className="font-semibold text-text">Refleksi Projek Bersama</h4>
                  <p className="text-sm text-text-muted">
                    Kami mengundang Anda untuk hadir dalam pameran karya dan sesi refleksi Projek Penguatan Profil
                    Pelajar Pancasila (P5).
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <CheckCircle className="h-6 w-6 flex-shrink-0 text-secondary" />
                <div>
                  <h4 className="font-semibold text-text">Perayaan Komunitas</h4>
                  <p className="text-sm text-text-muted">
                    Terlibat dalam acara sekolah yang menyenangkan untuk memperkuat ikatan antara keluarga, guru, dan
                    anak-anak.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </PageSection>

      <PageSection id="visi-misi" padding="tight">
        <div className="card space-y-8 border-none bg-gradient-to-br from-secondary/10 via-white to-primary/10 p-8 md:p-12">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold text-text">Visi & Misi Kami</h2>
            <p className="mt-3 text-base leading-relaxed text-text-muted">
              Mewujudkan taman kanak-kanak yang penuh kasih, aman, dan inspiratif untuk menumbuhkan kreativitas serta
              karakter mulia sebagai bekal masa depan anak.
            </p>
          </div>
          <div className="mx-auto w-full max-w-4xl">
            <ul className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
              {aboutMission.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-3 rounded-xl bg-white/60 p-4 text-sm text-text-muted backdrop-blur-sm"
                >
                  <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-secondary" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </PageSection>

      <PageSection id="profil" padding="tight" className="bg-secondary/5">
        <div className="grid items-start gap-12 lg:grid-cols-[0.9fr,1.1fr]">
          <div className="space-y-6 lg:sticky lg:top-24">
            <h2 className="text-3xl font-semibold text-text">Profil Resmi Sekolah</h2>
            <p className="text-base leading-relaxed text-text-muted">
              Transparansi adalah fondasi kepercayaan. Berikut adalah data resmi TK Kartikasari yang terdaftar di
              Kemendikbudristek, menegaskan komitmen dan legalitas kami dalam melayani keluarga Bantarsari.
            </p>
            <div className="flex flex-wrap gap-3">
              <CTAButton ctaKey="ppdbHeadmaster" />
            </div>
          </div>

          <div className="space-y-6">
            <div className="card h-full space-y-5 bg-white/60 p-7 shadow-soft backdrop-blur-xl">
              <h3 className="text-xl font-semibold text-text">Identitas & Legalitas</h3>
              <ul className="grid gap-4 sm:grid-cols-2">
                {[
                  { label: "Nama Sekolah", value: site.schoolName, icon: Mortarboard },
                  { label: "NPSN", value: officialProfile.npsn, icon: Icon123 },
                  { label: "Kepala Sekolah", value: site.headmaster, icon: PersonBadge },
                  { label: "SK Operasional", value: officialProfile.operationalLicense, icon: ShieldCheck },
                  { label: "Kurikulum", value: officialProfile.curriculum, icon: Mortarboard },
                  { label: "Jam Belajar", value: site.openingHours, icon: ClockHistory },
                ].map(({ label, value, icon: Icon }) => (
                  <li key={label} className="flex gap-3">
                    <Icon className="mt-1 h-5 w-5 flex-shrink-0 text-secondary" />
                    <div>
                      <p className="text-xs uppercase tracking-wide text-text-muted">{label}</p>
                      <p className="text-sm font-semibold text-text">{value}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="card h-full space-y-5 bg-white/60 p-7 shadow-soft backdrop-blur-xl">
              <h3 className="text-xl font-semibold text-text">Lokasi & Kontak</h3>
              <ul className="grid gap-4 sm:grid-cols-2">
                {[
                  { label: "Alamat", value: site.address, icon: GeoAlt },
                  { label: "Wilayah", value: officialProfile.locationArea, icon: PinMap },
                  { label: "Email", value: officialProfile.email, icon: EnvelopeHeart },
                  { label: "WhatsApp", value: site.whatsapp, icon: Whatsapp },
                ].map(({ label, value, icon: Icon }) => (
                  <li key={label} className="flex gap-3">
                    <Icon className="mt-1 h-5 w-5 flex-shrink-0 text-secondary" />
                    <div>
                      <p className="text-xs uppercase tracking-wide text-text-muted">{label}</p>
                      <p className="text-sm font-semibold text-text">{value}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </PageSection>

      <PageSection id="perjalanan-kami" padding="tight">
        <div className="space-y-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-semibold text-text">Perjalanan Kami Bersama Bantarsari</h2>
            <p className="mt-3 text-base leading-relaxed text-text-muted">
              Setiap tahun adalah langkah baru dalam dedikasi kami untuk pendidikan anak usia dini. Perjalanan ini
              adalah bukti komitmen kami yang terus bertumbuh.
            </p>
          </div>
          <div className="relative mx-auto max-w-2xl">
            <div
              className="absolute left-1/2 top-4 bottom-0 -ml-px w-0.5 bg-secondary/20"
              aria-hidden="true"
            />
            <ul className="space-y-12">
              {officialMilestones.map(({ year, title, description }, index) => (
                <li key={year} className="relative">
                  <m.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.6 }}
                    className="relative flex items-center justify-center"
                  >
                    <span
                      className={`absolute -ml-px h-full w-0.5 ${
                        index === 0 ? "bg-secondary" : "bg-secondary/20"
                      }`}
                      aria-hidden="true"
                    />
                    <span className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-lg font-semibold text-white shadow-lg">
                      {year}
                    </span>
                    <div
                      className={`w-1/2 p-6 ${index % 2 === 0 ? "text-right" : "order-first text-left"}`}
                    >
                      <h3 className="font-semibold text-text">{title}</h3>
                      <p className="text-sm text-text-muted">{description}</p>
                    </div>
                  </m.div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </PageSection>

      <PageSection padding="relaxed">
        <div className="card border-none bg-gradient-to-br from-secondary via-secondary/90 to-primary p-10 text-white shadow-2xl transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_35px_60px_-15px_rgba(96,93,255,0.45)]">
          <div className="flex flex-col items-center gap-6 text-center md:flex-row md:justify-between md:text-left">
            <div className="space-y-3">
              <h2 className="text-balance text-3xl font-semibold">
                Lihat Langsung Kehangatan Belajar di Sekolah Kami
              </h2>
              <p className="max-w-max-w-3xl text-base leading-relaxed text-white/85">
                Cara terbaik untuk merasakan suasana TK Kartikasari adalah dengan berkunjung langsung. Kami membuka
                sesi tur sekolah setiap hari Senin dan Kamis. Mari lihat bagaimana anak-anak belajar dengan gembira.
              </p>
            </div>
            <div className="flex flex-shrink-0 flex-wrap items-center gap-4">
              <CTAButton ctaKey="heroVisit" />
              <CTAButton ctaKey="ppdbHeadmaster" />
            </div>
          </div>
        </div>
      </PageSection>
    </LazyMotion>
  );
}
