
import { MetadataRoute } from 'next';
import { allPosts } from 'contentlayer/generated';
import siteData from '@/data/site.json';

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = siteData.url;

  // Dapatkan semua URL postingan blog
  const blogRoutes = allPosts.map((post) => ({
    url: `${siteUrl}${post.url}`,
    lastModified: new Date(post.publishedAt).toISOString(),
  }));

  // Daftar URL statis
  const staticRoutes = [
    '/',
    '/tentang-kami',
    '/program',
    '/ppdb',
    '/biaya',
    '/kontak',
    '/blog',
    '/kebijakan-privasi',
    '/syarat-dan-ketentuan',
    '/disklaimer',
  ].map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date().toISOString(),
  }));

  return [...staticRoutes, ...blogRoutes];
}
