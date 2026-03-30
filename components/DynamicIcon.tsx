"use client";

import React from "react";
import * as LucideIcons from "lucide-react";
import { LucideProps } from "lucide-react";

interface DynamicIconProps extends LucideProps {
  name: string;
}

export const DynamicIcon = ({ name, className, ...props }: DynamicIconProps) => {
  // Check if it's an emoji (roughly: contains non-ASCII characters or is a known emoji range)
  const isEmoji = /(\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff])/.test(name);

  if (isEmoji) {
    return <span className={className}>{name}</span>;
  }

  // Otherwise treat as Lucide icon name
  const IconComponent = (LucideIcons as any)[name];

  if (!IconComponent) {
    // Fallback if icon not found
    return <LucideIcons.HelpCircle className={className} {...props} />;
  }

  return <IconComponent className={className} {...props} />;
};
