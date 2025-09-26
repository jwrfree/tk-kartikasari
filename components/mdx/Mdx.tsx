
'use client';

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

type MdxProps = {
  code: string;
};

/**
 * A component to render markdown content.
 * It uses react-markdown with the GFM plugin to support tables, strikethroughs, etc.
 */
export default function Mdx({ code }: MdxProps) {
  return <ReactMarkdown remarkPlugins={[remarkGfm]}>{code}</ReactMarkdown>;
}
