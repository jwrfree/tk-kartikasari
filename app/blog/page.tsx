
import PageHeader from '@/components/layout/PageHeader';
import { getPosts } from '@/lib/blog';
import { createPageMetadata } from '@/lib/metadata';
import { getGlobalSiteData } from '@/lib/sanity.queries';
import { BlogPreviewCard } from '@/components/blog/BlogPreviewCard';

export const revalidate = 60; // revalidate list every minute to pick up new posts

const blogDescription =
  'Ikuti artikel terbaru dari kami untuk mendapatkan wawasan seputar dunia pendidikan anak usia dini dan melihat keseruan kegiatan di TK Kartikasari.';

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
        title="Tips Parenting dan Kegiatan Sekolah"
        description={blogDescription}
      />

      <div className="bg-surfaceAlt">
        <div className="content-container py-16 sm:py-20">
          {posts.length === 0 ? (
            <p className="text-center text-text-muted">
              Belum ada postingan. Silakan tambahkan data di Firestore.
            </p>
          ) : (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <BlogPreviewCard key={post.slug} post={post} />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
