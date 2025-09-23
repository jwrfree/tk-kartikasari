"use client";
import { motion } from "framer-motion";
import CTAButton from "@/components/CTAButton";
import InfoCard from "@/components/InfoCard";
import StickyActions from "@/components/StickyActions";
import TestimonialList from "@/components/TestimonialList";
import site from "@/data/site.json";

export default function Page() {
  return (
    <>
      <motion.section
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="container pt-10 pb-6"
      >
        <h1 className="text-3xl sm:text-4xl font-bold leading-tight text-emerald-700">
          TK Kartikasari — Belajar Ceria, Tumbuh Percaya Diri
        </h1>
        <p className="mt-2 text-text-muted">
          Lingkungan yang aman, hangat, dan menstimulasi untuk anak usia dini di Bulaksari, Bantarsari, Cilacap.
        </p>
        <div className="mt-4"><CTAButton /></div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="container grid gap-4"
      >
        <InfoCard title="Alamat" actionLabel="Petunjuk Arah" actionHref={site.mapsUrl}>
          {site.address}
        </InfoCard>
        <div className="grid gap-4 sm:grid-cols-2">
          <InfoCard title="Jam Buka">{site.openingHours}</InfoCard>
          <InfoCard title="Kontak WhatsApp">{site.whatsapp} ({site.headmaster})</InfoCard>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="container mt-8"
      >
        <div className="card p-4">
          <h2 className="text-xl font-semibold">Mengapa TK Kartikasari</h2>
          <ul className="list-disc pl-5 mt-2 text-text-muted space-y-1">
            <li>Suasana hangat dan aman untuk belajar.</li>
            <li>Belajar melalui bermain yang bermakna.</li>
            <li>Komunikasi aktif antara guru dan orang tua.</li>
          </ul>
        </div>
      </motion.section>

      <TestimonialList />

      <StickyActions />
    </>
  );
}
