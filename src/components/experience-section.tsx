"use client";
// import { cn } from "@/lib/utils";
import { TracingBeam } from "./ui/tracing-beam"
// import { GlowingEffect } from "./ui/glowing-effect";
import Image from "next/image";

export default function Experience() {
    return (
      <div className="flex max-h-full flex-col space-y-4 mx-8 mb-24 max-w-4xl w-full">
        {/* Container for heading and content */}


          {/* Heading */}
          {/* <p className="text-2xl font-bold mx-8 md:ml-4 lg:ml-0 text-neutral-700 dark:text-neutral-50">Experience</p> */}

        <div className="flex justify-center">
          <div className="inline-block bg-gradient-to-b from-neutral-300 dark:from-neutral-50 dark:to-neutral-600 to-neutral-500 rounded-md px-2 py-1">
            <p className="text-center text-sm sm:text-md font-bold text-background">
              Work Experience
            </p>
          </div>
        </div>
          <div className="mx-8">
          {/* Content inside TracingBeam */}
          <TracingBeam>

            {/* Experience Card */}
          <div className="p-4 border rounded-lg my-4">
            <div className="flex flex-row space-x-4">
              <Image
                src="/saic_logo.png"
                width={100}
                height={100}
                alt="Profile Picture"
                className="h-9 w-9 rounded-sm mt-1"
              />
              <div className="flex flex-col mb-4">
                <p className="font-bold text-neutral-700 dark:text-neutral-50">
                  Software Engineer Intern | Team Lead<span className="mx-1"> • </span> SAIC
                </p>
                <p className="text-sm mt-2 sm:mt-0 font-normal text-neutral-500 dark:text-neutral-400 px-0.5">
                  Feb 2020 - Jun 2021
                </p>
              </div>
            </div>
            <p className="ml-2 text-left text-neutral-600 dark:text-neutral-300">
              Hello asdfasdf a Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. Totam itaque obcaecati, odio blanditiis ullam iste tempora
              commodi quidem ea incidunt, sint officia voluptatum accusantium,
              dolorem sunt expedita veritatis atque. Amet? Hello asdfasdf a Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. Totam itaque obcaecati, odio blanditiis ullam iste tempora
              commodi quidem ea incidunt, sint officia voluptatum accusantium,
              dolorem sunt expedita veritatis atque. Amet?
            </p>
          </div>
          <div className="p-4 border rounded-lg my-4">
            <div className="flex flex-row space-x-4">
              <Image
                src="/orbitahealth_logo.jpeg"
                width={100}
                height={100}
                alt="Profile Picture"
                className="h-9 w-9 rounded-md mt-1"
              />
              <div className="flex flex-col mb-4">
                <p className="font-bold text-neutral-700 dark:text-neutral-50">
                  Software Engineer Intern <span className="mx-1"> • </span> Orbita
                </p>
                <p className="text-sm mt-2 sm:mt-0 text-neutral-500 dark:text-neutral-400 px-0.5">
                  Feb 2020 - Jun 2021
                </p>
              </div>
            </div>
            <p className="ml-2 text-left text-neutral-600 dark:text-neutral-300">
              Hello asdfasdf a Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. Totam itaque obcaecati, odio blanditiis ullam iste tempora
              commodi quidem ea incidunt, sint officia voluptatum accusantium,
              dolorem sunt expedita veritatis atque. Amet? Hello asdfasdf a Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. 
            </p>
          </div>
          <div className="p-4 border rounded-lg my-4">
            <div className="flex flex-row space-x-4">
              <Image
                src="/umasslowell_logo.jpg"
                width={100}
                height={100}
                alt="Profile Picture"
                className="h-9 w-9 rounded-md mt-1"
              />
              <div className="flex flex-col mb-4">
                <p className="font-bold text-neutral-700 dark:text-neutral-50">
                  Resident Advisor <span className="mx-1"> • </span> University of Massachusetts Lowell
                </p>
                <p className="text-sm mt-2 sm:mt-0 text-neutral-500 dark:text-neutral-400 px-0.5">
                  Feb 2020 - Jun 2021
                </p>
              </div>
            </div>
            <p className="ml-2 text-left text-neutral-600 dark:text-neutral-300">
              Hello asdfasdf a Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. Totam itaque obcaecati, odio blanditiis ullam iste tempora
              commodi quidem ea incidunt, sint officia voluptatum accusantium,
              dolorem sunt expedita veritatis atque. Amet? Hello asdfasdf a Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. Totam itaque obcaecati, odio blanditiis ullam iste tempora
              commodi quidem ea incidunt.
            </p>
          </div>
          </TracingBeam>
        </div>
        </div>
    );
  }


interface ExperienceItemProps {
  image: string,
  company: string,
  role: string,
  date: string,
  description: string
}

// const ExperienceItem = ({ image, company, role, date, description }: ExperienceItemProps) => {
//   return (
//     <div className="p-4 border rounded-lg my-4 mx-8">
//             <div className="flex flex-row space-x-4">
//               <Image
//                 src={image}
//                 alt="Profile Picture"
//                 className="h-9 w-9 rounded-md mt-1"
//               />
//               <div className="flex flex-col mb-4">
//                 <p className="font-bold text-neutral-700 dark:text-neutral-50">
//                   {role}<span className="mx-1"> • </span> {company}
//                 </p>
//                 <p className="text-sm font-normal text-neutral-500 dark:text-neutral-300 px-0.5">
//                   {date}
//                 </p>
//               </div>
//             </div>
//             <p className="text-left text-neutral-600 dark:text-neutral-100">
//               {description}
//             </p>
//           </div>
//   )


// }