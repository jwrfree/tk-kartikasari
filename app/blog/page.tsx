import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'react-bootstrap-icons';

import PageHeader from '@/components/layout/PageHeader';
import PageSection from '@/components/layout/PageSection';
import { Badge } from '@/components/ui/Badge';
import { CardSurface } from '@/components/ui/CardSurface';
import { FactRail } from '@/components/ui/FactRail';
import { getPosts, Post } from '@/lib/blog';
import { portableTextToPlainText } from '@/lib/utils';
import { createPageMetadata } from '@/lib/metadata';
import { getGlobalSiteData } from '@/lib/sanity.queries';

export const revalidate = 60;

const blogDescription =
  'Baca cerita kelas, catatan kegiatan, dan tulisan singkat yang membantu orang tua mengenal keseharian TK Kartikasari.';

export async function generateMetadata() {
  const { siteSettings } = await getGlobalSiteData();
  return createPageMetadata({
    title: 'Blog & Berita',
    description: blogDescription,
    path: '/blog',
    siteSettings,
  });
}

export default async function BlogListPage() {
  const posts = await getPosts();

  return (
    <>
      <PageHeader
        eyebrow="Blog & Berita"
        title="Tulisan untuk membantu orang tua memahami kegiatan sekolah dan keseharian anak."
        description={blogDescription}
      />

      <PageSection padding="relaxed">
        <div className="editorial-grid items-start">
          <div className="space-y-6">
            <Badge tone="secondary" size="sm">
              Arsip tulisan
            </Badge>
            <h2 className="max-w-[14ch] text-balance text-3xl font-semibold sm:text-4xl lg:text-[2.9rem]">
              Di sini kami membagikan cerita kelas, tips sederhana, dan konteks yang sering ditanyakan orang tua.
            </h2>
            <p className="max-w-2xl text-base leading-relaxed text-text-muted">
              Tulisan-tulisan ini membantu orang tua melihat bagaimana kegiatan sekolah berjalan, bahkan saat belum sempat
              datang langsung.
            </p>
          </div>

          <FactRail
            eyebrow="Ringkas"
            title="Apa yang bisa ditemukan di sini."
            items={[
              {
                label: 'Isi',
                value: 'Cerita kelas dan tips',
                description: 'Tulisan yang menghubungkan kegiatan sekolah dengan kehidupan anak di rumah.',
              },
              {
                label: 'Nada',
                value: 'Ringan dibaca',
                description: 'Bahasanya dibuat mudah dibaca tanpa banyak istilah teknis.',
              },
              {
                label: 'Kapan dibaca',
                value: 'Sebelum chat atau kunjungan',
                description: 'Artikel bisa membantu Anda mengenal sekolah sebelum menghubungi admin.',
              },
            ]}
            sticky
          />
        </div>
      </PageSection>

      <PageSection padding="relaxed" tone="muted">
        {posts.length === 0 ? (
          <CardSurface tone="soft" padding="xl" className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-semibold text-text">Belum ada artikel terbaru</h2>
            <p className="mt-3 text-base text-text-muted">
              Tulisan baru sedang disiapkan. Untuk sementara, Anda masih bisa melihat program, biaya, atau menghubungi
              sekolah langsung.
            </p>
          </CardSurface>
        ) : (
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {posts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        )}
      </PageSection>
    </>
  );
}

function BlogCard({ post }: { post: Post }) {
  const plainBody = portableTextToPlainText(post.body);
  const truncatedBody = plainBody.slice(0, 130);
  const description = plainBody.length > 130 ? `${truncatedBody}...` : truncatedBody;

  return (
    <Link href={`/blog/${post.slug}`} className="group">
      <CardSurface
        tone="translucent"
        padding="none"
        className="h-full overflow-hidden transition duration-300 group-hover:-translate-y-1"
      >
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-surface-muted">
          {post.coverImage ? (
            <Image
              src={post.coverImage}
              alt={`Gambar cover untuk ${post.title}`}
              fill
              className="object-cover transition duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-[radial-gradient(circle_at_top,rgba(215,164,65,0.25),transparent_24%),radial-gradient(circle_at_bottom_left,rgba(197,106,74,0.24),transparent_28%)]">
              <p className="text-sm text-text-disabled">Foto cover menyusul</p>
            </div>
          )}
        </div>
        <div className="flex flex-col gap-4 p-6">
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-secondary">
            {new Date(post.date).toLocaleDateString('id-ID', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </p>
          <h3 className="text-2xl font-semibold text-text">{post.title}</h3>
          <p className="flex-grow text-sm leading-relaxed text-text-muted">{description}</p>
          <div className="mt-1 inline-flex items-center text-sm font-semibold text-primary">
            Baca selengkapnya <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
          </div>
        </div>
      </CardSurface>
    </Link>
  );
}
