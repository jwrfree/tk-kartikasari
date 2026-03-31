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
  label: "Tanya kuota & langkah daftar",
  message:
    "Halo Bu Mintarsih, saya orang tua calon murid TK Kartikasari. Saya ingin menanyakan kuota, kelompok yang cocok untuk anak saya, dan langkah pendaftaran berikutnya.",
  variant: "primary",
  icon: Whatsapp,
};

export const heroVisitCTA: CTAConfig = {
  label: "Bahas pendaftaran sekarang",
  message:
    "Halo Bu Mintarsih, saya ingin membahas kecocokan sekolah untuk anak saya, status kuota, dan langkah pendaftaran TK Kartikasari.",
  variant: "primary",
};

export const faqInquiryCTA: CTAConfig = {
  label: "Tanya lewat WhatsApp",
  message: "Halo Bu Mintarsih, saya ingin menanyakan info PPDB, biaya awal, dan langkah pendaftaran TK Kartikasari.",
  variant: "primary",
};

export const visitScheduleCTA: CTAConfig = {
  label: "Jadwalkan kunjungan",
  message:
    "Halo Bu Mintarsih, saya ingin menjadwalkan kunjungan setelah menanyakan status PPDB TK Kartikasari.",
  variant: "primary",
};

export const contactConsultationCTA: CTAConfig = {
  label: "Bahas pendaftaran via WhatsApp",
  message:
    "Halo Bu Mintarsih, saya ingin menanyakan kuota, biaya terbaru, dan langkah administrasi pendaftaran TK Kartikasari.",
  variant: "primary",
};

export const ppdbHeadmasterCTA: CTAConfig = {
  label: "Tanya info PPDB lengkap",
  message:
    "Halo Bu Mintarsih, saya ingin menanyakan kuota, dokumen awal, dan langkah lengkap PPDB TK Kartikasari.",
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
