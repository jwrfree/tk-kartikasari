import type { Icon as BootstrapIcon } from "react-bootstrap-icons";
import { Whatsapp } from "react-bootstrap-icons";

export type CTAButtonVariant = "primary" | "secondary" | "outline" | "ghost";

export type CTAConfig = {
  label: string;
  message: string;
  variant?: CTAButtonVariant;
  icon?: BootstrapIcon;
};

export const generalInquiryCTA: CTAConfig = {
  label: "Chat via WhatsApp",
  message: "Halo Bu Mintarsih, saya ingin info PPDB TK Kartikasari.",
  variant: "primary",
  icon: Whatsapp,
};

export const heroVisitCTA: CTAConfig = {
  label: "Daftar PPDB & Jadwalkan Tur Sekolah Hari Ini",
  message:
    "Halo Bu Mintarsih, saya ingin menjadwalkan kunjungan dan mendapatkan info PPDB TK Kartikasari.",
  variant: "primary",
};

export const faqInquiryCTA: CTAConfig = {
  label: "Tanya langsung via WhatsApp",
  message: "Halo Bu Mintarsih, saya ingin menanyakan informasi mengenai TK Kartikasari.",
  variant: "primary",
};

export const visitScheduleCTA: CTAConfig = {
  label: "Jadwalkan kunjungan",
  message: "Halo Bu Mintarsih, saya ingin menjadwalkan tur sekolah TK Kartikasari.",
  variant: "primary",
};

export const contactConsultationCTA: CTAConfig = {
  label: "Chat via WhatsApp",
  message: "Halo Bu Mintarsih, saya ingin berkonsultasi mengenai TK Kartikasari.",
  variant: "primary",
};

export const ppdbHeadmasterCTA: CTAConfig = {
  label: "Chat Kepala Sekolah",
  message: "Halo Bu Mintarsih, saya ingin mendapatkan info lengkap PPDB TK Kartikasari.",
  variant: "primary",
};

export const ctaConfigs = {
  generalInquiry: generalInquiryCTA,
  heroVisit: heroVisitCTA,
  faqInquiry: faqInquiryCTA,
  visitSchedule: visitScheduleCTA,
  contactConsultation: contactConsultationCTA,
  ppdbHeadmaster: ppdbHeadmasterCTA,
} as const;

export type CTAKey = keyof typeof ctaConfigs;
