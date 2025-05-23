import { Badge } from "@/components/ui/badge";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { BlurFade } from "../magicui/blur-fade";
import { projectData } from "../../data/data"
import { IconBrush } from "@tabler/icons-react";
import { SectionHeading } from "@/components/layout/section-heading";

export default function Projects() {
    return (
        <div className="flex flex-col">
            <SectionHeading icon={<IconBrush className="h-5 w-5 text-secondary-foreground" />}>
                Projects
            </SectionHeading>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 mx-auto">
                {projectData.map((item, index) => (
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
                            image={item.image}
                            video={item.video}
                            links={item.links}
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

export function ProjectCard({ title, href, description, tags, link, image, video, links, className }: Props) {
    return (
        <Card
            className={
                "flex flex-col overflow-hidden border hover:shadow-lg transition-all duration-300 ease-out h-full"
            }
        >
            <Link
                href={href || "#"}
                className={cn("block cursor-pointer", className)}
            >
                {video && (
                    <video
                        src={video}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="pointer-events-none mx-auto h-55 w-full object-cover object-top" // needed because random black line at bottom of video
                    />
                )}
                {image && (
                    <Image
                        src={image}
                        alt={title}
                        width={500}
                        height={300}
                        className="h-full w-full overflow-hidden object-cover object-top"
                    />
                )}
            </Link>
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
    );
}
