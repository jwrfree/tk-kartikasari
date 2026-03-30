import LegalDocument from '@/components/legal/LegalDocument';
import { createPageMetadata } from '@/lib/metadata';
import { getLegalPages } from '@/lib/sanity.queries';

const path = '/disklaimer';

export async function generateMetadata() {
  const { legal, siteSettings } = await getLegalPages();
  const document = legal.disclaimer;
  return createPageMetadata({
    title: document.title,
    description: `Baca ${document.title} ${siteSettings.schoolName} untuk memahami batas informasi dan tanggung jawab kami.`,
    path,
    siteSettings,
  });
}

export default async function DisklaimerPage() {
  const { legal } = await getLegalPages();
  const document = legal.disclaimer;

  return <LegalDocument title={document.title} effectiveDate={document.effectiveDate} body={document.body} />;
}
