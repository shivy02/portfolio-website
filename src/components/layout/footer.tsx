"use client";

import Image from "next/image";
import { RainbowButton } from "@/components/magicui/rainbow-button";
import { IconSend } from "@tabler/icons-react";
import { motion } from "motion/react";
import { useState } from "react";

export const Footer = () => {
    const [sent, setSent] = useState(false);

    const handleClick = () => {
        if (sent) return;
        setSent(true);
        // Reset so the icon "respawns" after the fly-off animation lands.
        window.setTimeout(() => setSent(false), 1600);
    };

    return (
        <footer className="relative w-full sm:h-[30rem] h-[20rem] bg-background text-secondary-foreground pt-4 overflow-hidden">
            <div className="container relative z-10 mx-auto flex flex-col h-full items-center justify-end px-4 py-4">
                <div className="flex flex-col items-center justify-center h-full">
                    <h2 className="mx-16 sm:mx-none text-center text-pretty text-xl sm:text-2xl font-bold mb-8">
                        Have any questions, or just want to chat?
                    </h2>
                    <a
                        href="mailto:shivypat02@gmail.com"
                        onClick={handleClick}
                        className="group inline-block active:scale-95 transition-transform duration-150"
                    >
                        <RainbowButton variant="default" className="overflow-visible">
                            <motion.span
                                aria-hidden
                                className="inline-flex will-change-transform"
                                animate={
                                    sent
                                        ? {
                                              x: [0, 24, 90],
                                              y: [0, -38, -64],
                                              rotate: [0, 25, 45],
                                              opacity: [1, 1, 0],
                                          }
                                        : { x: 0, y: 0, rotate: 0, opacity: 1 }
                                }
                                transition={{
                                    duration: sent ? 0.7 : 0.45,
                                    ease: sent ? [0.22, 1, 0.36, 1] : "easeOut",
                                    times: sent ? [0, 0.55, 1] : undefined,
                                }}
                            >
                                <IconSend className="transition-transform duration-200 group-hover:-rotate-12 group-hover:-translate-y-0.5" />
                            </motion.span>
                            <p className="tracking-tight">Contact Me</p>
                        </RainbowButton>
                    </a>
                </div>
                <p className="text-sm text-center font-medium leading-none">
                    Built with ❤️ using React, Next.js and Tailwind
                </p>
                <p className="text-xs leading-none text-center align-text-bottom mt-2">
                    &copy; {new Date().getFullYear()} Shivam Patel. All rights reserved.
                </p>
            </div>
            <Image
                src="/layout/background-ellipse3.svg"
                alt=""
                fill={false}
                width={100}
                height={900}
                className="absolute bottom-0 blur-md left-1/2 transform -translate-x-1/2 translate-y-3/5 w-auto z-0 pointer-events-none select-none"
                aria-hidden="true"
                priority
            />
        </footer>
    )
};
