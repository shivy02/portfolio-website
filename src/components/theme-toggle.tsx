"use client";

// import { Button } from "@/components/ui/button";
import { IconMoonStars, IconSun } from "@tabler/icons-react";
import { useTheme } from "next-themes";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex relative items-center mr-4">
      {/* Sun Icon for Light Mode */}
      <IconSun
        onClick={() =>  setTheme(theme === "dark" ? "light" : "dark")}
        className="absolute cursor-pointer h-5 w-5 text-neutral-500 dark:text-neutral-300 dark:hidden hover:text-neutral-950 animate-wiggle hover:animate-wiggle transition-colors duration-300"
        aria-label="Switch to Light Mode"
      />

      {/* Moon Icon for Dark Mode */}
      <IconMoonStars
        onClick={() =>  setTheme(theme === "dark" ? "light" : "dark")}
        className="absolute cursor-pointer h-5 w-5 hidden text-neutral-500 dark:block dark:text-neutral-300 hover:text-neutral-50 animate-wiggle hover:animate-wiggle transition-colors duration-300"
        aria-label="Switch to Dark Mode"
      />
    </div>
  );
}