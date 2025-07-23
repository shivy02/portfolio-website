"use client";
import React, { JSX, useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "motion/react";
import { cn } from "@/lib/utils";
import { ModeToggle } from "../theme-toggle";
import { useTheme } from "next-themes";
import { AnimatedLogo } from "../ui/logo-animation"
import { useRouter } from "next/navigation";
// import Link from "next/link";
// import Image from "next/image";


export const Navbar = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {

  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(true);
  const router = useRouter(); // Initialize useRouter


  useEffect(() => {
    setMounted(true);
  }, []);

  useMotionValueEvent(scrollY, "change", (current) => {

    if (typeof current === "number") {
      const previous = scrollY.getPrevious();
      const direction = previous !== undefined ? current - previous : 0;

      if (current < 50) {
        setVisible(true);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  const handleScroll = (id: string) => {
    const section = document.getElementById(id); // Find the section by its `id`
    if (section) {
      section.scrollIntoView({ behavior: "smooth" }); // Smooth scroll to the section
    }
  };

  const handleLogoClick = () => {
    router.push("/"); // Navigate to the home page
  };



  return (
    <AnimatePresence mode="wait">
      {visible && (
        <motion.div
          initial={{
            opacity: 1,
            y: -100,
          }}
          animate={{
            y: visible ? 0 : -100,
            opacity: visible ? 1 : 0,
          }}
          transition={{
            duration: 0.2,
          }}
          className={cn(
            "flex sm:max-w-5xl w-full justify-self-center backdrop-blur-lg fixed top-0 sm:top-4 inset-x-0 mx-auto md:rounded-lg sm:bg-none dark:bg-background/10 sm:dark:bg-background/20 bg-white/30 z-[5000] pr-4 pl-6 py-4 items-center justify-between",
            className
          )}

        >
          {/* Logo on the left */}
          <div className="flex items-center mr-16">
            {mounted && (
              <AnimatedLogo
                theme={resolvedTheme === "dark" ? "dark" : "light"}
                className="w-6 h-6 sm:w-7 sm:h-7"
                onClick={handleLogoClick}
              />
            )}
          </div>

          {/* Links in the center */}
          <div className="flex gap-6 ml-auto mr-4">
            {navItems.map((navItem, idx) => (
              <button
                key={`link=${idx}`}
                onClick={() => handleScroll(navItem.link)} // Call handleScroll with the section `id`
                className={cn(
                  "relative font-semibold text-muted-foreground items-center flex space-x-1 hover:text-primary transition-colors duration-300"
                )}
              >
                <span className="block sm:hidden">{navItem.icon}</span>
                <span className="hidden sm:block text-sm">{navItem.name}</span>
              </button>
            ))}
            <ModeToggle />
          </div>

          <div className="flex items-center">
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};