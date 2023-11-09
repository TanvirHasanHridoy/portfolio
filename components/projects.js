"use client";

import React, { useContext, useEffect } from "react";
import SectionHeading from "./section-heading";
import { useInView } from "react-intersection-observer";
import { activeSectionContext } from "@/context/active-section-context";
import Project from "./project";
import { projectsData } from "@/lib/data";

const Projects = () => {
  const { ref, inView } = useInView({ threshold: 0.6 });
  const { setActive } = useContext(activeSectionContext);
  useEffect(() => {
    if (inView) {
      setActive("Projects");
    }
  }, [inView, setActive]);

  return (
    <section
      ref={ref}
      className="mb-28 w-full text-center sm:mb-40 leading-8 scroll-m-24 sm:scroll-mt-28 relative flex flex-col items-center"
      id="projects"
    >
      <SectionHeading>My Projects</SectionHeading>
      {/* BLOBS */}
      {/* <div class="absolute top-40 -left-4 w-72 h-72 md:w-96 md:h-96  bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div class="absolute top-40 -right-4 w-72 h-72 md:w-96 md:h-96 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <div class="absolute top-72 left-20 w-72 h-72 md:w-96 md:h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div> */}
      <div className="max-w-max md:p-10 ">
        {projectsData.map((project, index) => {
          return <Project key={index} project={project} />;
        })}
      </div>
    </section>
  );
};

export default Projects;
