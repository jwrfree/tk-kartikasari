"use client";

import type { HomeTestimonialSection } from "@/content/home";
import { LazyMotion, domAnimation, m } from "framer-motion";

type TestimonialListProps = {
  content: HomeTestimonialSection;
};

export default function TestimonialList({ content }: TestimonialListProps) {
  const { eyebrow, title, description, items } = content;

  return (
    <LazyMotion features={domAnimation}>
      <section id="testimonials" className="relative overflow-hidden py-20">
        <div className="absolute inset-x-0 top-10 flex justify-center">
          <div className="h-48 w-48 rounded-full bg-secondary/20 blur-3xl sm:h-72 sm:w-72" />
        </div>
        <div className="container relative">
          <m.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-2xl text-center"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/80 px-4 py-2 text-sm font-semibold text-secondary shadow-soft">
              <span className="h-2.5 w-2.5 rounded-full bg-secondary" />
              {eyebrow}
            </span>
            <h2 className="mt-4 text-3xl font-bold leading-tight text-text sm:text-4xl">{title}</h2>
            <p className="mt-3 text-lg text-text-muted">{description}</p>
          </m.div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {items.map((t, index) => (
              <m.blockquote
                key={t.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                className="card relative overflow-hidden p-7 text-left"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/6 via-white to-secondary/10" />
                <div className="relative flex flex-col gap-4">
                  <div className="flex items-center gap-2 text-lg text-accent">
                    {Array.from({ length: 5 }).map((_, starIndex) => (
                      <span key={starIndex}>★</span>
                    ))}
                  </div>
                  <p className="text-lg font-medium leading-relaxed text-text">“{t.quote}”</p>
                  <p className="text-sm font-semibold text-text/80">{t.author}</p>
                </div>
              </m.blockquote>
            ))}
          </div>
        </div>
      </section>
    </LazyMotion>
  );
}
