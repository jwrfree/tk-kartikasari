import type { PortableTextBlock } from '@portabletext/types';

export interface Post {
  _id: string;
  title: string;
  date: string; // ISO 8601 date string
  body: PortableTextBlock[];
  slug: string;
  coverImage?: string;
  _raw: {
    flattenedPath: string;
  };
}
