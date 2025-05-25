import Image from "next/image";

export const Footer = () => {
    return (
        <footer className="relative w-full h-[15rem] bg-background text-secondary-foreground pt-4 overflow-hidden">
            <Image
                src="/layout/background-ellipse2.svg"
                alt=""
                fill={false}
                width={1000} // Adjust width to fit your design
                height={900} // Adjust height to fit your design
                className="absolute bottom-0 blur-xl left-1/2 transform -translate-x-1/2 translate-y-2/3 w-auto h-auto z-0 pointer-events-none select-none"
                aria-hidden="true"
                priority
            />
            <div className="container relative z-10 mx-auto flex flex-col items-center justify-between px-4">
                <p className="text-sm text-center">
                    &copy; {new Date().getFullYear()} Shivam Patel. All rights reserved.
                </p>
                <p className="text-xs text-center mt-2">
                    Built with ❤️ using Next.js and Tailwind
                </p>
            </div>
        </footer>
    );
};