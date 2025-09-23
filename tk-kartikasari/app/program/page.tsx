import PageHeader from "@/components/layout/PageHeader";
import PageSection from "@/components/layout/PageSection";
import {
  programClasses,
  programLearningMethods,
  programWeeklySchedule,
  programsMetaDescription,
} from "@/content/programs";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Program",
  description: programsMetaDescription,
  path: "/program",
});

export default function Page() {
  return (
    <>
      <PageHeader
        eyebrow="Program Pembelajaran"
        title="Program & Kegiatan TK Kartikasari"
        description="Program dirancang untuk menstimulasi seluruh aspek perkembangan anak usia dini dengan pendekatan bermain yang bermakna dan dukungan kolaboratif antara guru serta orang tua."
      />

      <PageSection padding="tight" containerClassName="grid gap-6 lg:grid-cols-2">
        {programClasses.map((item) => (
          <article key={item.name} className="card space-y-4 p-7">
            <div>
              <h2 className="text-3xl font-semibold">{item.name}</h2>
              <p className="text-base text-text-muted">{item.age}</p>
            </div>
            <p className="text-pretty text-base leading-relaxed text-text-muted">{item.description}</p>
            <ul className="list-disc space-y-2 pl-5 text-base text-text">
              {item.focus.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </article>
        ))}
      </PageSection>

      <PageSection padding="tight">
        <div className="card space-y-6 p-7">
          <h2 className="text-3xl font-semibold">Metode Belajar</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {programLearningMethods.map((method) => (
              <div key={method.title} className="rounded-2xl border border-border/60 bg-white p-6">
                <h3 className="text-xl font-semibold text-secondary">{method.title}</h3>
                <p className="mt-2 text-base text-text-muted">{method.description}</p>
              </div>
            ))}
          </div>
        </div>
      </PageSection>

      <PageSection padding="tight">
        <div className="card space-y-5 p-7">
          <div>
            <h2 className="text-3xl font-semibold">Jadwal Mingguan</h2>
            <p className="text-base text-text-muted">
              Jadwal fleksibel mengikuti tema, namun pola rutinitas berikut membantu anak merasa aman.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {programWeeklySchedule.map((item) => (
              <div key={item.day} className="rounded-2xl border border-border/60 bg-secondary/5 p-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-secondary">{item.day}</p>
                <p className="mt-1 text-lg font-semibold text-text">{item.theme}</p>
                <p className="mt-2 text-base text-text-muted">{item.highlight}</p>
              </div>
            ))}
          </div>
        </div>
      </PageSection>
    </>
  );
}
