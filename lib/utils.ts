
import { type ClassValue, clsx } from "clsx";
import type { PortableTextBlock } from '@portabletext/types';
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function calculateReadingTime(text: string): number {
  const wordsPerMinute = 200;
  const textContent = text.replace(/<[^>]*>/g, " ");
  const wordCount = textContent.split(/\s+/).filter(Boolean).length;
  const readingTime = Math.ceil(wordCount / wordsPerMinute);
  return readingTime;
}

export function portableTextToPlainText(blocks: PortableTextBlock[] = []): string {
  return blocks
    .map((block) => {
      if (!block || block._type !== 'block') {
        return '';
      }

      const text = (block.children ?? [])
        .map((child) => {
          if (typeof child === 'object' && child && 'text' in child) {
            return child.text ?? '';
          }
          return '';
        })
        .join('');

      return text.trim();
    })
    .filter(Boolean)
    .join('\n\n')
    .trim();
}
