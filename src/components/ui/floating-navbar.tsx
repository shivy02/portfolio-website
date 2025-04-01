"use client";
import React, { JSX, useState, useEffect} from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "motion/react";
import { cn } from "@/lib/utils";
import Link from "next/link";
// import Image from "next/image";
import { ModeToggle } from "../mode-toggle";
import { useTheme } from "next-themes";
import { AnimatedLogo } from "./logo-animation"

export const FloatingNav = ({
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
  // const logoSrc = resolvedTheme === "dark" ? "/logo-dark.svg" : "/logo-light.svg";
  const {scrollY } = useScroll();
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    setMounted(true);
  }, []);

  useMotionValueEvent(scrollY, "change", (current) => {
    
    // Check if current is not undefined and is a number
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
            "flex max-w-4xl w-full justify-self-center backdrop-blur-lg fixed top-4 inset-x-0 mx-auto dark:border-white/[0.2] md:rounded-lg dark:bg-background/50 bg-white/50 z-[5000] pr-4 pl-6 py-2 items-center justify-between",
            className
          )}
          
        >
          {/* Logo on the left */}
          <div className="flex items-center mr-16">
          {mounted && (
              <AnimatedLogo
              theme={resolvedTheme === "dark" ? "dark" : "light"}
              className="w-6 h-6 sm:w-7 sm:h-7"
            />
            )}
          </div>
  
          {/* Links in the center */}
          <div className="flex space-x-6 ml-auto mr-4">
            {navItems.map(
              (
                navItem: { name: string; link: string; icon?: JSX.Element },
                idx: number
              ) => (
                <Link
                  key={`link=${idx}`}
                  href={navItem.link}
                  className={cn(
                    "relative font-semibold dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500"
                  )}
                >
                  <span className="block sm:hidden">{navItem.icon}</span>
                  <span className="hidden sm:block text-sm">{navItem.name}</span>
                </Link>
              )
            )}
          </div>
  
          {/* Contact button on the right */}
          <div className="flex items-center">
            <button className="border text-xs md:text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-4 py-2 mr-2 rounded-md">
              <span>Contact Me</span>
              <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-purple-500 to-transparent h-px" />
            </button>
            <ModeToggle/>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};