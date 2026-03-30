import LegalDocument from '@/components/legal/LegalDocument';
import { createPageMetadata } from '@/lib/metadata';
import { getLegalPages } from '@/lib/sanity.queries';

const path = '/syarat-dan-ketentuan';

export async function generateMetadata() {
  const { legal, siteSettings } = await getLegalPages();
  const document = legal.terms;
  return createPageMetadata({
    title: document.title,
    description: `Baca ${document.title} ${siteSettings.schoolName} untuk memahami penggunaan situs dan layanan kami.`,
    path,
    siteSettings,
  });
}

export default async function SyaratDanKetentuanPage() {
  const { legal } = await getLegalPages();
  const document = legal.terms;

  return <LegalDocument title={document.title} effectiveDate={document.effectiveDate} body={document.body} />;
}
