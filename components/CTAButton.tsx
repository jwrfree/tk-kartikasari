'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import type { CTAConfig, CTAKey } from '@/data/cta';
import { ctaConfigs } from '@/data/cta';
import site from '@/data/site.json';

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

  const baseClasses =
    'inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-base font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-surface w-full sm:w-auto';

  const variantClasses = {
    primary:
      'border-transparent bg-primary text-white shadow-soft hover:-translate-y-0.5 hover:bg-primary/90 focus-visible:ring-primary',
    secondary:
      'border-transparent bg-secondary text-white shadow-soft hover:-translate-y-0.5 hover:bg-secondary/90 focus-visible:ring-secondary',
    outline:
      'border-border bg-surface text-text shadow-soft hover:-translate-y-0.5 hover:border-primary hover:bg-surfaceAlt hover:text-primary focus-visible:ring-primary',
    ghost:
      'border-transparent bg-transparent text-text hover:bg-surfaceAlt hover:text-primary focus-visible:ring-primary',
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
    <motion.div {...motionProps} className={`relative ${className}`}>
      <Link href={href} target="_blank" rel="noopener noreferrer" className={`${baseClasses} ${variantClasses[variant]}`}>
        {buttonContent}
      </Link>
    </motion.div>
  );
}
