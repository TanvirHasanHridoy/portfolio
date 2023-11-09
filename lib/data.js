import React from "react";

import img from "@/public/img.jpg";

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
    imageUrl: img,
  },
  {
    title: "Netflix Clone",
    description:
      "This is a hobby project I created with The Movie DB API. I created this project with React, Tailwindcss",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: img,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: img,
  },
];
