import HomePageContent from "@/components/home/HomePageContent";
import JsonLd from "@/components/JsonLd";
import {
  homeFaqs,
  homeCredentials,
  homeHeroDescription,
  homeHighlights,
  homeJourney,
  homeCurriculumPillars,
  homePrograms,
  homeStats,
  homeTimeline,
} from "@/content/home";
import site from "@/data/site.json";
import { createPageMetadata } from "@/lib/metadata";
import { preschoolSchema } from "@/lib/schema";

export const metadata = createPageMetadata({
  title: "Beranda",
  description: homeHeroDescription,
  path: "/",
});

export default function Page() {
  const schema = preschoolSchema();

  return (
    <>
      <HomePageContent
        schoolName={site.schoolName}
        stats={homeStats}
        highlights={homeHighlights}
        programs={homePrograms}
        journey={homeJourney}
        faqs={homeFaqs}
        credentials={homeCredentials}
        curriculumPillars={homeCurriculumPillars}
        timeline={homeTimeline}
      />
      <JsonLd data={schema} />
    </>
  );
}
