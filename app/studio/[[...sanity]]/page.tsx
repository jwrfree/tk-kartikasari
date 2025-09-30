import { createPageMetadata } from '@/lib/metadata';
import { getGlobalSiteData } from '@/lib/sanity.queries';
import StudioPageClient from './StudioPageClient';

type StudioParams = { sanity?: string[] };
type StudioProps = { params: Promise<StudioParams> };

export async function generateMetadata({ params }: StudioProps) {
  const [{ siteSettings }, { sanity = [] }] = await Promise.all([
    getGlobalSiteData(),
    params,
  ]);
  const pathSegments = ['studio', ...sanity];
  const path = `/${pathSegments.filter(Boolean).join('/')}`;

  return createPageMetadata({
    title: 'Studio Konten',
    description: 'Kelola konten TK Kartikasari langsung dari Sanity Studio dengan antarmuka yang ramah pengguna.',
    path,
    siteSettings,
  });
}

export default function StudioPage() {
  return <StudioPageClient />;
}
