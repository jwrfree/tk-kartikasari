"use client";

import { useMemo, useState } from "react";

import CTAButton from "@/components/CTAButton";
import { useSiteData } from "@/app/providers/SiteDataProvider";

interface EngagementSectionProps {
  slug: string;
}

function normalizeWhatsappNumber(value: string) {
  return value.replace(/[^0-9]/g, "");
}

export default function EngagementSection({ slug }: EngagementSectionProps) {
  const { siteSettings } = useSiteData();
  const [copied, setCopied] = useState(false);
  const articleUrl = useMemo(() => {
    try {
      return new URL(`/blog/${slug}`, siteSettings.siteUrl).toString();
    } catch (error) {
      console.error("Failed to build article URL", error);
      return `${siteSettings.siteUrl}/blog/${slug}`;
    }
  }, [siteSettings.siteUrl, slug]);

  const whatsappShareUrl = useMemo(() => {
    const phone = normalizeWhatsappNumber(siteSettings.whatsapp);
    const message = `Saya baru saja membaca artikel menarik dari ${siteSettings.schoolName}. Yuk cek di ${articleUrl}`;
    return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  }, [articleUrl, siteSettings.schoolName, siteSettings.whatsapp]);

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(articleUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 4000);
    } catch (error) {
      console.error("Failed to copy link", error);
    }
  };

  return (
    <section className="mt-12 rounded-2xl border border-primary/10 bg-primary/5 p-6 shadow-sm">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h2 className="text-xl font-semibold text-primary">Bagikan Artikel Ini</h2>
          <p className="text-sm text-text-muted">
            Ceritakan pengalaman Anda kepada sesama orang tua dan bantu kami menjangkau lebih banyak keluarga.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <button
            type="button"
            onClick={handleCopyLink}
            className="inline-flex items-center gap-2 rounded-full border border-primary px-4 py-2 text-sm font-semibold text-primary transition hover:bg-primary/10"
          >
            {copied ? "Tautan Disalin" : "Salin Tautan"}
          </button>
          <a
            href={whatsappShareUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white transition hover:bg-primary/90"
          >
            Bagikan ke WhatsApp
          </a>
        </div>
      </div>

      <div className="mt-8 rounded-xl bg-white p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-text">Ingin Diskusi Lebih Lanjut?</h3>
        <p className="mt-2 text-sm text-text-muted">
          Tim kami siap membantu Anda memahami program dan kegiatan di TK Kartikasari. Silakan hubungi kami kapan pun Anda siap.
        </p>
        <div className="mt-4">
          <CTAButton ctaKey="contactConsultation" className="w-full sm:w-auto" />
        </div>
      </div>
    </section>
  );
}
