import React from "react";

import img from "@/public/img.jpg";
import netflix from "@/public/netflix.png";
import raab_ug from "@/public/raab-ug.png";

// icons
import {
  BiLogoDjango,
  BiLogoPython,
  BiLogoCPlusPlus,
  BiLogoNodejs,
  BiLogoJavascript,
  BiLogoTypescript,
  BiLogoReact,
  BiLogoGit,
  BiLogoTailwindCss,
  BiLogoXing,
  BiSolidGraduation,
} from "react-icons/bi";
import { DiCss3 } from "react-icons/di";
import {
  SiNextdotjs,
  SiMysql,
  SiCsharp,
  SiRedux,
  SiPostman,
} from "react-icons/si";
import { TbBrandFramerMotion, TbBrandReactNative } from "react-icons/tb";
import { CgScrollV } from "react-icons/cg";
import { BsPersonWorkspace } from "react-icons/bs";
import { MdWorkOutline } from "react-icons/md";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Timeline",
    hash: "#timeline",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
];

export const projectsData = [
  {
    index_number: 1,
    title: "RAAB UG",
    description:
      "Here, I have created a simple portfolio for a spare and machinary parts distrubutor situated in Germany.",
    tags: ["HTML", "Tailwindcss", "PHP MyAdmin", "Email.js", "JavaScript"],
    imageUrl: raab_ug,
    gitHubUrl: "https://github.com/TanvirHasanHridoy/RAAB-UG",
  },
  {
    index_number: 2,
    title: "Netflix Clone",
    description:
      "This is a hobby project I created with The Movie DB API. I created this project with React, Tailwindcss",
    tags: ["React", "Tailwindcss", "ContextAPI", "TheMovieDB"],
    imageUrl: netflix,
    gitHubUrl: "https://github.com/TanvirHasanHridoy/Netflix-Mod-New",
  },
  {
    index_number: 3,
    title: "Recipe Forest",
    description:
      "A simple app where you can seacrh recipes from an API server. It will show you different recipes based on your search term.",
    tags: ["HTML", "Tailwindcss", "TheMealDB", "Framer-motion", "GSAP"],
    imageUrl: netflix,

    gitHubUrl: "https://github.com/TanvirHasanHridoy/Netflix-Mod-New",
  },
];

export const mySkills = [
  {
    name: "HTML",
    icon: <BiLogoNodejs />,
  },
  {
    name: "POSTMAN",
    icon: <SiPostman />,
  },
  {
    name: "CSS",
    icon: <DiCss3 />,
  },
  {
    name: "JavaScript",
    icon: <BiLogoJavascript />,
  },
  {
    name: "TypeScript",
    icon: <BiLogoTypescript />,
  },
  {
    name: "React",
    icon: <BiLogoReact />,
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs />,
  },
  {
    name: "Git",
    icon: <BiLogoGit />,
  },
  {
    name: "Tailwind",
    icon: <BiLogoTailwindCss />,
  },
  {
    name: "Framer-motion",
    icon: <TbBrandFramerMotion />,
  },
  {
    name: "GSAP",
    icon: <CgScrollV />,
  },
  {
    name: "Redux",
    icon: <SiRedux />,
  },
  {
    name: "React Native",
    icon: <TbBrandReactNative />,
  },
  {
    name: "Context API",
    icon: <BiLogoXing />,
  },
  {
    name: "MySQL",
    icon: <SiMysql />,
  },
  {
    name: "Django",
    icon: <BiLogoDjango />,
  },
  {
    name: "Python",
    icon: <BiLogoPython />,
  },
  {
    name: "C",
    icon: <BiLogoCPlusPlus />,
  },
  {
    name: "C++",
    icon: <BiLogoCPlusPlus />,
  },
  {
    name: "C#",
    icon: <SiCsharp />,
  },
];

export const timelineData = [
  {
    index_number: 1,
    title: "Bachelor's Degree",
    location: "Bangladesh",
    description:
      "I completed my Bachelor's Degree in Computer Science and Software Engineering at the American International University-Bangladesh.",
    tags: ["CSSE", "Bachelors", "Graduation"],
    date: "11-September-2021",
    icon: <BiSolidGraduation />,
  },
  {
    index_number: 2,
    title: "Software Engineer Intern",
    location: "Moakhali DOHS, Bangladesh",
    description:
      "I started working here as a Software Engineer Intern, as part of my university's mandatory internship.  ",
    tags: ["React", "React-Native", "HTML", "CSS", "JavaScript", "Selenium"],
    date: "30-September-2019 to 30-December-2019",
    icon: <BsPersonWorkspace />,
  },
  {
    index_number: 3,
    title: "Software Engineer",
    location: "Moakhali DOHS, Bangladesh",
    description:
      "After the COVID-19 situation normalized, I again started working in the same company, this time as a Software Engineer. I also upskilled to the full stack.",
    tags: [
      "React",
      "React-Native",
      "Node.js",
      "TypeScript",
      "JEST",
      ".NET",
      "Expresss.js",
      "Sanity",
    ],
    date: "1-January-2022 to 30-September-2022",
    icon: <MdWorkOutline />,
  },
];
