import { sanityClient } from './sanity-client';

// Redefine the Post type to align with the expected Sanity schema
export interface Post {
  _id: string;
  title: string;
  date: string; // ISO 8601 date string
  body: {
    raw: string; // Markdown content
    code: string; // Retained for compatibility, can be removed if not used
  };
  slug: string;
  coverImage?: string; 
  _raw: {
    flattenedPath: string;
  };
}

/**
 * Fetches all blog posts from Sanity, ordered by date.
 * @returns {Promise<Post[]>} A promise that resolves to an array of posts.
 */
export async function getPosts(): Promise<Post[]> {
  // GROQ query to fetch all posts, ordered by date
  const query = `*[_type == "post"] | order(date desc) {
    _id,
    title,
    date,
    "body": content, // Assuming the markdown content is in a field named 'content'
    "slug": slug.current,
    "coverImage": mainImage.asset->url
  }`;

  try {
    const sanityPosts = await sanityClient.fetch(query);

    // Map the data from Sanity to the Post interface to maintain component compatibility
    return sanityPosts.map((post: any) => ({
      _id: post._id,
      title: post.title,
      date: post.date,
      body: {
        raw: post.body || '', // Ensure body.raw is always a string
        code: post.body || '', // Keep for compatibility
      },
      slug: post.slug,
      coverImage: post.coverImage,
      _raw: {
        flattenedPath: `blog/${post.slug}`,
      },
    }));
  } catch (error) {
    console.error('Failed to fetch blog posts from Sanity:', error);
    return [];
  }
}

/**
 * Fetches a single post by its slug from Sanity.
 * @param {string} slug The slug of the post to fetch.
 * @returns {Promise<Post | null>} A promise that resolves to the post object or null if not found.
 */
export async function getPostBySlug(slug: string): Promise<Post | null> {
  // GROQ query to fetch a single post by its slug
  const query = `*[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    date,
    "body": content,
    "slug": slug.current,
    "coverImage": mainImage.asset->url
  }`;

  const params = { slug };

  try {
    const post = await sanityClient.fetch(query, params);

    if (!post) {
      return null;
    }

    // Map the Sanity data to the Post interface
    return {
      _id: post._id,
      title: post.title,
      date: post.date,
      body: {
        raw: post.body || '',
        code: post.body || '',
      },
      slug: post.slug,
      coverImage: post.coverImage,
      _raw: {
        flattenedPath: `blog/${post.slug}`,
      },
    };
  } catch (error) {
    console.error(`Failed to fetch blog post with slug "${slug}":`, error);
    return null;
  }
}
