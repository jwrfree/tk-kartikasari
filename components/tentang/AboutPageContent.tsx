'use client';

import Link from 'next/link';

import { aboutDailyRhythm, aboutExperiencePillars, aboutMission, aboutStrengths } from '@/content/about';
import CTAButton from '@/components/CTAButton';
import PageHeader from '@/components/layout/PageHeader';
import PageSection from '@/components/layout/PageSection';
import TeacherList from './TeacherList';
import HorizontalScrollSection from '@/components/layout/HorizontalScrollSection';
import MapEmbed from '@/components/MapEmbed';
import type { OfficialProfile, SiteSettings, TeacherProfile } from '@/lib/types/site';
import type { HomeTimelineMilestone } from '@/app/types/home';
import { CardSurface } from '@/components/ui/CardSurface';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { FactRail } from '@/components/ui/FactRail';
import { QuoteBlock } from '@/components/ui/QuoteBlock';
import { StorySection } from '@/components/ui/StorySection';

type AboutPageContentProps = {
  milestones: HomeTimelineMilestone[];
  officialProfile: OfficialProfile;
  siteSettings: SiteSettings;
  teachers: TeacherProfile[];
};

export default function AboutPageContent({
  milestones,
  officialProfile,
  siteSettings,
  teachers,
}: AboutPageContentProps) {
  const profileFacts = [
    {
      label: 'Nama sekolah',
      value: siteSettings.schoolName,
      description: 'Melayani keluarga Bantarsari dan sekitarnya.',
    },
    { label: 'NPSN', value: officialProfile.npsn, description: 'Legalitas yang mudah dicek kembali.' },
    {
      label: 'Acuan belajar',
      value: officialProfile.curriculum,
      description: 'Standar resminya ada, tetapi praktik sehari-harinya dibuat sederhana dan sesuai usia anak.',
    },
    {
      label: 'Jam belajar',
      value: siteSettings.openingHours,
      description: 'Ritme kegiatan dibuat selaras dengan kebutuhan anak usia dini.',
    },
  ];

  return (
    <>
      <PageHeader
        eyebrow="Tentang TK Kartikasari"
        title="Kenali cara sekolah ini bekerja sebelum Anda memutuskan datang atau mendaftar."
        description="Halaman ini merangkum apa yang kami pegang, bagaimana guru mendampingi anak, dan fakta sekolah yang biasanya ingin dipastikan orang tua lebih dulu."
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <CTAButton ctaKey="heroVisit" className="sm:w-auto" />
          <Button asChild variant="outline" className="sm:w-auto">
            <Link href="#profil">Lihat fakta sekolah</Link>
          </Button>
        </div>
      </PageHeader>

      <StorySection
        id="cerita-kami"
        eyebrow="Cara kami mendampingi"
        title="Kami tidak mulai dari target besar. Kami mulai dari membuat anak mau datang, mau ikut, lalu pelan-pelan lebih berani."
        description="Untuk anak usia dini, kemajuan sering terlihat dari hal kecil: mau masuk gerbang, mau duduk sebentar, mau menjawab, lalu mau mencoba lagi besok. Guru kami bekerja dari perubahan kecil seperti itu."
        aside={
          <QuoteBlock
            quote="Kalau anak merasa cukup tenang, guru lebih mudah mengenali kebutuhannya dan orang tua lebih mudah melihat perkembangannya."
            author={siteSettings.headmaster}
            subtitle="Cara kami bekerja"
          />
        }
      >
        <div className="space-y-8">
          <div className="grid gap-4 md:grid-cols-3">
            {aboutExperiencePillars.map((item, index) => (
              <CardSurface
                key={item.title}
                tone={index % 2 === 0 ? 'soft' : 'translucent'}
                padding="lg"
                className="h-full"
              >
                <p className="text-xl font-semibold text-foreground">{item.title}</p>
                <p className="mt-3 text-sm leading-relaxed text-text-muted">{item.description}</p>
              </CardSurface>
            ))}
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {aboutDailyRhythm.map((item) => (
              <div key={item.title} className="border-t border-border/70 py-5 first:pt-0 md:border-t-0 md:py-0">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-secondary">{item.title}</p>
                <p className="mt-3 text-sm leading-relaxed text-foreground/85">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </StorySection>

      <StorySection
        id="profil"
        eyebrow="Fakta sekolah"
        title="Informasi dasar sekolah kami buat terbuka supaya orang tua tidak perlu menebak-nebak."
        description="Nama sekolah, legalitas, jam belajar, dan kontak utama bisa dicek tanpa harus bertanya ke banyak orang."
        reverse
        tone="muted"
        aside={
          <FactRail
            eyebrow="Profil resmi"
            title="Empat data yang biasanya dicari sebelum keluarga datang."
            items={profileFacts}
            sticky
          />
        }
      >
        <div className="grid gap-5 md:grid-cols-2">
          <CardSurface tone="translucent" padding="lg" className="space-y-4">
            <h3 className="text-2xl font-semibold">Siapa sekolah ini</h3>
            <p className="text-sm leading-relaxed text-text-muted">
              TK Kartikasari melayani keluarga yang mencari sekolah pertama dengan ritme yang jelas, komunikasi yang
              mudah diikuti, dan pendampingan yang terasa dekat sejak masa adaptasi.
            </p>
            <div className="space-y-3">
              {aboutMission.map((point) => (
                <div key={point} className="flex gap-3 text-sm leading-relaxed text-foreground/85">
                  <span className="mt-2 h-2 w-2 rounded-full bg-primary" aria-hidden="true" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </CardSurface>

          <CardSurface tone="soft" padding="lg" className="space-y-4">
            <h3 className="text-2xl font-semibold">Yang biasanya terasa bagi keluarga</h3>
            <p className="text-sm leading-relaxed text-text-muted">
              Banyak orang tua tidak butuh kalimat promosi yang panjang. Mereka ingin tahu apakah sekolah ini terasa
              cukup jelas, cukup stabil, dan cukup manusiawi untuk dijalani anak setiap hari.
            </p>
            <div className="space-y-3">
              {aboutStrengths.map((item) => (
                <div key={item.title} className="border-t border-border/60 pt-3 first:border-t-0 first:pt-0">
                  <p className="text-base font-semibold text-foreground">{item.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-text-muted">{item.description}</p>
                </div>
              ))}
            </div>
            <MapEmbed variant="plain" contentClassName="aspect-[4/3]" />
          </CardSurface>
        </div>
      </StorySection>

      <PageSection id="tenaga-pendidik" padding="relaxed">
        <div className="mx-auto max-w-5xl space-y-6 text-center">
          <Badge tone="secondary" size="sm" className="mx-auto">
            Tim pendidik
          </Badge>
          <h2 className="mx-auto max-w-[14ch] text-balance text-3xl font-semibold sm:text-4xl lg:text-[2.9rem]">
            Guru yang akan dikenal anak, bukan sekadar namanya.
          </h2>
          <p className="mx-auto max-w-3xl text-base leading-relaxed text-text-muted">
            Orang tua biasanya ingin tahu siapa yang akan menyambut, mendampingi, dan membantu anak beradaptasi. Karena
            itu profil guru kami tampilkan dengan jelas.
          </p>
          <TeacherList teachers={teachers} headmasterName={siteSettings.headmaster} />
        </div>
      </PageSection>

      <PageSection id="perjalanan-kami" padding="relaxed" tone="muted">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <Badge tone="secondary" size="sm" className="mx-auto">
            Perjalanan
          </Badge>
          <h2 className="mt-4 text-balance text-3xl font-semibold sm:text-4xl">
            Jejak sekolah ini cukup singkat dibaca, cukup untuk menunjukkan bahwa kami bukan sekolah yang baru muncul
            kemarin.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-text-muted">
            Timeline ini membantu keluarga melihat bagaimana sekolah bertumbuh dan tetap hadir untuk masyarakat sekitar.
          </p>
        </div>
        <HorizontalScrollSection>
          {milestones.map(({ year, title, description }) => (
            <CardSurface
              key={year}
              tone="translucent"
              padding="lg"
              className="flex h-full w-[80vw] max-w-sm flex-shrink-0 flex-col space-y-3"
            >
              <p className="font-display text-4xl leading-none text-primary">{year}</p>
              <h3 className="text-2xl font-semibold">{title}</h3>
              <p className="text-sm leading-relaxed text-text-muted">{description}</p>
            </CardSurface>
          ))}
        </HorizontalScrollSection>
      </PageSection>

      <PageSection padding="relaxed">
        <div className="mx-auto max-w-5xl">
          <CardSurface tone="gradient" padding="xl" className="space-y-5 text-center sm:text-left">
            <Badge tone="surface" size="sm" className="mx-auto sm:mx-0">
              Kunjungan sekolah
            </Badge>
            <div className="space-y-4 sm:flex sm:items-end sm:justify-between sm:gap-8 sm:space-y-0">
              <div className="space-y-3">
                <h2 className="max-w-[14ch] text-balance text-3xl font-semibold sm:text-4xl">
                  Kalau ingin menilai kecocokannya, datang dan lihat jam sekolah berjalan.
                </h2>
                <p className="max-w-2xl text-base leading-relaxed text-text-muted">
                  Kunjungan membantu Anda melihat ritme kelas, cara guru menyapa anak, dan suasana ruang belajar apa
                  adanya.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:w-auto sm:flex-row">
                <CTAButton ctaKey="heroVisit" className="sm:w-auto" />
                <CTAButton ctaKey="ppdbHeadmaster" className="sm:w-auto" />
              </div>
            </div>
          </CardSurface>
        </div>
      </PageSection>
    </>
  );
}
