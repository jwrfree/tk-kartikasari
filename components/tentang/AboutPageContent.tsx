
'use client';
import React from "react";
import Link from "next/link";
import CTAButton from "@/components/CTAButton";
import PageHeader from "@/components/layout/PageHeader";
import PageSection from "@/components/layout/PageSection";
import {
  ClockHistory,
  EnvelopeHeart,
  GeoAlt,
  HouseHeart,
  Icon123,
  Mortarboard,
  People,
  PersonBadge,
  PersonCheck,
  PinMap,
  ShieldCheck,
  Whatsapp,
} from "react-bootstrap-icons";
import TeacherList from "./TeacherList";
import HorizontalScrollSection from "@/components/layout/HorizontalScrollSection";
import AnimateIn from "@/components/AnimateIn";
import MapEmbed from "@/components/MapEmbed";
import type { OfficialProfile, SiteSettings, TeacherProfile } from "@/lib/types/site";
import type { HomeTimelineMilestone } from "@/app/types/home";

type AboutPageContentProps = {
  mission: string[];
  milestones: HomeTimelineMilestone[];
  officialProfile: OfficialProfile;
  siteSettings: SiteSettings;
  teachers: TeacherProfile[];
};

export default function AboutPageContent({
  mission,
  milestones,
  officialProfile,
  siteSettings,
  teachers,
}: AboutPageContentProps) {
  return (
    <>
      <PageHeader
        eyebrow="Tentang TK Kartikasari"
        title="Lebih dari Sekadar Sekolah: Rumah Kedua untuk Tumbuh Kembang Anak Anda"
        description={
          <>
            <strong>Memilih sekolah pertama untuk si kecil adalah keputusan besar.</strong>{' '}
            Di TK Kartikasari, kami menciptakan{' '}
            <strong>lingkungan yang aman, hangat, dan penuh keceriaan</strong>
            —sebuah fondasi di mana anak Anda dapat tumbuh menjadi pribadi yang percaya diri, kreatif, dan siap melangkah ke
            jenjang pendidikan selanjutnya.
          </>
        }
      >
        <div className="flex w-full flex-col gap-3 pt-4 sm:w-auto sm:flex-row sm:items-center">
          <CTAButton ctaKey="heroVisit" className="w-full sm:w-auto" />
          <a href="#profil" className="btn-outline w-full text-center sm:w-auto">
            Lihat Profil Resmi Sekolah
          </a>
        </div>
      </PageHeader>

      <PageSection
        id="cerita-kami"
        padding="default"
        className="bg-gradient-to-br from-secondary/5 via-white to-primary/5"
      >
        <AnimateIn
          className="mx-auto max-w-4xl space-y-12 text-center"
        >
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-secondary">Filosofi Kami</p>
            <h2 className="text-balance text-3xl font-semibold text-text">
              Tiga Pilar Fondasi Pendidikan di TK Kartikasari
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <AnimateIn
              className="space-y-3"
            >
              <HouseHeart className="mx-auto h-10 w-10 text-secondary" />
              <h3 className="text-xl font-semibold">Lingkungan Hangat & Aman</h3>
              <p className="text-sm text-text-muted">
                <strong>Kami percaya pendidikan terbaik dimulai saat anak merasa aman dan dihargai seperti di rumah</strong>{' '}
                sendiri.
              </p>
            </AnimateIn>
            <AnimateIn
              className="space-y-3"
            >
              <PersonCheck className="mx-auto h-10 w-10 text-secondary" />
              <h3 className="text-xl font-semibold">Kurikulum Merdeka Personal</h3>
              <p className="text-sm text-text-muted">
                <strong>Pembelajaran terdiferensiasi memastikan setiap anak bertumbuh sesuai minat</strong> dan keunikan
                masing-masing.
              </p>
            </AnimateIn>
            <AnimateIn
              className="space-y-3"
            >
              <People className="mx-auto h-10 w-10 text-secondary" />
              <h3 className="text-xl font-semibold">Kemitraan dengan Keluarga</h3>
              <p className="text-sm text-text-muted">
                <strong>Kolaborasi aktif dengan orang tua melalui komunikasi rutin dan refleksi perkembangan</strong> agar
                belajar saling menguatkan.
              </p>
            </AnimateIn>
          </div>
          <div className="flex justify-center">
            <Link
              href="/program"
              className="inline-flex items-center gap-2 rounded-full bg-white/70 px-6 py-3 text-sm font-semibold text-secondary shadow-soft transition hover:bg-white"
            >
              Pelajari Program Kami →
            </Link>
          </div>
        </AnimateIn>
      </PageSection>

      <PageSection id="visi-misi" padding="tight">
        <AnimateIn
          className="card space-y-8 border-none bg-gradient-to-br from-secondary/10 via-white to-primary/10 p-8 md:p-12"
        >
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold text-text">Visi & Misi Kami</h2>
            <p className="mt-3 text-base leading-relaxed text-text-muted">
              <strong>Mewujudkan taman kanak-kanak yang penuh kasih, aman, dan inspiratif</strong> untuk menumbuhkan
              kreativitas serta karakter mulia sebagai bekal masa depan anak.
            </p>
          </div>
          <div className="mx-auto w-full max-w-4xl">
            <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              {mission.map((point) => (
                <AnimateIn
                  key={point}
                  className="flex items-start gap-3 rounded-xl bg-white/60 p-4 text-base text-text-muted backdrop-blur-sm"
                >
                  <span className="font-semibold text-text">{point}</span>
                </AnimateIn>
              ))}
            </ul>
          </div>
        </AnimateIn>
      </PageSection>

      <PageSection id="profil" padding="tight" className="relative bg-secondary/5">
        <AnimateIn
          className="grid items-start gap-12 lg:grid-cols-[0.9fr,1.1fr]"
        >
          <div className="space-y-6 lg:sticky lg:top-24">
            <h2 className="text-3xl font-semibold text-text">Jaminan Kredibilitas & Legalitas Sekolah</h2>
            <p className="text-base leading-relaxed text-text-muted">
              <strong>Transparansi adalah fondasi kepercayaan.</strong> Berikut data resmi TK Kartikasari yang menegaskan
              komitmen kami dalam melayani keluarga Bantarsari dengan amanah dan akuntabel.
            </p>
            <div className="flex flex-wrap gap-3">
              <CTAButton ctaKey="ppdbHeadmaster" />
            </div>
          </div>

          <div className="space-y-6">
            <AnimateIn
              className="card h-full space-y-5 bg-white/60 p-7 shadow-soft backdrop-blur-xl"
            >
              <h3 className="text-xl font-semibold text-text">Identitas & Legalitas</h3>
              <p className="text-sm font-medium text-secondary">
                <strong>Kami adalah lembaga pendidikan yang terdaftar dan diakui secara resmi oleh Kemendikbudristek</strong>{' '}
                sejak tahun 1998.
              </p>
              <ul className="grid gap-4 sm:grid-cols-2">
                {[
                  { label: "Nama Sekolah", value: siteSettings.schoolName, icon: Mortarboard },
                  { label: "NPSN", value: officialProfile.npsn, icon: Icon123 },
                  { label: "Kepala Sekolah", value: siteSettings.headmaster, icon: PersonBadge },
                  { label: "SK Operasional", value: officialProfile.operationalLicense, icon: ShieldCheck },
                  { label: "Kurikulum", value: officialProfile.curriculum, icon: Mortarboard },
                  { label: "Jam Belajar", value: siteSettings.openingHours, icon: ClockHistory },
                ].map(({ label, value, icon: Icon }) => (
                  <AnimateIn key={label} className="flex gap-3">
                    <Icon className="mt-1 h-5 w-5 flex-shrink-0 text-secondary" />
                    <div>
                      <p className="text-xs uppercase tracking-wide text-text-muted">{label}</p>
                      <p className="text-sm font-semibold text-text">{value}</p>
                    </div>
                  </AnimateIn>
                ))}
              </ul>
            </AnimateIn>
            <AnimateIn
              className="card h-full space-y-5 bg-white/60 p-7 shadow-soft backdrop-blur-xl"
            >
              <h3 className="text-xl font-semibold text-text">Lokasi & Kontak</h3>
              <ul className="grid gap-4 sm:grid-cols-2">
                {[
                  { label: "Alamat", value: siteSettings.address, icon: GeoAlt },
                  { label: "Wilayah", value: officialProfile.locationArea, icon: PinMap },
                  { label: "Email", value: officialProfile.email, icon: EnvelopeHeart },
                  { label: "WhatsApp", value: siteSettings.whatsapp, icon: Whatsapp },
                ].map(({ label, value, icon: Icon }) => (
                  <AnimateIn key={label} className="flex gap-3">
                    <Icon className="mt-1 h-5 w-5 flex-shrink-0 text-secondary" />
                    <div>
                      <p className="text-xs uppercase tracking-wide text-text-muted">{label}</p>
                      <p className="text-sm font-semibold text-text">{value}</p>
                    </div>
                  </AnimateIn>
                ))}
              </ul>
              <MapEmbed
                variant="plain"
                className="rounded-2xl border border-white/50"
                contentClassName="aspect-video"
              />
            </AnimateIn>
          </div>
        </AnimateIn>
      </PageSection>

      <PageSection id="tenaga-pendidik" padding="default">
        <AnimateIn
          className="mx-auto max-w-5xl space-y-12 text-center"
        >
          <div className="space-y-3">
            <h2 className="text-balance text-3xl font-semibold text-text">
              Tim Pendidik Kami: Berkomitmen, Berkompeten, dan Penuh Kasih.
            </h2>
            <p className="mx-auto max-w-3xl text-base leading-relaxed text-text-muted">
              <strong>Di TK Kartikasari, guru adalah sahabat belajar pertama bagi anak.</strong> Mereka hadir mendampingi
              emosi, imajinasi, dan rasa ingin tahu agar setiap hari sekolah terasa hangat dan bermakna.
            </p>
          </div>
          <TeacherList teachers={teachers} />
        </AnimateIn>
      </PageSection>

      <PageSection id="perjalanan-kami" padding="tight">
        <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="text-3xl font-semibold text-text">Perjalanan Kami Bersama Bantarsari</h2>
            <p className="mt-3 text-base leading-relaxed text-text-muted">
              <strong>Setiap tahun adalah langkah baru dalam dedikasi kami untuk pendidikan anak usia dini.</strong>{' '}
              Perjalanan ini adalah bukti komitmen kami yang terus bertumbuh.
            </p>
        </div>
        <HorizontalScrollSection>
            {milestones.map(({ year, title, description }) => (
              <AnimateIn
                key={year}
                className="card flex h-full w-[80vw] max-w-sm flex-shrink-0 flex-col space-y-3 bg-white/60 p-6 shadow-soft backdrop-blur-xl"
              >
                <p className="text-lg font-semibold text-secondary">{year}</p>
                <h3 className="text-xl font-semibold text-text">{title}</h3>
                <p className="text-base text-text-muted">{description}</p>
              </AnimateIn>
            ))}
        </HorizontalScrollSection>
      </PageSection>

      <PageSection padding="relaxed">
        <AnimateIn
          className="card border-none bg-gradient-to-br from-secondary via-secondary/90 to-primary p-10 text-white shadow-2xl transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_35px_60px_-15px_rgba(96,93,255,0.45)]"
        >
          <div className="flex flex-col items-center gap-6 text-center md:flex-row md:justify-between md:text-left">
            <div className="space-y-3">
              <h2 className="text-balance text-3xl font-semibold">
                Lihat Langsung Kehangatan Belajar di Sekolah Kami
              </h2>
              <p className="max-w-3xl text-base leading-relaxed text-white/85">
                <strong>Cara terbaik untuk merasakan suasana TK Kartikasari adalah dengan berkunjung langsung.</strong> Kami
                membuka sesi tur sekolah setiap hari Senin dan Kamis. Mari lihat bagaimana anak-anak belajar dengan gembira.
              </p>
            </div>
            <div className="flex flex-shrink-0 flex-wrap items-center gap-4">
              <CTAButton ctaKey="heroVisit" />
              <CTAButton ctaKey="ppdbHeadmaster" />
            </div>
          </div>
        </AnimateIn>
      </PageSection>
    </>
  );
}
