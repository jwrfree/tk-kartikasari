import { m } from "framer-motion";

import type { HighlightItem } from "./types";

type HighlightsSectionProps = {
  highlights: HighlightItem[];
};

export default function HighlightsSection({ highlights }: HighlightsSectionProps) {
  return (
    <section id="highlights" className="relative border-y border-white/60 bg-white/80 py-20">
      <div className="container">
        <m.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
            Mengapa orang tua memilih kami
          </span>
          <h2 className="mt-4 text-3xl font-bold leading-tight text-text sm:text-4xl">
            Sekolah yang menumbuhkan rasa ingin tahu dan karakter positif sejak dini
          </h2>
          <p className="mt-3 text-lg text-text-muted">
            Tim pengajar kami merancang pengalaman belajar yang menyeluruh, menyenangkan, dan penuh perhatian.
          </p>
        </m.div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {highlights.map((item, index) => (
            <m.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              className="card h-full border-white/60 bg-white/90 p-7 text-left"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/15 text-2xl">
                {item.icon}
              </span>
              <h3 className="mt-6 text-xl font-semibold text-text">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-text-muted">{item.description}</p>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
}
