"use client";

import Image from "next/image";
import { RainbowButton } from "@/components/magicui/rainbow-button";
import { IconSend } from "@tabler/icons-react";

export const Footer = () => {

    return (
        <footer className="relative w-full sm:h-[30rem] h-[20rem] bg-background text-secondary-foreground pt-4 overflow-hidden">

            <div className="container relative z-10 mx-auto flex flex-col h-full items-center justify-end px-4 py-4">
                <div className="flex flex-col items-center justify-center h-full">
                    <h2 className="mx-16 sm:mx-none text-center text-pretty text-xl sm:text-2xl font-bold mb-8">
                        Have any questions, or just want to chat?
                    </h2>
                    <a href="mailto:shivypat02@gmail.com">
                        <RainbowButton variant="default"  className="bg-background">
                            <IconSend />
                           <p className="tracking-tight">Contact Me</p> 
                        </RainbowButton>
                    </a>
                </div>
                <p className="text-sm text-center font-medium leading-none">
                    &copy; {new Date().getFullYear()} Shivam Patel. All rights reserved.
                </p>
                <p className="text-xs leading-none text-center align-text-bottom mt-2">
                    Built with ❤️ using React, Next.js and Tailwind
                </p>
            </div>
             <Image
            src="/layout/background-ellipse2.svg"
            alt=""
            fill={false}
            width={100} 
            height={900} 
            className="absolute bottom-0 blur-lg left-1/2 transform -translate-x-1/2 translate-y-3/5 w-auto z-0 pointer-events-none select-none"
            aria-hidden="true"
            priority
          />
        </footer>
    )
};


