import { IconHome, IconBrandGithub, IconBrush, IconBriefcase2, IconBrandLinkedin, IconMail, IconBrandInstagram, IconPencil } from "@tabler/icons-react"
export const data = {
  experience: [
    {
      image: "/experience/celebrin_logo.png",
      company: "Celebrin.ai",
      role: "Co-founder",
      date: "Apr 2026 - Present",
      description: "A brain for your company knowledge.",
      location: "Menlo Park, CA",
      skills: ["Typescript", "React", "NextJS", "AI Agents", "LLMs", "Infrastructure"],
      href: "https://celebrin.ai",
    },
    {
      image: "/experience/ai12z.jpeg",
      company: "ai12z",
      role: "Product Engineer, AI Integrations",
      date: "Aug 2025 - Present",
      description: "AI Search & Digital Assistants. Building AI powered search and assistant solutions for enterprise clients.",
      location: "Boston, MA",
      skills: ["Typescript", "NextJS", "React", "Cypress", "HTML/CSS", "MongoDB"],
      href: "https://ai12z.com",
    },
    {
      image: "/experience/stealth_logo.png",
      company: "Vamo",
      role: "Mobile & Web Developer, Consultant",
      date: "Sep 2025 - Nov 2025",
      description: "Built an app that finds the most cracked engineers on github through code analysis.",
      location: "San Francisco Bay, CA",
      skills: ["Typescript", "React Native", "Expo", "Svelte", "SQL", "UI/UX", "HTML/CSS"],
    },
    {
      image: "/experience/sterilite_logo.jpeg",
      company: "Sterilite",
      role: "Software Engineer, Analyst",
      date: "May 2025 - Aug 2025",
      description: "Data Engineering & Information Systems",
      location: "Townsend, MA",
      skills: ["Full-Stack", "HTML/CSS", "Javascript", "ASP.NET", "PL/SQL", "Data Warehousing", "Data Analysis", "ETL"],
      href: "https://www.sterilite.com",
    },
    {
      image: "/experience/saic_logo.jpeg",
      company: "SAIC",
      role: "Cloud Engineer Intern, Lead",
      date: "Jun 2023 - Aug 2023",
      description:
        "Cloud Engineering & DevSecOps, Air Force Cloud One",
      location: "Hanscom Air Force Base, MA",
      skills: ["Microsoft Azure", "Powershell", "Azure DevOps", "CI/CD", "Cloud Engineering", "DevSecOps"],
      href: "https://www.saic.com",
    },
    {
      image: "/experience/orbitahealth_logo.jpeg",
      company: "Orbita",
      role: "Software Engineer Intern",
      date: " Jun 2021 - Oct 2022",
      description:
        "AI Powered Healthcare Automation",
      location: "Boston, MA",
      skills: ["Full-Stack", "HTML/CSS", "JavaScript", "TypeScript", "Angular", "Node.js", "Express", "MongoDB" ],
      href: "https://orbita.ai",
    },
    {
      image: "/experience/umasslowell_logo.jpg",
      company: "University of Massachusetts Lowell",
      role: "Resident Advisor",
      date: "Feb 2020 - Jun 2021",
      description:
        "Made some good friends and helped a lot of people.",
      location: "Lowell, MA",
      skills: ["Leadership", "Communication", "Conflict Resolution", "Event Planning"],
      href: "https://www.uml.edu",
    },
  ],

  projects :[
    {
      title: "Breadbox | Personal Finance Analytics Dashboard",
      href: "https://github.com/BreadBoxOrg/breadbox-web",
      dates: "Feb 2024 - May 2024",
      active: false,
      type: "Web Application",
      technologies: ["React", "Javascript", "HTML", "TailwindCSS", "Plaid API", "OpenAI API", "MUI", "MongoDB", "NodeJS", "Express"],
      description: "AI integrated personal financial dashboard enabling users to connect multiple accounts and analyze their entire financial landscape.",
      video: "/projects/breadbox.mp4",
      thumbnail: "/projects/breadbox-img.png",
      // links: [
      //   {
      //     type: "Source",
      //     href: "https://github.com",
      //     icon: <IconBrandGithub className="size-8" />,
      //   },
      // ],
      // github: "github.link",
    },
    {
      title: "Seed Planter | Gardening Assistant",
      href: "https://github.com/SeedPlanterOrg/seedplanter-mobile",
      dates: "Feb 2024 - May 2024",
      active: false,
      type: "Mobile Application",
      technologies: ["React Native", "Javascript", "Expo", "Perenual API", "OpenAI API", "MongoDB", "NodeJS", "Express"],
      description: "A unified solution for planters to journal, garden, track planting schedules, and learn about gardening using an AI chatbot.",
      video: "/projects/seedplanter.mp4",
      thumbnail: "/projects/seedplanter-img.png",
      // links: [
      //   {
      //     type: "Source",
      //     href: "https://github.com",
      //     icon: <IconBrandGithub className="size-8" />,
      //   },
      // ],
    },
    // {
    //   title: "Cyfra | Secure Messaging Platform",
    //   href: "https://www.uml.edu/differencemaker/meet-the-differencemakers/dm-cryptopigeon.aspx",
    //   dates: "Feb 2022 - May 2023",
    //   active: false,
    //   type: "Mobile and Desktop App",
    //   technologies: ["Vue", "Typescript", "HTML", "TailwindCSS", "Tauri", "Rust", "SQL"],
    //   description: "Decentralized communication platform with e2e encryption, ensuring user privacy without third party interference.",
    //   image: "/projects/cyfra.png",
    //   // links: [ 
    //   //   {
    //   //     type: "Source",
    //   //     href: "https://github.com",
    //   //     icon: <IconBrandGithub className="size-8" />,
    //   //   },
    //   //   {
    //   //     type: "Article",
    //   //     href: "https://github.com",
    //   //     icon: <IconWorld className="size-8" />,
    //   //   },
    //   // ],
    // },
    // {
    //   title: "Portfolio Website | shivypatel.com",
    //   href: "https://www.shivypatel.com",
    //   dates: "2025",
    //   active: false,
    //   type: "Web Application",
    //   technologies: ["React", "NextJS", "Typescript", "HTML", "TailwindCSS"],
    //   description: "A personal portfolio website showcasing my projects, skills, and experiences.",
    //   video: "/projects/portfolio.mp4",
    //   // links: [ 
    //   //   {
    //   //     type: "Source",
    //   //     href: "https://github.com",
    //   //     icon: <IconBrandGithub className="size-8" />,
    //   //   },
    //   //   {
    //   //     type: "Article",
    //   //     href: "https://github.com",
    //   //     icon: <IconWorld className="size-8" />,
    //   //   },
    //   // ],
    // },
  ],

  contact : [
    {
      href: "mailto:shivypat02@gmail.com",
      label: "Email",
      icon: <IconMail className="h-5 w-5" />,
      aria: "Email",
    },
    {
      href: "https://www.linkedin.com/in/shivam-patel-363747214/",
      label: "LinkedIn",
      icon: <IconBrandLinkedin className="h-5 w-5" />,
      aria: "LinkedIn",
    },
    {
      href: "https://github.com/shivy02",
      label: "GitHub",
      icon: <IconBrandGithub className="h-5 w-5" />,
      aria: "GitHub",
    },
    {
      href: "https://instagram.com/shivy_02",
      label: "Instagram",
      icon: <IconBrandInstagram className="h-5 w-5" />,
      aria: "Instagram",
    },
  ],

  nav : [
    {
      name: "Home",
      link: "hero",
      icon: <IconHome className="subpixel-antialiased h-5 w-5 text-zinc-500 hover:text-zinc-950 dark:text-zinc-300 hover:dark:text-zinc-50 hover:animate-wiggle animate-wiggle transition-colors duration-100" />,
    },
    {
      name: "Projects",
      link: "projects",
      icon: <IconBrush className="subpixel-antialiased h-5 w-5 text-zinc-500 hover:text-zinc-950 dark:text-zinc-300 hover:dark:text-zinc-50 hover:animate-wiggle animate-wiggle transition-colors duration-100" />
    },
    {
      name: "Experience",
      link: "experience",
      icon: <IconBriefcase2 className="subpixel-antialiased h-5 w-5 text-zinc-500 hover:text-zinc-950 dark:text-zinc-300 hover:dark:text-zinc-50 hover:animate-wiggle animate-wiggle transition-colors duration-100" />,
    },
    {
      name: "Blog",
      link: "/blog",
      icon: <IconPencil className="subpixel-antialiased h-5 w-5 text-zinc-500 hover:text-zinc-950 dark:text-zinc-300 hover:dark:text-zinc-50 hover:animate-wiggle animate-wiggle transition-colors duration-100" />,
    },
    // {
    //   name: "Dashboard",
    //   link: "dashboard",
    //   icon: <IconLayoutDashboard className="subpixel-antialiased h-5 w-5 text-zinc-500 dark:text-zinc-300 hover:text-zinc-950 hover:dark:text-zinc-50 hover:animate-wiggle animate-wiggle transition-colors duration-100" />,
    // },
  ],

  favoriteLanguage : [
    {
      name: "React",
      icon: "react",
      themeDependent: false,
    }
  ],

  scratchGifs: [
    "https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3YXJld3JyYXo1Z3d1Nnh1ZzFxbXU3ZzV5N3JiamNsa3ByMHBvam1vaiZlcD12MV9zdGlja2Vyc19zZWFyY2gmY3Q9cw/eOjuCYIGqXSqfBy0MX/giphy.gif",
    "https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3aGh0YmFybmt1d3d4ZGY0c2lyMDhmcTlnMTBkanozNGxuangydjluaSZlcD12MV9zdGlja2Vyc19zZWFyY2gmY3Q9cw/AEDD6xjlOxNMgFsUmA/giphy.gif",
    "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOWdnMDcycTF1ejAyNm1yamVuMTZpZTcxd3UwemhxbzcweGVsMDl5aSZlcD12MV9zdGlja2Vyc19zZWFyY2gmY3Q9cw/LqgrTA39s77U8JKhJd/giphy.gif",
    "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOTY3c293N2VhdDFsMmFkdG85MGpjcnRrd2xybHUwZnI2dGdwdnpzYSZlcD12MV9zdGlja2Vyc19zZWFyY2gmY3Q9cw/xYPdnwsRPZDhCxXvOi/giphy.gif",
    "https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3YXZjdjljYzM0NzhoOHNjajZldDQ2ZzU5YTF5MTExOXQxbGdpdjAxZSZlcD12MV9zdGlja2Vyc19zZWFyY2gmY3Q9cw/20JY76TfKAhR20SfJu/giphy.gif",
    "https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3YXZjdjljYzM0NzhoOHNjajZldDQ2ZzU5YTF5MTExOXQxbGdpdjAxZSZlcD12MV9zdGlja2Vyc19zZWFyY2gmY3Q9cw/MxZKME5mbgeXckKp14/giphy.gif",
    "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ2Y2N2FvYTl6bTkxeGlzanpxNmJrOXh1bXBuY3gyY2ljeHpweWVlMSZlcD12MV9zdGlja2Vyc19zZWFyY2gmY3Q9cw/d9UAwX6gd6d3zYrTF5/giphy.gif",
    "https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3amtteDRyNWx4OHpmODVlMXo3YnBlczd3dGRoMWVlcWE5MzJxMjA2cyZlcD12MV9zdGlja2Vyc19zZWFyY2gmY3Q9cw/kimWBtJDjWcwFH2nRB/giphy.gif",
    "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExaTNtcmFyajY4MzNldzVkanU5dHNzdTBnaWJibmo0d2wycm5xOWRzZCZlcD12MV9zdGlja2Vyc19zZWFyY2gmY3Q9cw/GPWKoHhTMmjTYqOTVG/giphy.gif",
    "https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3NzAwZmVqd2tyM2t4c28xZHprem00dzR3bW9vZDZ2d2FzZDV5dTkxNiZlcD12MV9zdGlja2Vyc19zZWFyY2gmY3Q9cw/wMQTobBKTpmg5TLuZ5/giphy.gif",
    "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZmdtbDAxdjY3b2I2cm1naXRraGhpMm95MzA1dXkzank3dXg0MGcybSZlcD12MV9zdGlja2Vyc19zZWFyY2gmY3Q9cw/yrYcBBMG9F9tLwSDrM/giphy.gif",
    "https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3dXIxaXR2dzFhenZieXo1N2F0c2NpZmNza2ZwbnZpbm5vNHZ4ZWFwbyZlcD12MV9zdGlja2Vyc19zZWFyY2gmY3Q9cw/LIcwKtctRdCtPaaaNO/giphy.gif",
    "https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3dXIxaXR2dzFhenZieXo1N2F0c2NpZmNza2ZwbnZpbm5vNHZ4ZWFwbyZlcD12MV9zdGlja2Vyc19zZWFyY2gmY3Q9cw/LIcwKtctRdCtPaaaNO/giphy.gif",
    "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExb3FqaHAwa2d1ZHB4ZTIwMXlka2FrNGNrbHRlamJxZ3AzbXVzdHpqMCZlcD12MV9zdGlja2Vyc19zZWFyY2gmY3Q9cw/UmbybxMJ3sRvKBV5qw/giphy.gif",
  ],

  tools : [
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
  ],
  sunsets: [
    {
      src: "/sunsets/sunset-01.webp",
      alt: "View from a rocky summit over a forested valley under a hazy evening sky",
    },
    {
      src: "/sunsets/sunset-02.webp",
      alt: "Golden grassy hillside at dusk beneath a pink and orange gradient sky",
    },
    {
      src: "/sunsets/sunset-03.webp",
      alt: "Dirt trail crossing a grassy hilltop toward rolling hills at sunset",
    },
    {
      src: "/sunsets/sunset-04.webp",
      alt: "Sun setting behind a treeline beyond a field of tall golden grass",
    },
    {
      src: "/sunsets/sunset-05.webp",
      alt: "Lone pine standing against fog-covered green hills",
    },
    {
      src: "/sunsets/sunset-06.webp",
      alt: "Highway curving through green coastal hills shrouded in fog",
    },
    {
      src: "/sunsets/sunset-07.webp",
      alt: "Sun setting over hazy hills beyond a sunlit grassy meadow",
    },
    {
      src: "/sunsets/sunset-08.webp",
      alt: "Hilltop view over a turquoise bay and small islands under a bright blue sky",
    },
    {
      src: "/sunsets/sunset-09.webp",
      alt: "Sun setting behind island hills beside roadside palm trees",
    },
    {
      src: "/sunsets/sunset-10.webp",
      alt: "Wading into a calm turquoise bay toward a sailboat at golden hour",
    },
  ]
};