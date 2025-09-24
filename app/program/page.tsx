
import PageHeader from "@/components/layout/PageHeader";
import PageSection from "@/components/layout/PageSection";
import SectionHeader from "@/components/layout/SectionHeader";
import { infografikKurikulum, perbandinganKurikulum, programKelas } from "@/content/program";
import { createPageMetadata } from "@/lib/metadata";
import { CheckCircle, InfoCircle, PlayCircle } from "react-bootstrap-icons";

export const metadata = createPageMetadata({
  title: "Program & Kurikulum",
  description:
    "Jelajahi kurikulum kami yang berpusat pada anak. Temukan detail program Kelompok A dan B, timeline pembelajaran, hingga perbandingan dengan metode konvensional.",
  path: "/program",
});

export default function ProgramPage() {
  return (
    <>
      <PageHeader
        eyebrow="Program & Kurikulum"
        title="Membentuk Pembelajar Sepanjang Hayat"
        description="Kurikulum kami dirancang untuk menumbuhkan rasa ingin tahu, kemandirian, dan kecintaan belajar. Kami memadukan Kurikulum Merdeka dengan metode pembelajaran inovatif yang berpusat pada anak."
      />

      {/* Rincian Program Kelas */}
      <PageSection>
        <SectionHeader eyebrow="Detail Program" title="Dua Tahap Perkembangan Utama" />
        <div className="mt-10 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          {programKelas.map((program) => (
            <div key={program.nama} className="rounded-2xl border border-border bg-surface p-8 shadow-sm">
              <h3 className="text-3xl font-bold text-primary">{program.nama}</h3>
              <p className="mt-1 text-lg font-semibold text-text-muted">{program.rentangUsia}</p>
              <p className="mt-4 text-text-muted">{program.deskripsi}</p>
              <div className="mt-6">
                <h4 className="font-semibold text-text">Timeline & Fokus Belajar:</h4>
                <ul className="mt-3 space-y-3">
                  {program.timeline.map((item) => (
                    <li key={item.fase} className="flex items-start">
                      <CheckCircle className="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                      <div>
                        <p className="font-medium text-text">{item.fase}</p>
                        <p className="text-sm text-text-muted">{item.fokus}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </PageSection>

      {/* Kurikulum Merdeka PAUD */}
      <PageSection className="bg-surfaceAlt">
        <SectionHeader eyebrow="Inti Kurikulum" title="Kurikulum Merdeka di TK Kartikasari" />
        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Placeholder Infografik */}
          <div className="md:col-span-2 lg:col-span-1">
            <div className="flex h-full flex-col justify-center rounded-2xl border-2 border-dashed border-border bg-surface p-8 text-center">
              <InfoCircle className="mx-auto h-12 w-12 text-text-muted" />
              <h3 className="mt-4 text-xl font-semibold text-text">Infografik Kurikulum</h3>
              <p className="mt-2 text-text-muted">Segera hadir: Visualisasi menarik yang merangkum keunggulan Kurikulum Merdeka PAUD.</p>
            </div>
          </div>
          {/* Poin-Poin Utama */}
          <div className="md:col-span-2 space-y-6 rounded-2xl border border-border bg-surface p-8">
            <h3 className="text-xl font-bold text-text">{infografikKurikulum.title}</h3>
            <ul className="space-y-4">
                {infografikKurikulum.points.map(point => (
                    <li key={point.title} className="flex items-start">
                        <InfoCircle className="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-secondary" />
                        <div>
                            <p className="font-semibold text-text">{point.title}</p>
                            <p className="text-text-muted">{point.description}</p>
                        </div>
                    </li>
                ))}
            </ul>
          </div>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-3">
            {/* Placeholder Video */}
            <div className="lg:col-span-2">
                <div className="relative aspect-video w-full rounded-2xl bg-surface p-8 shadow-sm flex items-center justify-center">
                    <div className="text-center">
                        <PlayCircle className="mx-auto h-16 w-16 text-text-muted" />
                        <h3 className="mt-4 text-xl font-semibold text-text">Video Metodologi Pembelajaran</h3>
                        <p className="mt-2 text-text-muted">Video singkat (2-3 menit) akan tersedia di sini.</p>
                    </div>
                </div>
            </div>
             {/* Pesan Tambahan */}
            <div className="flex items-center justify-center rounded-2xl bg-primary/10 p-8 text-center">
                <div >
                    <h3 className="text-2xl font-bold text-primary">Belajar Menjadi Menyenangkan</h3>
                    <p className="mt-3 text-primary/80">Metodologi kami mengubah setiap momen menjadi kesempatan belajar yang tak terlupakan bagi anak.</p>
                </div>
            </div>
        </div>
      </PageSection>

      {/* Tabel Perbandingan Kurikulum */}
      <PageSection>
        <SectionHeader
          eyebrow="Pendekatan Berbeda"
          title="Kurikulum Merdeka vs. Kurikulum Konvensional"
          description="Lihat perbedaan mendasar dalam pendekatan kami yang lebih berpihak pada tumbuh kembang anak secara utuh."
        />
        <div className="mt-10 overflow-x-auto">
          <div className="min-w-full rounded-2xl border border-border shadow-sm">
            <table className="min-w-full divide-y divide-border">
              <thead className="bg-surfaceAlt">
                <tr>
                  <th scope="col" className="py-4 pl-6 pr-3 text-left text-sm font-semibold text-text">Fitur</th>
                  <th scope="col" className="px-3 py-4 text-left text-sm font-semibold text-text">Kurikulum Merdeka (TK Kartikasari)</th>
                  <th scope="col" className="px-3 py-4 text-left text-sm font-semibold text-text">Kurikulum Konvensional</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border bg-surface">
                {perbandinganKurikulum.map((item, index) => (
                  <tr key={index}>
                    <td className="whitespace-nowrap py-4 pl-6 pr-3 text-sm font-medium text-text">{item.fitur}</td>
                    <td className="whitespace-normal px-3 py-4 text-sm text-text-muted font-semibold text-primary">{item.kurikulumMerdeka}</td>
                    <td className="whitespace-normal px-3 py-4 text-sm text-text-muted">{item.kurikulumKonvensional}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </PageSection>
    </>
  );
}
