"use client";

import { Button } from "@/components/ui/button";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      type="button"
      size="icon"
      className="px-0 py-0 hover:bg-blend-screen rounded-lg"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
      <SunIcon className="h-[1.0rem] w-[1.0rem] text-neutral-500 dark:hidden bg- dark:text-neutral-200" />
      <MoonIcon className="hidden h-[1.2rem] w-[1.2rem] text-neutral-800 dark:block dark:text-neutral-200" />
    </Button>
  );
}