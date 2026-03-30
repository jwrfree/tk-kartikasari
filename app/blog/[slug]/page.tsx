import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Clock, Person } from 'react-bootstrap-icons';

import { getPosts, getPostBySlug } from '@/lib/blog';
import Mdx from '@/components/mdx/Mdx';
import EngagementSection from '@/components/blog/EngagementSection';
import { createPageMetadata } from '@/lib/metadata';
import { calculateReadingTime, portableTextToPlainText } from '@/lib/utils';
import { getGlobalSiteData } from '@/lib/sanity.queries';
import PageSection from '@/components/layout/PageSection';
import { Badge } from '@/components/ui/Badge';
import { FactRail } from '@/components/ui/FactRail';

export const revalidate = 60;

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

type BlogPageParams = { slug: string };
type BlogPageProps = { params: Promise<BlogPageParams> };

export async function generateMetadata({ params }: BlogPageProps) {
  const { slug } = await params;
  const [post, { siteSettings }] = await Promise.all([getPostBySlug(slug), getGlobalSiteData()]);

  if (!post) {
    return notFound();
  }

  const description = portableTextToPlainText(post.body) || post.title;

  return createPageMetadata({
    title: post.title,
    description,
    image: post.coverImage,
    path: `/blog/${post.slug}`,
    siteSettings,
  });
}

export default async function BlogPostPage({ params }: BlogPageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return notFound();
  }

  const plainBody = portableTextToPlainText(post.body);
  const readingTime = Math.max(1, calculateReadingTime(plainBody));

  return (
    <article>
      <header className="relative overflow-hidden px-4 pt-28 sm:px-6 sm:pt-32">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr,1.1fr]">
          <div className="space-y-6 pb-8 lg:pb-12">
            <Badge tone="secondary" size="sm">
              Artikel sekolah
            </Badge>
            <h1 className="max-w-[12ch] text-balance text-4xl font-semibold sm:text-5xl lg:text-6xl">{post.title}</h1>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-text-muted">
              <div className="flex items-center gap-2">
                <Person />
                <span>Tim TK Kartikasari</span>
              </div>
              <div>
                {new Date(post.date).toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}
              </div>
              <div className="flex items-center gap-2">
                <Clock />
                <span>{readingTime} menit baca</span>
              </div>
            </div>
            <p className="max-w-2xl text-base leading-relaxed text-text-muted">
              Tulisan ini membantu orang tua memahami kegiatan atau topik yang sedang dibahas sekolah, lalu
              menghubungkannya dengan keseharian anak di rumah.
            </p>
          </div>

          <div className="relative min-h-[22rem] overflow-hidden rounded-[2rem] border border-border/70 bg-foreground shadow-premium">
            {post.coverImage ? (
              <Image
                src={post.coverImage}
                alt={`Gambar cover untuk ${post.title}`}
                fill
                className="object-cover"
                priority
              />
            ) : (
              <div className="absolute inset-0 bg-[linear-gradient(160deg,rgba(245,239,230,0.12),rgba(245,239,230,0)_42%),radial-gradient(circle_at_top_right,rgba(215,164,65,0.26),transparent_26%),radial-gradient(circle_at_bottom_left,rgba(197,106,74,0.32),transparent_28%),linear-gradient(180deg,#314037,#1f2a24)]" />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/15 to-transparent" />
          </div>
        </div>
      </header>

      <PageSection padding="relaxed">
        <div className="editorial-grid items-start">
          <div className="prose prose-lg max-w-none prose-headings:font-display prose-headings:text-foreground prose-h2:text-2xl prose-h2:font-semibold prose-p:text-text-muted prose-li:text-text-muted prose-strong:text-foreground prose-a:text-primary hover:prose-a:text-primary/80">
            <Mdx value={post.body} />
          </div>
          <FactRail
            eyebrow="Ringkas artikel"
            title="Bacaan singkat untuk keluarga."
            items={[
              {
                label: 'Penulis',
                value: 'Tim TK Kartikasari',
              },
              {
                label: 'Estimasi baca',
                value: `${readingTime} menit`,
              },
              {
                label: 'Fokus',
                value: 'Parenting dan kegiatan sekolah',
                description: 'Konten membantu orang tua menghubungkan praktik sekolah dengan kehidupan di rumah.',
              },
            ]}
            sticky
          />
        </div>
        <div className="mx-auto mt-12 max-w-5xl">
          <EngagementSection slug={post.slug} />
        </div>
      </PageSection>
    </article>
  );
}
