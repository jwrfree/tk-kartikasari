import { createPageMetadata } from '@/lib/metadata';
import { getGlobalSiteData } from '@/lib/sanity.queries';
import BlogManagementPageClient from './BlogManagementPageClient';

export async function generateMetadata() {
  const { siteSettings } = await getGlobalSiteData();
  return createPageMetadata({
    title: 'Kelola Blog',
    description: 'Pantau dan kelola artikel blog TK Kartikasari, unggah dokumentasi terbaru, serta atur jadwal publikasi.',
    path: '/admin/blog',
    siteSettings,
  });
}

export default function BlogManagementPage() {
  return <BlogManagementPageClient />;
}
