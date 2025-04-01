import {IconHome, IconUser, IconMessage} from "@tabler/icons-react"

export const experienceData = [
    {
        company: "Orbita",
        role: "Software Engineer Intern",
        duration: "Jun 2021 - Sep 2022",
        link: "https//sdfasdfad.com",
        description: [
            "afasdfasdfasdf",
            "asdfasdfasdfasdf"
        ],
        skills: [
            "Angular",
            "Javascript",
            "Node.js",
        ]
    }
]

export const projectsData = [
    {
        title: "BreadBox"
    }
]

export const contactsData = [
    {
        email: "shivypat02@gmail.com",
        github: "https",
        linkedIn: "adfa",
    }
]

export const navData = [
  {
    name: "Experience",
    link: "/",
    icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "Projects",
    link: "/about",
    icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "Dashboard",
    link: "/contact",
    icon: (
      <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
    ),
  },
];