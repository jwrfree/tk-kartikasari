import Link from 'next/link';

import PageHeader from '@/components/layout/PageHeader';
import PageSection from '@/components/layout/PageSection';
import { CardSurface } from '@/components/ui/CardSurface';
import { FactRail } from '@/components/ui/FactRail';
import { createPageMetadata } from '@/lib/metadata';
import { getGlobalSiteData } from '@/lib/sanity.queries';
import { fetchSanityData } from '@/lib/sanity-client';

const SANITY_SKIP_MESSAGE = 'Sanity fetch skipped after previous network failure';
let hasLoggedPengumumanListError = false;
let hasLoggedPengumumanListSkip = false;

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
    } else if (!hasLoggedPengumumanListSkip && error instanceof Error && error.message.includes(SANITY_SKIP_MESSAGE)) {
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

export default async function PengumumanPage() {
  const newsItems = await getNewsData();

  return (
    <>
      <PageHeader
        eyebrow="Pengumuman"
        title="Informasi penting sekolah ditampilkan rapi supaya keluarga cepat menangkap intinya."
        description={pengumumanDescription}
      />

      <PageSection padding="relaxed">
        <div className="editorial-grid items-start">
          <div className="space-y-4">
            <h2 className="max-w-[14ch] text-balance text-3xl font-semibold sm:text-4xl lg:text-[2.9rem]">
              Orang tua dapat melihat kabar penting sekolah dengan urutan dan konteks yang jelas.
            </h2>
            <p className="max-w-2xl text-base leading-relaxed text-text-muted">
              Saat ada perubahan jadwal, informasi administrasi, atau pemberitahuan penting lain, daftar ini membantu
              keluarga menemukannya tanpa harus menebak-nebak mana yang paling baru.
            </p>
          </div>
          <FactRail
            eyebrow="Pengumuman"
            title="Tiga hal yang penting di daftar ini."
            items={[
              {
                label: 'Sifat',
                value: 'Resmi',
                description: 'Digunakan untuk pemberitahuan penting kepada orang tua dan wali murid.',
              },
              {
                label: 'Urutan',
                value: 'Terbaru di atas',
                description: 'Informasi yang paling relevan muncul lebih dulu.',
              },
              {
                label: 'Lanjutan',
                value: 'Buka detail',
                description: 'Setiap item punya halaman detail agar informasi tidak dipotong berlebihan.',
              },
            ]}
            sticky
          />
        </div>
      </PageSection>

      <PageSection padding="relaxed" tone="muted">
        <div className="space-y-4">
          {newsItems.length === 0 ? (
            <CardSurface tone="soft" padding="xl" className="mx-auto max-w-3xl text-center">
              <h2 className="text-2xl font-semibold text-text">Belum ada pengumuman terbaru</h2>
              <p className="mt-3 text-base text-text-muted">
                Ketika ada informasi penting, pengumuman terbaru akan muncul di sini.
              </p>
            </CardSurface>
          ) : (
            newsItems.map((item) => (
              <Link key={item._id} href={`/pengumuman/${item.slug.current}`} className="block group">
                <CardSurface
                  tone="translucent"
                  padding="xl"
                  className="transition duration-300 group-hover:-translate-y-1"
                >
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-secondary">
                    {new Date(item.publishedAt).toLocaleDateString('id-ID', {
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric',
                    })}
                  </p>
                  <h2 className="mt-3 text-2xl font-semibold text-text">{item.title}</h2>
                </CardSurface>
              </Link>
            ))
          )}
        </div>
      </PageSection>
    </>
  );
}
