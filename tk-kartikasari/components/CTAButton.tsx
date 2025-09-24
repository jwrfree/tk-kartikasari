'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import type { CTA } from '@/content/cta';
import type { Icon as BootstrapIcon } from 'react-bootstrap-icons';

interface CTAButtonProps {
  config: CTA;
  className?: string;
}

export default function CTAButton({ config, className }: CTAButtonProps) {
  const { label, href, variant, icon: Icon } = config;

  const baseClasses =
    'inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-base font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-surface';

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
      {Icon ? <Icon className="h-5 w-5" /> : null}
      <span>{label}</span>
    </>
  );

  return (
    <motion.div {...motionProps} className={`relative ${className}`}>
      <Link href={href} className={`${baseClasses} ${variantClasses[variant]}`}>
        {buttonContent}
      </Link>
    </motion.div>
  );
}
