import HomePageContent from "@/components/home/HomePageContent";
import JsonLd from "@/components/JsonLd";
import { getPosts } from "@/lib/blog";
import site from "@/data/site.json";
import homeData from "@/data/home.json"; // Import the local JSON data
import { createPageMetadata } from "@/lib/metadata";
import { preschoolSchema } from "@/lib/schema";

// Define a type for the home page data for better type-safety
type HomePageData = {
    heroDescription: string;
    stats: any[];
    highlights: any[];
    programs: any[];
    journey: any;
    faqs: any[];
    credentials: any[];
    curriculumPillars: any[];
    timeline: any[];
};

// Async function to fetch data for metadata generation
export async function generateMetadata() {
    // No need to fetch, just use the imported data
    const data: HomePageData = homeData;
    return createPageMetadata({
        title: "Beranda",
        description: data.heroDescription,
        path: "/",
    });
}

// The getHomeData function that fetched from Sanity is no longer needed.

export default async function Page() {
  const schema = preschoolSchema();
  
  // Fetch blog posts. The home data is already available from the import.
  const blogPosts = await getPosts();

  return (
    <>
      <HomePageContent
        schoolName={site.schoolName}
        // Pass the imported data as props
        stats={homeData.stats}
        highlights={homeData.highlights}
        programs={homeData.programs}
        journey={homeData.journey}
        faqs={homeData.faqs}
        credentials={homeData.credentials}
        curriculumPillars={homeData.curriculumPillars}
        timeline={homeData.timeline}
        blogPosts={blogPosts.slice(0, 3)} 
      />
      <JsonLd data={schema} />
    </>
  );
}
