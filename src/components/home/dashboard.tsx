
"use client";
import React, { useState, useEffect} from "react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { IconLayoutDashboard, IconTool, IconLink, IconCoffee, IconClockHour4, IconMapPin, IconBrandSpotify, IconHeart, IconHandClick} from "@tabler/icons-react";
import { Globe } from "@/components/ui/globe";
import styles from "./dashboard.module.css";
import { SectionHeading, headingIconClass } from "../layout/section-heading";
import { NumberTicker } from "@/components/ui/number-ticker";
// import { contactLinks } from "@/data/data";
import { Marquee } from "@/components/ui/marquee";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import Image from "next/image";
import { data } from "@/data/data";
import { useTheme } from "next-themes";
import { ScratchToReveal } from "../magicui/scratch-to-reveal";


export default function Dashboard() {

  const dashboardIconClass = "h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-primary";

  return (
    <div className="flex flex-col w-full">
      {/* <SectionHeading icon={<IconLayoutDashboard className={headingIconClass} />}>
        About Me
      </SectionHeading> */}
      <ul
        className={`grid w-full gap-4 ${styles.dashboardGrid}`}>
        <GridItem
          area="location"
          icon={<IconMapPin className={dashboardIconClass} />}
          title="Greater Boston, MA"
          transitionDuration="100ms" // Add unique transition duration
        >
          <Globe />
        </GridItem>
        <GridItem
          area="spotify"
          icon={<IconBrandSpotify className={dashboardIconClass} />}
          title="Last Played"
          transitionDuration="200ms" // Add unique transition duration
        >
          <LastPlayed />
        </GridItem>
        <GridItem
          area="favorite"
          icon={<IconHeart className={dashboardIconClass} />}
          title="Fav Framework"
          transitionDuration="300ms" // Add unique transition duration
        >
          <FavoriteLanguage />
        </GridItem>
        <GridItem
          area="tools"
          icon={<IconTool className={dashboardIconClass} />}
          title="Tools"
          transitionDuration="400ms" // Add unique transition duration
        >
          <ToolsMarquee />
        </GridItem>
        <GridItem
          area="contact"
          icon={<IconLink className={dashboardIconClass} />}
          title="Connect"
          transitionDuration="500ms" // Add unique transition duration
        >
          <ContactMe />
        </GridItem>
        <GridItem
          area="scratch"
          icon={<IconHandClick className={dashboardIconClass} />}
          title="Scratch Me"
          transitionDuration="600ms" // Add unique transition duration
        >
          <ScratchToReveal
            minScratchPercentage={20}
            className="flex items-center h-35 justify-center overflow-hidden rounded-md bg-background"
            gradientColors={["#A97CF9E6", "#F38CB9E6", "#FDCC92E6"]}
          >
            <Image
        src="/dogs.svg"
        alt="Next.js Icon"
        width={100}
        height={100}
        className="h-40 w-40 sm:h-42 sm:w-42"
      />
            {/* <p className="flex items-center gap-2">
              <span className="text-5xl">👋</span>
              <span className="text-7xl">😎</span>
            </p>           */}
          </ScratchToReveal>
        </GridItem>
        <GridItem
          area="hours"
          icon={<IconClockHour4 className={dashboardIconClass} />}
          title="Hours Coding"
          transitionDuration="800ms" // Add unique transition duration
        >
          <NumberTicker
            value={5223}
            className="whitespace-pre-wrap text-3xl font-semibold tracking-tighter text-muted-foreground"
          />
        </GridItem>
        <GridItem
          area="coffees"
          icon={<IconCoffee className={dashboardIconClass} />}
          title="Coffees Drank"
          transitionDuration="700ms" // Add unique transition duration
        >
          <NumberTicker
            value={1134}
            className="whitespace-pre-wrap text-3xl font-semibold tracking-tighter text-muted-foreground"
          />
        </GridItem>
      </ul>
    </div>
  );
}

interface GridItemProps {
  area: string;
  icon: React.ReactNode;
  title: string;
  children?: React.ReactNode;
  transitionDuration?: string; // Add transitionDuration prop
}

