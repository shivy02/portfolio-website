import { IconHome, IconBrandGithub, IconWorld, IconBrush, IconBriefcase2, IconLayoutDashboard, IconBrandLinkedin, IconMail, IconBrandInstagram } from "@tabler/icons-react"

export const experienceData = [
  {
    image: "/experience/sterilite_logo.jpeg",
    company: "Sterilite",
    role: "Software Engineer | Analyst",
    date: "Present",
    description: "",
    location: "Townsend, MA",
    skills: ["HTML/CSS", "Javascript", "SQL", "Data Warehousing", "Data Analysis"],
  },
  {
    image: "/experience/saic_logo.jpeg",
    company: "SAIC",
    role: "Cloud Engineer Intern | Lead",
    date: "Feb 2020 - Jun 2021",
    description:
      "Hello asdfasdf a Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam itaque obcaecati, odio blanditiis ullam iste tempora commodi quidem ea incidunt, sint officia voluptatum accusantium, dolorem sunt expedita veritatis atque. Amet?",
    location: "Hanscom Air Force Base, MA",
    skills: ["Microsoft Azure", "Powershell", "Azure DevOps", "CI/CD"],
  },
  {
    image: "/experience/orbitahealth_logo.jpeg",
    company: "Orbita",
    role: "Software Engineer Intern",
    date: "Feb 2020 - Jun 2021",
    description:
      "Hello asdfasdf a Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam itaque obcaecati, odio blanditiis ullam iste tempora commodi quidem ea incidunt, sint officia voluptatum accusantium, dolorem sunt expedita veritatis atque. Amet?",
    location: "Boston, MA",
    skills: ["HTML/CSS", "Angular", "Node.js", "Express", "MongoDB", "TypeScript"],

  },
  {
    image: "/experience/umasslowell_logo.jpg",
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
    technologies: ["React", "Javascript", "HTML", "TailwindCSS", "Plaid", "MUI", "MongoDB", "NodeJS", "express"],
    description: "AI integrated personal financial dashboard enabling users to connect multiple accounts and analyze their entire financial landscape.",
    video: "/projects/breadbox.mp4",
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
    title: "Seedlanter | Gardening Assistant",
    href: "asdfasdfds",
    dates: "Feb 2024 - May 2024",
    active: false,
    type: "Mobile Application",
    technologies: ["React Native", "Javascript", "Expo", "PerenualAPI", "MongoDB", "NodeJS", "Express"],
    description: "A unified solution for planters to journal, garden, track planting schedules, and learn about gardening using an AI chatbot.",
    video: "/projects/seedplanter.mp4",
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
    technologies: ["Vue", "Typescript", "HTML", "TailwindCSS", "Tauri", "Rust", "SQL"],
    description: "Decentralized communication platform with e2e encryption, ensuring user privacy without third party interference.",
    image: "/projects/cyfra.png",
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

export const toolsData = [
  {
    name: "React",
    icon: "react",
    themeDependent: false,
  },
  {
    name: "React Native",
    icon: "reactnative",
    themeDependent: false,
  },
  {
    name: "Expo",
    icon: "expo",
    themeDependent: true,
  },
  {
    name: "NextJS",
    icon: "nextjs",
    themeDependent: true,
  },
  {
    name: "Vue",
    icon: "vue",
    themeDependent: false,
  },
  {
    name: "Angular",
    icon: "angular",
    themeDependent: false,
  },
  {
    name: "NodeJS",
    icon: "nodejs",
    themeDependent: false,
  },
  {
    name: "Javascript",
    icon: "javascript",
    themeDependent: false,
  },
  {
    name: "Typescript",
    icon: "typescript",
    themeDependent: false,
  },
  {
    name: "Express",
    icon: "express",
    themeDependent: false,
  },
  {
    name: "C",
    icon: "c",
    themeDependent: false,
  },
  {
    name: "C++",
    icon: "cpp",
    themeDependent: false,
  },
  {
    name: "Python",
    icon: "python",
    themeDependent: false,
  },
  {
    name: "Rust",
    icon: "rust",
    themeDependent: true,
  },
  {
    name: "HTML",
    icon: "html",
    themeDependent: false,
  },
  {
    name: "CSS",
    icon: "css",
    themeDependent: false,
  },
  {
    name: "TailwindCSS",
    icon: "tailwind",
    themeDependent: false,
  },
  {
    name: "MongoDB",
    icon: "mongodb",
    themeDependent: false,
  },
  {
    name: "SQL",
    icon: "sql",
    themeDependent: false,
  },
  {
    name: "Azure",
    icon: "azure",
    themeDependent: false,
  },
    {
    name: "Docker",
    icon: "docker",
    themeDependent: false,
  },
  {
    name: "Powershell",
    icon: "powershell",
    themeDependent: false,
  },
  {
    name: "Git",
    icon: "git",
    themeDependent: false,
  },
  {
    name: "Github",
    icon: "github",
    themeDependent: true,
  },
  {
    name: "Figma",
    icon: "figma",
    themeDependent: false,
  },
  {
    name: "VSCode",
    icon: "vscode",
    themeDependent: false,
  },
]