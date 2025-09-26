
'use client';
import { useRef } from 'react';
import { m, useScroll, useTransform } from 'framer-motion';

interface HorizontalScrollSectionProps {
  children: React.ReactNode;
  className?: string;
}

export default function HorizontalScrollSection({ children, className }: HorizontalScrollSectionProps) {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Dynamically calculate the end of the transform based on the container's scroll width
  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-80%']);

  return (
    <section ref={targetRef} className={`relative h-[300vh] ${className}`}>
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <m.div style={{ x }} className="flex items-stretch gap-6 px-12">
          {children}
        </m.div>
      </div>
    </section>
  );
}
