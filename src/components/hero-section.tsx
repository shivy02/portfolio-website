"use client";
// import { cn } from "@/lib/utils";
import Image from "next/image";
import profilePic from "@/images/profile-bw.jpg"
import profilePicHover from "@/images/profile-color.jpg"
import { BackgroundGradient } from "./ui/background-gradient";
import { Meteors } from "./magicui/meteors"
import { ShimmerButton } from "./magicui/shimmer-button";


export default function Hero() {


    return (     
        <div className="relative flex h-[40rem] w-full items-center justify-center bg-white dark:bg-background overflow-hidden">

            {/* background grid */}
            {/* <div
                className={cn("absolute inset-0",
                    "[background-size:40px_40px]",
                    "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
                    "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
                )}
            /> */}

            {/* Radial gradient for the background container to give a faded look */}
            {/* <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_1%,black)] dark:bg-background"></div> */}

            {/* background circles */}
            {/* <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-3/4 w-150 h-200 bg-purple-400/40 rounded-full blur-3xl mixed-blend-multiply"></div>
            <div className="absolute top-0 left-[calc(50%-15rem)] transform -translate-x-1/2 -translate-y-4/5 w-100 h-100 bg-orange-300/40 rounded-full blur-3xl mixed-blend-multiply"></div>
            <div className="absolute top-0 left-[calc(50%+15rem)] transform -translate-x-1/2 -translate-y-4/5 w-100 h-100 bg-blue-300/40 rounded-full blur-3xl mixed-blend-multiply"></div> */}

            {/* hero text and image */}
            <div className="relative z-1 flex-col h-[500px] items-center justify-items-center justify-center w-1/2 max-w-5xl mt-24">


                <Meteors number={15} angle={130}/>
            
                <BackgroundGradient className="items-center grid w-25 h-25 [grid-template-areas:'stack']">
                    <Image
                        src={profilePic}
                        alt="Profile Picture"
                        className="rounded-full transition-opacity duration-200 opacity-100 group-hover:opacity-0 [grid-area:stack]"
                    />
                    <Image
                        src={profilePicHover}
                        alt="Profile Picture Hover"
                        className="rounded-full transition-opacity duration-200 opacity-0 group-hover:opacity-100 [grid-area:stack]"
                    />
                </BackgroundGradient>

                <ShimmerButton className=" z-10 mt-6 flex">
                    <div className="relative flex items-center justify-center">
                        <div className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse mr-2"></div>
                    </div>
                    <span className="whitespace-pre-wrap text-center font-light leading-none tracking-tighter text-neutral-800 dark:text-neutral-400 dark:from-white dark:to-slate-900 text-xs sm:text-sm">
                        Available for work
                    </span>
                </ShimmerButton>

                <p className="flex z-10 bg-gradient-to-b from-neutral-200 to-neutral-600 dark:to-neutral-500 bg-clip-text py-8 text-4xl font-bold text-transparent sm:text-5xl md:text-6xl lg:text-7xl text-center">
                    Hi I&#39;m Shivam
                </p>

                <p className="text-center text-neutral-600 dark:text-neutral-300">
                    This is filler text blah blah blah Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem eligendi repudiandae neque voluptatem consectetur ab?
                </p>


            </div>


        </div>
    );
}