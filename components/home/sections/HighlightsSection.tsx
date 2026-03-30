"use client";

import { motion, type Variants } from "framer-motion";
import PageSection from "@/components/layout/PageSection";
import SectionHeader from "@/components/layout/SectionHeader";
import type { HomeHighlight } from "@/app/types/home";
import { DynamicIcon } from "@/components/DynamicIcon";

type HighlightsCopy = {
  eyebrow: string;
  title: string;
  description: string;
};

type HighlightsSectionProps = {
  highlights: HomeHighlight[];
  copy: HighlightsCopy;
};

export function HighlightsSection({ highlights, copy }: HighlightsSectionProps) {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { 
        duration: 0.6, 
        ease: "easeOut" 
      } 
    },
  };

  return (
    <PageSection
      className="relative overflow-hidden border-y border-white/20 bg-surface"
      padding="relaxed"
    >
      {/* Subtle Background Accents */}
      <div className="pointer-events-none absolute inset-0 opacity-40" aria-hidden="true">
        <div className="absolute right-0 top-0 h-[400px] w-[400px] rounded-full bg-secondary/5 blur-[100px]" />
        <div className="absolute left-0 bottom-0 h-[400px] w-[400px] rounded-full bg-primary/5 blur-[100px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <SectionHeader
          align="center"
          eyebrow={copy.eyebrow}
          eyebrowVariant="primary"
          title={copy.title}
          description={copy.description}
          className="mb-16"
        />
      </motion.div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="relative z-10 grid gap-6 md:grid-cols-3 md:gap-10"
      >
        {highlights.map((item) => (
          <motion.div key={item.title} variants={cardVariants}>
            <div className="group relative h-full flex flex-col overflow-hidden rounded-[2rem] border border-white/60 bg-white/40 p-8 shadow-soft backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:bg-white/60 hover:shadow-premium ring-1 ring-black/5">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 shadow-inner transition-transform duration-500 group-hover:scale-110 group-hover:bg-primary group-hover:text-white">
                <DynamicIcon name={item.icon} className="h-7 w-7 transition-colors duration-500" />
              </div>
              <h3 className="mt-8 font-sans text-2xl font-bold leading-tight text-foreground">{item.title}</h3>
              <p className="mt-4 text-base leading-relaxed text-foreground/60">{item.description}</p>
              
              {/* Decorative Glow */}
              <div className="absolute -bottom-10 -right-10 h-32 w-32 rounded-full bg-primary/5 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </PageSection>
  );
}
