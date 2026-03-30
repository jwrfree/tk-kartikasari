"use client";

import Image from "next/image";
import Link from "next/link";
import { UsersIcon, SparklesIcon, ArrowRightIcon } from "lucide-react";
import { motion, type Variants } from "framer-motion";

import CTAButton from "@/components/CTAButton";
import PageSection from "@/components/layout/PageSection";
import AnimatedCounter from "@/components/reactbits/AnimatedCounter";
import type { HomeStat } from "@/app/types/home";

export type HeroCopy = {
  badgeSuffix: string;
  title: string;
  description: string;
  highlight: {
    title: string;
    description: string;
    ratioLabel: string;
  };
  secondaryCtaLabel: string;
};

type HeroSectionProps = {
  schoolName: string;
  stats: HomeStat[];
  teacherStudentRatio: string;
  copy: HeroCopy;
};

export function HeroSection({ schoolName, stats, teacherStudentRatio, copy }: HeroSectionProps) {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: -30 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { 
        duration: 0.8, 
        ease: [0.16, 1, 0.3, 1]
      } 
    },
  };

  return (
    <section className="relative min-h-[90vh] overflow-hidden bg-background pt-24 lg:pt-0">
      {/* Background Accent Gradients */}
      <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-primary/10 blur-[120px]" aria-hidden="true" />
      <div className="absolute top-1/2 left-1/4 h-64 w-64 rounded-full bg-secondary/5 blur-[100px]" aria-hidden="true" />

      <PageSection
        padding="none"
        containerClassName="relative z-10 grid min-h-[90vh] items-center gap-12 lg:grid-cols-2 lg:gap-20"
      >
        {/* Left Side: Content Box */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col justify-center space-y-10 py-12 lg:py-32"
        >
          <motion.div variants={itemVariants} className="inline-flex w-fit items-center gap-3 rounded-full border border-primary/20 bg-white/60 px-5 py-2 text-sm font-bold text-primary shadow-soft backdrop-blur-xl">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary"></span>
            </span>
            <span className="tracking-wide uppercase">{schoolName} • {copy.badgeSuffix}</span>
          </motion.div>

          <div className="space-y-6">
            <motion.h1 
              variants={itemVariants}
              className="max-w-[15ch] text-balance font-sans text-5xl font-[950] leading-[1.05] tracking-tight text-foreground/90 md:text-7xl xl:text-8xl"
            >
              Awal Terbaik untuk <span className="text-secondary italic font-serif">Si Kecil.</span>
            </motion.h1>

            <motion.p 
              variants={itemVariants}
              className="max-w-xl text-pretty text-lg leading-relaxed text-foreground/60 md:text-xl"
            >
              {copy.description}
            </motion.p>
          </div>

          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-5">
            <CTAButton ctaKey="heroVisit" className="btn-primary min-w-[200px]" />
            <Link 
              href="/ppdb" 
              className="group flex items-center gap-2 rounded-2xl bg-secondary/5 px-8 py-4 text-base font-bold text-secondary transition-all hover:bg-secondary/10"
            >
              <span>{copy.secondaryCtaLabel}</span>
              <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>

          {/* Stats Bar */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-8 pt-8">
            {stats.map((item) => (
              <div key={item.label} className="group relative">
                <p className="text-3xl font-[900] text-foreground/90 md:text-4xl">
                  <AnimatedCounter value={item.value} />
                </p>
                <p className="max-w-[150px] text-xs font-bold leading-tight uppercase tracking-widest text-foreground/40 transition-colors group-hover:text-primary">
                  {item.label}
                </p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Side: High-Impact Image Frame */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, x: 50 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
          className="relative h-[500px] w-full lg:h-[700px]"
        >
          {/* Main Image Frame with Premium Border */}
          <div className="relative h-full w-full overflow-hidden rounded-[3rem] border-[12px] border-white shadow-premium">
            <Image
              src="/images/hero-main.png"
              alt="Anak-anak belajar dengan gembira di TK Kartikasari"
              fill
              className="object-cover transition-transform duration-1000 hover:scale-105"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>

          {/* Floating High-Trust Card */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="absolute bottom-8 -left-8 right-8 rounded-[2.5rem] border border-white/60 bg-white/80 p-8 shadow-premium backdrop-blur-2xl md:-left-12 md:bottom-12 md:p-10"
          >
            <div className="flex items-start gap-6">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-secondary shadow-floating">
                <UsersIcon className="h-7 w-7 text-white" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-black text-foreground/90">{copy.highlight.title}</h3>
                <p className="text-sm leading-relaxed text-foreground/60">{copy.highlight.description}</p>
                <div className="inline-block rounded-full bg-secondary/10 px-3 py-1 text-[10px] font-black uppercase tracking-wider text-secondary">
                  Rasio {teacherStudentRatio} • Terakreditasi
                </div>
              </div>
            </div>
          </motion.div>

          {/* Decorative Elements */}
          <div className="absolute -z-10 -bottom-6 -right-6 h-32 w-32 rounded-full bg-accent/20 blur-2xl" />
          <div className="absolute -z-10 -top-6 -right-6 h-64 w-64 rounded-full bg-secondary/10 blur-3xl opacity-50" />
        </motion.div>
      </PageSection>
    </section>
  );
}
