
import type { BlogPosting, Organization, WebSite, LocalBusiness, EducationalOrganization } from 'schema-dts';

import site from '@/data/site.json';

export function createOrganizationJsonLd(): Organization {
  return {
    '@type': 'Organization',
    name: site.schoolName,
    url: site.siteUrl,
    logo: new URL('/logo.png', site.siteUrl).toString(),
    sameAs: Object.values(site.socialLinks),
  };
}

export function createWebSiteJsonLd(): WebSite {
  return {
    '@type': 'WebSite',
    name: site.schoolName,
    url: site.siteUrl,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${site.siteUrl}/search?q={search_term_string}`,
      query: 'required name=search_term_string',
    },
  };
}

export function createLocalBusinessJsonLd(): EducationalOrganization {
    return {
        '@type': 'School',
        name: site.schoolName,
        address: {
            '@type': 'PostalAddress',
            streetAddress: 'Jl. K.H. Syarbini Hasan No.2, Sidadadi, Bulaksari',
            addressLocality: 'Bantarsari',
            addressRegion: 'Cilacap',
            postalCode: '53258',
            addressCountry: 'ID',
        },
        telephone: site.whatsapp,
        openingHours: site.openingHours,
        geo: {
            '@type': 'GeoCoordinates',
            latitude: -7.538686670001884,
            longitude: 108.9757754284218,
        },
        url: site.siteUrl,
        logo: new URL('/logo.png', site.siteUrl).toString(),
        image: new URL('/logo.png', site.siteUrl).toString(),
    };
}

type CreateBlogPostingJsonLdOptions = {
  title: string;
  description: string;
  date: string;
  authorName: string;
  url: string;
};

export function createBlogPostingJsonLd({
  title,
  description,
  date,
  authorName,
  url,
}: CreateBlogPostingJsonLdOptions): BlogPosting {
  return {
    '@type': 'BlogPosting',
    headline: title,
    description,
    datePublished: date,
    author: {
      '@type': 'Person',
      name: authorName,
    },
    publisher: {
      '@type': 'Organization',
      name: site.schoolName,
      logo: {
        '@type': 'ImageObject',
        url: new URL('/logo.png', site.siteUrl).toString(),
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
  };
}
