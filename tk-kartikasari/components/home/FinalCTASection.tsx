import CTAButton from "@/components/CTAButton";
import { m } from "framer-motion";

export default function FinalCTASection() {
  return (
    <section id="final-cta" className="relative pb-36 pt-6">
      <div className="container">
        <m.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="card flex flex-col gap-6 overflow-hidden border-white/70 bg-gradient-to-br from-secondary/10 via-white to-primary/10 p-10 text-center md:flex-row md:items-center md:justify-between md:text-left"
        >
          <div className="max-w-xl space-y-3">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-secondary">
              Siap bergabung
            </span>
            <h2 className="text-3xl font-semibold text-text sm:text-4xl">
              Jadwalkan tur sekolah dan rasakan langsung keceriaan anak-anak TK Kartikasari
            </h2>
            <p className="text-sm leading-relaxed text-text-muted">
              Kami membuka sesi kunjungan setiap Senin dan Kamis. Tim kami akan menemani Anda berkeliling kelas, taman bermain, hingga ruang kegiatan khusus.
            </p>
          </div>
          <div className="flex flex-col gap-3 md:flex-row md:items-center">
            <CTAButton
              label="Jadwalkan kunjungan"
              className="w-full md:w-auto"
              message="Halo Bu Mintarsih, saya ingin menjadwalkan tur sekolah TK Kartikasari."
            />
            <a href="#program" className="btn-outline w-full md:w-auto">
              Lihat program kembali
            </a>
          </div>
        </m.div>
      </div>
    </section>
  );
}
