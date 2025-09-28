import { client } from '@/lib/sanity';
import Link from 'next/link';

// Ambil semua data pengumuman, urutkan dari yang terbaru
type NewsItem = {
  _id: string;
  title: string;
  slug: { current: string };
  publishedAt: string;
};

async function getNewsData(): Promise<NewsItem[]> {
  const query = `*[_type == "news"] | order(publishedAt desc)`;

  try {
    const data = await client.fetch<NewsItem[]>(query);
    return data ?? [];
  } catch (error) {
    console.error('Failed to fetch pengumuman from Sanity:', error);
    return [];
  }
}

// Halaman utama untuk menampilkan daftar pengumuman
export default async function PengumumanPage() {
  const newsItems = await getNewsData();

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8 text-center">Pengumuman Sekolah</h1>
      <div className="space-y-6">
        {newsItems.length === 0 ? (
          <p className="text-center text-gray-500">Belum ada pengumuman terbaru saat ini.</p>
        ) : (
          newsItems.map((item) => (
            <article key={item._id} className="p-4 border rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h2 className="text-xl font-semibold">
                {/* Buat link ke halaman detail nantinya */}
                <Link href={`/pengumuman/${item.slug.current}`}>
                  {item.title}
                </Link>
              </h2>
              <p className="text-gray-500 mt-2">
                {new Date(item.publishedAt).toLocaleDateString('id-ID', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric'
                })}
              </p>
            </article>
          ))
        )}
      </div>
    </div>
  );
}
