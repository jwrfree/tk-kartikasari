import CTAButton from "@/components/CTAButton";
import PageHeader from "@/components/layout/PageHeader";
import PageSection from "@/components/layout/PageSection";
import PpdbForm from "@/components/PpdbForm";
import { ppdbHeadmasterCTA } from "@/content/cta";
import { ppdbFaqs, ppdbMetaDescription, ppdbSteps } from "@/content/ppdb";
import site from "@/data/site.json";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "PPDB",
  description: ppdbMetaDescription,
  path: "/ppdb",
});

export default function Page() {
  return (
    <>
      <PageHeader
        eyebrow="PPDB"
        title="Penerimaan Peserta Didik Baru"
        description="Kami menyambut keluarga baru yang ingin bergabung dengan TK Kartikasari. Silakan ikuti alur pendaftaran berikut atau hubungi langsung kepala sekolah melalui WhatsApp."
      />

      <PageSection padding="tight">
        <div className="card space-y-6 p-8">
          <div>
            <h2 className="text-3xl font-semibold">Cara Pendaftaran</h2>
            <p className="mt-2 text-base text-text-muted">Panduan singkat agar proses pendaftaran berjalan lancar.</p>
          </div>
          <ol className="list-decimal space-y-3 pl-5 text-base text-text">
            {ppdbSteps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
          <div className="pt-2">
            <CTAButton config={ppdbHeadmasterCTA} />
          </div>
        </div>
      </PageSection>

      <PageSection padding="tight">
        <div className="card space-y-6 p-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-semibold">Formulir Online</h2>
            <p className="text-base text-text-muted">
              Isi data singkat berikut untuk mempercepat proses pendaftaran. Setelah dikirim, WhatsApp akan terbuka otomatis dan tim kami akan menindaklanjuti.
            </p>
          </div>
          <PpdbForm />
          <p className="text-xs text-text-muted">
            Data yang terkirim bersifat rahasia dan hanya digunakan untuk keperluan administrasi PPDB TK Kartikasari.
          </p>
        </div>
      </PageSection>

      <PageSection padding="tight">
        <div className="card space-y-5 p-8">
          <h2 className="text-3xl font-semibold">Sering Ditanyakan</h2>
          <div className="mt-4 space-y-3">
            {ppdbFaqs.map((item) => (
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
        <footer className="rounded-3xl border border-dashed border-secondary/60 bg-secondary/10 p-8 text-base text-secondary">
          <p>
            Alamat sekolah: {site.address}. Kami buka hari {site.openingHours}. Silakan hubungi {site.headmaster} melalui WhatsApp {site.whatsapp} untuk menjadwalkan kunjungan.
          </p>
        </footer>
      </PageSection>
    </>
  );
}
