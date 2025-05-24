"use client";

import React, { useState, useEffect, useMemo } from "react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { IconLayoutDashboard, IconTool, IconLink, IconCoffee, IconClockHour4, IconMapPin, IconBrandSpotify, IconHeart } from "@tabler/icons-react";
import { Globe } from "@/components/magicui/globe";
import styles from "./dashboard.module.css";
import { SectionHeading } from "../layout/section-heading";
import { NumberTicker } from "@/components/magicui/number-ticker";
import { contactLinks } from "@/data/data";
import { Marquee } from "@/components/magicui/marquee";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import Image from "next/image";
import { toolsData } from "@/data/data";
import { useTheme } from "next-themes";


export default function Dashboard() {

  const dashboardIconClass = "h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-primary";

  return (
    <div className="flex flex-col w-full">
      <SectionHeading icon={<IconLayoutDashboard className="h-5 w-5 text-secondary-foreground" />}>
        Dashboard
      </SectionHeading>
      <ul
        className={`grid w-full gap-4 ${styles.dashboardGrid}`}>
        <GridItem
          area="location"
          icon={<IconMapPin className={dashboardIconClass} />}
          title="Greater Boston, MA"
        >
          <Globe />
        </GridItem>
        <GridItem
          area="spotify"
          icon={<IconBrandSpotify className={dashboardIconClass} />}
          title="Last Played"
        >
        </GridItem>
        <GridItem
          area="favorite"
          icon={<IconHeart className={dashboardIconClass} />}
          title="Favorite Language"
        >
        </GridItem>
        <GridItem
          area="tools"
          icon={<IconTool className={dashboardIconClass} />}
          title="Tools"
        >
          <ToolsMarquee />
        </GridItem>
        <GridItem
          area="contact"
          icon={<IconLink className={dashboardIconClass} />}
          title="Connect"
        >
          <ContactMe />
        </GridItem>
        <GridItem
          area="hours"
          icon={<IconClockHour4 className={dashboardIconClass} />}
          title="Hours Coding"
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
  children: React.ReactNode;
}

const GridItem = ({ area, icon, title, children }: GridItemProps) => {
  return (
    <li
      className="min-h-[2rem] w-full list-none transition-all"
      style={{ gridArea: area }}
    >
      <div className="relative mx-auto h-full rounded-xl border p-2 md:rounded-2xl md:p-2">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />
        <div className="relative flex h-full flex-col justify-between gap-4 overflow-hidden rounded-lg border-0.75 p-4 shadow-[0px_0px_12px_0px_#ebecf0] dark:shadow-[0px_0px_27px_0px_#2D2D2D] bg-background transition-all duration-400">
          <div className="relative flex flex-row items-center gap-2 sm:gap-3">
            <div className="pt-0">
              {icon}
            </div>
            <div className="space-y-2">
              <h3 className="pt-0.5 text-xs md:text-base text-start font-semibold text-black dark:text-white">
                {title}
              </h3>
            </div>
          </div>
          <div >
            {children}
          </div>
        </div>
      </div>
    </li>
  );
};

const ContactMe = () => {
  return (
    <div className="flex flex-col gap-4 p-4">
      {contactLinks.map(({ href, label, icon, aria }) => (
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
              "h-5 w-5 text-muted-foreground transition-all group-hover:h-6 group-hover:w-6 group-hover:text-primary",
          })}
          <span className="text-muted-foreground transition-all group-hover:text-primary group-hover:font-bold">
            {label}
          </span>
        </a>
      ))}
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
              loading="lazy"
            />
          </div>
        </TooltipTrigger>
        <TooltipContent>
          <p className="text-sm font-semibold text-muted-foreground">{name}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

const ToolsMarquee = () => {
  const { theme, resolvedTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  const processedToolsData = useMemo(() => {
    return toolsData.map(({ name, icon, themeDependent }) => ({
      name,
      icon: `/tools/${icon}${themeDependent && (theme || resolvedTheme) === "dark" ? "-dark" : ""}.svg`,
    }));
  }, [theme, resolvedTheme]);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="relative overflow-hidden">
      {/* Fading effect */}
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