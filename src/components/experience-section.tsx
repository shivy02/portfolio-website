"use client";
// import { cn } from "@/lib/utils";
import { TracingBeam } from "./ui/tracing-beam"
import Image from "next/image";
import { experienceData } from "../data/data"

export default function Experience() {
  return (
    <div className="flex p-4 max-h-full flex-col space-y-4 mb-24 max-w-4xl w-full">
      {/* <p className="text-2xl font-bold mx-8 md:ml-4 lg:ml-0 text-neutral-700 dark:text-neutral-50">Experience</p> */}
      {/* Heading */}
      <div className="flex justify-center">
        <div className="inline-block bg-gradient-to-b from-neutral-300 dark:from-neutral-50 dark:to-neutral-500 to-neutral-500 rounded-md px-2 py-1">
          <p className="text-center text text-sm sm:text-md font-bold text-background dark:text-slate-800">
            Work Experience
          </p>
        </div>
      </div>
      <TracingBeam>
        {experienceData.map((item, index) => (
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
      <div className="p-4 border rounded-lg my-4">
        <div className="flex flex-row space-x-2">
          <Image
            src={image}
            width={100}
            height={100}
            alt={`${company} logo`}
            className="h-9 w-9 rounded-md mt-1"
          />
          <div className="flex flex-col mb-2">
            <p className="font-bold leading-relaxed text-balance text-sm sm:text-base text-neutral-700 dark:text-neutral-50">
              {role}
              <span className="mx-1"> • </span>
              {company}
            </p>
            <p className="text-[10px] text-balance sm:text-xs font-normal text-neutral-500 dark:text-neutral-400 ">
              {date}
              <span className="mx-0.5"> • </span>
              {location}
            </p>
          </div>
        </div>
        <p className="text-left text-sm sm:text-base text-neutral-600 dark:text-neutral-300">
          {description}˜
        </p>
        <div className="mt-4 flex flex-row flex-wrap gap-y-2 gap-x-2">
          {skills.map((skill, index) => (
          <div key={index} className="flex items-center justify-center bg-gradient-to-b from-neutral-300 dark:from-neutral-50 dark:to-neutral-500 to-neutral-500 px-2 py-1 rounded-sm">
            <p className="leading-none text-xs font-normal text-background dark:text-slate-900 ">
              {skill}
            </p>
          </div>
       ))}
        </div>
      </div>
    );
  };