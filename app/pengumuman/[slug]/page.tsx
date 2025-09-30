
import { client } from "@/lib/sanity";
import { PortableText } from "@portabletext/react";
import type { PortableTextBlock } from '@portabletext/types';
import { notFound } from 'next/navigation';
import { createPageMetadata } from "@/lib/metadata";
import { getGlobalSiteData } from "@/lib/sanity.queries";

type NewsDetail = {
  title: string;
  slug: { current: string };
  publishedAt: string;
  body: PortableTextBlock[];
};

async function getNewsDetail(slug: string): Promise<NewsDetail | null> {
  const query = `*[_type == "news" && slug.current == $slug][0]`;

  try {
    const data = await client.fetch<NewsDetail | null>(query, { slug });
    return data ?? null;
  } catch (error) {
    console.error(`Failed to fetch pengumuman detail for slug "${slug}":`, error);
    return null;
  }
}

type NewsDetailParams = { slug: string };
type NewsDetailProps = { params: Promise<NewsDetailParams> };

function portableTextToPlainText(value: PortableTextBlock[] | undefined): string {
  if (!value) {
    return "";
  }

  return value
    .map((block) => {
      if (block._type !== "block" || !Array.isArray(block.children)) {
        return "";
      }

      return block.children
        .map((child) => (typeof child.text === "string" ? child.text : ""))
        .join("");
    })
    .join(" ")
    .replace(/\s+/g, " ")
    .trim();
}

export async function generateMetadata({ params }: NewsDetailProps) {
  const { slug } = await params;
  const [newsItem, { siteSettings }] = await Promise.all([
    getNewsDetail(slug),
    getGlobalSiteData(),
  ]);

  if (!newsItem) {
    return createPageMetadata({
      title: "Pengumuman Tidak Ditemukan",
      description: "Pengumuman yang Anda cari mungkin sudah diarsipkan atau dihapus.",
      path: `/pengumuman/${slug}`,
      siteSettings,
    });
  }

  const description =
    portableTextToPlainText(newsItem.body) ||
    "Baca pengumuman resmi terbaru dari TK Kartikasari.";

  return createPageMetadata({
    title: newsItem.title,
    description,
    path: `/pengumuman/${newsItem.slug?.current ?? slug}`,
    siteSettings,
  });
}

export default async function NewsDetail({ params }: NewsDetailProps) {
  const { slug } = await params;
  const newsItem = await getNewsDetail(slug);

  if (!newsItem) {
    return notFound();
  }

  return (
    <article className="max-w-3xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-2">{newsItem.title}</h1>
        <p className="text-gray-500 mb-4">
            {new Date(newsItem.publishedAt).toLocaleDateString('id-ID', {
            day: 'numeric', 
            month: 'long', 
            year: 'numeric'
            })}
        </p>
        <div className="prose prose-lg dark:prose-invert">
            <PortableText value={newsItem.body} />
        </div>
    </article>
  );
}
