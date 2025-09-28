import { cache } from "react";

import { sanityClient } from "@/lib/sanity-client";
import { fallbackContent } from "@/lib/fallback-content";
import type { SiteContent } from "@/lib/types/site";

const SITE_CONTENT_QUERY = `*[_type == "siteContent"][0]{
  "siteSettings": {
    "schoolName": siteSettings.schoolName,
    "siteUrl": siteSettings.siteUrl,
    "tagline": siteSettings.tagline,
    "address": siteSettings.address,
    "whatsapp": siteSettings.whatsapp,
    "headmaster": siteSettings.headmaster,
    "openingHours": siteSettings.openingHours,
    "mapsUrl": siteSettings.mapsUrl,
    "logoUrl": coalesce(siteSettings.logo.asset->url, siteSettings.logoUrl),
    "email": siteSettings.email,
    "socialLinks": siteSettings.socialLinks[]{ platform, url }
  },
  "ctas": ctaButtons[]{ key, label, message, variant, icon },
  "navigation": navigation[]{
    label,
    href,
    children[]{ label, href, description }
  },
  "home": {
    "heroDescription": homePage.heroDescription,
    "stats": homePage.stats[]{ value, label },
    "highlights": homePage.highlights[]{ icon, title, description },
    "programs": homePage.programs[]{ name, age, description, points },
    "journey": homePage.journey[]{ time, title, description, icon },
    "faqs": homePage.faqs[]{ question, answer },
    "credentials": homePage.credentials[]{ label, value, description },
    "curriculumPillars": homePage.curriculumPillars[]{ title, subtitle, points },
    "timeline": homePage.timeline[]{ year, title, description }
  },
  "about": {
    "mission": aboutPage.mission[],
    "officialProfile": aboutPage.officialProfile,
    "milestones": aboutPage.milestones[]{ year, title, description }
  },
  "teachers": teachers[]{ name, position, description, "imageUrl": image.asset->url },
  "program": {
    "classes": programPage.classes[]{ name, age, description, focus },
    "learningMethods": programPage.learningMethods[]{ title, description },
    "weeklySchedule": programPage.weeklySchedule[]{ day, theme, highlight }
  },
  "ppdb": {
    "faqs": ppdbPage.faqs[]{ question, answer },
    "requirements": ppdbPage.requirements[]{ title, description },
    "timeline": ppdbPage.timeline[]{ date, title, description },
    "deadline": ppdbPage.deadline
  },
  "biaya": {
    "costStructure": biayaPage.costStructure[]{
      "id": coalesce(id, _key),
      name,
      amount,
      category,
      description,
      includedInCalculator,
      type
    },
    "installmentProgram": biayaPage.installmentProgram{ title, description, options, note },
    "refundPolicy": biayaPage.refundPolicy{ title, points[]{ title, content } }
  },
  "legal": {
    "privacyPolicy": legalPages.privacyPolicy{ title, effectiveDate, body },
    "terms": legalPages.terms{ title, effectiveDate, body },
    "disclaimer": legalPages.disclaimer{ title, effectiveDate, body }
  },
  "agenda": agenda[]{
    "id": coalesce(id, _key),
    title,
    date,
    time,
    location,
    description
  },
  "gallery": gallery[]{
    "id": coalesce(id, _key),
    title,
    description,
    category,
    "imageUrl": coalesce(image.asset->url, imageUrl)
  },
  "testimonials": testimonials[]{
    "id": coalesce(id, _key),
    author,
    quote,
    rating
  }
}`;

type RawSiteContent = Partial<SiteContent> | null;

function arrayWithFallback<T>(value: T[] | undefined | null, fallback: T[]): T[] {
  return Array.isArray(value) && value.length > 0 ? value : fallback;
}

