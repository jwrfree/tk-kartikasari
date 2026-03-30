"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "react-bootstrap-icons";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { DynamicIcon } from "@/components/DynamicIcon";

type TimelineStep = {
  key: string;
  title: string;
  description: string;
  icon: string;
  href: string;
  linkLabel: string;
};

type TimelineStepsProps = {
  steps: readonly TimelineStep[];
  className?: string;
};

export default function TimelineSteps({ steps, className }: TimelineStepsProps) {
  const itemRefs = useRef<(HTMLLIElement | null)[]>([]);
  const [visibleSteps, setVisibleSteps] = useState<number[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = itemRefs.current.findIndex((element) => element === entry.target);
          if (entry.isIntersecting && index !== -1) {
            setVisibleSteps((current) =>
              current.includes(index) ? current : [...current, index],
            );
          }
        });
      },
      { threshold: 0.3, rootMargin: "-20% 0px -20%" },
    );

    itemRefs.current.forEach((element) => {
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [steps.length]);

  return (
    <ol className={cn("relative grid gap-6 lg:grid-cols-2", className)}>
      <div
        className="pointer-events-none absolute inset-0 hidden bg-gradient-to-b from-transparent via-white/30 to-transparent lg:block"
        aria-hidden="true"
      />
      {steps.map((step, index) => (
        <li
          key={step.key}
          ref={(element) => {
            itemRefs.current[index] = element;
          }}
          className={cn(
            "group relative flex h-full transform-gpu flex-col gap-6 overflow-hidden rounded-[2rem] border border-white/60 bg-white/50 p-8 shadow-soft backdrop-blur-xl transition-all duration-500 ease-out hover:-translate-y-1 hover:bg-white/60 hover:shadow-premium ring-1 ring-black/5",
            visibleSteps.includes(index)
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0",
          )}
          style={{ transitionDelay: visibleSteps.includes(index) ? `${index * 0.05}s` : undefined }}
        >
          <div className="flex items-center justify-between gap-4">
            <Badge
              tone="surface"
              size="sm"
              className="font-bold border-primary/20 text-primary"
              leadingVisual={<span className="h-1.5 w-1.5 rounded-full bg-primary" />}
            >
              Langkah {index + 1}
            </Badge>
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 shadow-inner group-hover:bg-primary group-hover:text-white transition-all duration-300">
              <DynamicIcon name={step.icon} className="h-6 w-6" />
            </span>
          </div>
          <div className="space-y-3">
            <h3 className="font-sans text-xl font-bold text-foreground sm:text-2xl">{step.title}</h3>
            <p className="text-base leading-relaxed text-foreground/60">{step.description}</p>
          </div>
          <div className="mt-8 flex items-center">
            <Link 
              href={step.href} 
              className="inline-flex items-center gap-2 text-sm font-bold text-primary group/link"
            >
              <span className="border-b border-primary/30 group-hover/link:border-primary transition-colors">{step.linkLabel}</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" aria-hidden="true" />
            </Link>
          </div>
        </li>
      ))}
    </ol>
  );
}
