import { PortableText } from '@portabletext/react';
import type { PortableTextBlock } from '@portabletext/types';
import { notFound } from 'next/navigation';

import PageSection from '@/components/layout/PageSection';
import { Badge } from '@/components/ui/Badge';
import { FactRail } from '@/components/ui/FactRail';
import { createPageMetadata } from '@/lib/metadata';
import { getGlobalSiteData } from '@/lib/sanity.queries';
import { fetchSanityData } from '@/lib/sanity-client';

type NewsDetail = {
  title: string;
  slug: { current: string };
  publishedAt: string;
  body: PortableTextBlock[];
};

const SANITY_SKIP_MESSAGE = 'Sanity fetch skipped after previous network failure';
let hasLoggedPengumumanDetailError = false;
let hasLoggedPengumumanDetailSkip = false;

async function getNewsDetail(slug: string): Promise<NewsDetail | null> {
  const query = `*[_type == "news" && slug.current == $slug][0]`;

  try {
    const data = await fetchSanityData<NewsDetail | null>(query, { slug });
    return data ?? null;
  } catch (error) {
    if (!hasLoggedPengumumanDetailError) {
      console.error(`Failed to fetch pengumuman detail for slug "${slug}":`, error);
      hasLoggedPengumumanDetailError = true;
    } else if (
      !hasLoggedPengumumanDetailSkip &&
      error instanceof Error &&
      error.message.includes(SANITY_SKIP_MESSAGE)
    ) {
      console.warn('Skipping pengumuman detail fetch after previous Sanity network failure.');
      hasLoggedPengumumanDetailSkip = true;
    }
    return null;
  }
}

type NewsDetailParams = { slug: string };
type NewsDetailProps = { params: Promise<NewsDetailParams> };

function portableTextToPlainText(value: PortableTextBlock[] | undefined): string {
  if (!value) {
    return '';
  }

  return value
    .map((block) => {
      if (block._type !== 'block' || !Array.isArray(block.children)) {
        return '';
      }

      return block.children.map((child) => (typeof child.text === 'string' ? child.text : '')).join('');
    })
    .join(' ')
    .replace(/\s+/g, ' ')
    .trim();
}

export async function generateMetadata({ params }: NewsDetailProps) {
  const { slug } = await params;
  const [newsItem, { siteSettings }] = await Promise.all([getNewsDetail(slug), getGlobalSiteData()]);

  if (!newsItem) {
    return createPageMetadata({
      title: 'Pengumuman Tidak Ditemukan',
      description: 'Pengumuman yang Anda cari mungkin sudah diarsipkan atau dihapus.',
      path: `/pengumuman/${slug}`,
      siteSettings,
    });
  }

  const description = portableTextToPlainText(newsItem.body) || 'Baca pengumuman resmi terbaru dari TK Kartikasari.';

  return createPageMetadata({
    title: newsItem.title,
    description,
    path: `/pengumuman/${newsItem.slug?.current ?? slug}`,
    siteSettings,
  });
}

export default async function NewsDetail({ params }: NewsDetailProps) {
  const { slug } = await params;
  const newsItem = await getNewsDetail(slug);

  if (!newsItem) {
    return notFound();
  }

  return (
    <article>
      <header className="px-4 pt-28 sm:px-6 sm:pt-32">
        <div className="mx-auto max-w-5xl space-y-5">
          <Badge tone="secondary" size="sm">
            Pengumuman resmi
          </Badge>
          <h1 className="max-w-[14ch] text-balance text-4xl font-semibold sm:text-5xl lg:text-6xl">{newsItem.title}</h1>
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-text-muted">
            {new Date(newsItem.publishedAt).toLocaleDateString('id-ID', {
              day: 'numeric',
              month: 'long',
              year: 'numeric',
            })}
          </p>
        </div>
      </header>

      <PageSection padding="relaxed">
        <div className="editorial-grid items-start">
          <div className="prose prose-lg max-w-none prose-headings:font-display prose-headings:text-foreground prose-p:text-text-muted prose-li:text-text-muted prose-a:text-primary">
            <PortableText value={newsItem.body} />
          </div>
          <FactRail
            eyebrow="Konteks"
            title="Tentang pengumuman ini."
            items={[
              { label: 'Jenis', value: 'Informasi resmi sekolah' },
              {
                label: 'Audiens',
                value: 'Orang tua dan wali murid',
              },
              {
                label: 'Fungsi',
                value: 'Rujukan singkat',
                description: 'Detail lengkap diletakkan di satu halaman agar mudah disimpan atau dibagikan ulang.',
              },
            ]}
            sticky
          />
        </div>
      </PageSection>
    </article>
  );
}
