
import { Metadata } from 'next';
import { doc, getDoc } from 'firebase/firestore';
import { getFirestoreDb } from '@/lib/firebase';
import siteData from '@/data/site.json';
import { kebijakanPrivasi as fallbackPrivacyPolicy, disklaimer as fallbackDisclaimer, syaratDanKetentuan as fallbackTerms } from '@/content/legal';

// Define a type for the legal data for better type-safety
type LegalPageData = {
    privacyPolicy: {
        title: string;
        effectiveDate: string;
        body: string;
    },
    disclaimer: any; // Add more specific types if available
    termsAndConditions: any; // Add more specific types if available
};

async function getLegalData(): Promise<LegalPageData> {
    const fallbackData: LegalPageData = {
        privacyPolicy: fallbackPrivacyPolicy,
        disclaimer: fallbackDisclaimer,
        termsAndConditions: fallbackTerms,
    };

    const db = getFirestoreDb();
    if (!db) {
        return fallbackData;
    }

    try {
        const docRef = doc(db, 'pages', 'legal');
        const docSnap = await getDoc(docRef);

        if (!docSnap.exists()) {
            throw new Error("Legal page data not found in Firestore.");
        }

        return docSnap.data() as LegalPageData;
    } catch (error) {
        console.error('Failed to fetch legal page data from Firestore:', error);
        return fallbackData;
    }
}

// Generate metadata dynamically
export async function generateMetadata(): Promise<Metadata> {
  const legalData = await getLegalData();
  const kebijakanPrivasi = legalData.privacyPolicy;
  return {
    title: kebijakanPrivasi.title,
    description: `Baca ${kebijakanPrivasi.title} ${siteData.schoolName} untuk memahami bagaimana kami melindungi data Anda.`,
  };
}

export default async function KebijakanPrivasiPage() {
  const legalData = await getLegalData();
  const kebijakanPrivasi = legalData.privacyPolicy;

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
