import CTAButton from "@/components/CTAButton";
import { m } from "framer-motion";

import type { FAQItem } from "./types";

type FAQSectionProps = {
  faqs: FAQItem[];
};

export default function FAQSection({ faqs }: FAQSectionProps) {
  return (
    <section id="faq" className="relative py-20">
      <div className="container grid gap-12 lg:grid-cols-[0.9fr,1fr] lg:items-start">
        <m.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
            Pertanyaan populer
          </span>
          <h2 className="text-3xl font-bold leading-tight text-text sm:text-4xl">
            Informasi penting seputar pendaftaran dan kegiatan sekolah
          </h2>
          <p className="text-lg leading-relaxed text-text-muted">
            Jika ada pertanyaan lain, kami dengan senang hati menjawab melalui WhatsApp ataupun ketika Anda berkunjung langsung.
          </p>
          <CTAButton
            label="Tanya langsung via WhatsApp"
            className="w-full sm:w-auto"
            message="Halo Bu Mintarsih, saya ingin menanyakan informasi mengenai TK Kartikasari."
          />
        </m.div>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <m.div
              key={faq.question}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              className="card border-white/70 bg-white/90 p-6 text-left shadow-soft"
            >
              <p className="text-base font-semibold text-text">{faq.question}</p>
              <p className="mt-3 text-sm leading-relaxed text-text-muted">{faq.answer}</p>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
}
