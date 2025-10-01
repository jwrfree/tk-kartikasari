
'use client';

import { PortableText, type PortableTextComponents } from '@portabletext/react';
import type { PortableTextBlock } from '@portabletext/types';

type MdxProps = {
  value: PortableTextBlock[];
};

const components: PortableTextComponents = {
  block: {
    normal: ({ children }) => <p className="text-text-muted">{children}</p>,
    h1: ({ children }) => <h1 className="text-3xl font-semibold text-text">{children}</h1>,
    h2: ({ children }) => <h2 className="text-2xl font-semibold text-text">{children}</h2>,
    h3: ({ children }) => <h3 className="text-xl font-semibold text-text">{children}</h3>,
    h4: ({ children }) => <h4 className="text-lg font-semibold text-text">{children}</h4>,
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-primary/30 pl-4 italic text-text-muted">{children}</blockquote>
    ),
  },
  marks: {
    link: ({ value, children }) => {
      const href = value?.href as string | undefined;
      if (!href) {
        return <>{children}</>;
      }
      return (
        <a href={href} className="text-primary underline underline-offset-4" target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      );
    },
    strong: ({ children }) => <strong className="font-semibold text-text">{children}</strong>,
    em: ({ children }) => <em className="text-text-muted">{children}</em>,
  },
  list: {
    bullet: ({ children }) => <ul className="list-disc space-y-2 pl-6 text-text-muted">{children}</ul>,
    number: ({ children }) => <ol className="list-decimal space-y-2 pl-6 text-text-muted">{children}</ol>,
  },
  listItem: ({ children }) => <li>{children}</li>,
};

/**
 * A component to render Sanity Portable Text content with Tailwind-friendly styles.
 */
export default function Mdx({ value }: MdxProps) {
  if (!value || value.length === 0) {
    return null;
  }

  return <PortableText value={value} components={components} />;
}
