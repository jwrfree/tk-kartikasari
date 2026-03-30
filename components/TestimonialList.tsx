'use client';

import { useMemo, useState, type CSSProperties } from 'react';

import AnimateIn from '@/components/AnimateIn';
import PageSection from '@/components/layout/PageSection';
import SectionHeader from '@/components/layout/SectionHeader';
import { CardSurface } from '@/components/ui/CardSurface';
import type { Testimonial } from '@/lib/types/site';

interface TestimonialListProps {
  testimonials: Testimonial[];
}

export default function TestimonialList({ testimonials }: TestimonialListProps) {
  const safeTestimonials = useMemo(() => (testimonials?.length ? testimonials : []), [testimonials]);
  const duplicatedTestimonials = useMemo(() => [...safeTestimonials, ...safeTestimonials], [safeTestimonials]);
  const [isPaused, setIsPaused] = useState(false);
  const marqueeDurationSeconds = Math.max(28, safeTestimonials.length * 7 || 0);
  const marqueeStyle = useMemo(
    () => ({ '--marquee-duration': `${marqueeDurationSeconds}s` }) as CSSProperties,
    [marqueeDurationSeconds],
  );

  if (safeTestimonials.length === 0) {
    return (
      <PageSection id="testimonials" padding="relaxed">
        <CardSurface tone="soft" padding="xl" className="mx-auto max-w-3xl space-y-4 text-center text-text-muted">
          <h2 className="text-3xl font-semibold text-text">Testimoni segera hadir</h2>
          <p className="text-base">
            Kami sedang menghimpun cerita terbaru dari orang tua murid. Kembali lagi nanti untuk membaca pengalaman
            mereka bersama TK Kartikasari.
          </p>
        </CardSurface>
      </PageSection>
    );
  }

  return (
    <PageSection id="testimonials" className="relative overflow-hidden" padding="relaxed">
      <div className="absolute inset-x-0 top-10 flex justify-center">
        <div className="h-48 w-48 rounded-full bg-secondary/20 blur-3xl sm:h-72 sm:w-72" />
      </div>
      <div className="relative">
        <AnimateIn>
          <SectionHeader
            align="center"
            eyebrow="Suara Orang Tua"
            eyebrowLeadingVisual={<span className="h-2.5 w-2.5 rounded-full bg-secondary" />}
            eyebrowVariant="secondary"
            title="Cerita keluarga setelah anak mulai lebih terbiasa dengan sekolah"
            description="Pengalaman ini memberi gambaran tentang proses kecil yang mereka lihat dari hari ke hari."
          />
        </AnimateIn>

        <div className="mt-14 overflow-x-hidden">
          <div
            className="flex w-max gap-6 animate-marquee"
            style={marqueeStyle}
            data-paused={isPaused ? 'true' : 'false'}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {duplicatedTestimonials.map((testimonial, index) => (
              <CardSurface
                key={`${testimonial.id}-${index}`}
                tone="translucent"
                padding="lg"
                className="relative flex h-full w-[min(320px,80vw)] shrink-0 flex-col gap-4 overflow-hidden text-left"
              >
                <div className="flex items-center gap-2 text-lg text-accent">
                  {Array.from({ length: testimonial.rating ?? 5 }).map((_, starIndex) => (
                    <span key={starIndex}>★</span>
                  ))}
                </div>
                <p className="text-lg font-medium leading-relaxed text-text">&ldquo;{testimonial.quote}&rdquo;</p>
                <p className="text-base font-semibold text-text/80">{testimonial.author}</p>
              </CardSurface>
            ))}
          </div>
        </div>
      </div>
    </PageSection>
  );
}
