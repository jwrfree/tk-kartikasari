
import { MetadataRoute } from 'next';

import { blogPosts } from '@/content/blog';
import site from '@/data/site.json';

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = blogPosts.map((post) => ({
    url: new URL(`/blog/${post.slug}`, site.siteUrl).toString(),
    lastModified: new Date(post.publishedAt).toISOString(),
  }));

  const routes = [
    '',
    '/agenda',
    '/biaya',
    '/blog',
    '/fasilitas',
    '/galeri',
    '/kontak',
    '/pengumuman',
    '/ppdb',
    '/program',
    '/tentang',
  ].map((route) => ({
    url: new URL(route, site.siteUrl).toString(),
    lastModified: new Date().toISOString(),
  }));

  return [...routes, ...posts];
}
