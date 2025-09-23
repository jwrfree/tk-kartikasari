import CTAButton from "@/components/CTAButton";
import PageHeader from "@/components/layout/PageHeader";
import PageSection from "@/components/layout/PageSection";
import PpdbForm from "@/components/PpdbForm";
import { ppdbHeadmasterCTA } from "@/content/cta";
import site from "@/data/site.json";

const steps = [
  "Hubungi Ibu Mintarsih melalui WhatsApp untuk mengatur jadwal kunjungan sekolah.",
  "Datang ke TK Kartikasari sesuai jadwal yang disepakati untuk observasi singkat.",
  "Lengkapi formulir data anak dan diskusi kebutuhan khusus bersama guru.",
  "Lakukan pembayaran administrasi awal sesuai informasi dari sekolah.",
];

const faqs = [
  {
    question: "Kapan pendaftaran dibuka?",
    answer:
      "Pendaftaran dibuka sepanjang tahun ajaran berjalan. Kuota terbatas sehingga kami sarankan menghubungi sekolah lebih awal.",
  },
  {
    question: "Dokumen apa saja yang perlu dibawa?",
    answer:
      "Fotokopi akta kelahiran anak, kartu keluarga, kartu identitas orang tua, dan buku imunisasi (jika ada).",
  },
  {
    question: "Apakah ada biaya formulir?",
    answer:
      "Tidak ada biaya formulir. Pembayaran dilakukan setelah anak dinyatakan diterima dan menyepakati jadwal masuk.",
  },
  {
    question: "Apakah ada program trial class?",
    answer:
      "Ada. Orang tua dapat meminta jadwal percobaan satu hari untuk memastikan anak nyaman sebelum resmi bergabung.",
  },
];

export default function Page() {
  return (
    <>
      <PageHeader
        eyebrow="PPDB"
        title="Penerimaan Peserta Didik Baru"
        description="Kami menyambut keluarga baru yang ingin bergabung dengan TK Kartikasari. Silakan ikuti alur pendaftaran berikut atau hubungi langsung kepala sekolah melalui WhatsApp."
      />

      <PageSection padding="tight">
        <div className="card space-y-5 p-7">
          <div>
            <h2 className="text-3xl font-semibold">Cara Pendaftaran</h2>
            <p className="text-base text-text-muted">Panduan singkat agar proses pendaftaran berjalan lancar.</p>
          </div>
          <ol className="list-decimal space-y-3 pl-5 text-base text-text">
            {steps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
          <div className="pt-2">
            <CTAButton config={ppdbHeadmasterCTA} />
          </div>
        </div>
      </PageSection>

      <PageSection padding="tight">
        <div className="card space-y-6 p-7">
          <div className="space-y-2">
            <h2 className="text-3xl font-semibold">Formulir Online</h2>
            <p className="text-base text-text-muted">
              Isi data singkat berikut untuk mempercepat proses pendaftaran. Setelah dikirim, WhatsApp akan terbuka otomatis dan
              tim kami akan menindaklanjuti.
            </p>
          </div>
          <PpdbForm />
          <p className="text-xs text-text-muted">
            Data yang terkirim bersifat rahasia dan hanya digunakan untuk keperluan administrasi PPDB TK Kartikasari.
          </p>
        </div>
      </PageSection>

      <PageSection padding="tight">
        <div className="card space-y-5 p-7">
          <h2 className="text-3xl font-semibold">FAQ Pendaftaran</h2>
          <div className="space-y-3">
            {faqs.map((item) => (
              <details key={item.question} className="group rounded-2xl border border-border/70 bg-white p-5">
                <summary className="cursor-pointer text-lg font-semibold text-text">
                  {item.question}
                </summary>
                <p className="mt-2 text-base text-text-muted">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </PageSection>

      <PageSection padding="tight">
        <footer className="rounded-3xl border border-dashed border-secondary/60 bg-secondary/10 p-7 text-base text-secondary">
          <p>
            Alamat sekolah: {site.address}. Kami buka hari {site.openingHours}. Silakan hubungi {site.headmaster} melalui WhatsApp {site.whatsapp} untuk menjadwalkan kunjungan.
          </p>
        </footer>
      </PageSection>
    </>
  );
}
