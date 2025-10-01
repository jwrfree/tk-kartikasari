import type {
  HomeCredential,
  HomeJourneyItem,
  HomeOnboardingStep,
  HomeStat,
} from "@/app/types/home";
import { homeJourney, homeOnboardingCopy } from "@/content/home";

export type OnboardingStepOverrides = {
  journey?: HomeJourneyItem[];
  biayaDescription?: string;
  documentDescription?: string;
  metaDescription?: string;
};

export function buildOnboardingSteps({
  journey,
  biayaDescription,
  documentDescription,
  metaDescription,
}: OnboardingStepOverrides): readonly HomeOnboardingStep[] {
  const steps = homeOnboardingCopy.steps;

  const journeyDescription = journey?.[0]?.description ?? homeJourney[0]?.description;

  return steps.map((step) => {
    switch (step.key) {
      case "routine":
        return {
          ...step,
          description: journeyDescription ?? step.description,
        };
      case "cost":
        return {
          ...step,
          description: biayaDescription ?? step.description,
        };
      case "documents":
        return {
          ...step,
          description: documentDescription ?? step.description,
        };
      case "apply":
        return {
          ...step,
          description: metaDescription ?? step.description,
        };
      default:
        return step;
    }
  });
}

export function extractTeacherStudentRatio(stats: HomeStat[], fallback = "1 : 8"): string {
  return (
    stats.find((item) => item.label.toLowerCase().includes("rasio"))?.value?.trim() ?? fallback
  );
}

export function extractCredentialValue(
  credentials: HomeCredential[],
  label: string,
): string | undefined {
  return credentials.find((item) => item.label.toLowerCase() === label.toLowerCase())?.value;
}

export function formatBlogDescription(rawBody: string | undefined): string {
  if (!rawBody) {
    return "";
  }

  const normalizedBody = rawBody
    .replace(/[#*_`>\-]/g, "")
    .replace(/\[(.*?)\]\(.*?\)/g, "$1")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();

  if (normalizedBody.length <= 160) {
    return normalizedBody;
  }

  return `${normalizedBody.slice(0, 157)}...`;
}
