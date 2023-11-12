"use client";
import React, { useContext, useEffect } from "react";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";
import { activeSectionContext } from "@/context/active-section-context";
import { useInView } from "react-intersection-observer";
import { mySkills } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

const Skills = () => {
  const { ref } = useSectionInView("Skills", 0);

  return (
    <section
      ref={ref}
      className="mb-28 max-w-[50rem] text-center sm:mb-40 leading-8 scroll-m-24 sm:scroll-mt-28 h-screen "
      id="skills"
    >
      <SectionHeading>My Skills</SectionHeading>
      {/* GRID TO SHOW MY SKILLS */}
      {/* <ul className="sm:mt-20 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-4 mx-auto "> */}
      <ul className="flex flex-wrap justify-center gap-y-6 md:gap-10 text-lg text-gray-800 md:mt-24 relative">
        <div class="absolute top-10 -left-4 w-72 h-72 md:w-96 md:h-96  bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div class="absolute top-40 -right-4 w-72 h-72 md:w-96 md:h-96 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div class="absolute top-28 left-26 w-72 h-72 md:w-96 md:h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        {mySkills.map((skill, index) => {
          return (
            <motion.li
              className="group hover:bg-red-600 z-50 bg-white outline-double sm:outline-dashed borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80 flex items-center gap-1 hover:drop-shadow-2xl  cursor-pointer"
              key={index}
              custom={index}
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
            >
              <div className="font-bold  group-hover:text-white ">
                {skill.name}
              </div>
              <span className=" group-hover:text-white "> {skill.icon}</span>
            </motion.li>
          );
        })}
      </ul>
    </section>
  );
};

export default Skills;
