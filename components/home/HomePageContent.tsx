import dynamic from 'next/dynamic';
import Link from 'next/link';

import type { HomeCredential, HomeStat, HomeTimelineMilestone } from '@/app/types/home';
import type { Post as BlogPost } from '@/lib/blog';
import type { Testimonial } from '@/lib/types/site';
import {
  homeHero,
  homeFirstWeek,
  homeParentUpdates,
  homeSchoolFit,
  homeHighlightsCopy,
  homeHighlights as redesignedHighlights,
  homeCredentialsCopy,
  homeProgramsCopy,
  homePrograms as redesignedPrograms,
  homeExperienceCopy,
  homeDailyAgenda,
  homeOnboardingCopy,
  homeVisitExpectation,
  homeBlogCopy,
  homeFaqCopy,
  homeFinalCtaCopy,
  homeFaqs as redesignedFaqs,
} from '@/content/home';
import CTAButton from '@/components/CTAButton';
import FaqAccordion from '@/components/FaqAccordion';
import PageSection from '@/components/layout/PageSection';
import { EditorialHero } from '@/components/ui/EditorialHero';
import { FactRail } from '@/components/ui/FactRail';
import { StorySection } from '@/components/ui/StorySection';
import { MediaBand } from '@/components/ui/MediaBand';
import { QuoteBlock } from '@/components/ui/QuoteBlock';
import { CardSurface } from '@/components/ui/CardSurface';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { extractCredentialValue, extractTeacherStudentRatio, formatBlogDescription } from '@/lib/home';
import { portableTextToPlainText } from '@/lib/utils';

const TestimonialList = dynamic(() => import('@/components/TestimonialList'));

type HomePageContentProps = {
  stats: HomeStat[];
  credentials: HomeCredential[];
  timeline: HomeTimelineMilestone[];
  blogPosts: BlogPost[];
  testimonials: Testimonial[];
};

