'use client';

import { useMemo, useState } from 'react';

import CTAButton from '@/components/CTAButton';
import { useSiteData } from '@/app/providers/SiteDataProvider';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { CardSurface } from '@/components/ui/CardSurface';

interface EngagementSectionProps {
  slug: string;
}

function normalizeWhatsappNumber(value: string) {
  return value.replace(/[^0-9]/g, '');
}

export default function EngagementSection({ slug }: EngagementSectionProps) {
  const { siteSettings } = useSiteData();
  const [copied, setCopied] = useState(false);
  const articleUrl = useMemo(() => {
    try {
      return new URL(`/blog/${slug}`, siteSettings.siteUrl).toString();
    } catch (error) {
      console.error('Failed to build article URL', error);
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
      console.error('Failed to copy link', error);
    }
  };

  return (
    <section className="mt-12">
      <CardSurface tone="gradient" padding="xl" className="space-y-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="space-y-3">
            <Badge tone="surface" size="sm">
              Bagikan artikel
            </Badge>
            <h2 className="text-2xl font-semibold text-foreground">Bagikan jika menurut Anda tulisan ini membantu.</h2>
            <p className="text-sm text-text-muted">
              Tautan ini bisa diteruskan ke keluarga lain yang sedang mencari gambaran sekolah atau butuh konteks yang
              sama.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button type="button" onClick={handleCopyLink} variant="outline">
              {copied ? 'Tautan Disalin' : 'Salin Tautan'}
            </Button>
            <Button asChild>
              <a href={whatsappShareUrl} target="_blank" rel="noopener noreferrer">
                Bagikan ke WhatsApp
              </a>
            </Button>
          </div>
        </div>

        <CardSurface tone="translucent" padding="lg" className="space-y-4">
          <h3 className="text-lg font-semibold text-text">Ingin tanya langsung?</h3>
          <p className="text-sm text-text-muted">
            Jika ada hal yang ingin dikonfirmasi setelah membaca artikel ini, Anda bisa langsung menghubungi sekolah.
          </p>
          <div className="pt-2">
            <CTAButton ctaKey="contactConsultation" className="w-full sm:w-auto" />
          </div>
        </CardSurface>
      </CardSurface>
    </section>
  );
}
