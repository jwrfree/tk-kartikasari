import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "react-bootstrap-icons";

import AnimateIn from "@/components/AnimateIn";
import PageSection from "@/components/layout/PageSection";
import SectionHeader from "@/components/layout/SectionHeader";
import { CardSurface } from "@/components/ui/CardSurface";
import type { Post as BlogPost } from "@/lib/blog";
import { formatBlogDescription } from "@/lib/home";

type BlogCopy = {
  eyebrow: string;
  title: string;
  description: string;
  emptyTitle: string;
  emptyDescription: string;
  emptyPrimaryCta: string;
  emptySecondaryCta: string;
};

type BlogSectionProps = {
  posts: BlogPost[];
  copy: BlogCopy;
};

export function BlogSection({ posts, copy }: BlogSectionProps) {
  const hasPosts = posts.length > 0;

  return (
    <PageSection id="blog" padding="tight">
      <AnimateIn className="space-y-8">
        <SectionHeader eyebrow={copy.eyebrow} title={copy.title} description={copy.description} />
        {hasPosts ? (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.slice(0, 3).map((post) => {
              const coverImage = post.coverImage;
              const publishedAt = post.date;
              const rawBody = post.body?.raw ?? "";
              const description = formatBlogDescription(rawBody) || "Baca kisah terbaru dari TK Kartikasari.";

              return (
                <Link
                  href={`/blog/${post.slug}`}
                  key={post.slug}
                  className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 group block rounded-2xl"
                >
                  <article className="card h-full transform-gpu bg-white/60 shadow-soft backdrop-blur-xl transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-primary/20">
                    <div className="relative aspect-[16/9] w-full overflow-hidden rounded-t-2xl">
                      {coverImage ? (
                        <Image
                          src={coverImage}
                          alt={post.title}
                          fill
                          className="object-cover"
                          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                          loading="lazy"
                        />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center bg-secondary/10 text-secondary">
                          <span className="text-sm font-semibold">TK Kartikasari</span>
                        </div>
                      )}
                    </div>
                    <div className="flex h-full flex-col p-6">
                      <p className="text-sm text-text-muted">
                        {new Date(publishedAt).toLocaleDateString("id-ID", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </p>
                      <h3 className="mt-2 text-lg font-semibold text-text">{post.title}</h3>
                      <p className="mt-2 flex-grow text-sm text-text-muted">{description}</p>
                      <div className="mt-4 flex items-center text-sm font-semibold text-primary transition-transform group-hover:translate-x-1">
                        Baca selengkapnya <ArrowRight className="ml-1 h-4 w-4" />
                      </div>
                    </div>
                  </article>
                </Link>
              );
            })}
          </div>
        ) : (
          <CardSurface tone="soft" padding="xl" className="text-center shadow-soft backdrop-blur-xl">
            <h3 className="text-xl font-semibold text-text">{copy.emptyTitle}</h3>
            <p className="mt-3 text-base leading-relaxed text-text-muted">{copy.emptyDescription}</p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Link href="/program" className="btn-primary inline-flex items-center justify-center gap-2">
                {copy.emptyPrimaryCta}
              </Link>
              <Link href="/kontak" className="btn-secondary inline-flex items-center justify-center gap-2">
                {copy.emptySecondaryCta}
              </Link>
            </div>
          </CardSurface>
        )}
      </AnimateIn>
    </PageSection>
  );
}
