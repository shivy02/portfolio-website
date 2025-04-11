"use client";
import Image from "next/image";
import profilePic from "@/images/profile-bw.jpg"
import profilePicHover from "@/images/profile-color.jpg"
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { Meteors} from "@/components/magicui/meteors"
import { BlurFade } from "@/components/magicui/blur-fade";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import { IconMail, IconBrandLinkedin, IconBrandGithub } from "@tabler/icons-react"
import { useState } from "react";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"


export default function Hero() {

    const [wiggleIcon, setWiggleIcon] = useState<string | null>(null);

    const handleIconClick = (iconName: string) => {
        setWiggleIcon(iconName);
        setTimeout(() => setWiggleIcon(null), 600);
    };

    const handleShimmerButtonClick = () => {
        handleIconClick("mail");
    }
    return (
        <div className=" pt-32 pb-22 sm:pt-64 sm:pb-32 relative flex h-full w-full max-w-4xl items-center justify-center overflow-hidden">
            <TooltipProvider>
                <BlurFade delay={0.25} inView>
                    <div className="relative z-1 flex-col">
                        <div className="relative flex flex-col items-center justify-center">
                            <Meteors number={25} angle={130} />
                            <BackgroundGradient className="h-18 w-18 sm:w-22 sm:h-22 ">
                                <Image
                                    src={profilePic}
                                    alt="Profile Picture"
                                    className="absolute rounded-full transition-opacity duration-200 opacity-100 group-hover:opacity-0"
                                />
                                <Image
                                    src={profilePicHover}
                                    alt="Profile Picture Hover"
                                    className="absolute rounded-full transition-opacity duration-200 opacity-0 group-hover:opacity-100"
                                />
                            </BackgroundGradient>
                            <ShimmerButton onClick={handleShimmerButtonClick} className="z-10 my-6">
                                <div className="relative flex items-center justify-center">
                                    <div className="absolute h-1.5 w-1.5 rounded-full border-1 border-green-600/80 bg-green-500 animate-ping mr-2"></div>
                                    <div className="relative h-1.5 w-1.5 rounded-full border-1 border-green-600/80 bg-green-500 animate-pulse mr-2"></div>
                                </div>
                                <span className="whitespace-pre-wrap text-center font-medium leading-none tracking-tight text-zinc-600 dark:text-zinc-300 text-xs sm:text-sm">
                                    Available for work
                                </span>
                            </ShimmerButton>
                        </div>
                        <div className="w-full space-y-2">
                            <BlurFade delay={0.25 * 1} inView>
                                <p className="z-50 subpixel-antialiased bg-gradient-to-b from-zinc-200 dark:from-zinc-50 to-zinc-700 dark:to-zinc-400 bg-clip-text space-y-2 text-5xl sm:text-7xl font-bold text-transparent text-center whitespace-nowrap">
                                    Hi. I&#39;m Shivam
                                </p>
                                <p className="text-sm subpixel-antialiased font-medium sm:text-xl text-center text-zinc-500 dark:text-zinc-300">
                                    A Full-Stack Developer who likes building things!
                                </p>
                            </BlurFade>
                            <BlurFade delay={0.25 * 2} direction="up"inView>
                                <div className="flex flex-row items-center justify-center space-x-6 my-8">
                                    <Tooltip>
                                        <TooltipTrigger>
                                            <IconMail
                                                className={`text-zinc-500 dark:text-zinc-200 ${wiggleIcon === "mail" ? "animate-wiggle scale-150 transition-transform duration-200" : ""
                                                    } hover:scale-130 hover:animate-wiggle transition-transform duration-300`}
                                                onClick={() => handleIconClick("mail")}
                                            />
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            Email
                                        </TooltipContent>
                                    </Tooltip>
                                    <Tooltip>
                                        <TooltipTrigger>
                                            <IconBrandLinkedin
                                                className={`text-zinc-500 dark:text-zinc-200 ${wiggleIcon === "linkedin" ? "animate-wiggle scale-150 transition-transform duration-200" : ""
                                                    } hover:scale-130 hover:animate-wiggle transition-transform duration-300`}
                                                onClick={() => handleIconClick("linkedin")}
                                            />
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            LinkedIn
                                        </TooltipContent>
                                    </Tooltip>
                                    <Tooltip>
                                        <TooltipTrigger>
                                            <IconBrandGithub
                                                className={`text-zinc-500 dark:text-zinc-200 ${wiggleIcon === "github" ? "animate-wiggle scale-150 transition-transform duration-200" : ""
                                                    } hover:scale-130 hover:animate-wiggle transition-transform duration-300`}
                                                onClick={() => handleIconClick("github")}
                                            />
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            Github
                                        </TooltipContent>
                                    </Tooltip>
                                </div>
                            </BlurFade>
                        </div>
                    </div>
                </BlurFade>
            </TooltipProvider>
        </div>
    );
}