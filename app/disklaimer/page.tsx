import { Metadata } from 'next';
import { disklaimer } from '@/content/legal';
import siteData from '@/data/site.json';

export const metadata: Metadata = {
  title: disklaimer.title,
  description: `Baca ${disklaimer.title} ${siteData.schoolName}.`,
};

export default function DisklaimerPage() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-white p-6 shadow-lg sm:p-8 lg:p-10">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {disklaimer.title}
          </h1>
          <p className="mt-2 text-sm text-gray-500">
            Terakhir diperbarui: {disklaimer.effectiveDate}
          </p>
          <div
            className="prose prose-lg mt-6 max-w-none text-gray-600"
            dangerouslySetInnerHTML={{ __html: disklaimer.body }}
          />
        </div>
      </div>
    </section>
  );
}
