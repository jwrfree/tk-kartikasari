
import PageHeader from "@/components/layout/PageHeader";
import PageSection from "@/components/layout/PageSection";
import SectionHeader from "@/components/layout/SectionHeader";
import { createPageMetadata } from "@/lib/metadata";
import { CheckCircle } from "react-bootstrap-icons";
import { getProgramPageData } from "@/lib/sanity.queries";

export async function generateMetadata() {
  const { siteSettings } = await getProgramPageData();
  return createPageMetadata({
    title: "Program & Kurikulum",
    description:
      "Jelajahi kurikulum kami yang berpusat pada anak. Temukan detail program Kelompok A dan B, jadwal mingguan, dan metodologi pembelajaran inovatif kami.",
    path: "/program",
    siteSettings,
  });
}

export default async function ProgramPage() {
  const { program } = await getProgramPageData();
  const { classes, learningMethods, weeklySchedule } = program;

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
          {classes.map((item) => (
            <div key={item.name} className="rounded-2xl border border-border bg-surface p-8 shadow-sm">
              <h3 className="text-3xl font-bold text-primary">{item.name}</h3>
              <p className="mt-1 text-lg font-semibold text-text-muted">{item.age}</p>
              <p className="mt-4 text-text-muted">{item.description}</p>
              <div className="mt-6">
                <h4 className="font-semibold text-text">Fokus Pembelajaran:</h4>
                <ul className="mt-3 space-y-3">
                  {item.focus.map((point, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                      <p className="text-text-muted">{point}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </PageSection>

      {/* Metodologi Pembelajaran */}
      <PageSection className="bg-surfaceAlt">
        <SectionHeader eyebrow="Inti Kurikulum" title="Metodologi & Jadwal Kurikulum Merdeka" />
        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2">
          {learningMethods.map(method => (
            <div key={method.title} className="rounded-2xl border border-border bg-surface p-6 shadow-sm">
              <h3 className="font-semibold text-text">{method.title}</h3>
              <p className="mt-2 text-sm text-text-muted">{method.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-8">
            <h3 className="text-xl text-center font-bold text-text">Contoh Jadwal Mingguan</h3>
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
                {weeklySchedule.map(item => (
                    <div key={item.day} className="rounded-xl border border-border bg-surface p-4">
                        <p className="font-bold text-primary">{item.day}</p>
                        <p className="mt-2 text-sm font-semibold text-text">{item.theme}</p>
                        <p className="mt-1 text-xs text-text-muted">{item.highlight}</p>
                    </div>
                ))}
            </div>
        </div>
      </PageSection>
    </>
  );
}
