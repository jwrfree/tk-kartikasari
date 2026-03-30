import LegalDocument from '@/components/legal/LegalDocument';
import { createPageMetadata } from '@/lib/metadata';
import { getLegalPages } from '@/lib/sanity.queries';

const path = '/kebijakan-privasi';

export async function generateMetadata() {
  const { legal, siteSettings } = await getLegalPages();
  const document = legal.privacyPolicy;
  return createPageMetadata({
    title: document.title,
    description: `Baca ${document.title} ${siteSettings.schoolName} untuk memahami bagaimana data Anda digunakan dan dilindungi.`,
    path,
    siteSettings,
  });
}

export default async function KebijakanPrivasiPage() {
  const { legal } = await getLegalPages();
  const document = legal.privacyPolicy;

  return <LegalDocument title={document.title} effectiveDate={document.effectiveDate} body={document.body} />;
}
