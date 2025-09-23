"use client";

import StickyActions from "@/components/StickyActions";
import TestimonialList from "@/components/TestimonialList";
import { LazyMotion, domAnimation } from "framer-motion";

import DailyJourneySection from "./DailyJourneySection";
import FAQSection from "./FAQSection";
import FinalCTASection from "./FinalCTASection";
import HeroSection from "./HeroSection";
import HighlightsSection from "./HighlightsSection";
import ProgramsSection from "./ProgramsSection";
import type { FAQItem, HighlightItem, JourneyItem, ProgramItem, StatsItem } from "./types";

type HomePageContentProps = {
  schoolName: string;
  stats: StatsItem[];
  highlights: HighlightItem[];
  programs: ProgramItem[];
  journey: JourneyItem[];
  faqs: FAQItem[];
};

export default function HomePageContent({
  schoolName,
  stats,
  highlights,
  programs,
  journey,
  faqs,
}: HomePageContentProps) {
  return (
    <LazyMotion features={domAnimation}>
      <>
        <HeroSection schoolName={schoolName} stats={stats} />
        <HighlightsSection highlights={highlights} />
        <ProgramsSection programs={programs} />
        <DailyJourneySection journey={journey} />
        <TestimonialList />
        <FAQSection faqs={faqs} />
        <FinalCTASection />
        <StickyActions />
      </>
    </LazyMotion>
  );
}
