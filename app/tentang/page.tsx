import { createPageMetadata } from '@/lib/metadata';
import AboutPageContent from '@/components/tentang/AboutPageContent';
import { aboutMetaDescription } from '@/content/about';
import { getAboutPageData } from '@/lib/sanity.queries';

export async function generateMetadata() {
  const { siteSettings } = await getAboutPageData();
  return createPageMetadata({
    title: 'Tentang Kami',
    description: aboutMetaDescription,
    path: '/tentang',
    siteSettings,
  });
}

export default async function Page() {
  const { about, teachers, siteSettings } = await getAboutPageData();

  return (
    <AboutPageContent
      milestones={about.milestones}
      officialProfile={about.officialProfile}
      siteSettings={siteSettings}
      teachers={teachers}
    />
  );
}
