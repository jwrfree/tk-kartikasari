"use client";

import CTAButton from "@/components/CTAButton";
import StickyActions from "@/components/StickyActions";
import TestimonialList from "@/components/TestimonialList";
import type { HomeContent } from "@/content/home";
import { LazyMotion, domAnimation, m } from "framer-motion";

type HomePageContentProps = {
  schoolName: string;
  content: HomeContent;
};

export default function HomePageContent({
  schoolName,
  content,
}: HomePageContentProps) {
  const { hero, highlights, programs, journey, faqs, testimonials, closing } =
    content;
  const { aside } = hero;

  return (
    <LazyMotion features={domAnimation}>
      <>
        <section className="relative overflow-hidden pt-16">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -top-32 right-16 h-72 w-72 rounded-full bg-secondary/20 blur-3xl" />
            <div className="absolute -left-32 top-24 h-80 w-80 rounded-full bg-primary/25 blur-3xl" />
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-hero-gradient" />
          </div>
          <div className="container relative grid gap-16 pb-24 pt-12 md:grid-cols-[1.05fr,0.95fr] md:items-center">
            <m.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-white/50 bg-white/80 px-4 py-2 text-sm font-semibold text-secondary shadow-soft">
                <span className="h-2.5 w-2.5 rounded-full bg-secondary" />
                {schoolName} {hero.badgeSuffix}
              </span>
              <h1 className="text-4xl font-bold leading-tight text-text sm:text-5xl">
                {hero.title}
              </h1>
              <p className="max-w-xl text-lg leading-relaxed text-text-muted">
                {hero.description}
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <CTAButton
                  label={hero.primaryAction.label}
                  className="w-full sm:w-auto"
                  message={hero.primaryAction.message}
                />
                <a
                  href={hero.secondaryAction.href}
                  className="btn-outline w-full sm:w-auto"
                >
                  {hero.secondaryAction.label}
                </a>
              </div>
              <dl className="grid gap-6 pt-6 sm:grid-cols-3">
                {hero.stats.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-3xl border border-white/60 bg-white/80 p-5 text-left shadow-soft"
                  >
                    <dt className="text-3xl font-bold text-text">{item.value}</dt>
                    <dd className="mt-1 text-sm text-text-muted">{item.label}</dd>
                  </div>
                ))}
              </dl>
            </m.div>

            <m.div
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="relative"
            >
              <div className="absolute -top-12 right-10 h-32 w-32 rounded-full bg-accent/40 blur-2xl" />
              <div className="absolute -bottom-8 left-0 h-28 w-28 rounded-full bg-secondary/30 blur-2xl" />
              <div className="relative space-y-5">
                <div className="card overflow-hidden border-white/60 bg-white/90 p-6 shadow-soft">
                  <div className="flex items-center justify-between text-sm font-semibold text-text">
                    <span>{aside.schedule.title}</span>
                    <span className="rounded-full bg-secondary/10 px-3 py-1 text-secondary">
                      {aside.schedule.badge}
                    </span>
                  </div>
                  <ul className="mt-4 space-y-3 text-sm text-text-muted">
                    {aside.schedule.items.map((item) => (
                      <li
                        key={`${item.time}-${item.activity}`}
                        className="flex items-start gap-3"
                      >
                        <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary/15 text-sm">
                          {item.time}
                        </span>
                        {item.activity}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="ml-auto w-[85%] rounded-3xl border border-white/60 bg-white/70 p-6 shadow-soft backdrop-blur">
                  <p className="text-sm font-semibold text-secondary">
                    {aside.safety.title}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-text-muted">
                    {aside.safety.description}
                  </p>
                  <div className="mt-4 flex items-center gap-3 text-sm font-semibold text-text">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/15 text-lg">
                      {aside.safety.highlight.icon}
                    </span>
                    {aside.safety.highlight.text}
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-3xl border border-white/60 bg-white/90 p-5 shadow-soft">
                    <p className="text-sm font-semibold text-secondary">
                      {aside.focus.title}
                    </p>
                    <p className="mt-2 text-sm text-text-muted">
                      {aside.focus.description}
                    </p>
                  </div>
                  <div className="rounded-3xl border border-white/60 bg-white/90 p-5 shadow-soft">
                    <p className="text-sm font-semibold text-secondary">
                      {aside.menu.title}
                    </p>
                    <p className="mt-2 text-sm text-text-muted">
                      {aside.menu.description}
                    </p>
                  </div>
                </div>
              </div>
            </m.div>
          </div>
        </section>

        <section className="relative border-y border-white/60 bg-white/80 py-20">
          <div className="container">
            <m.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6 }}
              className="mx-auto max-w-2xl text-center"
            >
              <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
                {highlights.eyebrow}
              </span>
              <h2 className="mt-4 text-3xl font-bold leading-tight text-text sm:text-4xl">
                {highlights.title}
              </h2>
              <p className="mt-3 text-lg text-text-muted">
                {highlights.description}
              </p>
            </m.div>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {highlights.items.map((item, index) => (
                <m.div
                  key={item.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.55, delay: index * 0.08 }}
                  className="card h-full border-white/60 bg-white/90 p-7 text-left"
                >
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/15 text-2xl">
                    {item.icon}
                  </span>
                  <h3 className="mt-6 text-xl font-semibold text-text">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-text-muted">
                    {item.description}
                  </p>
                </m.div>
              ))}
            </div>
          </div>
        </section>

        <section id="program" className="relative py-20">
          <div className="container grid gap-12 lg:grid-cols-[1fr,1fr] lg:items-start">
            <m.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <span className="inline-flex items-center gap-2 rounded-full bg-secondary/10 px-4 py-2 text-sm font-semibold text-secondary">
                {programs.eyebrow}
              </span>
              <h2 className="text-3xl font-bold leading-tight text-text sm:text-4xl">
                {programs.title}
              </h2>
              <p className="text-lg leading-relaxed text-text-muted">
                {programs.description}
              </p>
              <ul className="space-y-3 text-sm text-text-muted">
                {programs.guidelines.map((guideline, index) => (
                  <li key={guideline} className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary/15 text-xs font-semibold text-primary">
                      {index + 1}
                    </span>
                    {guideline}
                  </li>
                ))}
              </ul>
            </m.div>
            <div className="grid gap-6">
              {programs.items.map((program, index) => (
                <m.div
                  key={program.name}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.55, delay: index * 0.08 }}
                  className="card h-full border-white/70 bg-white/90 p-7 shadow-soft"
                >
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-wide text-secondary">
                        {program.age}
                      </p>
                      <h3 className="mt-1 text-2xl font-semibold text-text">
                        {program.name}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-text-muted">
                        {program.description}
                      </p>
                    </div>
                    <span className="inline-flex h-12 min-w-[3rem] items-center justify-center rounded-2xl bg-primary/15 text-2xl">
                      ✨
                    </span>
                  </div>
                  <ul className="mt-6 space-y-2 text-sm text-text-muted">
                    {program.points.map((point) => (
                      <li key={point} className="flex items-start gap-3">
                        <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-secondary/10 text-xs font-semibold text-secondary">
                          ✓
                        </span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </m.div>
              ))}
            </div>
          </div>
        </section>

        <section id="pengalaman" className="relative overflow-hidden py-20">
          <div className="absolute inset-0 bg-grid-dots [background-size:24px_24px] opacity-40" />
          <div className="container relative grid gap-12 lg:grid-cols-[0.9fr,1.1fr] lg:items-center">
            <m.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <span className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-sm font-semibold text-primary">
                {journey.eyebrow}
              </span>
              <h2 className="text-3xl font-bold leading-tight text-text sm:text-4xl">
                {journey.title}
              </h2>
              <p className="text-lg leading-relaxed text-text-muted">
                {journey.description}
              </p>
              <div className="rounded-3xl border border-white/60 bg-white/90 p-6 shadow-soft">
                <p className="text-sm font-semibold text-secondary">
                  {journey.noteTitle}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-text-muted">
                  {journey.noteDescription}
                </p>
              </div>
            </m.div>
            <div className="space-y-4">
              {journey.items.map((item, index) => (
                <m.div
                  key={item.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="grid gap-4 rounded-3xl border border-white/60 bg-white/85 p-6 shadow-soft sm:grid-cols-[auto,1fr] sm:items-center"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary/10 text-2xl">
                      {item.icon}
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-secondary">
                        {item.time} WIB
                      </p>
                      <p className="text-lg font-semibold text-text">
                        {item.title}
                      </p>
                    </div>
                  </div>
                  <p className="text-sm leading-relaxed text-text-muted sm:pl-4">
                    {item.description}
                  </p>
                </m.div>
              ))}
            </div>
          </div>
        </section>

        <TestimonialList content={testimonials} />

        <section id="faq" className="relative py-20">
          <div className="container grid gap-12 lg:grid-cols-[0.9fr,1fr] lg:items-start">
            <m.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
                {faqs.eyebrow}
              </span>
              <h2 className="text-3xl font-bold leading-tight text-text sm:text-4xl">
                {faqs.title}
              </h2>
              <p className="text-lg leading-relaxed text-text-muted">
                {faqs.description}
              </p>
              <CTAButton
                label={faqs.cta.label}
                className="w-full sm:w-auto"
                message={faqs.cta.message}
              />
            </m.div>
            <div className="space-y-4">
              {faqs.items.map((faq, index) => (
                <m.div
                  key={faq.question}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.55, delay: index * 0.08 }}
                  className="card border-white/70 bg-white/90 p-6 text-left shadow-soft"
                >
                  <p className="text-base font-semibold text-text">
                    {faq.question}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-text-muted">
                    {faq.answer}
                  </p>
                </m.div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative pb-36 pt-6">
          <div className="container">
            <m.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6 }}
              className="card flex flex-col gap-6 overflow-hidden border-white/70 bg-gradient-to-br from-secondary/10 via-white to-primary/10 p-10 text-center md:flex-row md:items-center md:justify-between md:text-left"
            >
              <div className="max-w-xl space-y-3">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-secondary">
                  {closing.eyebrow}
                </span>
                <h2 className="text-3xl font-semibold text-text sm:text-4xl">
                  {closing.title}
                </h2>
                <p className="text-sm leading-relaxed text-text-muted">
                  {closing.description}
                </p>
              </div>
              <div className="flex flex-col gap-3 md:flex-row md:items-center">
                <CTAButton
                  label={closing.primaryAction.label}
                  className="w-full md:w-auto"
                  message={closing.primaryAction.message}
                />
                <a
                  href={closing.secondaryAction.href}
                  className="btn-outline w-full md:w-auto"
                >
                  {closing.secondaryAction.label}
                </a>
              </div>
            </m.div>
          </div>
        </section>

        <StickyActions />
      </>
    </LazyMotion>
  );
}
