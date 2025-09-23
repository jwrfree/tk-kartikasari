export type WhatsAppAction = {
  label: string;
  message: string;
};

export type LinkAction = {
  label: string;
  href: string;
};

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

export type HomeFaqItem = {
  question: string;
  answer: string;
};

export type HomeTestimonial = {
  id: string;
  quote: string;
  author: string;
};

export type HomeHeroAside = {
  schedule: {
    title: string;
    badge: string;
    items: { time: string; activity: string }[];
  };
  safety: {
    title: string;
    description: string;
    highlight: { icon: string; text: string };
  };
  focus: {
    title: string;
    description: string;
  };
  menu: {
    title: string;
    description: string;
  };
};

export type HomeHero = {
  badgeSuffix: string;
  title: string;
  description: string;
  primaryAction: WhatsAppAction;
  secondaryAction: LinkAction;
  stats: HomeStat[];
  aside: HomeHeroAside;
};

export type HomeHighlights = {
  eyebrow: string;
  title: string;
  description: string;
  items: HomeHighlight[];
};

export type HomePrograms = {
  eyebrow: string;
  title: string;
  description: string;
  guidelines: string[];
  items: HomeProgram[];
};

export type HomeJourney = {
  eyebrow: string;
  title: string;
  description: string;
  noteTitle: string;
  noteDescription: string;
  items: HomeJourneyItem[];
};

export type HomeFaqs = {
  eyebrow: string;
  title: string;
  description: string;
  cta: WhatsAppAction;
  items: HomeFaqItem[];
};

export type HomeTestimonials = {
  eyebrow: string;
  title: string;
  description: string;
  items: HomeTestimonial[];
};

export type HomeClosing = {
  eyebrow: string;
  title: string;
  description: string;
  primaryAction: WhatsAppAction;
  secondaryAction: LinkAction;
};

export type HomeContent = {
  hero: HomeHero;
  highlights: HomeHighlights;
  programs: HomePrograms;
  journey: HomeJourney;
  faqs: HomeFaqs;
  testimonials: HomeTestimonials;
  closing: HomeClosing;
};
