"use client";

import data from "@/data/testimonials.json";
import { LazyMotion, domAnimation, m } from "framer-motion";

export default function TestimonialList() {
  if (data.length === 0) {
    return (
      <section id="testimonials" className="py-20">
        <div className="container">
          <div className="card mx-auto max-w-3xl border border-border/70 bg-secondary/5 p-8 text-center text-text-muted">
            <h2 className="text-2xl font-semibold text-text">Testimoni segera hadir</h2>
            <p className="mt-3 text-sm">
              Kami sedang menghimpun cerita terbaru dari orang tua murid. Kembali lagi nanti untuk membaca pengalaman mereka
              bersama TK Kartikasari.
            </p>
          </div>
        </div>
      </section>
    );
  }

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
              Suara Orang Tua
            </span>
            <h2 className="mt-4 text-3xl font-bold leading-tight text-text sm:text-4xl">
              Mereka melihat anak tumbuh lebih percaya diri dan bahagia
            </h2>
            <p className="mt-3 text-lg text-text-muted">
              Cerita asli dari keluarga yang mempercayakan proses belajar anaknya di TK Kartikasari.
            </p>
          </m.div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {data.map((t, index) => (
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
