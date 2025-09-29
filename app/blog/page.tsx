
import Link from 'next/link';
import Image from 'next/image';
import PageHeader from '@/components/layout/PageHeader';
import { getPosts, Post } from '@/lib/blog'; // Import Post from @/lib/blog
import { ArrowRight } from 'react-bootstrap-icons';

export const revalidate = 60; // revalidate list every minute to pick up new posts

export default async function BlogListPage() {
  const posts = await getPosts();

  return (
    <>
      <PageHeader
        eyebrow="Blog & Berita"
        title="Tips Parenting dan Kegiatan Sekolah"
        description="Ikuti artikel terbaru dari kami untuk mendapatkan wawasan seputar dunia pendidikan anak usia dini dan melihat keseruan kegiatan di TK Kartikasari."
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
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

function BlogCard({ post }: { post: Post }) {
  const description = post.body?.raw ? post.body.raw.substring(0, 100) + '...' : '';

  return (
    <Link href={`/blog/${post.slug}`} className="group">
      <div className="card h-full transform-gpu overflow-hidden bg-white/60 shadow-soft backdrop-blur-xl transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-primary/20">
        <div className="relative aspect-[16/9] w-full">
          {post.coverImage ? (
            <Image
              src={post.coverImage}
              alt={`Gambar cover untuk ${post.title}`}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-surface-muted">
              <p className="text-sm text-text-disabled">Gambar tidak tersedia</p>
            </div>
          )}
        </div>
        <div className="flex flex-col p-6">
          <p className="text-sm text-text-muted">
            {new Date(post.date).toLocaleDateString('id-ID', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </p>
          <h3 className="mt-2 text-lg font-semibold text-text">{post.title}</h3>
          <p className="mt-2 flex-grow text-sm text-text-muted">{description}</p>
          <div className="mt-4 flex items-center text-sm font-semibold text-primary">
            Baca selengkapnya <ArrowRight className="ml-1 h-4 w-4" />
          </div>
        </div>
      </div>
    </Link>
  );
}
