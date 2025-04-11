import {IconHome, IconUser, IconMessage} from "@tabler/icons-react"

export const experienceData = [
  {
    image: "/saic_logo.png",
    company: "SAIC",
    role: "Software Engineer Intern | Team Lead",
    date: "Feb 2020 - Jun 2021",
    description:
      "Hello asdfasdf a Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam itaque obcaecati, odio blanditiis ullam iste tempora commodi quidem ea incidunt, sint officia voluptatum accusantium, dolorem sunt expedita veritatis atque. Amet?",
    location: "Hanscom Air Force Base, MA",
    skills: ["Microsoft Azure", "Powershell", "Azure DevOps", "CI/CD"],
  },
  {
    image: "/orbitahealth_logo.jpeg",
    company: "Orbita",
    role: "Software Engineer Intern",
    date: "Feb 2020 - Jun 2021",
    description:
      "Hello asdfasdf a Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam itaque obcaecati, odio blanditiis ullam iste tempora commodi quidem ea incidunt, sint officia voluptatum accusantium, dolorem sunt expedita veritatis atque. Amet?",
    location: "Boston, MA",
    skills: ["HTML", "CSS", "Angular", "Node.js", "Express", "MongoDB" , "TypeScript"],

  },
  {
    image: "/umasslowell_logo.jpg",
    company: "University of Massachusetts Lowell",
    role: "Resident Advisor",
    date: "Feb 2020 - Jun 2021",
    description:
      "Hello asdfasdf a Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam itaque obcaecati, odio blanditiis ullam iste tempora commodi quidem ea incidunt, sint officia voluptatum accusantium, dolorem sunt expedita veritatis atque. Amet?",
    location: "Lowell, MA",
    skills: ["Leadership", "Conflict Resolution", "Event Planning"],
  },
];

export const projectData = [
  {
    title: "Bread Box | Personal Finance Analytics Dashboard",
    type: "Web Application",
    description: "ello asdfasdf a Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam itaque obcaecati,",
    video: "/bread_box.mp4",
    skills: ["React, NodeJS, Express, MongoDB, Generative AI"],
    github: "github.link",
  },
  {
    title: "SeedPlanter | Gardening Assistant",
    type: "Mobile Application",
    description: "ello asdfasdf a Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam itaque obcaecati,",
    video: "/bread_box.mp4",
    skills: ["React, NodeJS, Express, MongoDB, Generative AI"],
    github: "github.link",
  },
  {
    title: "SeedPlanter | Gardening Assistant",
    type: "Mobile Application",
    description: "ello asdfasdf a Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam itaque obcaecati,",
    video: "/bread_box.mp4",
    skills: ["React, NodeJS, Express, MongoDB, Generative AI"],
    github: "github.link",
    article: "website.com"
  }

]

export const contactData = [
    {
        email: "shivypat02@gmail.com",
        github: "https",
        linkedIn: "adfa",
        instagram: "instagram"
    }
]

export const navData = [
  {
    name: "Experience",
    link: "experience",
    icon: <IconHome className="subpixel-antialiased h-5 w-5 text-neutral-500 hover:text-neutral-950 dark:text-neutral-300 hover:dark:text-neutral-50 hover:animate-wiggle animate-wiggle transition-colors duration-100" />,
  },
  {
    name: "Dashboard",
    link: "dashboard",
    icon: <IconUser className="subpixel-antialiased h-5 w-5 text-neutral-500 dark:text-neutral-300 hover:text-neutral-950 hover:dark:text-neutral-50 hover:animate-wiggle animate-wiggle transition-colors duration-100" />,
  },
  {
    name: "Projects",
    link: "/projects",
    icon: <IconMessage className="subpixel-antialiased h-5 w-5 text-neutral-500 hover:text-neutral-950 dark:text-neutral-300 hover:dark:text-neutral-50 hover:animate-wiggle animate-wiggle transition-colors duration-100" />

  },
];