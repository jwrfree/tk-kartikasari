import HomePageContent from "@/components/home/HomePageContent";
import { homeContent } from "@/content/home";
import site from "@/data/site.json";

export default function Page() {
  return (
    <HomePageContent
      schoolName={site.schoolName}
      content={homeContent}
    />
  );
}
