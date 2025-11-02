import Image from "next/image";
import profilePic from "@/images/profile-bw.jpg"
import profilePicHover from "@/images/profile-color.jpg"
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { Meteors } from "@/components/ui/meteors"
import { BlurFade } from "@/components/ui/blur-fade";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import React, { useState } from "react";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import { data } from "@/data/data";


export default function Hero() {

    const [wiggleIcon, setWiggleIcon] = useState<string | null>(null);

    const { status, dotColor } = getStatus();

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
                <BlurFade delay={0.005} inView>
                    <div className="relative flex-col space-y-1">
                        <div className="relative flex flex-col items-center justify-center">
                            <Meteors number={30} angle={130} />
                            <BackgroundGradient className="z-50 h-16 w-16 sm:w-20 sm:h-20 md:w-24 md:h-24 ">
                                <Image
                                    src={profilePic}
                                    alt="Profile Picture"
                                    priority
                                    className="absolute rounded-full transition-opacity duration-200 opacity-100 group-hover:opacity-0"
                                />
                                <Image
                                    src={profilePicHover}
                                    alt="Profile Picture Hover"
                                    className="absolute rounded-full transition-opacity duration-200 opacity-0 group-hover:opacity-100"
                                />
                            </BackgroundGradient>
                            <ShimmerButton onClick={handleShimmerButtonClick} className="z-50 mt-8">
                                <div className="z-50 relative flex items-center justify-center">
                                    <div
                                        className={`absolute h-1.5 w-1.5 rounded-full border-1 ${dotColor === "green"
                                            ? "border-green-600/80 bg-green-500 animate-ping"
                                            : "border-orange-600/80 bg-orange-500 animate-ping"
                                            } mr-2`}
                                    ></div>
                                    <div
                                        className={`relative h-1 w-1 rounded-full border-1 ${dotColor === "green"
                                            ? "border-green-600/80 bg-green-500 animate-pulse"
                                            : "border-orange-600/80 bg-orange-500 animate-pulse"
                                            } mr-2`}
                                    ></div>
                                </div>
                                <span className="whitespace-pre-wrap text-center font-semibold leading-none text-muted-foreground text-xs sm:text-base py-[0.5]">
                                    {status}
                                </span>
                            </ShimmerButton>
                        </div>
                        <div className="w-full space-y-6">
                            <BlurFade delay={0.005 * 1} inView>
                                <p className="z-50 subpixel-antialiased leading-snug bg-gradient-to-b from-zinc-200 dark:from-zinc-50 to-zinc-950 dark:to-zinc-300 bg-clip-text text-5xl sm:text-7xl font-bold text-transparent text-center whitespace-nowrap">
                                    Hi. I&#39;m Shivam
                                </p>
                                <p className="text-base subpixel-antialiased tracking-tight font-medium sm:text-2xl text-center text-secondary-foreground">
                                    A Software Engineer who likes building things!
                                </p>
                            </BlurFade>
                            <BlurFade delay={0.005 * 2} direction="down" inView>
                                <div className="z-1 space-y-6 flex flex-col items-center justify-center">
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

const getStatus = () => {
    const now = new Date();
    const bostonTime = new Intl.DateTimeFormat("en-US", {
        timeZone: "America/New_York",
        hour: "numeric",
        hour12: false,
    }).format(now);

    const currentHour = parseInt(bostonTime, 10);

    if (currentHour >= 8 && currentHour < 22) {
        return { status: "Available", dotColor: "green" };
    } else {
        return { status: "Away", dotColor: "amber" };
    }
};


const iconClass = (label: string, wiggleIcon: string | null) =>
    `text-secondary-foreground ${wiggleIcon === label.toLowerCase()
        ? "animate-wiggle scale-150 transition-transform duration-200"
        : ""
    } hover:scale-130 hover:animate-wiggle transition-transform duration-300`;

function ContactIcons({
    wiggleIcon,
    handleIconClick,
}: {
    wiggleIcon: string | null;
    handleIconClick: (label: string) => void;
}) {
    return (
        <div className="flex flex-row items-center justify-center space-x-6">
            {data.contact
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
                        <TooltipContent side="bottom" >{link.label}</TooltipContent>
                    </Tooltip>
                ))}
        </div>
    );
}