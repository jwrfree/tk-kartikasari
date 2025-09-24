import type { OfficialTimelineMilestone } from "@/data/official";

export type HomeStat = {
  value: string;
  label: string;
};

export type HomeHighlight = {
  icon: string;
  title: string;
  description: string;
};

export type HomeProgram = {
  name: string;
  age: string;
  description: string;
  points: string[];
};

export type HomeJourneyItem = {
  time: string;
  title: string;
  description: string;
  icon: string;
};

export type HomeFaq = {
  question: string;
  answer: string;
};

export type HomeCredential = {
  label: string;
  value: string;
  description: string;
};

export type HomeCurriculumPillar = {
  title: string;
  subtitle: string;
  points: string[];
};

export type HomeTimelineMilestone = OfficialTimelineMilestone;
