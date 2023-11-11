import Image from "next/image";
import React, { useContext, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { activeSectionContext } from "@/context/active-section-context";
import Link from "next/link";
import { BsGithub } from "react-icons/bs";

const Project = ({ key, project }) => {
  //   const { ref } = useSectionInView("Projects", 0.5);
  //   const ref = useRef(null);

  return (
    <article
      //   ref={ref}
      className={`flex flex-col sm:flex-row mb-10  ${
        project.index_number % 2 === 0 ? " " : "sm:flex-row-reverse"
      } bg-gray-200 p-2 sm:p-10  rounded-lg w-full hover:bg-gray-300 hover:scale-[1.02]  `}
    >
      <div className="sm:flex-1 bg-slate-700 h-[250px] sm:h-[400px] relative rounded-lg  drop-shadow-2xl overflow-hidden">
        <Image
          src={project.imageUrl}
          alt="Project I worked on"
          quality={95}
          className="p-4 md:p-10 h-full w-full object-scale-down hover:scale-125 object-center  transition hover:translate-x-3 hover:rotate-2 rounded-xl"
        ></Image>
      </div>
      <div className="sm:flex-1 sm:h-[400px] flex flex-col justify-around text-center ">
        <div className="flex flex-col justify-between mt-4">
          <h1 className="text-xl font-bold ">{project.title}</h1>
          <p className="p-2">{project.description}</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto p-4 text-center ">
            {project.tags.map((tag, index) => (
              <li
                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70 hover:scale-110 hover:z-10 hover:bg-red-700 cursor-pointer"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
          <div>
            <a
              target="_blank"
              href={project.gitHubUrl}
              rel={project.title}
              className="flex items-center gap-4 text-2xl font-bold hover:scale-110"
            >
              GITHUB
              <BsGithub size={40} />
            </a>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Project;
