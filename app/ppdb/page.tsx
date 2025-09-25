
import PageHeader from "@/components/layout/PageHeader";
import { Check, CheckCircle, Clock, Person as User, Wallet } from "react-bootstrap-icons";
import Link from "next/link";
import PageSection from "@/components/layout/PageSection";
import { ppdbFaqs, syaratDanKetentuan } from "@/content/ppdb";
import { strukturBiaya } from "@/content/biaya";
import { formatRupiah } from "@/utils/currency";
import FaqAccordion from "@/components/FaqAccordion";
import TestimonialList from "@/components/TestimonialList";
import CountdownTimer from "@/components/CountdownTimer";
import SectionHeader from "@/components/layout/SectionHeader";

const timeline = [
  { date: "1 Juni 2024", title: "Pendaftaran Dibuka", description: "Formulir online dan offline tersedia. Kuota terbatas, daftar segera!" },
  { date: "15 Juli 2024", title: "Batas Akhir Pendaftaran", description: "Pengumpulan formulir dan dokumen terakhir." },
  { date: "18 Juli 2024", title: "Pengumuman Seleksi", description: "Hasil seleksi akan diumumkan di website dan papan pengumuman sekolah." },
  { date: "20-25 Juli 2024", title: "Daftar Ulang", description: "Konfirmasi dan pembayaran biaya pendidikan untuk siswa yang diterima." },
  { date: "29 Juli 2024", title: "Hari Pertama Sekolah", description: "Awal dari petualangan belajar yang menyenangkan!" },
];

export default function PpdbPage() {
  const deadline = "2024-07-15T23:59:59";

  return (
    <>
      <PageHeader
        title="Penerimaan Peserta Didik Baru (PPDB) 2024/2025"
        description="Jadilah bagian dari keluarga besar TK Kartikasari. Kami siap membimbing putra-putri Anda menjadi generasi pembelajar yang ceria, kreatif, dan berkarakter Pancasila."
        eyebrow="PPDB 2024/2025"
      />

      {/* Proses Pendaftaran */}
      <div className="bg-surfaceAlt">
        <div className="content-container py-16 sm:py-20">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-text sm:text-4xl">Proses Pendaftaran Cepat & Mudah</h2>
              <p className="mt-4 text-lg text-text-muted">Kami telah merancang proses pendaftaran yang sederhana agar Anda dapat fokus pada hal terpenting.</p>
              <div className="mt-10 space-y-8">
                <Step icon={<User className="h-6 w-6 text-primary" />} title="Isi Formulir Singkat" description="Hanya butuh 5 menit untuk mengisi data anak dan orang tua." />
                <Step icon={<Wallet className="h-6 w-6 text-primary" />} title="Pembayaran Biaya Registrasi" description="Lakukan pembayaran biaya pendaftaran untuk mengamankan tempat anak Anda." />
                <Step icon={<CheckCircle className="h-6 w-6 text-primary" />} title="Konfirmasi & Selesai" description="Anda akan menerima konfirmasi instan melalui email dan WhatsApp." />
              </div>
              <div className="mt-12">
                <Link href="/ppdb/formulir" className="btn-primary">Daftar Sekarang - Kuota Terbatas</Link>
              </div>
            </div>
            <div className="rounded-2xl bg-surface p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-text">Timeline PPDB 2024/2025</h3>
              <p className="mt-2 text-text-muted">Catat tanggal-tanggal penting berikut agar tidak terlewat.</p>
              <Timeline items={timeline} />
              <CountdownTimer targetDate={deadline} />
            </div>
          </div>
        </div>
      </div>
      
      {/* Syarat dan Ketentuan */}
      <PageSection>
        <SectionHeader eyebrow="Persyaratan" title="Syarat dan Ketentuan Pendaftaran" />
        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {syaratDanKetentuan.map((syarat) => (
            <div key={syarat.title} className="rounded-2xl border border-border bg-surface p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-text">{syarat.title}</h3>
              <p className="mt-2 text-text-muted">{syarat.description}</p>
            </div>
          ))}
        </div>
      </PageSection>

      {/* Rincian Biaya */}
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
                {strukturBiaya.komponen.map((item) => (
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
            <Link href="/biaya" className="btn-secondary mt-4">Lihat Rincian Biaya Lengkap</Link>
          </div>
        </div>
      </PageSection>

      {/* FAQ */}
      <PageSection>
        <SectionHeader eyebrow="Bantuan" title="Pertanyaan yang Sering Diajukan" />
        <div className="mt-10 mx-auto max-w-3xl">
          <FaqAccordion items={ppdbFaqs} />
        </div>
      </PageSection>

      {/* Testimoni */}
      <PageSection>
        <SectionHeader eyebrow="Testimoni" title="Apa Kata Para Orang Tua?" />
        <div className="mt-10">
          <TestimonialList />
        </div>
      </PageSection>
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
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 ring-8 ring-surface">
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
