import { sanityClient } from '@/lib/sanity-client';
import HomePageContent from "@/components/home/HomePageContent";
import JsonLd from "@/components/JsonLd";
import { getPosts } from "@/lib/blog"; // This will need updating later
import site from "@/data/site.json";
import { createPageMetadata } from "@/lib/metadata";
import { preschoolSchema } from "@/lib/schema";

// Define a type for the home page data for better type-safety
type HomePageData = {
    heroDescription: string;
    stats: any[]; // Replace 'any' with more specific types if available
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
    const data: HomePageData = await getHomeData();
    return createPageMetadata({
        title: "Beranda",
        description: data.heroDescription,
        path: "/",
    });
}


async function getHomeData(): Promise<HomePageData> {
    // GROQ query to fetch data from a 'homePage' document in Sanity
    const query = `*[_type == "homePage"][0] {
        heroDescription,
        stats,
        highlights,
        programs,
        journey,
        faqs,
        credentials,
        curriculumPillars,
        timeline,
    }`;

    try {
        const data = await sanityClient.fetch(query);
        if (!data) {
            // If you have fallback data, you could return it here.
            // For now, we throw an error to indicate that the CMS data is missing.
            throw new Error("Home page data not found in Sanity.");
        }
        return data;
    } catch (error) {
        console.error('Failed to fetch home page data from Sanity:', error);
        // Depending on the desired behavior for production, you might want to handle this differently.
        // Re-throwing the error will cause the page build to fail, which is often what you want.
        throw new Error('Failed to fetch data for the home page.');
    }
}

export default async function Page() {
  const schema = preschoolSchema();
  
  // Fetch home page data and blog posts in parallel
  // Note: getPosts() will also need to be migrated to Sanity
  const [homeData, blogPosts] = await Promise.all([
    getHomeData(),
    getPosts(), // This will likely fail until it's also migrated.
  ]);

  return (
    <>
      <HomePageContent
        schoolName={site.schoolName}
        // Pass the fetched data as props
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
