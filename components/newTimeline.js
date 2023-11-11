import React from "react";
import SectionHeading from "./section-heading";
import { BiLogoAmazon } from "react-icons/bi";
import { timelineData } from "@/lib/data";
const Timeline = () => {
  return (
    <section className="mb-24 lg:max-w-[80rem] w-full text-center px-4 lg:px-10  leading-8 scroll-m-24 sm:scroll-mt-28">
      <SectionHeading>Timeline</SectionHeading>
      <article className="h-screen w-full bg-red-500">
        <div className="h-full w-full bg-red-400 relative">
          {/* middle bar */}
          <div className="bg-gray-200 my-24 h-[80%] w-1 rounded-full hidden sm:block absolute top-5 left-1/2 "></div>
          {/* experiences */}
          <div className="top-5 left-[46%]  absolute flex items-center">
            <BiLogoAmazon className="h-24 w-24 rounded-full border-8 border-blue-600 flex-shrink-0"></BiLogoAmazon>
            {/* connector */}
            <div className="bg-gray-400 my-24 h-2 w-20  hidden sm:block "></div>
            <div className="bg-gray-400 my-24  rounded-lg ">
              <h1>Front-End Developer</h1>
              <h2>Orlando, FL</h2>
              <p>
                I'm now a full-stack developer working as a freelancer. My stack
                includes React, Next.js, TypeScript, Tailwind, Prisma and
                MongoDB. I'm open to full-time opportunities.
              </p>
              <h1>2021 - present</h1>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Timeline;
