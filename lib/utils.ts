
import { type ClassValue, clsx } from "clsx";
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
