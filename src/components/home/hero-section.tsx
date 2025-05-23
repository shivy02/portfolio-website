"use client";
import Image from "next/image";
import profilePic from "@/images/profile-bw.jpg"
import profilePicHover from "@/images/profile-color.jpg"
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { Meteors } from "@/components/magicui/meteors"
import { BlurFade } from "@/components/magicui/blur-fade";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import React, { useState } from "react";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import { contactLinks } from "@/data/data";


export default function Hero() {

    const [wiggleIcon, setWiggleIcon] = useState<string | null>(null);

    const handleIconClick = (iconName: string) => {
        setWiggleIcon(iconName);
        setTimeout(() => setWiggleIcon(null), 600);
    };

    const handleShimmerButtonClick = () => {
        handleIconClick("email");
    }
    return (
        <div className="pt-32 pb-16 sm:pt-56 relative flex items-center justify-center overflow-hidden">
            <TooltipProvider>
                <BlurFade delay={0.25} inView>
                    <div className="relative flex-col space-y-6">
                        <div className="relative flex flex-col items-center justify-center">
                            <Meteors number={20} angle={130} />
                            <BackgroundGradient className="z-50 h-16 w-16 sm:w-20 sm:h-20 ">
                                <Image
                                    src={profilePic}
                                    alt="Profile Picture"
                                    className="absolute z-50 rounded-full transition-opacity duration-200 opacity-100 group-hover:opacity-0"
                                />
                                <Image
                                    src={profilePicHover}
                                    alt="Profile Picture Hover"
                                    className="absolute z-50 rounded-full transition-opacity duration-200 opacity-0 group-hover:opacity-100"
                                />
                            </BackgroundGradient>
                        </div>
                        <div className="w-full space-y-8">
                            <BlurFade delay={0.25 * 1} inView>
                                <p className="z-50 subpixel-antialiased leading-snug bg-gradient-to-b from-zinc-200 dark:from-zinc-50 to-zinc-950 dark:to-zinc-300 bg-clip-text text-5xl sm:text-7xl font-bold text-transparent text-center whitespace-nowrap">
                                    Hi. I&#39;m Shivam
                                </p>
                                <p className="text-sm subpixel-antialiased font-medium sm:text-lg text-center text-secondary-foreground">
                                    A Software Engineer who likes building things!
                                </p>
                            </BlurFade>
                            <BlurFade delay={0.25 * 2} direction="down" inView>
                                <div className="z-1 space-y-6 flex flex-col items-center justify-center">
                                    <ShimmerButton onClick={handleShimmerButtonClick} className="z-50">
                                        <div className="z-50 relative flex items-center justify-center">
                                            <div className="absolute h-1.5 w-1.5 rounded-full border-1 border-green-600/80 bg-green-500 animate-ping mr-1.5"></div>
                                            <div className="relative h-1 w-1 rounded-full border-1 border-green-600/80 bg-green-500 animate-pulse mr-1.5"></div>
                                        </div>
                                        <span className="whitespace-pre-wrap text-center font-semibold leading-none text-muted-foreground text-[10px] sm:text-xs py-[0.5]">
                                            Available
                                        </span>
                                    </ShimmerButton >
                                    <ContactIcons wiggleIcon={wiggleIcon} handleIconClick={handleIconClick} />
                                </div>
                            </BlurFade>
                        </div>
                    </div>
                </BlurFade>
            </TooltipProvider>
        </div>
    );
}

const iconClass = (label: string, wiggleIcon: string | null) =>
    `text-secondary-foreground ${wiggleIcon === label.toLowerCase()
        ? "animate-wiggle scale-150 transition-transform duration-200"
        : ""
    } hover:scale-130 hover:animate-wiggle transition-transform duration-300`;

// const filteredLinks = contactLinks.filter(link => link.label !== "Instagram");

function ContactIcons({
    wiggleIcon,
    handleIconClick,
}: {
    wiggleIcon: string | null;
    handleIconClick: (label: string) => void;
}) {
    return (
        <div className="flex flex-row items-center justify-center space-x-6">
            {contactLinks
                .filter(link => link.label !== "Instagram")
                .map(link => (
                    <Tooltip key={link.label}>
                        <TooltipTrigger asChild>
                            <a
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={link.aria}
                                onClick={() => handleIconClick(link.label.toLowerCase())}
                            >
                                {React.cloneElement(link.icon, {
                                    className: iconClass(link.label, wiggleIcon),
                                })}
                            </a>
                        </TooltipTrigger>
                        <TooltipContent>{link.label}</TooltipContent>
                    </Tooltip>
                ))}
        </div>
    );
}