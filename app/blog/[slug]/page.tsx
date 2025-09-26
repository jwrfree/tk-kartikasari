
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { blogPosts, BlogPost } from '@/content/blog';
import PageHeader from '@/components/layout/PageHeader';
import { Calendar, Person, Tag, Clock } from 'react-bootstrap-icons'; // Added Clock icon
import { createBlogPostingJsonLd } from '@/lib/json-ld';
import site from '@/data/site.json';

// Generate static paths for all blog posts
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

// Find the post by slug
function getPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

// Define the props type to align with Next.js generated types
type PageProps = {
  params: Promise<{ slug: string }>;
};

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) {
    return notFound();
  }

  const url = new URL(`/blog/${post.slug}`, site.siteUrl).toString();
  const blogPostingJsonLd = createBlogPostingJsonLd({
    title: post.title,
    description: post.description,
    date: post.publishedAt,
    authorName: post.author,
    url,
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingJsonLd) }}
      />
      <PageHeader
        eyebrow={post.tags.join(', ')}
        title={post.title}
        description={post.description}
      />

      <div className="content-container py-12">
        <div className="mx-auto max-w-3xl">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-text-muted">
            <div className="flex items-center gap-2">
              <Person />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar />
              <span>{new Date(post.publishedAt).toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock /> 
              <span>{post.readingTime} min baca</span>
            </div>
            <div className="flex items-center gap-2">
              <Tag />
              <span>{post.tags.join(', ')}</span>
            </div>
          </div>

          <div className="relative aspect-[16/9] my-8 w-full overflow-hidden rounded-2xl">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 800px, 100vw"
              priority
            />
          </div>

          <div
            className="prose prose-lg max-w-none prose-h2:text-2xl prose-h2:font-semibold prose-h2:text-text prose-p:text-text-muted prose-a:text-primary hover:prose-a:text-primary/80"
            dangerouslySetInnerHTML={{ __html: post.body }}
          />
        </div>
      </div>
    </>
  );
}
