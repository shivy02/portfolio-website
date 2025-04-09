"use client";
import React, { JSX, useState, useEffect} from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "motion/react";
import { cn } from "@/lib/utils";
// import Link from "next/link";
// import Image from "next/image";
import { ModeToggle } from "../theme-toggle";
import { useTheme } from "next-themes";
import { AnimatedLogo } from "./logo-animation"
import { useRouter } from "next/navigation"; 


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
  const {scrollY } = useScroll();
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
            "flex max-w-4xl w-full justify-self-center border-border/10 shadow-xs backdrop-blur-lg fixed top-0 sm:top-4 inset-x-0 mx-auto md:rounded-lg dark:bg-background/10 sm:dark:bg-background/20 bg-white/30 z-[5000] pr-4 pl-6 py-4 items-center justify-between",
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
          <div className="flex space-x-6 ml-auto mr-4">
          {navItems.map((navItem, idx) => (
            <button
              key={`link=${idx}`}
              onClick={() => handleScroll(navItem.link)} // Call handleScroll with the section `id`
              className={cn(
                "relative font-medium dark:text-neutral-400 items-center flex space-x-1 text-neutral-500 dark:hover:text-neutral-50 hover:text-neutral-950 transition-colors duration-300"
              )}
            >
              <span className="block sm:hidden">{navItem.icon}</span>
              <span className="hidden sm:block text-sm">{navItem.name}</span>
            </button>
          ))}
             <ModeToggle />
          </div>
  
          <div className="flex items-center">
            {/* <button className="border text-xs md:text-sm font-medium relative border-gray-300 dark:border-white/[0.2] text-black dark:text-white px-2 py-1 mr-2 rounded-lg">
              <span className="text-neutral-500 dark:text-neutral-300">Contact Me</span>
              <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-purple-500 to-transparent h-px" />
            </button> */}
            {/* <ModeToggle /> */}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};