const GridItem = ({ area, icon, title, children, transitionDuration = "300ms" }: GridItemProps) => {
  return (
    <li
      className="min-h-[2rem] w-full list-none transition-all"
      style={{
        gridArea: area,
        transitionDuration, // Apply the transition duration dynamically
      }}
    >
      <div className="relative mx-auto h-full rounded-xl border p-2 md:rounded-2xl md:p-2">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />
        <div
          className="relative flex h-full flex-col justify-between gap-2 overflow-hidden rounded-lg border-0.75 p-4 shadow-[0px_0px_12px_0px_#ebecf0] dark:shadow-[0px_0px_27px_0px_#2D2D2D] bg-background transition-all"
          style={{
            transitionDuration, // Apply the transition duration dynamically
          }}
        >
          <div className="relative flex flex-row items-center gap-2 sm:gap-3">
            <div className="pt-0">{icon}</div>
            <div className="space-y-2">
              <h3 className="text-sm sm:text-md md:text-base tracking-tight text-start font-semibold text-black dark:text-white">
                {title}
              </h3>
            </div>
          </div>
          <div>{children}</div>
        </div>
      </div>
    </li>
  );
};

const ContactMe = () => {
  return (
    <div className="flex flex-col gap-4 sm:p-4">
      {data.contact.map(({ href, label, icon, aria }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={aria}
          className="flex items-center gap-2 group"
        >
          {React.cloneElement(icon, {
            className:
              "h-5 w-5 text-muted-foreground transition-all group-hover:animate-wiggle group-hover:h-6 group-hover:w-6 group-hover:text-primary",
          })}
          <span className="text-muted-foreground transition-all group-hover:text-primary group-hover:font-bold">
            {label}
          </span>
        </a>
      ))}
    </div>
  );
};
const LastPlayed = () => {
  return (
    <div className="flex flex-row items-center gap-2 w-full overflow-hidden">
      <Image
        src="/album-cover.jpeg"
        alt="Last Played Song"
        width={48}
        height={48}
        className="rounded-md shadow-lg sm:h-10 sm:w-10 h-8 w-8"
      />
      <div className="flex-1 min-w-0 max-w-full overflow-hidden">
        <Marquee className="[--duration:10s]" pauseOnHover>
          <p className="text-sm text-foreground whitespace-nowrap ml-[-8px]">
          • U.N.I • <span className="text-muted-foreground">NAV • OMW2 REXDALE </span>
          </p>
        </Marquee>
      </div>
    </div>
  );
};

const Tool = ({ name, icon }: { name: string; icon: string }) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <div className="flex items-center">
            <Image
              src={`${icon}`}
              alt={`${name} icon`}
              width={30}
              height={30}
              className="h-8 w-8"
              loading="eager"
              
            />
          </div>
        </TooltipTrigger>
        <TooltipContent sideOffset={5}>
          <p className="text-sm font-semibold text-muted-foreground">{name}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

const ToolsMarquee = () => {
  const { theme, resolvedTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true); // Ensure this component only renders after the client has mounted
  }, []);

  if (!isMounted) {
    return null; // Avoid rendering anything on the server
  }

  const currentTheme = theme || resolvedTheme || "dark"; // Default to "light" during SSR

  // Process tools data based on the current theme
  const processedToolsData = data.tools.map(({ name, icon, themeDependent }) => ({
    name, 
    icon: `/tools/${icon}${themeDependent && currentTheme === "dark" ? "-dark" : ""}.svg`,
  }));
  return (
    <div className="relative overflow-hidden">
      <div className="fade-mask-left transition-all duration-400" />
      <div className="fade-mask-right transition-all duration-400" />
      <Marquee pauseOnHover className="[--duration:20s]">
        <div className="flex items-center gap-6">
          {processedToolsData.map(({ name, icon }) => (
            <Tool key={name} name={name} icon={icon} />
          ))}
        </div>
      </Marquee>
    </div>
  );
};


const FavoriteLanguage = () => {
  const { theme, resolvedTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true); // Ensure this component only renders after the client has mounted
  }, []);

  if (!isMounted) {
    return null; // Avoid rendering anything on the server
  }

  const currentTheme = theme || resolvedTheme || "light"; // Default to "light" during SSR

  const iconPath =
    currentTheme === "dark" ? "/tools/nextjs-dark.svg" : "/tools/nextjs.svg";

  return (
    <div className="flex items-center justify-start h-full">
      <Image
        src={iconPath}
        alt="Next.js Icon"
        width={24}
        height={24}
        className="h-6 w-6 sm:h-8 sm:w-8"
      />
      <span className="ml-2 sm:ml-3 text-md sm:text-lg font-normal tracking-tight text-muted-foreground">
        Next JS
      </span>
    </div>
  );
};