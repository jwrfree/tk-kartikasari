import HomePageContent from "@/components/home/HomePageContent";
import JsonLd from "@/components/JsonLd";
import { getPosts } from "@/lib/blog";
import { createPageMetadata } from "@/lib/metadata";
import { preschoolSchema } from "@/lib/schema";
import { getHomePageData } from "@/lib/sanity.queries";

export async function generateMetadata() {
  const { home, siteSettings } = await getHomePageData();
  return createPageMetadata({
    title: "Beranda",
    description: home.heroDescription,
    path: "/",
    siteSettings,
  });
}

export default async function Page() {
  const [{ home, siteSettings, officialProfile, testimonials }, blogPosts] = await Promise.all([
    getHomePageData(),
    getPosts(),
  ]);

  const schema = preschoolSchema({
    siteSettings,
    officialProfile,
  });

  return (
    <>
      <HomePageContent
        schoolName={siteSettings.schoolName}
        stats={home.stats}
        highlights={home.highlights}
        programs={home.programs}
        journey={home.journey}
        faqs={home.faqs}
        credentials={home.credentials}
        curriculumPillars={home.curriculumPillars}
        timeline={home.timeline}
        blogPosts={blogPosts.slice(0, 3)}
        testimonials={testimonials}
      />
      <JsonLd data={schema} />
    </>
  );
}
