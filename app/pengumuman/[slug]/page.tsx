
import { client } from "@/lib/sanity";
import { PortableText } from "@portabletext/react";

async function getNewsDetail(slug: string) {
  const query = `*[_type == "news" && slug.current == $slug][0]`
  const data = await client.fetch(query, { slug });
  return data;
}

export default async function NewsDetail({ params }: { params: { slug: string } }) {
  const newsItem = await getNewsDetail(params.slug);

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
