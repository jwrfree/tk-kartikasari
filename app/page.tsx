
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
import { getPosts } from "@/lib/blog"; // Import the new function
import site from "@/data/site.json";
import { createPageMetadata } from "@/lib/metadata";
import { preschoolSchema } from "@/lib/schema";

export const metadata = createPageMetadata({
  title: "Beranda",
  description: homeHeroDescription,
  path: "/",
});

// Make the component async to fetch data
export default async function Page() {
  const schema = preschoolSchema();
  
  // Fetch blog posts from Firestore
  const blogPosts = await getPosts();

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
        // Pass the fetched posts, limited to the 3 most recent
        blogPosts={blogPosts.slice(0, 3)} 
      />
      <JsonLd data={schema} />
    </>
  );
}
