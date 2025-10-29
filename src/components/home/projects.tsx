"use client";
import React, { useEffect, useRef } from "react";
import { Badge } from "@/components/ui/badge";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
// import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { BlurFade } from "../ui/blur-fade";
import { data } from "../../data/data"
import { IconBrush, IconLink } from "@tabler/icons-react";
import { SectionHeading, headingIconClass } from "@/components/layout/section-heading";

export default function Projects() {
    return (
        <div className="flex flex-col">
            <SectionHeading icon={<IconBrush className={headingIconClass}/>}>
                Projects
            </SectionHeading>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 mx-auto">
                {data.projects.map((item, index) => (
                    <BlurFade
                        key={item.title}
                        delay={0.04 * 12 + index * 0.05}
                    >
                        <ProjectCard
                            href={item.href}
                            key={item.title}
                            title={item.title}
                            description={item.description}
                            dates={item.dates}
                            tags={item.technologies}
                            // image={item.image}
                            video={item.video}
                            // links={item.links}
                            />
                    </BlurFade>
                ))}
            </div>
        </div>
    );
}
interface Props {
    title: string;
    href?: string;
    description: string;
    dates: string;  
    tags: readonly string[];
    link?: string;
    image?: string;
    video?: string;
    links?: readonly {
        icon: React.ReactNode;
        type: string;
        href: string;
    }[];
    className?: string;
}

export function ProjectCard({ title, href, description, tags, link, image, video, links }: Props) {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        const handleVisibilityChange = () => {
            if (document.visibilityState === "visible" && videoRef.current) {
                videoRef.current.load(); // Reset the video
                videoRef.current.play().catch(() => {
                    // Handle autoplay restrictions
                });
            } else if (document.visibilityState === "hidden" && videoRef.current) {
                videoRef.current.pause();
            }
        };

        document.addEventListener("visibilitychange", handleVisibilityChange);

        return () => {
            document.removeEventListener("visibilitychange", handleVisibilityChange);
        };
    }, []);

    useEffect(() => {
        const video = videoRef.current;
        const handlePlay = () => {
            video?.play().catch(() => {
                // Handle autoplay restrictions
            });
        };

        video?.addEventListener("pause", handlePlay);

        return () => {
            video?.removeEventListener("pause", handlePlay);
        };
    }, []);

    return (
        <Link href={href || "#"} className="block h-full group">
            <Card
                className={
                    "relative flex flex-col overflow-hidden border hover:shadow-md transition-all duration-300 ease-out h-full"
                }
            >
                <div className="relative">
                    {video && (
                        <video
                            ref={videoRef}
                            src={video}
                            autoPlay
                            loop
                            muted
                            playsInline
                            preload="auto"
                            className="pointer-events-none mx-auto h-55 w-full object-cover object-top"
                        />
                    )}
                    {image && (
                        <Image
                            src={image}
                            alt={title}
                            width={500}
                            height={300}
                            className="w-full h-55 overflow-hidden object-cover object-top"
                        />
                    )}
                    {/* Link Icon */}
                    <div
                        className="absolute top-2 right-2 bg-black/20 text-white rounded-full p-1 
                sm:opacity-0 sm:group-hover:opacity-100 opacity-100 transition-opacity duration-300"
                    >
                        <IconLink className="h-5 w-5" />
                    </div>
                </div>
                <CardHeader className="px-2">
                    <div className="space-y-1">
                        <CardTitle className="mt-2 text-base">{title}</CardTitle>
                        <div className="hidden text-xs underline print:visible">
                            {link?.replace("https://", "").replace("www.", "").replace("/", "")}
                        </div>
                        <div className="prose max-w-full text-pretty text-sm mt-2 text-muted-foreground dark:prose-invert">
                            {description}
                        </div>
                    </div>
                </CardHeader>
                <CardContent className="mt-2 flex flex-col px-2">
                    {tags && tags.length > 0 && (
                        <div className="mt-2 flex flex-wrap gap-2">
                            {tags?.map((tag) => (
                                <Badge
                                    className="px-1 py-0.5 text-[12px]"
                                    variant="secondary"
                                    key={tag}
                                >
                                    {tag}
                                </Badge>
                            ))}
                        </div>
                    )}
                </CardContent>
                <CardFooter className="px-2 pb-2">
                    {links && links.length > 0 && (
                        <div className="flex flex-row flex-wrap items-start gap-1">
                            {links?.map((link, idx) => (
                                <Link href={link?.href} key={idx} target="_blank">
                                    <Badge key={idx} className="flex gap-2 text-[12px]">
                                        {link.icon}
                                        {link.type}
                                    </Badge>
                                </Link>
                            ))}
                        </div>
                    )}
                </CardFooter>
            </Card>
        </Link>
    );
}