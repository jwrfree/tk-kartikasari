import AnimateIn from "@/components/AnimateIn";
import CTAButton from "@/components/CTAButton";
import PageSection from "@/components/layout/PageSection";
import SectionHeader from "@/components/layout/SectionHeader";
import FaqAccordion from "@/components/FaqAccordion";
import type { HomeFaq } from "@/app/types/home";

type FaqCopy = {
  eyebrow: string;
  title: string;
  description: string;
};

type FaqSectionProps = {
  faqs: HomeFaq[];
  copy: FaqCopy;
};

export function FaqSection({ faqs, copy }: FaqSectionProps) {
  return (
    <PageSection id="faq" padding="tight" containerClassName="grid gap-12 lg:grid-cols-[0.9fr,1fr] lg:items-start">
      <AnimateIn className="space-y-6">
        <SectionHeader eyebrow={copy.eyebrow} title={copy.title} description={copy.description} />
        <CTAButton ctaKey="faqInquiry" />
      </AnimateIn>
      <AnimateIn>
        <FaqAccordion items={faqs} revealOnView className="space-y-4" />
      </AnimateIn>
    </PageSection>
  );
}
