"use client";

import Image from "next/image";

export const Footer = () => {
    return (
        <footer className="relative w-full sm:h-[25rem] h-[10rem] bg-background text-secondary-foreground pt-4 overflow-hidden">
            <div className="container relative z-10 mx-auto flex flex-col h-full items-center justify-end px-4 py-4">
                <p className="text-sm text-center">
                    &copy; {new Date().getFullYear()} Shivam Patel. All rights reserved.
                </p>
                <p className="text-xs text-center align-text-bottom mt-2">
                    Built with ❤️ using Next.js and Tailwind
                </p>
            </div>
             <Image
            src="/layout/background-ellipse2.svg"
            alt=""
            fill={false}
            width={1000} 
            height={900} 
            className="absolute bottom-0 blur-xl left-1/2 transform -translate-x-1/2 translate-y-2/3 w-auto z-0 pointer-events-none select-none"
            aria-hidden="true"
            priority
          />
        </footer>
    )
};


