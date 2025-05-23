import {IconHome, IconBrandGithub, IconWorld, IconBrush, IconBriefcase2, IconLayoutDashboard, IconBrandLinkedin, IconMail, IconBrandInstagram} from "@tabler/icons-react"

export const experienceData = [
  {
    image: "/sterilite_logo.jpeg",
    company: "Sterilite",
    role: "Software Engineer | Analyst",
    date: "Present",
    description:"",
    location: "Townsend, MA",
    skills: ["HTML/CSS","Javascript", "SQL", "Data Warehousing", "Data Analysis"],
  },
  { 
    image: "/saic_logo.png",
    company: "SAIC",
    role: "Cloud Engineer Intern | Team Lead",
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
    skills: ["HTML/CSS", "Angular", "Node.js", "Express", "MongoDB" , "TypeScript"],

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
    href: "asdfasdfds",
    dates: "Feb 2024 - May 2024",
    active: false,
    type: "Web Application",
    technologies: [ "React", "Javascript", "HTML", "TailwindCSS", "Plaid", "MUI", "MongoDB", "NodeJS", "express"],
    description: "AI integrated personal financial dashboard enabling users to connect multiple accounts and analyze their entire financial landscape.",
    video: "/breadbox.mp4",
    links: [
      {
        type: "Source",
        href: "https://github.com",
        icon: <IconBrandGithub className="size-8" />,
      },
    ],
    github: "github.link",
  },
  {
    title: "SeedPlanter | Gardening Assistant",
    href: "asdfasdfds",
    dates: "Feb 2024 - May 2024",
    active: false,
    type: "Mobile Application",
    technologies: [ "React Native", "Javascript", "Expo", "PerenualAPI", "MongoDB", "NodeJS", "Express"],
    description: "A unified solution for planters to journal, garden, track planting schedules, and learn about gardening using an AI chatbot.",
    video: "/SeedPlanter.mp4",
    links: [
      {
        type: "Source",
        href: "https://github.com",
        icon: <IconBrandGithub className="size-8" />,
      },
    ],
    },
  {
    title: "Cyfra | Secure Messaging Platform",
    href: "asdfasdfds",
    dates: "Feb 2024 - May 2024",
    active: false,
    type: "Mobile and Desktop App",
    technologies: [ "Vue", "Typescript", "HTML", "TailwindCSS", "Tauri", "Rust", "SQL"],
    description: "Decentralized communication platform with e2e encryption, ensuring user privacy without third party interference.",
    image: "/cyfra.jpg",
    links: [
      {
        type: "Source",
        href: "https://github.com",
        icon: <IconBrandGithub className="size-8" />,
      },
      {
        type: "Article",
        href: "https://github.com",
        icon: <IconWorld className="size-8" />,
      },
    ],
  },
]

export const contactLinks = [
  {
    href: "mailto:your@email.com",
    label: "Email",
    icon: <IconMail className="h-5 w-5" />,
    aria: "Email",
  },
  {
    href: "https://www.linkedin.com/in/your-linkedin",
    label: "LinkedIn",
    icon: <IconBrandLinkedin className="h-5 w-5" />,
    aria: "LinkedIn",
  },
  {
    href: "https://github.com/your-github",
    label: "GitHub",
    icon: <IconBrandGithub className="h-5 w-5" />,
    aria: "GitHub",
  },
  {
    href: "https://instagram.com/your-instagram",
    label: "Instagram",
    icon: <IconBrandInstagram className="h-5 w-5" />,
    aria: "Instagram",
  },
];

export const navData = [
  {
    name: "Home",
    link: "hero",
    icon: <IconHome className="subpixel-antialiased h-5 w-5 text-zinc-500 hover:text-zinc-950 dark:text-zinc-300 hover:dark:text-zinc-50 hover:animate-wiggle animate-wiggle transition-colors duration-100" />,
  },
  {
    name: "Experience",
    link: "experience",
    icon: <IconBriefcase2 className="subpixel-antialiased h-5 w-5 text-zinc-500 hover:text-zinc-950 dark:text-zinc-300 hover:dark:text-zinc-50 hover:animate-wiggle animate-wiggle transition-colors duration-100" />,
  },
  {
    name: "Dashboard",
    link: "dashboard",
    icon: <IconLayoutDashboard className="subpixel-antialiased h-5 w-5 text-zinc-500 dark:text-zinc-300 hover:text-zinc-950 hover:dark:text-zinc-50 hover:animate-wiggle animate-wiggle transition-colors duration-100" />,
  },
  {
    name: "Projects",
    link: "projects",
    icon: <IconBrush className="subpixel-antialiased h-5 w-5 text-zinc-500 hover:text-zinc-950 dark:text-zinc-300 hover:dark:text-zinc-50 hover:animate-wiggle animate-wiggle transition-colors duration-100" />
  },
];