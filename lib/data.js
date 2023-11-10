import React from "react";

import img from "@/public/img.jpg";
import netflix from "@/public/netflix.png";
import raab_ug from "@/public/raab-ug.png";

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
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: netflix,
    gitHubUrl: "https://github.com/TanvirHasanHridoy/Netflix-Mod-New",
  },
  {
    index_number: 3,
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: img,

    gitHubUrl: "https://github.com/TanvirHasanHridoy/Netflix-Mod-New",
  },
];

export const mySkills = [
  {
    name: "HTML",
    icon: "bi bi-html5",
  },
  {
    name: "CSS",
    icon: "bi bi-css3",
  },
  {
    name: "JavaScript",
    icon: "bi bi-javascript",
  },
  {
    name: "TypeScript",
    icon: "bi bi-php",
  },
  {
    name: "React",
    icon: "bi bi-react",
  },
  {
    name: "Next.js",
    icon: "bi bi-react",
  },
  {
    name: "Next.js",
    icon: "bi bi-react",
  },
  {
    name: "Node.js",
    icon: "bi bi-tailwind",
  },
  {
    name: "Git",
    icon: "bi bi-tailwind",
  },
  {
    name: "Tailwind",
    icon: "bi bi-tailwind",
  },
  {
    name: "Framer-motion",
    icon: "bi bi-tailwind",
  },
  {
    name: "GSAP",
    icon: "bi bi-tailwind",
  },
  {
    name: "Redux",
    icon: "bi bi-tailwind",
  },
  {
    name: "React Native",
    icon: "bi bi-tailwind",
  },
  {
    name: "Context API",
    icon: "bi bi-tailwind",
  },
  {
    name: "MySQL",
    icon: "bi bi-tailwind",
  },
  {
    name: "Django",
    icon: "bi bi-tailwind",
  },
  {
    name: "Python",
    icon: "bi bi-tailwind",
  },
  {
    name: "C",
    icon: "bi bi-tailwind",
  },
  {
    name: "C++",
    icon: "bi bi-tailwind",
  },
  {
    name: "C#",
    icon: "bi bi-tailwind",
  },
];
