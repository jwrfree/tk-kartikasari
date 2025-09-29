import { createPageMetadata } from "@/lib/metadata";
import { getLegalPages } from "@/lib/sanity.queries";

const path = "/syarat-dan-ketentuan";

function LegalDocument({
  title,
  effectiveDate,
  body,
}: {
  title: string;
  effectiveDate: string;
  body: string;
}) {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-white p-6 shadow-lg sm:p-8 lg:p-10">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{title}</h1>
          <p className="mt-2 text-sm text-gray-500">Terakhir diperbarui: {effectiveDate}</p>
          <div
            className="prose prose-lg mt-6 max-w-none text-gray-600"
            dangerouslySetInnerHTML={{ __html: body }}
          />
        </div>
      </div>
    </section>
  );
}

export async function generateMetadata() {
  const { legal, siteSettings } = await getLegalPages();
  const document = legal.terms;
  return createPageMetadata({
    title: document.title,
    description: `Baca ${document.title} ${siteSettings.schoolName} sebelum menggunakan layanan kami.`,
    path,
    siteSettings,
  });
}

export default async function SyaratDanKetentuanPage() {
  const { legal } = await getLegalPages();
  const document = legal.terms;

  return <LegalDocument title={document.title} effectiveDate={document.effectiveDate} body={document.body} />;
}
