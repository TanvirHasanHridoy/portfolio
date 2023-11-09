import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const Project = ({ key, project }) => {
  return (
    <div className="flex flex-col sm:flex-row mb-10  bg-gray-200 p-2 sm:p-10 rounded-lg w-full  ">
      <div className="sm:flex-1 bg-slate-700 h-[250px] sm:h-[400px] relative md:rounded-full xl:rounded-lg drop-shadow-2xl">
        <Image
          src={project.imageUrl}
          alt="Project I worked on"
          quality={95}
          className="p-4 md:p-10 h-full w-full object-cover object-center hover:scale-105 transition hover:translate-x-3 hover:rotate-2 rounded-xl"
        ></Image>
      </div>
      <div className="sm:flex-1 sm:h-[400px] flex flex-col justify-around text-center ">
        <div className="flex flex-col justify-between mt-4">
          <h1 className="text-xl font-bold ">{project.title}</h1>
          <p className="p-2">{project.description}</p>
        </div>
        <div className="">
          <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto p-4 text-center ">
            {project.tags.map((tag, index) => (
              <li
                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Project;
