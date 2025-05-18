import React from "react";

interface SectionHeadingProps {
  icon: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

export function SectionHeading({ icon, children, className = "" }: SectionHeadingProps) {
  return (
    <div className={`flex items-center justify-center mb-8 ${className}`}>
      <span className="mr-2">{icon}</span>
      <span className="text-xl font-bold text-secondary-foreground">{children}</span>
    </div>
  );
}