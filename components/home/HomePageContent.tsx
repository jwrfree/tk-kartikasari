import dynamic from "next/dynamic";

import PageSection from "@/components/layout/PageSection";
import type {
  HomeCredential,
  HomeCurriculumPillar,
  HomeFaq,
  HomeHighlight,
  HomeJourneyItem,
  HomeProgram,
  HomeStat,
  HomeTimelineMilestone,
} from "@/app/types/home";
import type { Post as BlogPost } from "@/lib/blog";
import type { Testimonial } from "@/lib/types/site";
import {
  homeHero,
  homeOnboardingCopy,
  homeHighlightsCopy,
  homeCredentialsCopy,
  homeCurriculumCopy,
  homeProgramsCopy,
  homeExperienceCopy,
  homeDailyAgenda,
  homeBlogCopy,
  homeFaqCopy,
  homeFinalCtaCopy,
} from "@/content/home";
import { ppdbMetaDescription, syaratDanKetentuan as ppdbRequirementsStatic } from "@/content/ppdb";
import {
  buildOnboardingSteps,
  extractCredentialValue,
  extractTeacherStudentRatio,
} from "@/lib/home";

import { HeroSection } from "./sections/HeroSection";
import { OnboardingSection } from "./sections/OnboardingSection";
import { HighlightsSection } from "./sections/HighlightsSection";
import { CredentialsSection } from "./sections/CredentialsSection";
import { CurriculumSection } from "./sections/CurriculumSection";
import { ProgramsSection } from "./sections/ProgramsSection";
import { DailyExperienceSection } from "./sections/DailyExperienceSection";
import { BlogSection } from "./sections/BlogSection";
import { FaqSection } from "./sections/FaqSection";
import { FinalCtaSection } from "./sections/FinalCtaSection";

const TestimonialList = dynamic(() => import("@/components/TestimonialList"), {
  loading: () => (
    <PageSection id="testimonials" padding="relaxed">
      <div className="card mx-auto max-w-3xl space-y-3 border border-border/70 bg-secondary/5 p-8 text-center">
        <div className="h-4 w-24 animate-pulse rounded-full bg-secondary/30" aria-hidden="true" />
        <div className="h-5 w-full animate-pulse rounded-full bg-secondary/20" aria-hidden="true" />
        <div className="mx-auto h-5 w-3/4 animate-pulse rounded-full bg-secondary/20" aria-hidden="true" />
      </div>
    </PageSection>
  ),
});

type HomePageContentProps = {
  schoolName: string;
  stats: HomeStat[];
  highlights: HomeHighlight[];
  programs: HomeProgram[];
  journey: HomeJourneyItem[];
  faqs: HomeFaq[];
  credentials: HomeCredential[];
  curriculumPillars: HomeCurriculumPillar[];
  timeline: HomeTimelineMilestone[];
  blogPosts: BlogPost[];
  testimonials: Testimonial[];
};

export default function HomePageContent({
  schoolName,
  stats,
  highlights,
  programs,
  journey,
  faqs,
  credentials,
  curriculumPillars,
  timeline,
  blogPosts,
  testimonials,
}: HomePageContentProps) {
  const teacherStudentRatio = extractTeacherStudentRatio(stats);
  const schoolNpsn = extractCredentialValue(credentials, "npsn");

  const biayaRequirement = ppdbRequirementsStatic.find((item) =>
    item.title.toLowerCase().includes("biaya"),
  );
  const documentRequirement = ppdbRequirementsStatic.find((item) =>
    item.title.toLowerCase().includes("dokumen"),
  );

  const onboardingSteps = buildOnboardingSteps({
    journey,
    biayaDescription: biayaRequirement?.description,
    documentDescription: documentRequirement?.description,
    metaDescription: ppdbMetaDescription,
  });

  return (
    <main>
      <HeroSection
        schoolName={schoolName}
        stats={stats}
        teacherStudentRatio={teacherStudentRatio}
        copy={homeHero}
      />
      <OnboardingSection steps={onboardingSteps} copy={homeOnboardingCopy} />
      <HighlightsSection highlights={highlights} copy={homeHighlightsCopy} />
      <CredentialsSection credentials={credentials} timeline={timeline} copy={homeCredentialsCopy} />
      <CurriculumSection pillars={curriculumPillars} copy={homeCurriculumCopy} />
      <ProgramsSection programs={programs} copy={homeProgramsCopy} />
      <DailyExperienceSection
        journey={journey}
        teacherStudentRatio={teacherStudentRatio}
        npsn={schoolNpsn}
        copy={homeExperienceCopy}
        agenda={homeDailyAgenda}
      />
      <TestimonialList testimonials={testimonials} />
      <BlogSection posts={blogPosts} copy={homeBlogCopy} />
      <FaqSection faqs={faqs} copy={homeFaqCopy} />
      <FinalCtaSection copy={homeFinalCtaCopy} />
    </main>
  );
}