export default function HomePageContent(props: HomePageContentProps) {
  const { stats, credentials, timeline, blogPosts, testimonials } = props;
  const teacherStudentRatio = extractTeacherStudentRatio(stats);
  const schoolNpsn = extractCredentialValue(credentials, 'npsn') ?? '20351273';

  const heroFacts = homeHero.proofItems.map((item) => ({
    label: item.label,
    value:
      item.value === '1 : 8' ? teacherStudentRatio : item.value.includes('NPSN') ? `NPSN ${schoolNpsn}` : item.value,
  }));

  return (
    <main>
      <EditorialHero
        eyebrow={homeHero.eyebrow}
        title={homeHero.title}
        description={homeHero.description}
        primaryAction={<CTAButton ctaKey="heroVisit" />}
        secondaryAction={
          <Button asChild variant="outline">
            <Link href="#cocok-untuk-siapa">{homeHero.secondaryCtaLabel}</Link>
          </Button>
        }
        facts={heroFacts}
        mediaCaption="Orang tua lokal biasanya tidak mulai dari alamat. Mereka ingin tahu dulu seperti apa anak akan disambut, bagaimana pagi berjalan, dan kalau cocok harus menghubungi siapa."
      />

      <StorySection
        id="cocok-untuk-siapa"
        eyebrow={homeSchoolFit.eyebrow}
        title={homeSchoolFit.title}
        description={homeSchoolFit.description}
        aside={
          <FactRail
            eyebrow="Yang biasanya meyakinkan"
            title={homeHighlightsCopy.title}
            items={redesignedHighlights.map((item) => ({
              label: item.title,
              value: item.description.split('.')[0] ?? item.title,
              description: item.description,
            }))}
            sticky
          />
        }
      >
        <div className="grid gap-4 md:grid-cols-3">
          {homeSchoolFit.items.map((item) => (
            <CardSurface key={item.title} tone="soft" padding="lg" className="h-full space-y-3">
              <p className="text-xl font-semibold text-foreground">{item.title}</p>
              <p className="text-sm leading-relaxed text-text-muted">{item.description}</p>
            </CardSurface>
          ))}
        </div>
      </StorySection>

      <StorySection
        id="langkah-daftar"
        eyebrow={homeOnboardingCopy.eyebrow}
        title={homeOnboardingCopy.title}
        description={homeOnboardingCopy.description}
        reverse
        tone="muted"
        aside={
          <CardSurface tone="gradient" padding="xl" className="space-y-4 lg:sticky lg:top-28">
            <Badge tone="surface" size="sm">
              Saat berkunjung
            </Badge>
            <h3 className="text-2xl font-semibold">{homeVisitExpectation.title}</h3>
            <p className="text-sm leading-relaxed text-text-muted">{homeVisitExpectation.description}</p>
            <ul className="space-y-3">
              {homeVisitExpectation.items.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-relaxed text-foreground/85">
                  <span className="mt-2 h-2 w-2 rounded-full bg-primary" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </CardSurface>
        }
      >
        <div className="space-y-4">
          {homeOnboardingCopy.steps.map((step, index) => (
            <div
              key={step.key}
              className="grid gap-4 rounded-[1.5rem] border border-border/70 bg-surface p-5 sm:grid-cols-[70px,1fr]"
            >
              <div className="space-y-2">
                <p className="text-sm font-semibold text-secondary">Langkah {index + 1}</p>
                <p className="font-display text-3xl leading-none text-primary">0{index + 1}</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-muted">{step.description}</p>
                <Link
                  href={step.href}
                  className="mt-4 inline-flex text-sm font-semibold text-primary transition hover:text-primary/80"
                >
                  {step.linkLabel}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </StorySection>

      <StorySection
        eyebrow={homeCredentialsCopy.eyebrow}
        title={homeCredentialsCopy.title}
        description={homeCredentialsCopy.description}
        aside={
          <FactRail
            eyebrow={homeCredentialsCopy.legalTitle}
            title="Data penting yang biasanya dicek sebelum orang tua datang."
            items={credentials.slice(0, 4).map((item) => ({
              label: item.label,
              value: item.label.toLowerCase() === 'npsn' ? schoolNpsn : item.value,
              description: item.description,
            }))}
            sticky
          />
        }
      >
        <div className="space-y-4">
          {timeline.slice(0, 5).map((milestone) => (
            <div
              key={`${milestone.year}-${milestone.title}`}
              className="grid gap-3 border-t border-border/70 py-5 first:border-t-0 first:pt-0 sm:grid-cols-[110px,1fr]"
            >
              <p className="text-lg font-semibold text-primary">{milestone.year}</p>
              <div>
                <h3 className="text-xl font-semibold">{milestone.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-muted">{milestone.description}</p>
              </div>
            </div>
          ))}
        </div>
      </StorySection>

      <PageSection padding="relaxed">
        <div className="mx-auto max-w-5xl">
          <TestimonialList testimonials={testimonials} />
        </div>
      </PageSection>

      <StorySection
        id="minggu-pertama"
        eyebrow={homeFirstWeek.eyebrow}
        title={homeFirstWeek.title}
        description={homeFirstWeek.description}
        aside={
          <FactRail
            eyebrow="Yang paling ingin diketahui"
            title="Tiga hal yang biasanya dicari orang tua di awal."
            items={homeFirstWeek.factItems}
            sticky
          />
        }
      >
        <div className="space-y-4">
          {homeFirstWeek.items.map((item) => (
            <div key={item.title} className="border-t border-border/70 py-5 first:border-t-0 first:pt-0">
              <p className="text-xl font-semibold text-foreground">{item.title}</p>
              <p className="mt-3 max-w-2xl text-base leading-relaxed text-text-muted">{item.description}</p>
            </div>
          ))}
        </div>
      </StorySection>

      <PageSection id="kegiatan-harian" padding="none" className="px-4 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <MediaBand
            eyebrow={homeExperienceCopy.eyebrow}
            title={homeExperienceCopy.title}
            description={homeExperienceCopy.description}
          >
            <div className="space-y-5">
              <div className="grid gap-3 sm:grid-cols-3">
                {homeDailyAgenda.items.map((item) => (
                  <div key={item.time} className="rounded-[1.35rem] border border-border/60 bg-white/60 px-4 py-4">
                    <p className="text-sm font-semibold text-secondary">{item.time}</p>
                    <p className="mt-2 text-sm leading-relaxed text-foreground/80">{item.description}</p>
                  </div>
                ))}
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {homeDailyAgenda.focusCards.map((card) => (
                  <div key={card.title} className="rounded-[1.35rem] border border-border/60 bg-white/60 px-4 py-4">
                    <p className="text-sm font-semibold text-foreground">{card.title}</p>
                    <p className="mt-2 text-sm leading-relaxed text-text-muted">{card.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </MediaBand>
        </div>
      </PageSection>

      <StorySection
        eyebrow={homeParentUpdates.eyebrow}
        title={homeParentUpdates.title}
        description={homeParentUpdates.description}
        reverse
        tone="muted"
        aside={
          <QuoteBlock
            quote="Kepercayaan tumbuh saat orang tua tahu siapa yang menyambut anak, apa yang terjadi di kelas, dan ke mana harus bertanya."
            author="TK Kartikasari"
            subtitle="Prinsip komunikasi sekolah"
          />
        }
      >
        <div className="grid gap-4 md:grid-cols-3">
          {homeParentUpdates.items.map((item) => (
            <CardSurface key={item.title} tone="translucent" padding="lg" className="h-full space-y-3">
              <p className="text-xl font-semibold text-foreground">{item.title}</p>
              <p className="text-sm leading-relaxed text-text-muted">{item.description}</p>
            </CardSurface>
          ))}
        </div>
      </StorySection>

      <StorySection
        id="program"
        eyebrow={homeProgramsCopy.eyebrow}
        title={homeProgramsCopy.title}
        description={homeProgramsCopy.description}
        reverse
        tone="muted"
        aside={
          <FactRail
            eyebrow="Cara membacanya"
            title="Yang perlu dilihat orang tua dari program."
            items={[
              {
                label: 'Cocok untuk siapa',
                value: 'Lihat tahap anak sekarang',
                description: 'Bukan hanya umur, tetapi juga kesiapan mengikuti ritme sekolah.',
              },
              {
                label: 'Anak melakukan apa',
                value: 'Lihat pengalaman hariannya',
                description: 'Fokus pada aktivitas yang benar-benar dijalani anak, bukan istilah kurikulumnya.',
              },
              {
                label: 'Orang tua melihat apa',
                value: 'Lihat perubahan kecilnya',
                description: 'Yang paling terasa biasanya muncul di rumah dan di rutinitas harian.',
              },
            ]}
          />
        }
      >
        <div className="space-y-5">
          {redesignedPrograms.map((program) => (
            <CardSurface key={program.name} tone="translucent" padding="xl" className="space-y-5">
              <div className="flex flex-col gap-3 border-b border-border/60 pb-5 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-secondary">
                    {program.age}
                  </p>
                  <h3 className="mt-2 text-3xl font-semibold text-foreground">{program.name}</h3>
                </div>
                <Badge tone="surface" size="sm">
                  {program.forWho}
                </Badge>
              </div>
              <p className="text-base leading-relaxed text-text-muted">{program.description}</p>
              <div className="grid gap-4 lg:grid-cols-[1.1fr,0.9fr]">
                <div className="space-y-3">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-text-muted">Yang anak lakukan</p>
                  <ul className="space-y-3">
                    {(program.whatChildrenDo ?? program.points).map((point) => (
                      <li key={point} className="flex gap-3 text-sm leading-relaxed text-foreground/85">
                        <span className="mt-2 h-2 w-2 rounded-full bg-primary" aria-hidden="true" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-[1.35rem] border border-border/60 bg-surface-alt px-4 py-4">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-text-muted">
                    Yang biasanya terlihat di rumah
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-foreground/85">
                    {program.whatParentsNotice ?? program.points[0]}
                  </p>
                </div>
              </div>
            </CardSurface>
          ))}
        </div>
      </StorySection>

      <StorySection eyebrow={homeBlogCopy.eyebrow} title={homeBlogCopy.title} description={homeBlogCopy.description}>
        {blogPosts.length > 0 ? (
          <div className="grid gap-5 md:grid-cols-3">
            {blogPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
                <CardSurface
                  tone="translucent"
                  padding="lg"
                  className="flex h-full flex-col justify-between gap-5 transition group-hover:-translate-y-1"
                >
                  <div className="space-y-3">
                    <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-secondary">
                      {new Date(post.date).toLocaleDateString('id-ID', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric',
                      })}
                    </p>
                    <h3 className="text-2xl font-semibold leading-tight">{post.title}</h3>
                    <p className="text-sm leading-relaxed text-text-muted">
                      {formatBlogDescription(portableTextToPlainText(post.body))}
                    </p>
                  </div>
                  <span className="text-sm font-semibold text-primary">Baca selengkapnya</span>
                </CardSurface>
              </Link>
            ))}
          </div>
        ) : (
          <CardSurface tone="soft" padding="xl" className="space-y-4">
            <h3 className="text-2xl font-semibold">{homeBlogCopy.emptyTitle}</h3>
            <p className="max-w-2xl text-base leading-relaxed text-text-muted">{homeBlogCopy.emptyDescription}</p>
          </CardSurface>
        )}
      </StorySection>

      <PageSection padding="relaxed" tone="muted">
        <div className="editorial-grid items-start">
          <div className="space-y-5">
            <Badge tone="secondary" size="sm">
              {homeFaqCopy.eyebrow}
            </Badge>
            <h2 className="max-w-[14ch] text-balance text-3xl font-semibold sm:text-4xl lg:text-[2.9rem]">
              {homeFaqCopy.title}
            </h2>
            <p className="max-w-2xl text-base leading-relaxed text-text-muted">{homeFaqCopy.description}</p>
          </div>
          <FaqAccordion items={redesignedFaqs} revealOnView />
        </div>
      </PageSection>

      <PageSection padding="relaxed">
        <div className="mx-auto max-w-5xl">
          <MediaBand
            eyebrow={homeFinalCtaCopy.eyebrow}
            title={homeFinalCtaCopy.title}
            description={homeFinalCtaCopy.description}
          >
            <div className="flex flex-col gap-3 sm:flex-row">
              <CTAButton ctaKey="heroVisit" />
              <Button asChild variant="outline">
                <Link href="/kontak">{homeFinalCtaCopy.secondaryCtaLabel}</Link>
              </Button>
            </div>
          </MediaBand>
        </div>
      </PageSection>
    </main>
  );
}
