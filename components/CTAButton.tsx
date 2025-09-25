
'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import type { CTAConfig, CTAKey } from '@/data/cta';
import { ctaConfigs } from '@/data/cta';
import site from '@/data/site.json';
import { cn } from '@/lib/utils'; // Import cn untuk menggabungkan kelas

interface CTAButtonProps {
  ctaKey: CTAKey;
  className?: string;
}

export default function CTAButton({ ctaKey, className }: CTAButtonProps) {
  const config = ctaConfigs[ctaKey];
  const { label, message, variant = 'primary', icon: Icon } = config;

  const whatsAppNumber = site.whatsapp.startsWith('0')
    ? `62${site.whatsapp.substring(1)}`
    : site.whatsapp;
  const encodedMessage = encodeURIComponent(message);
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
      <span>{label}</span>
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
