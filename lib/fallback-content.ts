import site from "@/data/site.json";
import { ctaConfigs } from "@/data/cta";
import { mainNav } from "@/data/navigation";
import {
  homeHeroDescription,
  homeStats,
  homeHighlights,
  homePrograms,
  homeJourney,
  homeFaqs,
  homeCredentials,
  homeCurriculumPillars,
  homeTimeline,
} from "@/content/home";
import { officialProfile, officialMilestones } from "@/data/official";
import { aboutMission } from "@/content/about";
import { teachers } from "@/content/teachers";
import {
  programClasses,
  programLearningMethods,
  programWeeklySchedule,
} from "@/content/programs";
import {
  ppdbFaqs,
  syaratDanKetentuan as ppdbRequirements,
} from "@/content/ppdb";
import {
  costStructure,
  installmentProgram,
  refundPolicy,
} from "@/content/biaya";
import {
  kebijakanPrivasi,
  syaratDanKetentuan as legalTerms,
  disklaimer,
} from "@/content/legal";
import agenda from "@/data/agenda.json";
import gallery from "@/data/galeri.json";
import testimonials from "@/data/testimonials.json";

import type {
  SiteContent,
  SiteSettings,
  CTAButtonConfig,
  NavItem,
  LegalPages,
  AgendaItem,
  GalleryItem,
  Testimonial,
  CostStructureItem,
  OfficialProfile,
} from "@/lib/types/site";

function mapSiteSettings(): SiteSettings {
  const socialLinks = Object.entries(site.socialLinks ?? {}).map(([platform, url]) => ({
    platform,
    url,
  }));

  return {
    schoolName: site.schoolName,
    siteUrl: site.siteUrl,
    address: site.address,
    whatsapp: site.whatsapp,
    headmaster: site.headmaster,
    openingHours: site.openingHours,
    mapsUrl: site.mapsUrl,
    logoUrl: site.logo ?? null,
    email: officialProfile.email ?? null,
    socialLinks,
  };
}

function mapCtas(): CTAButtonConfig[] {
  return Object.entries(ctaConfigs).map(([key, value]) => ({
    key,
    label: value.label,
    message: value.message,
    variant: value.variant ?? "primary",
    icon: value.icon?.name ?? null,
  }));
}

function mapNavigation(): NavItem[] {
  return mainNav.map((item) => {
    if ("children" in item && item.children) {
      return {
        label: item.label,
        children: item.children.map((child) => ({
          label: child.label,
          href: child.href,
          description: child.description,
        })),
      };
    }

    if ("href" in item && item.href) {
      return {
        label: item.label,
        href: item.href,
      };
    }

    return {
      label: item.label,
      href: "#",
    };
  });
}

function mapLegalPages(): LegalPages {
  return {
    privacyPolicy: kebijakanPrivasi,
    terms: legalTerms,
    disclaimer: disklaimer,
  };
}

function mapAgenda(): AgendaItem[] {
  return agenda.map((item) => ({
    id: item.id,
    title: item.title,
    date: item.date,
    time: item.time,
    location: item.location,
    description: item.description,
  }));
}

function mapGallery(): GalleryItem[] {
  return gallery.map((item) => ({
    id: item.id,
    title: item.alt ?? item.caption ?? "Galeri",
    description: item.caption ?? "",
    imageUrl: item.src,
  }));
}

function mapTestimonials(): Testimonial[] {
  return testimonials.map((item) => ({
    id: item.id,
    author: item.author,
    quote: item.quote,
    rating: 5,
  }));
}

function mapCostStructure(): CostStructureItem[] {
  return costStructure.map((item) => ({
    id: item._id,
    name: item.name,
    amount: item.amount,
    category: item.category,
    description: item.description,
    includedInCalculator: item.includedInCalculator,
    type: item.type,
  }));
}

const fallbackPpdbTimeline = [
  {
    date: "2024-06-01",
    title: "Pendaftaran Dibuka",
    description:
      "Formulir online dan offline tersedia. Kuota terbatas, daftar segera!",
  },
  {
    date: "2024-07-15",
    title: "Batas Akhir Pendaftaran",
    description: "Pengumpulan formulir dan dokumen terakhir.",
  },
  {
    date: "2024-07-18",
    title: "Pengumuman Seleksi",
    description:
      "Hasil seleksi akan diumumkan di website dan papan pengumuman sekolah.",
  },
  {
    date: "2024-07-25",
    title: "Daftar Ulang",
    description:
      "Konfirmasi dan pembayaran biaya pendidikan untuk siswa yang diterima.",
  },
  {
    date: "2024-07-29",
    title: "Hari Pertama Sekolah",
    description: "Awal dari petualangan belajar yang menyenangkan!",
  },
];

export const fallbackContent: SiteContent = {
  siteSettings: mapSiteSettings(),
  navigation: mapNavigation(),
  ctas: mapCtas(),
  home: {
    heroDescription: homeHeroDescription,
    stats: homeStats,
    highlights: homeHighlights,
    programs: homePrograms,
    journey: homeJourney,
    faqs: homeFaqs,
    credentials: homeCredentials,
    curriculumPillars: homeCurriculumPillars,
    timeline: homeTimeline,
  },
  about: {
    mission: aboutMission,
    officialProfile: officialProfile as OfficialProfile,
    milestones: officialMilestones,
  },
  teachers: teachers.map((teacher) => ({
    name: teacher.name,
    position: teacher.position,
    description: teacher.description,
    imageUrl: teacher.imageUrl,
  })),
  program: {
    classes: programClasses,
    learningMethods: programLearningMethods,
    weeklySchedule: programWeeklySchedule,
  },
  ppdb: {
    faqs: ppdbFaqs,
    requirements: ppdbRequirements,
    timeline: fallbackPpdbTimeline,
    deadline: "2024-07-15T23:59:59+07:00",
  },
  biaya: {
    costStructure: mapCostStructure(),
    installmentProgram,
    refundPolicy,
  },
  legal: mapLegalPages(),
  agenda: mapAgenda(),
  gallery: mapGallery(),
  testimonials: mapTestimonials(),
};
