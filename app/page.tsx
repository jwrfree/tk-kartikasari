
import { doc, getDoc } from 'firebase/firestore';
import { getFirestoreDb } from '@/lib/firebase';
import HomePageContent from "@/components/home/HomePageContent";
import JsonLd from "@/components/JsonLd";
import { getPosts } from "@/lib/blog";
import site from "@/data/site.json";
import { createPageMetadata } from "@/lib/metadata";
import { preschoolSchema } from "@/lib/schema";
import {
  homeHeroDescription,
  homeStats,
  homeHighlights,
  homePrograms,
  homeJourney,
  homeFaqs,
  homeCredentials,
  homeCurriculumPillars,
  homeTimeline,
} from "@/content/home";

export const metadata = createPageMetadata({
  title: "Beranda",
  description: homeHeroDescription,
  path: "/",
});

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

async function getHomeData(): Promise<HomePageData> {
    const db = getFirestoreDb();
    if (!db) {
        return {
            heroDescription: homeHeroDescription,
            stats: homeStats,
            highlights: homeHighlights,
            programs: homePrograms,
            journey: homeJourney,
            faqs: homeFaqs,
            credentials: homeCredentials,
            curriculumPillars: homeCurriculumPillars,
            timeline: homeTimeline,
        };
    }

    try {
        const docRef = doc(db, 'pages', 'home');
        const docSnap = await getDoc(docRef);

        if (!docSnap.exists()) {
            throw new Error("Home page data not found in Firestore.");
        }

        return docSnap.data() as HomePageData;
    } catch (error) {
        console.error('Failed to fetch home page data from Firestore:', error);
        return {
            heroDescription: homeHeroDescription,
            stats: homeStats,
            highlights: homeHighlights,
            programs: homePrograms,
            journey: homeJourney,
            faqs: homeFaqs,
            credentials: homeCredentials,
            curriculumPillars: homeCurriculumPillars,
            timeline: homeTimeline,
        };
    }
}

export default async function Page() {
  const schema = preschoolSchema();
  
  // Fetch home page data and blog posts in parallel
  const [homeData, blogPosts] = await Promise.all([
    getHomeData(),
    getPosts(),
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
