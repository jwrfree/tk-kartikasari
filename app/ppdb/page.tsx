
import PageHeader from "@/components/layout/PageHeader";
import { Check, CheckCircle, Clock, Person as User, Wallet } from "react-bootstrap-icons";
import Link from "next/link";
import PageSection from "@/components/layout/PageSection";
import { formatRupiah } from "@/utils/currency";
import FaqAccordion from "@/components/FaqAccordion";
import TestimonialList from "@/components/TestimonialList";
import CountdownTimer from "@/components/CountdownTimer";
import SectionHeader from "@/components/layout/SectionHeader";
import AnimateIn from "@/components/AnimateIn";
import { getPpdbPageData } from "@/lib/sanity.queries";
import { createPageMetadata } from "@/lib/metadata";
import { fallbackContent } from "@/lib/fallback-content";
import { Button } from "@/components/ui/Button";

export async function generateMetadata() {
  const { siteSettings } = await getPpdbPageData();
  return createPageMetadata({
    title: "PPDB",
    description: "Informasi lengkap pendaftaran peserta didik baru TK Kartikasari.",
    path: "/ppdb",
    siteSettings,
  });
}

export default async function PpdbPage() {
  const { ppdb, biaya, testimonials } = await getPpdbPageData();
  const timeline = ppdb.timeline.length > 0 ? ppdb.timeline : fallbackContent.ppdb.timeline;
  const deadline = ppdb.deadline ?? fallbackContent.ppdb.deadline ?? "2024-07-15T23:59:59";
  const requirements = ppdb.requirements.length > 0 ? ppdb.requirements : fallbackContent.ppdb.requirements;
  const faqs = ppdb.faqs.length > 0 ? ppdb.faqs : fallbackContent.ppdb.faqs;
  const strukturBiaya = biaya.costStructure
    .filter((item) => item.includedInCalculator)
    .map((item) => ({
      nama: item.name,
      jumlah: item.amount,
      deskripsi: item.description,
    }));

  return (
    <>
      <PageHeader
        title="Penerimaan Peserta Didik Baru (PPDB) 2025/2026"
        description="Terima kasih atas antusiasme Ayah dan Bunda. Pendaftaran tatap muka untuk tahun ajaran 2025/2026 telah ditutup sejak awal Juli 2025 karena kuota telah terpenuhi."
        eyebrow="PPDB 2025/2026"
      />

      {/* Informasi Pendaftaran Tatap Muka */}
      <div className="content-container my-8">
        <div className="rounded-2xl border border-primary/30 bg-primary/10 p-6">
          <div className="flex">
            <div className="flex-shrink-0">
              <CheckCircle className="h-6 w-6 text-primary" aria-hidden="true" />
            </div>
            <div className="ml-4">
              <h3 className="font-semibold text-primary">PPDB 2025/2026 Ditutup</h3>
              <div className="mt-1 space-y-2 text-sm text-text-muted">
                <p>
                  Seluruh kursi untuk tahun ajaran 2025/2026 telah terisi per 5 Juli 2025. Kami tidak lagi menerima pendaftaran baru untuk periode ini.
                </p>
                <p>
                  Ayah dan Bunda dapat menghubungi admin kami untuk masuk daftar tunggu atau mendapatkan pemberitahuan saat informasi PPDB 2026/2027 tersedia.
                </p>
                <Button asChild variant="secondary" className="mt-4">
                  <Link href="/kontak">Hubungi Admin PPDB</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Proses Pendaftaran */}
      <AnimateIn>
        <div className="bg-surfaceAlt">
          <div className="content-container py-16 sm:py-20">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-text sm:text-4xl">Rekap Proses Pendaftaran Tatap Muka</h2>
                <p className="mt-4 text-lg text-text-muted">Gunakan ringkasan berikut sebagai gambaran proses PPDB tatap muka yang telah berlangsung. Informasi ini dapat membantu Ayah dan Bunda menyiapkan dokumen ketika periode berikutnya dibuka.</p>
                <div className="mt-10 space-y-8">
                  <Step icon={<Clock className="h-6 w-6 text-primary" />} title="Jadwalkan Kunjungan" description="Hubungi admin kami melalui WhatsApp untuk memilih jadwal kunjungan yang cocok." />
                  <Step icon={<User className="h-6 w-6 text-primary" />} title="Datang & Observasi" description="Ajak si kecil melihat kelas, bertemu guru, dan sampaikan pertanyaan seputar program belajar." />
                  <Step icon={<Wallet className="h-6 w-6 text-primary" />} title="Lengkapi Administrasi di Tempat" description="Serahkan dokumen persyaratan, pilih opsi pembayaran, dan terima konfirmasi langsung dari tim administrasi." />
                </div>
                <div className="mt-12">
                  <Button asChild>
                    <Link href="/kontak">Tanya Daftar Tunggu 2026/2027</Link>
                  </Button>
                </div>
              </div>
              <div className="rounded-2xl bg-surface p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-text">Timeline PPDB 2025/2026 (Selesai)</h3>
                <p className="mt-2 text-text-muted">Berikut rangkuman jadwal PPDB yang telah berlangsung. Jadwal terbaru akan kami umumkan mendekati tahun ajaran berikutnya.</p>
                <Timeline items={timeline} />
                <CountdownTimer targetDate={deadline} />
              </div>
            </div>
          </div>
        </div>
      </AnimateIn>
      
      {/* Syarat dan Ketentuan */}
      <AnimateIn>
        <PageSection>
          <SectionHeader eyebrow="Persyaratan" title="Syarat dan Ketentuan Pendaftaran" />
          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {requirements.map((syarat) => (
              <div key={syarat.title} className="rounded-2xl border border-border bg-surface p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-text">{syarat.title}</h3>
                <p className="mt-2 text-text-muted">{syarat.description}</p>
              </div>
            ))}
          </div>
        </PageSection>
      </AnimateIn>

      {/* Rincian Biaya */}
      <AnimateIn>
        <PageSection className="bg-surfaceAlt">
          <SectionHeader eyebrow="Transparansi" title="Ringkasan Biaya Pendidikan" />
          <div className="mt-10 max-w-5xl mx-auto">
            <div className="overflow-hidden rounded-xl border border-border shadow-sm">
              <table className="min-w-full divide-y divide-border">
                <thead className="bg-surface">
                  <tr>
                    <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-text sm:pl-6">Deskripsi Biaya</th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-text">Jumlah</th>
                    <th scope="col" className="hidden lg:table-cell px-3 py-3.5 text-left text-sm font-semibold text-text">Keterangan</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border bg-surface">
                  {strukturBiaya.map((item) => (
                    <tr key={item.nama}>
                      <td className="py-4 pl-4 pr-3 text-sm font-medium text-text sm:pl-6">
                        {item.nama}
                        <p className="text-xs text-text-muted lg:hidden mt-1">{item.deskripsi}</p>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-text font-semibold">{formatRupiah(item.jumlah)}</td>
                      <td className="hidden lg:table-cell whitespace-normal px-3 py-4 text-sm text-text-muted">{item.deskripsi}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="text-center mt-6">
              <p className="text-sm text-text-muted">Ini adalah ringkasan biaya pokok. Untuk melihat rincian lengkap, simulasi, dan kebijakan pembayaran, silakan kunjungi halaman biaya kami.</p>
              <Button asChild variant="secondary" className="mt-4">
                <Link href="/biaya">Lihat Rincian Biaya Lengkap</Link>
              </Button>
            </div>
          </div>
        </PageSection>
      </AnimateIn>

      {/* FAQ */}
      <AnimateIn>
        <PageSection>
          <SectionHeader eyebrow="Bantuan" title="Pertanyaan yang Sering Diajukan" />
          <div className="mt-10 mx-auto max-w-3xl">
            <FaqAccordion items={faqs} />
          </div>
        </PageSection>
      </AnimateIn>

      {/* Testimoni */}
      <AnimateIn>
        <PageSection>
          <SectionHeader eyebrow="Testimoni" title="Apa Kata Para Orang Tua?" />
          <div className="mt-10">
            <TestimonialList testimonials={testimonials} />
          </div>
        </PageSection>
      </AnimateIn>
    </>
  );
}

// ... (Komponen Step dan Timeline tetap sama) ...
function Step({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="flex items-start">
      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
        {icon}
      </div>
      <div className="ml-4">
        <h3 className="text-lg font-semibold text-text">{title}</h3>
        <p className="mt-1 text-text-muted">{description}</p>
      </div>
    </div>
  );
}

function Timeline({ items }: { items: { date: string; title: string; description: string }[] }) {
  return (
    <div className="mt-8 flow-root">
      <ul className="-mb-8">
        {items.map((item, itemIdx) => (
          <li key={item.title}>
            <div className="relative pb-8">
              {itemIdx !== items.length - 1 ? (
                <span className="absolute left-4 top-4 -ml-px h-full w-0.5 bg-border" aria-hidden="true" />
              ) : null}
              <div className="relative flex space-x-3">
                <div>
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-50">
                    <Check className="h-5 w-5 text-primary" aria-hidden="true" />
                  </span>
                </div>
                <div className="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
                  <div>
                    <p className="text-sm text-text-muted">{item.date}</p>
                    <p className="font-medium text-text">{item.title}</p>
                    <p className="mt-1 text-sm text-text-muted">{item.description}</p>
                  </div>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
