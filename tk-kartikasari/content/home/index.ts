import { closing } from "./closing";
import { faqs } from "./faqs";
import { hero } from "./hero";
import { highlights } from "./highlights";
import { journey } from "./journey";
import { programs } from "./programs";
import { testimonials } from "./testimonials";
import type { HomeContent } from "./types";

export type {
  HomeContent,
  HomeStat,
  HomeHighlight,
  HomeProgram,
  HomeJourneyItem,
  HomeFaqItem,
  HomeTestimonial,
  HomeHero,
  HomeHeroAside,
  HomeHighlights,
  HomePrograms,
  HomeJourney,
  HomeFaqs,
  HomeTestimonials,
  HomeClosing,
  WhatsAppAction,
  LinkAction,
} from "./types";

export const homeContent = {
  hero,
  highlights,
  programs,
  journey,
  faqs,
  testimonials,
  closing,
} satisfies HomeContent;
