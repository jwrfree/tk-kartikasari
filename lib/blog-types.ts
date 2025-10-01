export interface Post {
  _id: string;
  title: string;
  date: string; // ISO 8601 date string
  caption?: string;
  body: {
    raw: string; // Markdown content
    code: string; // Serialized MDX string (kept for compatibility)
  };
  slug: string;
  coverImage?: string;
  _raw: {
    flattenedPath: string;
  };
}
