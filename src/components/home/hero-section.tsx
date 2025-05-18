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
        <div className="pt-32 pb-22 sm:pt-64 sm:pb-32 relative flex h-full w-full max-w-4xl items-center justify-center overflow-hidden">
            <TooltipProvider>
                <BlurFade delay={0.25} inView>
                    <div className="relative flex-col space-y-4">
                        <div className="relative flex flex-col items-center justify-center">
                            <Meteors number={25} angle={130} />
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
                                <p className="z-50 subpixel-antialiased leading-snug bg-gradient-to-b from-zinc-200 dark:from-zinc-50 to-zinc-900 dark:to-zinc-300 bg-clip-text text-5xl sm:text-7xl font-bold text-transparent text-center whitespace-nowrap">
                                    Hi. I&#39;m Shivam
                                </p>
                                <p className="text-sm subpixel-antialiased font-medium sm:text-lg text-center text-secondary-foreground">
                                    A Full-Stack Developer who likes building things!
                                </p>
                            </BlurFade>
                            <BlurFade delay={0.25 * 2} direction="up"inView>
                            <div className="z-1 space-y-6 flex flex-col items-center justify-center">
                            <ShimmerButton onClick={handleShimmerButtonClick} className="z-50">
                                <div className="z-50 relative flex items-center justify-center">
                                    <div className="absolute h-1.5 w-1.5 rounded-full border-1 border-green-600/80 bg-green-500 animate-ping mr-1.5"></div>
                                    <div className="relative h-1 w-1 rounded-full border-1 border-green-600/80 bg-green-500 animate-pulse mr-1.5"></div>
                                </div>
                                <span className="whitespace-pre-wrap text-center font-semibold leading-none text-zinc-500 dark:text-zinc-300 text-[10px] sm:text-xs py-[0.5]">
                                    Available
                                </span>
                            </ShimmerButton>
                                <div className="flex flex-row items-center justify-center space-x-6">
                                    <Tooltip>
                                        <TooltipTrigger>
                                            <IconMail
                                                className={`text-secondary-foreground ${wiggleIcon === "mail" ? "animate-wiggle scale-150 transition-transform duration-200" : ""
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
                                                className={`text-secondary-foreground ${wiggleIcon === "linkedin" ? "animate-wiggle scale-150 transition-transform duration-200" : ""
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
                                                className={`text-secondary-foreground ${wiggleIcon === "github" ? "animate-wiggle scale-150 transition-transform duration-200" : ""
                                                    } hover:scale-130 hover:animate-wiggle transition-transform duration-300`}
                                                onClick={() => handleIconClick("github")}
                                            />
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            Github
                                        </TooltipContent>
                                    </Tooltip>
                                </div>
                                </div>
                            </BlurFade>
                        </div>
                    </div>
                </BlurFade>
            </TooltipProvider>
        </div>
    );
}