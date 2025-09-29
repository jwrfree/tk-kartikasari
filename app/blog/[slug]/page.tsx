import { notFound } from 'next/navigation';
import Image from 'next/image';
import { getPosts, getPostBySlug } from '@/lib/blog'; // Import Post from @/lib/blog
import { Clock, Person } from 'react-bootstrap-icons';
import Mdx from '@/components/mdx/Mdx';
import EngagementSection from '@/components/blog/EngagementSection';
import { createPageMetadata } from "@/lib/metadata";
import { calculateReadingTime } from '@/lib/utils';

export const revalidate = 60; // refresh detail pages regularly for new/updated posts


// Generate static paths for all blog posts
export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// Generate metadata for the page
type BlogPageParams = { slug: string };
type BlogPageProps = { params: Promise<BlogPageParams> };

export async function generateMetadata({ params }: BlogPageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return notFound(); // Or return a default metadata object
  }

  return createPageMetadata({
    title: post.title,
    description: post.body.raw.substring(0, 155), // Use the first 155 chars as a description
    image: post.coverImage,
    path: `/blog/${post.slug}`,
  });
}

export default async function BlogPostPage({ params }: BlogPageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return notFound();
  }

  const readingTime = Math.max(1, calculateReadingTime(post.body.raw));

  return (
    <article className="bg-surfaceAlt">
      {/* Cover Image */}
      {post.coverImage && (
        <header className="relative h-64 w-full md:h-80 lg:h-96">
          <Image
            src={post.coverImage}
            alt={`Gambar cover untuk ${post.title}`}
            fill
            className="object-cover"
            priority // Prioritize loading the LCP element
          />
          {/* Optional: Add a scrim for better title visibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </header>
      )}

      <div className="content-container py-12">
        <div className="mx-auto max-w-3xl">
          {/* Post Title */}
          <h1 className="text-3xl font-bold text-text md:text-4xl lg:text-5xl">
            {post.title}
          </h1>

          {/* Post Metadata */}
          <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-text-muted">
            <div className="flex items-center gap-2">
              <Person />
              <span>Tim TK Kartikasari</span>
            </div>
            <div className="flex items-center gap-2">
              <span>{new Date(post.date).toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock />
              <span>{readingTime} menit baca</span>
            </div>
          </div>

          {/* Render the markdown content */}
          <div className="prose prose-lg mt-8 max-w-none prose-h2:text-2xl prose-h2:font-semibold prose-h2:text-text prose-p:text-text-muted prose-a:text-primary hover:prose-a:text-primary/80">
            <Mdx code={post.body.raw} />
          </div>
        </div>
        <div className="mx-auto mt-8 max-w-4xl">
          <EngagementSection slug={post.slug} />
        </div>
      </div>
    </article>
  );
}
