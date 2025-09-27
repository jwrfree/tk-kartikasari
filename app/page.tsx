
import { doc, getDoc } from 'firebase/firestore';
import { db } from '@/lib/firebase'; // Our new firebase config
import HomePageContent from "@/components/home/HomePageContent";
import JsonLd from "@/components/JsonLd";
import { getPosts } from "@/lib/blog";
import site from "@/data/site.json";
import { createPageMetadata } from "@/lib/metadata";
import { preschoolSchema } from "@/lib/schema";

// Re-export the description for metadata
const homeHeroDescription = "TK Kartikasari adalah taman kanak-kanak yang berfokus pada pengembangan anak usia dini melalui metode pembelajaran yang inovatif dan menyenangkan.";

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
    const docRef = doc(db, 'pages', 'home');
    const docSnap = await getDoc(docRef);

    if (!docSnap.exists()) {
        throw new Error("Home page data not found in Firestore.");
    }

    return docSnap.data() as HomePageData;
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
