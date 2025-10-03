import { SANITY_NETWORK_SKIP_MESSAGE, fetchSanityData } from '@/lib/sanity-client';
import Link from 'next/link';
import { createPageMetadata } from '@/lib/metadata';
import { getGlobalSiteData } from '@/lib/sanity.queries';

let hasLoggedPengumumanListError = false;
let hasLoggedPengumumanListSkip = false;

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
    const data = await fetchSanityData<NewsItem[]>(query);
    return data ?? [];
  } catch (error) {
    if (!hasLoggedPengumumanListError) {
      console.error('Failed to fetch pengumuman from Sanity:', error);
      hasLoggedPengumumanListError = true;
    } else if (
      !hasLoggedPengumumanListSkip &&
      error instanceof Error &&
      error.message.includes(SANITY_NETWORK_SKIP_MESSAGE)
    ) {
      console.warn('Skipping pengumuman fetch after previous Sanity network failure.');
      hasLoggedPengumumanListSkip = true;
    }
    return [];
  }
}

const pengumumanDescription =
  'Temukan informasi resmi, pemberitahuan penting, dan kabar terbaru dari TK Kartikasari untuk orang tua dan wali murid.';

export async function generateMetadata() {
  const { siteSettings } = await getGlobalSiteData();
  return createPageMetadata({
    title: 'Pengumuman',
    description: pengumumanDescription,
    path: '/pengumuman',
    siteSettings,
  });
}

// Halaman utama untuk menampilkan daftar pengumuman
export default async function PengumumanPage() {
  const newsItems = await getNewsData();

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8 text-center">Pengumuman Sekolah</h1>
      <p className="mb-10 text-center text-text-muted">{pengumumanDescription}</p>
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
