"use client";
import React, { useContext, useEffect } from "react";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";
import { activeSectionContext } from "@/context/active-section-context";
import { useInView } from "react-intersection-observer";
import { mySkills } from "@/lib/data";
import { BiLogoNodejs } from "react-icons/bi";

const Skills = () => {
  const { ref, inView } = useInView({ threshold: 0.6 });
  const { setActive } = useContext(activeSectionContext);
  useEffect(() => {
    if (inView) {
      console.log("in about now");
      setActive("Skills");
    }
  }, [inView, setActive]);

  return (
    <section
      ref={ref}
      className="mb-28 w-2/3 max-w-[50rem] text-center sm:mb-20 leading-8 scroll-m-24 sm:scroll-mt-28 "
      id="skills"
    >
      <SectionHeading>My Skills</SectionHeading>
      {/* GRID TO SHOW MY SKILLS */}
      <div className="sm:mt-20 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-4 ">
        {mySkills.map(({ name }, { icon }, index) => {
          return (
            <div
              className="p-3 bg-red-400 rounded-lg flex justify-around items-center"
              key={index}
            >
              <div className="font-bold ">{name}</div>
              <BiLogoNodejs className="" />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
