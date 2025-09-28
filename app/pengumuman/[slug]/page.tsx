
import { client } from "@/lib/sanity";
import { PortableText } from "@portabletext/react";
import { notFound } from 'next/navigation';

async function getNewsDetail(slug: string) {
  const query = `*[_type == "news" && slug.current == $slug][0]`;

  try {
    const data = await client.fetch(query, { slug });
    return data ?? null;
  } catch (error) {
    console.error(`Failed to fetch pengumuman detail for slug "${slug}":`, error);
    return null;
  }
}

type NewsDetailParams = { slug: string };
type NewsDetailProps = { params: Promise<NewsDetailParams> };

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
