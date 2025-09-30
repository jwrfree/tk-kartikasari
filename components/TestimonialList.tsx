"use client";

import { useMemo, useState, type CSSProperties } from "react";
import { LazyMotion, domAnimation, m } from "framer-motion";

import PageSection from "@/components/layout/PageSection";
import SectionHeader from "@/components/layout/SectionHeader";
import type { Testimonial } from "@/lib/types/site";

interface TestimonialListProps {
  testimonials: Testimonial[];
}

export default function TestimonialList({ testimonials }: TestimonialListProps) {
  const safeTestimonials = useMemo(
    () => (testimonials?.length ? testimonials : []),
    [testimonials],
  );
  const duplicatedTestimonials = useMemo(
    () => [...safeTestimonials, ...safeTestimonials],
    [safeTestimonials],
  );
  const [isPaused, setIsPaused] = useState(false);
  const marqueeDurationSeconds = Math.max(28, safeTestimonials.length * 7 || 0);
  const marqueeStyle = useMemo(
    () => ({ "--marquee-duration": `${marqueeDurationSeconds}s` }) as CSSProperties,
    [marqueeDurationSeconds],
  );

  if (safeTestimonials.length === 0) {
    return (
      <PageSection id="testimonials" padding="relaxed">
        <div className="card mx-auto max-w-3xl border border-border/70 bg-secondary/5 p-8 text-center text-text-muted">
          <h2 className="text-3xl font-semibold text-text">Testimoni segera hadir</h2>
          <p className="mt-4 text-base">
            Kami sedang menghimpun cerita terbaru dari orang tua murid. Kembali lagi nanti untuk membaca pengalaman mereka
            bersama TK Kartikasari.
          </p>
        </div>
      </PageSection>
    );
  }

  return (
    <LazyMotion features={domAnimation}>
      <PageSection
        id="testimonials"
        className="relative overflow-hidden"
        padding="relaxed"
      >
        <div className="absolute inset-x-0 top-10 flex justify-center">
          <div className="h-48 w-48 rounded-full bg-secondary/20 blur-3xl sm:h-72 sm:w-72" />
        </div>
        <div className="relative">
          <m.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
          >
            <SectionHeader
              align="center"
              eyebrow={
                <span className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-secondary" />
                  Suara Orang Tua
                </span>
              }
              eyebrowVariant="secondary"
              title="Mereka melihat anak tumbuh lebih percaya diri dan bahagia"
              description="Cerita asli dari keluarga yang mempercayakan proses belajar anaknya di TK Kartikasari."
            />
          </m.div>

          <div className="mt-14 overflow-hidden">
            <div
              className="flex w-max gap-6 animate-marquee"
              style={marqueeStyle}
              data-paused={isPaused ? "true" : "false"}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {duplicatedTestimonials.map((t, index) => (
                <blockquote
                  key={`${t.id}-${index}`}
                  className="card relative w-[min(320px,80vw)] shrink-0 overflow-hidden p-7 text-left"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/6 via-white to-secondary/10" />
                  <div className="relative flex h-full flex-col gap-4">
                    <div className="flex items-center gap-2 text-lg text-accent">
                      {Array.from({ length: t.rating ?? 5 }).map((_, starIndex) => (
                        <span key={starIndex}>★</span>
                      ))}
                    </div>
                    <p className="text-lg font-medium leading-relaxed text-text">“{t.quote}”</p>
                    <p className="text-base font-semibold text-text/80">{t.author}</p>
                  </div>
                </blockquote>
              ))}
            </div>
          </div>
        </div>
      </PageSection>
    </LazyMotion>
  );
}
