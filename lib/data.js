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
    title: "RAAB UG",
    description:
      "Here, I have created a simple portfolio for a spare and machinary parts distrubutor situated in Germany.",
    tags: ["HTML", "Tailwindcss", "PHP MyAdmin", "Email.js", "JavaScript"],
    imageUrl: raab_ug,
    gitHubUrl: "https://github.com/TanvirHasanHridoy/RAAB-UG",
  },
  {
    title: "Netflix Clone",
    description:
      "This is a hobby project I created with The Movie DB API. I created this project with React, Tailwindcss",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: netflix,
    gitHubUrl: "https://github.com/TanvirHasanHridoy/Netflix-Mod-New",
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: img,

    gitHubUrl: "https://github.com/TanvirHasanHridoy/Netflix-Mod-New",
  },
];
