"use client";

// import { Button } from "@/components/ui/button";
import { IconMoonStars, IconSun } from "@tabler/icons-react";
import { useTheme } from "next-themes";
import { useState } from "react";


export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const [isToggling, setIsToggling] = useState(false);

  const handleToggle = () => {
    setIsToggling(true);

    // Change the theme immediately
    setTheme(theme === "dark" ? "light" : "dark");

    // Reset the toggling state after the animation completes
    setTimeout(() => {
      setIsToggling(false);
    }, 500); // Match the animation duration
  };

  return (
    <div className="flex relative items-center mr-4">
      {/* Sun Icon for Light Mode */}
      <IconSun
        onClick={handleToggle}
        className={`absolute cursor-pointer h-5 w-5 text-zinc-500 dark:text-zinc-300 dark:hidden hover:text-zinc-950 transition-transform duration-500 ${
          isToggling ? "animate-spin-grow" : ""
        }`}
        aria-label="Switch to Light Mode"
      />

      {/* Moon Icon for Dark Mode */}
      <IconMoonStars
        onClick={handleToggle}
        className={`absolute cursor-pointer h-5 w-5 hidden text-zinc-500 dark:block dark:text-zinc-300 hover:text-zinc-50 transition-transform duration-500 ${
          isToggling ? "animate-spin-grow" : ""
        }`}
        aria-label="Switch to Dark Mode"
      />
    </div>
  );
}