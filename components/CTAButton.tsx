
'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import type { CTAButtonConfig } from '@/lib/types/site';
import { useCTAButton, useSiteData } from '@/app/providers/SiteDataProvider';
import { cn } from '@/lib/utils';
import { getBootstrapIcon } from '@/lib/icon-registry';

interface CTAButtonProps {
  ctaKey: string;
  className?: string;
}

export default function CTAButton({ ctaKey, className }: CTAButtonProps) {
  const config = useCTAButton(ctaKey) as CTAButtonConfig | undefined;
  const { siteSettings } = useSiteData();

  if (!config) {
    return null;
  }

  const Icon = getBootstrapIcon(config.icon);
  const variant = config.variant ?? 'primary';

  const whatsAppNumber = siteSettings.whatsapp.startsWith('0')
    ? `62${siteSettings.whatsapp.substring(1)}`
    : siteSettings.whatsapp;
  const encodedMessage = encodeURIComponent(config.message);
  const href = `https://wa.me/${whatsAppNumber}?text=${encodedMessage}`;

  // Objek pemetaan dari varian config ke kelas sistem desain kita
  const variantMap = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    outline: 'btn-outline',
    ghost: 'btn-ghost', // Anda bisa menambahkan .btn-ghost jika perlu
  };

  const motionProps = {
    whileHover: { scale: 1.02 },
    whileTap: { scale: 0.98 },
  };

  const buttonContent = (
    <>
      {Icon && <Icon className="h-5 w-5" />}
      <span>{config.label}</span>
    </>
  );

  return (
    <motion.div {...motionProps} className={`relative w-full sm:w-auto ${className}`}>
      <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        // Menggunakan kelas dari sistem desain global
        className={cn(
          'btn w-full', // <-- Kelas dasar btn
          variantMap[variant] // <-- Kelas varian dinamis
        )}
      >
        {buttonContent}
      </Link>
    </motion.div>
  );
}
