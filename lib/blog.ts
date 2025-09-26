
import { db } from './firebase';
import { collection, getDocs, doc, getDoc, query, orderBy, where } from 'firebase/firestore';

// Define the Post type directly here for simplicity
export interface Post {
  _id: string;
  title: string;
  date: string; // ISO 8601 date string
  body: {
    raw: string; // Markdown content
    code: string; // This can be deprecated if not used, kept for compatibility
  };
  slug: string;
  coverImage?: string; // Optional cover image URL
  // The '_raw' field from Contentlayer is no longer needed but kept for compatibility.
  _raw: {
    flattenedPath: string;
  };
}


/**
 * Fetches all blog posts from Firestore, ordered by date.
 * @returns {Promise<Post[]>} A promise that resolves to an array of posts.
 */
export async function getPosts(): Promise<Post[]> {
  const postsCollection = collection(db, 'blogs');
  const q = query(postsCollection, orderBy('date', 'desc'));
  const postsSnapshot = await getDocs(q);
  
  const posts: Post[] = postsSnapshot.docs.map(doc => {
    const data = doc.data();
    return {
      _id: doc.id,
      title: data.title,
      date: data.date,
      body: {
        raw: data.body,
        code: data.body, // Populate 'code' with raw markdown
      },
      slug: data.slug,
      coverImage: data.coverImage, // Fetch the cover image URL
      _raw: {
        flattenedPath: `blog/${data.slug}`,
      }
    };
  });
  
  return posts;
}

/**
 * Fetches a single post by its slug from Firestore.
 * @param {string} slug The slug of the post to fetch.
 * @returns {Promise<Post | null>} A promise that resolves to the post object or null if not found.
 */
export async function getPostBySlug(slug: string): Promise<Post | null> {
    const postsCollection = collection(db, 'blogs');
    // Firestore queries are case-sensitive. Ensure slugs are consistent.
    const q = query(postsCollection, where('slug', '==', slug));
    const postSnapshot = await getDocs(q);

    if (postSnapshot.empty) {
        console.error(`No post found with slug: ${slug}`);
        return null;
    }

    const docRef = postSnapshot.docs[0];
    const data = docRef.data();
    
    return {
        _id: docRef.id,
        title: data.title,
        date: data.date,
        body: {
            raw: data.body,
            code: data.body, // Populate 'code' with raw markdown
        },
        slug: data.slug,
        coverImage: data.coverImage, // Fetch the cover image URL
        _raw: {
            flattenedPath: `blog/${data.slug}`,
        }
    };
}
