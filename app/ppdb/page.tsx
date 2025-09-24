
import PageHeader from "@/components/layout/PageHeader";
import { Check, CheckCircle, Clock, Person as User, Wallet } from "react-bootstrap-icons";
import Link from "next/link";
import PageSection from "@/components/layout/PageSection";
import { ppdbFaqs, rincianBiaya, syaratDanKetentuan } from "@/content/ppdb";
import FaqAccordion from "@/components/FaqAccordion";
import TestimonialList from "@/components/TestimonialList";
import testimonials from "@/data/testimonials.json";
import CountdownTimer from "@/components/CountdownTimer";
import SectionHeader from "@/components/layout/SectionHeader";

const timeline = [
  {
    date: "1 Juni 2024",
    title: "Pendaftaran Dibuka",
    description: "Formulir online dan offline tersedia. Kuota terbatas, daftar segera!",
  },
  {
    date: "15 Juli 2024",
    title: "Batas Akhir Pendaftaran",
    description: "Pengumpulan formulir dan dokumen terakhir.",
  },
  {
    date: "18 Juli 2024",
    title: "Pengumuman Seleksi",
    description: "Hasil seleksi akan diumumkan di website dan papan pengumuman sekolah.",
  },
  {
    date: "20-25 Juli 2024",
    title: "Daftar Ulang",
    description: "Konfirmasi dan pembayaran biaya pendidikan untuk siswa yang diterima.",
  },
  {
    date: "29 Juli 2024",
    title: "Hari Pertama Sekolah",
    description: "Awal dari petualangan belajar yang menyenangkan!",
  },
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

      <div className="bg-surfaceAlt">
        <div className="content-container py-16 sm:py-20">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-text sm:text-4xl">Proses Pendaftaran Cepat & Mudah</h2>
              <p className="mt-4 text-lg text-text-muted">
                Kami telah merancang proses pendaftaran yang sederhana agar Anda dapat fokus pada hal terpenting: mempersiapkan anak Anda untuk sekolah.
              </p>
              <div className="mt-10 space-y-8">
                <Step
                  icon={<User className="h-6 w-6 text-primary" />}
                  title="Isi Formulir Singkat"
                  description="Hanya butuh 5 menit untuk mengisi data anak dan orang tua. Kami hanya menanyakan informasi yang paling penting."
                />
                <Step
                  icon={<Wallet className="h-6 w-6 text-primary" />}
                  title="Pembayaran Biaya Registrasi"
                  description="Lakukan pembayaran biaya pendaftaran secara online atau langsung di sekolah untuk mengamankan tempat anak Anda."
                />
                <Step
                  icon={<CheckCircle className="h-6 w-6 text-primary" />}
                  title="Konfirmasi & Selesai"
                  description="Setelah pembayaran, Anda akan menerima konfirmasi instan melalui email dan WhatsApp. Proses selesai!"
                />
              </div>
              <div className="mt-12">
                <Link href="/ppdb/formulir" className="btn-primary">
                  Daftar Sekarang - Kuota Terbatas
                </Link>
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
      
<PageSection>
  <SectionHeader
    eyebrow="Persyaratan"
    title="Syarat dan Ketentuan Pendaftaran"
  />
  <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
    {syaratDanKetentuan.map((syarat) => (
      <div
        key={syarat.title}
        className="rounded-2xl border border-border bg-surface p-6 shadow-sm"
      >
        <h3 className="text-lg font-semibold text-text">{syarat.title}</h3>
        <p className="mt-2 text-text-muted">{syarat.description}</p>
      </div>
    ))}
  </div>
</PageSection>

<PageSection>
  <SectionHeader eyebrow="Transparansi" title="Rincian Biaya Pendidikan" />
  <div className="mt-10 max-w-4xl mx-auto">
    <div className="overflow-hidden rounded-xl border border-border shadow-sm">
      <table className="min-w-full divide-y divide-border">
        <thead className="bg-surfaceAlt">
          <tr>
            <th
              scope="col"
              className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-text sm:pl-6"
            >
              Deskripsi Biaya
            </th>
            <th
              scope="col"
              className="px-3 py-3.5 text-left text-sm font-semibold text-text"
            >
              Jumlah
            </th>
            <th
              scope="col"
              className="px-3 py-3.5 text-left text-sm font-semibold text-text"
            >
              Keterangan
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-border bg-surface">
          {rincianBiaya.map((item) => (
            <tr key={item.name}>
              <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-text sm:pl-6">
                {item.name}
              </td>
              <td className="whitespace-nowrap px-3 py-4 text-sm text-text-muted font-semibold">
                {item.amount}
              </td>
              <td className="whitespace-nowrap px-3 py-4 text-sm text-text-muted">
                {item.note}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
</PageSection>

<PageSection>
  <SectionHeader eyebrow="Bantuan" title="Pertanyaan yang Sering Diajukan" />
  <div className="mt-10 mx-auto max-w-3xl">
    <FaqAccordion items={ppdbFaqs} />
  </div>
</PageSection>

<PageSection>
  <SectionHeader eyebrow="Testimoni" title="Apa Kata Para Orang Tua?" />
  <div className="mt-10">
    <TestimonialList />
  </div>
</PageSection>
    </>
  );
}

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
    <div className="mt-6 flow-root">
      <ul className="-mb-8">
        {items.map((item, itemIdx) => (
          <li key={item.title}>
            <div className="relative pb-8">
              {itemIdx !== items.length - 1 ? (
                <span className="absolute left-4 top-4 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true" />
              ) : null}
              <div className="relative flex space-x-3">
                <div>
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 ring-8 ring-surface">
                    <Check className="h-5 w-5 text-primary" aria-hidden="true" />
                  </span>
                </div>
                <div className="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
                  <div>
                    <p className="text-sm text-gray-500">
                      {item.date}
                    </p>
                    <p className="font-medium text-gray-900">{item.title}</p>
                    <p className="text-sm text-gray-500">{item.description}</p>
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

function Feature({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="relative pl-12">
      <dt className="inline-flex items-center text-lg font-semibold text-text">
        <span className="absolute left-0 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
          {icon}
        </span>
        {title}
      </dt>
      <dd className="mt-2 text-base leading-7 text-text-muted">{description}</dd>
    </div>
  );
}
