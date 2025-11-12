"use client";

import React from "react";

interface SoundWaveProps {
  className?: string;
  color?: string;
}

/**
 * Animated sound wave component with 6 vertical bars
 * Each bar animates independently for a smooth wave effect
 */
export const SoundWave = ({ className = "", color = "currentColor" }: SoundWaveProps) => {
  const bars = [
    { delay: "0ms", duration: "0.8s" },
    { delay: "0.1s", duration: "0.9s" },
    { delay: "0.2s", duration: "0.85s" },
    { delay: "0.15s", duration: "0.95s" },
    { delay: "0.05s", duration: "0.88s" },
    { delay: "0.25s", duration: "0.92s" },
  ];

  return (
    <div className={`flex items-center justify-center gap-[2px] ${className}`}>
      {bars.map((bar, index) => (
        <div
          key={index}
          className="w-[3px] h-full rounded-full animate-sound-wave"
          style={{
            backgroundColor: color,
            animationDelay: bar.delay,
            animationDuration: bar.duration,
          }}
        />
      ))}
    </div>
  );
};
