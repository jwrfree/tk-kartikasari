
import { MetadataRoute } from 'next';
import siteData from '@/data/site.json';

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = siteData.siteUrl;

  // Daftar URL statis yang ada di situs
  const staticRoutes = [
    '/',
    '/agenda',
    '/biaya',
    '/blog',
    '/disklaimer',
    '/fasilitas',
    '/galeri',
    '/kebijakan-privasi',
    '/kontak',
    '/pengumuman',
    '/ppdb',
    '/program',
    '/syarat-dan-ketentuan',
    '/tentang',
  ].map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date().toISOString(),
  }));

  return staticRoutes;
}
