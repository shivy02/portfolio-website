"use client";

import Image from "next/image";
import { IconWorld } from "@tabler/icons-react";
import {
    SectionHeading,
    headingIconClass,
} from "@/components/layout/section-heading";
import { Marquee } from "@/components/ui/marquee";
import { Lens } from "@/components/magicui/lens";
import type { SunsetPhoto } from "@/lib/sunsets";

export default function Earth({ photos }: { photos: SunsetPhoto[] }) {
    if (photos.length === 0) return null;

    return (
        <div className="flex flex-col">
            <SectionHeading icon={<IconWorld className={headingIconClass} />}>
                I like the earth
            </SectionHeading>

            <p className="-mt-4 mb-8 text-center text-sm text-muted-foreground">
                Places that made me stop and take a picture.
            </p>

            <div className="relative">
                <Marquee pauseOnHover className="[--duration:55s] [--gap:0.75rem] p-0">
                    {photos.map((photo) => (
                        <div key={photo.src} className="shrink-0">
                            <Lens zoomFactor={1.75} lensSize={110} ariaLabel={photo.alt}>
                                <div className="relative aspect-[3/4] h-48 sm:h-64 overflow-hidden rounded-xl">
                                    <Image
                                        src={photo.src}
                                        alt={photo.alt}
                                        fill
                                        sizes="(min-width: 640px) 336px, 252px"
                                        className="object-cover"
                                    />
                                </div>
                            </Lens>
                        </div>
                    ))}
                </Marquee>
                <div className="pointer-events-none absolute inset-y-0 left-0 w-12 sm:w-20 bg-gradient-to-r from-background" />
                <div className="pointer-events-none absolute inset-y-0 right-0 w-12 sm:w-20 bg-gradient-to-l from-background" />
            </div>
        </div>
    );
}
