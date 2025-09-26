
import Link from 'next/link';
import Image from 'next/image';
import PageHeader from '@/components/layout/PageHeader';
import { blogPosts, BlogPost } from '@/content/blog';
import { ArrowRight } from 'react-bootstrap-icons';

export default function BlogListPage() {
  return (
    <>
      <PageHeader
        eyebrow="Blog & Berita"
        title="Tips Parenting dan Kegiatan Sekolah"
        description="Ikuti artikel terbaru dari kami untuk mendapatkan wawasan seputar dunia pendidikan anak usia dini dan melihat keseruan kegiatan di TK Kartikasari."
      />

      <div className="bg-surfaceAlt">
        <div className="content-container py-16 sm:py-20">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link href={`/blog/${post.slug}`}>
      <div className="card h-full transform-gpu bg-white/60 shadow-soft backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-primary/20">
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-t-2xl">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
            loading="lazy"
          />
        </div>
        <div className="flex h-full flex-col p-6">
          <p className="text-sm text-text-muted">
            {new Date(post.publishedAt).toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}
            <span className="mx-1">·</span>
            {post.readingTime} min baca
          </p>
          <h3 className="mt-2 text-lg font-semibold text-text">{post.title}</h3>
          <p className="mt-2 flex-grow text-sm text-text-muted">{post.description}</p>
          <div className="mt-4 flex items-center text-sm font-semibold text-primary">
            Baca selengkapnya <ArrowRight className="ml-1 h-4 w-4" />
          </div>
        </div>
      </div>
    </Link>
  );
}
