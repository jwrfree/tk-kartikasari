"use client";

import { createContext, useContext, useMemo } from "react";

import type { CTAButtonConfig, NavItem, SiteSettings } from "@/lib/types/site";

type SiteDataContextValue = {
  siteSettings: SiteSettings;
  navigation: NavItem[];
  ctas: Record<string, CTAButtonConfig>;
};

const SiteDataContext = createContext<SiteDataContextValue | null>(null);

interface SiteDataProviderProps {
  siteSettings: SiteSettings;
  navigation: NavItem[];
  ctas: CTAButtonConfig[];
  children: React.ReactNode;
}

export function SiteDataProvider({ siteSettings, navigation, ctas, children }: SiteDataProviderProps) {
  const value = useMemo<SiteDataContextValue>(() => {
    const record = ctas.reduce<Record<string, CTAButtonConfig>>((acc, cta) => {
      acc[cta.key] = cta;
      return acc;
    }, {});

    return {
      siteSettings,
      navigation,
      ctas: record,
    };
  }, [siteSettings, navigation, ctas]);

  return <SiteDataContext.Provider value={value}>{children}</SiteDataContext.Provider>;
}

export function useSiteData() {
  const context = useContext(SiteDataContext);
  if (!context) {
    throw new Error("useSiteData must be used within a SiteDataProvider");
  }
  return context;
}

export function useCTAButton(key: string) {
  const { ctas } = useSiteData();
  return ctas[key];
}
