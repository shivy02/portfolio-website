"use client";
// import { cn } from "@/lib/utils";
import { TracingBeam } from "./ui/tracing-beam"
import Image from "next/image";
import { experienceData } from "../data/data"
import { BlurFade } from "@/components/magicui/blur-fade";

export default function Experience() {
  return (
    <div className="flex p-4 max-h-full flex-col space-y-2 mb-24 max-w-4xl w-full">
      {/* <p className="text-2xl font-bold mx-8 md:ml-4 lg:ml-0 text-zinc-700 dark:text-zinc-50">Experience</p> */}
      {/* Heading */}
      <div className="flex justify-center">
        <div className="inline-block bg-gradient-to-b from-zinc-300 dark:from-zinc-50 dark:to-zinc-500 to-zinc-500 rounded-md px-2 py-1">
          <p className="text-center text text-sm sm:text-md font-extrabold text-background dark:text-slate-800">
            Experience
          </p>
        </div>
      </div>
      <TracingBeam>
        {experienceData.map((item, index) => (
          <BlurFade key={item.role || index} delay={0.15 + index * 0.1} direction="right" inView>
            <ExperienceItem
              key={index}
              image={item.image}
              company={item.company}
              role={item.role}
              date={item.date}
              description={item.description}
              location={item.location}
              skills={item.skills}
            />
          </BlurFade>
        ))}
      </TracingBeam>
    </div>
  );
}

  interface ExperienceItemProps {
    image: string;
    company: string;
    role: string;
    date: string;
    description: string;
    location:string;
    skills: string[];
  }
  
  export const ExperienceItem = ({
    image,
    company,
    role,
    date,
    description,
    location,
    skills,
  }: ExperienceItemProps) => {
    return (
      <div className="p-4 border rounded-xl sm:rounded-lg my-4">
        <div className="flex flex-row space-x-2">
          <Image
            src={image}
            width={100}
            height={100}
            alt={`${company} logo`}
            className="h-6 w-6 rounded-sm sm:h-8 sm:w-8 sm:rounded-md mt-1"
          />
          <div className="flex flex-col mb-2">
            <p className="font-bold leading-normal text-balance text-sm sm:text-base text-zinc-700 dark:text-zinc-50">
              {role}
              <span className="mx-1"> • </span>
              {company}
            </p>
            <p className="text-[10px] text-balance sm:text-xs md:text-sm font-normal text-zinc-500 dark:text-zinc-400 ">
              {date}
              <span className="mx-0.5"> • </span>
              {location}
            </p>
          </div>
        </div>
        <p className="text-left text-sm sm:text-base text-zinc-600 dark:text-zinc-300">
          {description}˜
        </p>
        <div className="mt-4 flex flex-row flex-wrap gap-y-2 gap-x-2">
          {skills.map((skill, index) => (
            <BlurFade key={skill} delay={0.15 + index * 0.05} direction="up" inView>
          <div key={index} className="flex items-center justify-center bg-secondary px-2 py-1 rounded-sm">
            <p className="leading-none text-[10px] sm:text-xs md:text-sm font-semibold text-zinc-700 dark:text-slate-200 ">
              {skill}
            </p>
          </div>
          </BlurFade>
       ))}
        </div>
      </div>
    );
  };