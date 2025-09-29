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

export type SocialLink = {
  platform: string;
  url: string;
};

export type SiteSettings = {
  schoolName: string;
  siteUrl: string;
  tagline: string;
  address: string;
  whatsapp: string;
  headmaster: string;
  openingHours: string;
  mapsUrl: string;
  logoUrl?: string | null;
  email?: string | null;
  socialLinks: SocialLink[];
};

export type CTAButtonVariant = "primary" | "secondary" | "outline" | "ghost";

export type CTAButtonConfig = {
  key: string;
  label: string;
  message: string;
  variant: CTAButtonVariant;
  icon?: string | null;
};

type BaseNavItem = {
  label: string;
};

export type NavLeaf = BaseNavItem & {
  href: string;
  description?: string | null;
};

export type NavParent = BaseNavItem & {
  children: NavLeaf[];
};

export type NavItem = NavLeaf | NavParent;

export type OfficialProfile = {
  npsn: string;
  establishmentDate?: string | null;
  establishmentYear?: number | null;
  yearsOperating?: number | null;
  operationalLicense: string;
  landArea?: string | null;
  curriculum: string;
  email?: string | null;
  locationArea?: string | null;
};

export type AboutPageData = {
  mission: string[];
  officialProfile: OfficialProfile;
  milestones: HomeTimelineMilestone[];
};

export type TeacherProfile = {
  name: string;
  position: string;
  description: string;
  imageUrl?: string | null;
  impactStatement?: string | null;
};

export type ProgramClass = {
  name: string;
  age: string;
  description: string;
  focus: string[];
};

export type LearningMethod = {
  title: string;
  description: string;
};

export type WeeklyScheduleItem = {
  day: string;
  theme: string;
  highlight: string;
};

export type ProgramPageData = {
  classes: ProgramClass[];
  learningMethods: LearningMethod[];
  weeklySchedule: WeeklyScheduleItem[];
};

export type PpdbRequirement = {
  title: string;
  description: string;
};

export type PpdbTimelineItem = {
  date: string;
  title: string;
  description: string;
};

export type PpdbPageData = {
  faqs: HomeFaq[];
  requirements: PpdbRequirement[];
  timeline: PpdbTimelineItem[];
  deadline?: string | null;
};

export type CostStructureItem = {
  id: string;
  name: string;
  amount: number;
  category: string;
  description: string;
  includedInCalculator: boolean;
  type: string;
};

export type InstallmentProgram = {
  title: string;
  description: string;
  options: string[];
  note?: string | null;
};

export type RefundPolicyPoint = {
  title: string;
  content: string;
};

export type RefundPolicy = {
  title: string;
  points: RefundPolicyPoint[];
};

export type BiayaPageData = {
  costStructure: CostStructureItem[];
  installmentProgram?: InstallmentProgram | null;
  refundPolicy?: RefundPolicy | null;
};

export type LegalDocument = {
  title: string;
  effectiveDate: string;
  body: string;
};

export type LegalPages = {
  privacyPolicy: LegalDocument;
  terms: LegalDocument;
  disclaimer: LegalDocument;
};

export type AgendaItem = {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
};

export type GalleryItem = {
  id: string;
  title: string;
  description: string;
  category?: string | null;
  imageUrl: string;
};

export type Testimonial = {
  id: string;
  author: string;
  quote: string;
  rating?: number | null;
};

export type HomePageData = {
  heroDescription: string;
  stats: HomeStat[];
  highlights: HomeHighlight[];
  programs: HomeProgram[];
  journey: HomeJourneyItem[];
  faqs: HomeFaq[];
  credentials: HomeCredential[];
  curriculumPillars: HomeCurriculumPillar[];
  timeline: HomeTimelineMilestone[];
};

export type SiteContent = {
  siteSettings: SiteSettings;
  navigation: NavItem[];
  ctas: CTAButtonConfig[];
  home: HomePageData;
  about: AboutPageData;
  teachers: TeacherProfile[];
  program: ProgramPageData;
  ppdb: PpdbPageData;
  biaya: BiayaPageData;
  legal: LegalPages;
  agenda: AgendaItem[];
  gallery: GalleryItem[];
  testimonials: Testimonial[];
};
