"use client";
// import { cn } from "@/lib/utils";
import { TracingBeam } from "../ui/tracing-beam"
import Image from "next/image";
import { experienceData } from "../../data/data"
import { BlurFade } from "@/components/magicui/blur-fade";
import { SectionHeading } from "@/components/layout/section-heading";
import { IconBriefcase2, IconSchool } from "@tabler/icons-react"

export default function Experience() {
  return (
    <div className="flex flex-col">
      <SectionHeading icon={<IconBriefcase2 className="h-5 w-5 text-secondary-foreground" />}>
        Experience
      </SectionHeading>
      <TracingBeam>
        <div className="space-y-4">
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
        </div>
      </TracingBeam>

      <BlurFade delay={0.15} direction="right" inView>
        <SectionHeading className="my-8" icon={<IconSchool className="h-5 w-5 text-secondary-foreground" />}>
          Education
        </SectionHeading>
        <ExperienceItem
          image="/umasslowell_logo.jpg"
          company="University of Massachusetts, Lowell"
          role="B.S. in Computer Science, Minor in Mathematics"
          date="2020 - 2024"
          description=" "
          location="Lowell, MA"
          skills={["C", "C++", "Java", "Python", "JavaScript", "HTML/CSS", "SQL"]}
        />

      </BlurFade>

    </div>
  );
}

interface ExperienceItemProps {
  image: string;
  company: string;
  role: string;
  date: string;
  description: string;
  location: string;
  skills: string[];
}

export const ExperienceItem = ({
  image,
  company,
  role,
  date,
  description = "",
  location,
  skills,
}: ExperienceItemProps) => {
  return (
    <div className="p-4 border rounded-xl sm:rounded-lg">
      <div className="flex flex-row space-x-2">
        <Image
          src={image}
          width={100}
          height={100}
          alt={`${company} logo`}
          priority
          className="h-8 w-8 rounded-sm sm:h-10 sm:w-10 sm:rounded-md mt-1"
        />
        <div className="flex flex-col mb-2">
          <p className="font-bold leading-normal text-balance text-sm sm:text-base text-primary">
            {role}
            <span className="mx-1"> • </span>
            {company}
          </p>
          <p className="text-[10px] text-balance sm:text-xs md:text-sm font-normal text-muted-foreground ">
            {date}
            <span className="mx-0.5"> • </span>
            {location}
          </p>
        </div>
      </div>
      {description && (
        <p className="text-left mt-2 text-sm sm:text-base text-muted-foreground">
          {description}
        </p>
      )}
      <div className="mt-4 flex flex-row flex-wrap gap-y-2 gap-x-2">
        {skills.map((skill, index) => (
          <BlurFade key={skill} delay={0.15 + index * 0.15} direction="up" inView>
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