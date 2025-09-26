
'use client';
import React from "react";
import CTAButton from "@/components/CTAButton";
import PageHeader from "@/components/layout/PageHeader";
import PageSection from "@/components/layout/PageSection";
import { aboutMission } from "@/content/about";
import { officialMilestones, officialProfile } from "@/data/official";
import site from "@/data/site.json";
import { LazyMotion, domAnimation, m } from "framer-motion";
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

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

// Main component for the "About Us" page
export default function AboutPageContent() {
  return (
    <LazyMotion features={domAnimation}>
      <PageHeader
        eyebrow="Tentang TK Kartikasari"
        title="Lebih dari Sekadar Sekolah: Rumah Kedua untuk Tumbuh Kembang Anak Anda"
        description={
          <>
            Memilih sekolah pertama untuk si kecil adalah keputusan besar. Di TK Kartikasari, kami menciptakan
            lingkungan yang aman, hangat, dan penuh keceriaan—sebuah fondasi di mana anak Anda dapat tumbuh menjadi
            pribadi yang percaya diri, kreatif, dan siap melangkah ke jenjang pendidikan selanjutnya.
          </>
        }
      >
        <div className="flex w-full flex-col gap-3 pt-4 sm:w-auto sm:flex-row sm:items-center">
          <CTAButton ctaKey="heroVisit" className="w-full sm:w-auto" />
          <a href="#profil" className="btn-outline w-full text-center sm:w-auto">
            Lihat profil resmi
          </a>
        </div>
      </PageHeader>

      <PageSection
        id="cerita-kami"
        padding="default"
        className="bg-gradient-to-br from-secondary/5 via-white to-primary/5"
      >
        <m.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="mx-auto max-w-4xl space-y-12 text-center"
        >
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-secondary">Filosofi Kami</p>
            <h2 className="text-balance text-3xl font-semibold text-text">
              Tiga Pilar Fondasi Pendidikan di TK Kartikasari
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <m.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              variants={cardVariants}
              className="space-y-3"
            >
              <HouseHeart className="mx-auto h-10 w-10 text-secondary" />
              <h3 className="text-xl font-semibold">Lingkungan Hangat & Aman</h3>
              <p className="text-sm text-text-muted">
                Kami percaya pendidikan terbaik dimulai saat anak merasa aman dan dihargai seperti di rumah sendiri.
              </p>
            </m.div>
            <m.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              variants={cardVariants}
              className="space-y-3"
            >
              <PersonCheck className="mx-auto h-10 w-10 text-secondary" />
              <h3 className="text-xl font-semibold">Kurikulum Merdeka Personal</h3>
              <p className="text-sm text-text-muted">
                Pembelajaran terdiferensiasi memastikan setiap anak bertumbuh sesuai minat dan keunikan masing-masing.
              </p>
            </m.div>
            <m.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              variants={cardVariants}
              className="space-y-3"
            >
              <People className="mx-auto h-10 w-10 text-secondary" />
              <h3 className="text-xl font-semibold">Kemitraan dengan Keluarga</h3>
              <p className="text-sm text-text-muted">
                Kolaborasi aktif dengan orang tua melalui asesmen autentik untuk pembelajaran yang saling menguatkan.
              </p>
            </m.div>
          </div>
        </m.div>
      </PageSection>

      <PageSection id="visi-misi" padding="tight">
        <m.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="card space-y-8 border-none bg-gradient-to-br from-secondary/10 via-white to-primary/10 p-8 md:p-12"
        >
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold text-text">Visi & Misi Kami</h2>
            <p className="mt-3 text-base leading-relaxed text-text-muted">
              Mewujudkan taman kanak-kanak yang penuh kasih, aman, dan inspiratif untuk menumbuhkan kreativitas serta
              karakter mulia sebagai bekal masa depan anak.
            </p>
          </div>
          <div className="mx-auto w-full max-w-4xl">
            <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              {aboutMission.map((point, index) => (
                <m.li
                  key={point}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.8 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  variants={cardVariants}
                  className="flex items-start gap-3 rounded-xl bg-white/60 p-4 text-base text-text-muted backdrop-blur-sm"
                >
                  <span>{point}</span>
                </m.li>
              ))}
            </ul>
          </div>
        </m.div>
      </PageSection>

      <PageSection id="profil" padding="tight" className="bg-secondary/5">
        <m.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid items-start gap-12 lg:grid-cols-[0.9fr,1.1fr]"
        >
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
            <m.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, staggerChildren: 0.1 }}
              variants={cardVariants}
              className="card h-full space-y-5 bg-white/60 p-7 shadow-soft backdrop-blur-xl"
            >
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
                  <m.li key={label} variants={cardVariants} className="flex gap-3">
                    <Icon className="mt-1 h-5 w-5 flex-shrink-0 text-secondary" />
                    <div>
                      <p className="text-xs uppercase tracking-wide text-text-muted">{label}</p>
                      <p className="text-sm font-semibold text-text">{value}</p>
                    </div>
                  </m.li>
                ))}
              </ul>
            </m.div>
            <m.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, staggerChildren: 0.1 }}
              variants={cardVariants}
              className="card h-full space-y-5 bg-white/60 p-7 shadow-soft backdrop-blur-xl"
            >
              <h3 className="text-xl font-semibold text-text">Lokasi & Kontak</h3>
              <ul className="grid gap-4 sm:grid-cols-2">
                {[
                  { label: "Alamat", value: site.address, icon: GeoAlt },
                  { label: "Wilayah", value: officialProfile.locationArea, icon: PinMap },
                  { label: "Email", value: officialProfile.email, icon: EnvelopeHeart },
                  { label: "WhatsApp", value: site.whatsapp, icon: Whatsapp },
                ].map(({ label, value, icon: Icon }) => (
                  <m.li key={label} variants={cardVariants} className="flex gap-3">
                    <Icon className="mt-1 h-5 w-5 flex-shrink-0 text-secondary" />
                    <div>
                      <p className="text-xs uppercase tracking-wide text-text-muted">{label}</p>
                      <p className="text-sm font-semibold text-text">{value}</p>
                    </div>
                  </m.li>
                ))}
              </ul>
              <div className="aspect-video w-full overflow-hidden rounded-2xl border border-white/50">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.326349585633!2d108.8236106758831!3d-7.429406073145405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e656f506487e49d%3A0x6fd1399435c246ac!2sTK%20Kartika%20Sari!5e0!3m2!1sen!2sid!4v1716960434419!5m2!1sen!2sid"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Peta Lokasi TK Kartikasari"
                ></iframe>
              </div>
            </m.div>
          </div>
        </m.div>
      </PageSection>

      <PageSection id="tenaga-pendidik" padding="default">
        <m.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="mx-auto max-w-5xl space-y-12 text-center"
        >
          <div className="space-y-3">
            <h2 className="text-balance text-3xl font-semibold text-text">
              Pendidik Profesional & Penyayang
            </h2>
            <p className="mx-auto max-w-3xl text-base leading-relaxed text-text-muted">
              Di TK Kartikasari, kami percaya bahwa guru adalah jantung dari pendidikan. Tim kami terdiri dari para pendidik yang berdedikasi, penuh kasih, dan berkompeten di bidangnya.
            </p>
          </div>
          <TeacherList />
        </m.div>
      </PageSection>

      <PageSection id="perjalanan-kami" padding="tight">
        <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="text-3xl font-semibold text-text">Perjalanan Kami Bersama Bantarsari</h2>
            <p className="mt-3 text-base leading-relaxed text-text-muted">
              Setiap tahun adalah langkah baru dalam dedikasi kami untuk pendidikan anak usia dini. Perjalanan ini
              adalah bukti komitmen kami yang terus bertumbuh.
            </p>
        </div>
        <HorizontalScrollSection>
            {officialMilestones.map(({ year, title, description }, index) => (
              <m.div
                key={year}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                variants={cardVariants}
                className="card flex h-full w-[80vw] max-w-sm flex-shrink-0 flex-col space-y-3 bg-white/60 p-6 shadow-soft backdrop-blur-xl"
              >
                <p className="text-lg font-semibold text-secondary">{year}</p>
                <h3 className="text-xl font-semibold text-text">{title}</h3>
                <p className="text-base text-text-muted">{description}</p>
              </m.div>
            ))}
        </HorizontalScrollSection>
      </PageSection>

      <PageSection padding="relaxed">
        <m.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="card border-none bg-gradient-to-br from-secondary via-secondary/90 to-primary p-10 text-white shadow-2xl transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_35px_60px_-15px_rgba(96,93,255,0.45)]"
        >
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
        </m.div>
      </PageSection>
    </LazyMotion>
  );
}
