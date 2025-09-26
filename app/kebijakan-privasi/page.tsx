import { Metadata } from 'next';
import { kebijakanPrivasi } from '@/content/legal';
import siteData from '@/data/site.json';

export const metadata: Metadata = {
  title: kebijakanPrivasi.title,
  description: `Baca ${kebijakanPrivasi.title} ${siteData.schoolName} untuk memahami bagaimana kami melindungi data Anda.`,
};

export default function KebijakanPrivasiPage() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-white p-6 shadow-lg sm:p-8 lg:p-10">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {kebijakanPrivasi.title}
          </h1>
          <p className="mt-2 text-sm text-gray-500">
            Terakhir diperbarui: {kebijakanPrivasi.effectiveDate}
          </p>
          <div
            className="prose prose-lg mt-6 max-w-none text-gray-600"
            dangerouslySetInnerHTML={{ __html: kebijakanPrivasi.body }}
          />
        </div>
      </div>
    </section>
  );
}
