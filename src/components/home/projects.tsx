"use client";
import React, { useEffect, useRef, useState } from "react";
import { Badge } from "@/components/ui/badge";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { BlurFade } from "../ui/blur-fade";
import { data } from "../../data/data"
import { IconBrush, IconLink } from "@tabler/icons-react";
import { SectionHeading, headingIconClass } from "@/components/layout/section-heading";
import { motion } from "framer-motion";

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
                            thumbnail={item.thumbnail}
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
    thumbnail?: string;
    links?: readonly {
        icon: React.ReactNode;
        type: string;
        href: string;
    }[];
    className?: string;
}

export function ProjectCard({ title, href, description, tags, link, image, video, thumbnail, links }: Props) {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isVideoPlaying, setIsVideoPlaying] = useState(false);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        const handleVideoPlaying = () => {
            setIsVideoPlaying(true);
        };

        video.addEventListener("playing", handleVideoPlaying);

        // Fallback: show video after 3 seconds if event doesn't fire
        const fallbackTimer = setTimeout(() => {
            setIsVideoPlaying(true);
        }, 3000);

        return () => {
            video.removeEventListener("playing", handleVideoPlaying);
            clearTimeout(fallbackTimer);
        };
    }, []);

    return (
        <Link href={href || "#"} className="block h-full group">
            <Card
                className={
                    "relative flex flex-col overflow-hidden border hover:shadow-md transition-all duration-300 ease-out h-full"
                }
            >
                <div className="relative overflow-hidden h-55 bg-muted">
                    {/* Thumbnail - Shows immediately, stays blurred until video plays */}
                    {video && thumbnail && (
                        <div className="absolute top-0 left-0 w-full h-full blur-sm scale-105">
                            <Image
                                src={thumbnail}
                                alt={title}
                                fill
                                sizes="(max-width: 768px) 100vw, 50vw"
                                className="object-cover object-top"
                                priority
                            />
                        </div>
                    )}
                    {/* Video - Fades in on top when playing */}
                    {video && (
                        <motion.video
                            ref={videoRef}
                            src={video}
                            autoPlay
                            loop
                            muted
                            playsInline
                            preload="auto"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: isVideoPlaying ? 1 : 0 }}
                            transition={{ duration: 0.3 }}
                            className="pointer-events-none absolute top-0 left-0 w-full h-full object-cover object-top z-10"
                        />
                    )}
                    {/* Static Image fallback */}
                    {!video && image && (
                        <Image
                            src={image}
                            alt={title}
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                            className="object-cover object-top"
                        />
                    )}
                    {/* Link Icon */}
                    <div className="absolute top-2 right-2 bg-black/20 text-white rounded-full p-1 z-20 sm:opacity-0 sm:group-hover:opacity-100 opacity-100 transition-opacity duration-300">
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