function mergeContent(data: RawSiteContent): SiteContent {
  if (!data) {
    return fallbackContent;
  }

  return {
    siteSettings: {
      ...fallbackContent.siteSettings,
      ...data.siteSettings,
      socialLinks: arrayWithFallback(data.siteSettings?.socialLinks, fallbackContent.siteSettings.socialLinks),
    },
    navigation: arrayWithFallback(data.navigation, fallbackContent.navigation),
    ctas: arrayWithFallback(data.ctas, fallbackContent.ctas),
    home: {
      heroDescription: data.home?.heroDescription ?? fallbackContent.home.heroDescription,
      stats: arrayWithFallback(data.home?.stats, fallbackContent.home.stats),
      highlights: arrayWithFallback(data.home?.highlights, fallbackContent.home.highlights),
      programs: arrayWithFallback(data.home?.programs, fallbackContent.home.programs),
      journey: arrayWithFallback(data.home?.journey, fallbackContent.home.journey),
      faqs: arrayWithFallback(data.home?.faqs, fallbackContent.home.faqs),
      credentials: arrayWithFallback(data.home?.credentials, fallbackContent.home.credentials),
      curriculumPillars: arrayWithFallback(data.home?.curriculumPillars, fallbackContent.home.curriculumPillars),
      timeline: arrayWithFallback(data.home?.timeline, fallbackContent.home.timeline),
    },
    about: {
      mission: arrayWithFallback(data.about?.mission, fallbackContent.about.mission),
      officialProfile: {
        ...fallbackContent.about.officialProfile,
        ...data.about?.officialProfile,
      },
      milestones: arrayWithFallback(data.about?.milestones, fallbackContent.about.milestones),
    },
    teachers: arrayWithFallback(data.teachers, fallbackContent.teachers),
    program: {
      classes: arrayWithFallback(data.program?.classes, fallbackContent.program.classes),
      learningMethods: arrayWithFallback(data.program?.learningMethods, fallbackContent.program.learningMethods),
      weeklySchedule: arrayWithFallback(data.program?.weeklySchedule, fallbackContent.program.weeklySchedule),
    },
    ppdb: {
      faqs: arrayWithFallback(data.ppdb?.faqs, fallbackContent.ppdb.faqs),
      requirements: arrayWithFallback(data.ppdb?.requirements, fallbackContent.ppdb.requirements),
      timeline: arrayWithFallback(data.ppdb?.timeline, fallbackContent.ppdb.timeline),
      deadline: data.ppdb?.deadline ?? fallbackContent.ppdb.deadline,
    },
    biaya: {
      costStructure: arrayWithFallback(data.biaya?.costStructure, fallbackContent.biaya.costStructure),
      installmentProgram: data.biaya?.installmentProgram ?? fallbackContent.biaya.installmentProgram,
      refundPolicy: data.biaya?.refundPolicy ?? fallbackContent.biaya.refundPolicy,
    },
    legal: {
      privacyPolicy: {
        ...fallbackContent.legal.privacyPolicy,
        ...data.legal?.privacyPolicy,
      },
      terms: {
        ...fallbackContent.legal.terms,
        ...data.legal?.terms,
      },
      disclaimer: {
        ...fallbackContent.legal.disclaimer,
        ...data.legal?.disclaimer,
      },
    },
    agenda: arrayWithFallback(data.agenda, fallbackContent.agenda),
    gallery: arrayWithFallback(data.gallery, fallbackContent.gallery),
    testimonials: arrayWithFallback(data.testimonials, fallbackContent.testimonials),
  };
}

export const getSiteContent = cache(async (): Promise<SiteContent> => {
  try {
    const data = await sanityClient.fetch<RawSiteContent>(SITE_CONTENT_QUERY);
    return mergeContent(data);
  } catch (error) {
    console.error("Failed to fetch site content from Sanity:", error);
    return fallbackContent;
  }
});

export async function getGlobalSiteData() {
  const content = await getSiteContent();
  return {
    siteSettings: content.siteSettings,
    navigation: content.navigation,
    ctas: content.ctas,
    officialProfile: content.about.officialProfile,
  };
}

export async function getHomePageData() {
  const content = await getSiteContent();
  return {
    home: content.home,
    teachers: content.teachers,
    officialProfile: content.about.officialProfile,
    siteSettings: content.siteSettings,
    testimonials: content.testimonials,
  };
}

export async function getAboutPageData() {
  const content = await getSiteContent();
  return {
    about: content.about,
    teachers: content.teachers,
    testimonials: content.testimonials,
    siteSettings: content.siteSettings,
  };
}

export async function getProgramPageData() {
  const content = await getSiteContent();
  return {
    program: content.program,
    siteSettings: content.siteSettings,
  };
}

export async function getPpdbPageData() {
  const content = await getSiteContent();
  return {
    ppdb: content.ppdb,
    biaya: content.biaya,
    testimonials: content.testimonials,
    siteSettings: content.siteSettings,
  };
}

export async function getBiayaPageData() {
  const content = await getSiteContent();
  return {
    biaya: content.biaya,
    siteSettings: content.siteSettings,
  };
}

export async function getLegalPages() {
  const content = await getSiteContent();
  return {
    legal: content.legal,
    siteSettings: content.siteSettings,
  };
}

export async function getAgendaPageData() {
  const content = await getSiteContent();
  return {
    agenda: content.agenda,
    siteSettings: content.siteSettings,
  };
}

export async function getGalleryPageData() {
  const content = await getSiteContent();
  return {
    gallery: content.gallery,
    siteSettings: content.siteSettings,
  };
}

export async function getContactPageData() {
  const content = await getSiteContent();
  return {
    siteSettings: content.siteSettings,
    ctas: content.ctas,
  };
}

export async function getTestimonials() {
  const content = await getSiteContent();
  return content.testimonials;
}
