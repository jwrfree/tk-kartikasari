import Link from "next/link";

import AnimateIn from "@/components/AnimateIn";
import PageSection from "@/components/layout/PageSection";
import SectionHeader from "@/components/layout/SectionHeader";
import { CardSurface } from "@/components/ui/CardSurface";
import type { Post as BlogPost } from "@/lib/blog";
import { Button } from "@/components/ui/Button";
import { BlogPreviewCard } from "@/components/blog/BlogPreviewCard";

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
            {posts.slice(0, 3).map((post) => (
              <BlogPreviewCard key={post.slug} post={post} />
            ))}
          </div>
        ) : (
          <CardSurface tone="soft" padding="xl" className="text-center shadow-soft backdrop-blur-xl">
            <h3 className="text-xl font-semibold text-text">{copy.emptyTitle}</h3>
            <p className="mt-3 text-base leading-relaxed text-text-muted">{copy.emptyDescription}</p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Button asChild className="sm:w-auto" fullWidth>
                <Link href="/program">{copy.emptyPrimaryCta}</Link>
              </Button>
              <Button asChild variant="secondary" className="sm:w-auto" fullWidth>
                <Link href="/kontak">{copy.emptySecondaryCta}</Link>
              </Button>
            </div>
          </CardSurface>
        )}
      </AnimateIn>
    </PageSection>
  );
}
