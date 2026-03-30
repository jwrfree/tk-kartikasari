import Link from 'next/link';

import PageHeader from '@/components/layout/PageHeader';
import PageSection from '@/components/layout/PageSection';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { CardSurface } from '@/components/ui/CardSurface';
import { FactRail } from '@/components/ui/FactRail';
import { MediaBand } from '@/components/ui/MediaBand';
import { StorySection } from '@/components/ui/StorySection';
import {
  programClasses,
  programLearningMethods,
  programsMetaDescription,
  programWeeklySchedule,
} from '@/content/programs';
import { createPageMetadata } from '@/lib/metadata';
import { getProgramPageData } from '@/lib/sanity.queries';

export async function generateMetadata() {
  const { siteSettings } = await getProgramPageData();
  return createPageMetadata({
    title: 'Program',
    description: programsMetaDescription,
    path: '/program',
    siteSettings,
  });
}

export default async function ProgramPage() {
  return (
    <>
      <PageHeader
        eyebrow="Program"
        title="Program dibaca dari apa yang anak jalani setiap hari, bukan dari istilah kurikulum."
        description="Setiap kelompok punya ritme, fokus, dan bentuk pendampingan yang berbeda. Orang tua bisa melihat mana yang paling sesuai dengan tahap anak saat ini."
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button asChild>
            <Link href="/ppdb">Lihat alur pendaftaran</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/kontak">Jadwalkan kunjungan</Link>
          </Button>
        </div>
      </PageHeader>

      <StorySection
        eyebrow="Memilih tahap"
        title="Yang perlu dicari bukan kelas paling cepat, tetapi ritme yang paling pas untuk anak."
        description="Ada anak yang masih perlu waktu untuk nyaman di sekolah. Ada juga yang sudah siap mengikuti kegiatan lebih terarah. Program kami dibagi dari kebutuhan seperti itu."
        aside={
          <FactRail
            eyebrow="Cara membacanya"
            title="Tiga hal yang sebaiknya dilihat sebelum memilih kelompok."
            items={[
              {
                label: 'Cocok untuk siapa',
                value: 'Lihat tahap anak sekarang',
                description: 'Bukan hanya umur, tetapi juga kesiapan mengikuti ritme sekolah.',
              },
              {
                label: 'Anak melakukan apa',
                value: 'Lihat pengalaman hariannya',
                description: 'Fokus pada aktivitas yang benar-benar dijalani anak, bukan nama metodenya.',
              },
              {
                label: 'Yang biasanya terlihat',
                value: 'Lihat perubahan kecilnya',
                description:
                  'Yang paling terasa sering muncul di rumah: anak lebih siap, lebih tenang, atau lebih berani.',
              },
            ]}
            sticky
          />
        }
      >
        <div className="space-y-5">
          {programClasses.map((item, index) => (
            <CardSurface
              key={item.name}
              tone={index % 2 === 0 ? 'translucent' : 'soft'}
              padding="xl"
              className="space-y-4"
            >
              <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-secondary">{item.age}</p>
                  <h2 className="mt-2 text-3xl font-semibold">{item.name}</h2>
                </div>
                <Badge tone="surface" size="sm">
                  {item.forWho}
                </Badge>
              </div>
              <p className="max-w-3xl text-base leading-relaxed text-text-muted">{item.description}</p>
              <div className="grid gap-4 lg:grid-cols-[1.1fr,0.9fr]">
                <div className="space-y-3">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-text-muted">Yang anak lakukan</p>
                  <ul className="space-y-3">
                    {item.whatChildrenDo.map((point) => (
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
                  <p className="mt-3 text-sm leading-relaxed text-foreground/85">{item.whatParentsNotice}</p>
                </div>
              </div>
            </CardSurface>
          ))}
        </div>
      </StorySection>

      <PageSection padding="none" className="px-4 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <MediaBand
            eyebrow="Cara belajar"
            title="Cara belajar di kelas kami sengaja dibuat mudah dipahami orang tua."
            description="Istilah resminya ada di sekolah, tetapi yang paling penting untuk keluarga adalah bagaimana anak menjalani hari, merespons guru, dan bertumbuh dari minggu ke minggu."
          >
            <div className="grid gap-3 sm:grid-cols-2">
              {programLearningMethods.map((method) => (
                <div key={method.title} className="rounded-[1.25rem] border border-border/60 bg-white/60 px-4 py-4">
                  <p className="text-sm font-semibold text-foreground">{method.title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-text-muted">{method.description}</p>
                </div>
              ))}
            </div>
          </MediaBand>
        </div>
      </PageSection>

      <PageSection padding="relaxed" tone="muted">
        <div className="mx-auto max-w-6xl space-y-6">
          <div className="space-y-4">
            <Badge tone="secondary" size="sm">
              Contoh ritme mingguan
            </Badge>
            <h2 className="max-w-[14ch] text-balance text-3xl font-semibold sm:text-4xl">
              Seminggu anak tidak mengerjakan hal yang sama setiap hari.
            </h2>
            <p className="max-w-3xl text-base leading-relaxed text-text-muted">
              Ada ritme yang membantu anak masuk ke minggu baru, banyak mencoba, berkarya, dan menutup minggu dengan
              pengalaman berbeda.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {programWeeklySchedule.map((item) => (
              <CardSurface key={item.day} tone="translucent" padding="lg" className="h-full space-y-3">
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-secondary">{item.day}</p>
                <h3 className="text-2xl font-semibold">{item.theme}</h3>
                <p className="text-sm leading-relaxed text-text-muted">{item.highlight}</p>
              </CardSurface>
            ))}
          </div>
        </div>
      </PageSection>
    </>
  );
}
