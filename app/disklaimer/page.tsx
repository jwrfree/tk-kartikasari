
import { Metadata } from 'next';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import siteData from '@/data/site.json';

// Define a type for the legal data for better type-safety
type LegalPageData = {
    disclaimer: {
        title: string;
        effectiveDate: string;
        body: string;
    },
    privacyPolicy: any; // Add more specific types if available
    termsAndConditions: any; // Add more specific types if available
};

async function getLegalData(): Promise<LegalPageData> {
    const docRef = doc(db, 'pages', 'legal');
    const docSnap = await getDoc(docRef);

    if (!docSnap.exists()) {
        throw new Error("Legal page data not found in Firestore.");
    }

    return docSnap.data() as LegalPageData;
}

// Generate metadata dynamically
export async function generateMetadata(): Promise<Metadata> {
  const legalData = await getLegalData();
  const disklaimer = legalData.disclaimer;
  return {
    title: disklaimer.title,
    description: `Baca ${disklaimer.title} ${siteData.schoolName}.`,
  };
}

export default async function DisklaimerPage() {
  const legalData = await getLegalData();
  const disklaimer = legalData.disclaimer;

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
