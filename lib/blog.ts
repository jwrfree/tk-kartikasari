import { fetchSanityData } from './sanity-client';
import type { Post } from './blog-types';
import { fallbackPosts } from '@/data/blog-posts';

const sanityProjectId =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? process.env.SANITY_PROJECT_ID;
const sanityDataset =
  process.env.NEXT_PUBLIC_SANITY_DATASET ?? process.env.SANITY_DATASET;

const isSanityConfigured = Boolean(sanityProjectId && sanityDataset);

let hasLoggedPostsError = false;
let hasLoggedPostsSkip = false;
let hasLoggedSinglePostError = false;
let hasLoggedSinglePostSkip = false;

function isSkipAfterNetworkFailure(error: unknown): error is Error {
  return (
    error instanceof Error &&
    error.message.includes('Sanity fetch skipped after previous network failure')
  );
}

/**
 * Fetches all blog posts from Sanity, ordered by date.
 * @returns {Promise<Post[]>} A promise that resolves to an array of posts.
 */
export async function getPosts(): Promise<Post[]> {
  if (!isSanityConfigured) {
    return fallbackPosts;
  }

  // GROQ query to fetch all posts, ordered by date
  const query = `*[_type == "post"] | order(date desc) {
    _id,
    title,
    date,
    "body": content[]{
      ...,
      markDefs[],
      children[]{
        ...,
        _type == 'span' => {
          text,
          marks,
          _type,
          _key
        }
      }
    },
    "slug": slug.current,
    "coverImage": mainImage.asset->url
  }`;

  try {
    const sanityPosts = await fetchSanityData<Post[]>(query);

    if (!Array.isArray(sanityPosts) || sanityPosts.length === 0) {
      return fallbackPosts;
    }

    // Map the data from Sanity to the Post interface to maintain component compatibility
    return sanityPosts.map((post: any) => ({
      _id: post._id,
      title: post.title,
      date: post.date,
      body: Array.isArray(post.body) ? post.body : [],
      slug: post.slug,
      coverImage: post.coverImage,
      _raw: {
        flattenedPath: `blog/${post.slug}`,
      },
    }));
  } catch (error) {
    if (!hasLoggedPostsError) {
      console.error('Failed to fetch blog posts from Sanity:', error);
      hasLoggedPostsError = true;
    } else if (!hasLoggedPostsSkip && isSkipAfterNetworkFailure(error)) {
      console.warn('Skipping Sanity blog fetch after previous network failure.');
      hasLoggedPostsSkip = true;
    }
    return fallbackPosts;
  }
}

/**
 * Fetches a single post by its slug from Sanity.
 * @param {string} slug The slug of the post to fetch.
 * @returns {Promise<Post | null>} A promise that resolves to the post object or null if not found.
 */
export async function getPostBySlug(slug: string): Promise<Post | null> {
  if (!isSanityConfigured) {
    return fallbackPosts.find((post) => post.slug === slug) ?? null;
  }

  // GROQ query to fetch a single post by its slug
  const query = `*[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    date,
    "body": content[]{
      ...,
      markDefs[],
      children[]{
        ...,
        _type == 'span' => {
          text,
          marks,
          _type,
          _key
        }
      }
    },
    "slug": slug.current,
    "coverImage": mainImage.asset->url
  }`;

  const params = { slug };

  try {
    const post = await fetchSanityData<Post | null>(query, params);

    if (!post) {
      return fallbackPosts.find((item) => item.slug === slug) ?? null;
    }

    // Map the Sanity data to the Post interface
    return {
      _id: post._id,
      title: post.title,
      date: post.date,
      body: Array.isArray(post.body) ? post.body : [],
      slug: post.slug,
      coverImage: post.coverImage,
      _raw: {
        flattenedPath: `blog/${post.slug}`,
      },
    };
  } catch (error) {
    if (!hasLoggedSinglePostError) {
      console.error(`Failed to fetch blog post with slug "${slug}":`, error);
      hasLoggedSinglePostError = true;
    } else if (!hasLoggedSinglePostSkip && isSkipAfterNetworkFailure(error)) {
      console.warn('Skipping Sanity blog fetch after previous network failure.');
      hasLoggedSinglePostSkip = true;
    }
    return fallbackPosts.find((item) => item.slug === slug) ?? null;
  }
}

export type { Post };
