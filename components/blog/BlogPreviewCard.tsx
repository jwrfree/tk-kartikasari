import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "react-bootstrap-icons";

import { cn } from "@/lib/utils";
import type { Post as BlogPost } from "@/lib/blog";
import { formatBlogDescription } from "@/lib/home";

type BlogPreviewCardProps = {
  post: BlogPost;
  className?: string;
};

export function BlogPreviewCard({ post, className }: BlogPreviewCardProps) {
  const coverImage = post.coverImage;
  const fallbackDescription =
    formatBlogDescription(post.body?.raw ?? "") ||
    "Baca kisah terbaru dari TK Kartikasari.";
  const description = post.caption?.trim() || fallbackDescription;

  return (
    <Link
      href={`/blog/${post.slug}`}
      className={cn(
        "group block h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2",
        className,
      )}
    >
      <article className="card flex h-full flex-col overflow-hidden rounded-2xl bg-white/70 shadow-soft backdrop-blur-xl transition-transform duration-300 group-hover:-translate-y-1 group-hover:shadow-primary/20">
        <div className="relative aspect-[16/9] w-full">
          {coverImage ? (
            <Image
              src={coverImage}
              alt={post.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-secondary/10 text-secondary">
              <span className="text-sm font-semibold">TK Kartikasari</span>
            </div>
          )}
        </div>
        <div className="flex flex-col p-6">
          <p className="text-sm text-text-muted">
            {new Date(post.date).toLocaleDateString("id-ID", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
          <h3 className="mt-2 text-lg font-semibold text-text">{post.title}</h3>
          <p
            className="mt-2 flex-grow text-sm text-text-muted line-clamp-2"
            aria-label={description}
          >
            {description}
          </p>
          <span className="mt-4 inline-flex items-center text-sm font-semibold text-primary transition-transform duration-300 group-hover:translate-x-1">
            Baca selengkapnya <ArrowRight className="ml-1 h-4 w-4" aria-hidden="true" />
          </span>
        </div>
      </article>
    </Link>
  );
}
