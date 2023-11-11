/* eslint-disable react/no-unescaped-entities */
"use client";
import Image from "next/image";
import React, { useContext, useEffect } from "react";
import { delay, motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsGithub, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/Hi";
import { useInView } from "react-intersection-observer";
import { activeSectionContext } from "@/context/active-section-context";
import { useSectionInView } from "@/lib/hooks";

const Intro = () => {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActive, setTimeOfLastClick } = useContext(activeSectionContext);

  return (
    <section
      className="mb-28 max-w-[50rem] text-center sm:mb-0  scroll-mt-40"
      id="home"
      ref={ref}
    >
      <div className=" flex justify-center items-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <Image
              className="h-24 w-24 rounded-full border-[0.35rem] border-white object-cover shadow-xl "
              width="192"
              priority={true}
              height="192"
              quality="95"
              alt="img"
              src="/img.jpg"
            />
          </motion.div>
          <motion.span
            className="text-2xl absolute bottom-0 right-0 outline-none "
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>
      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I'm Hridoy.</span> I'm a{" "}
        <span className="font-bold">Software Engineer</span> specializing in{" "}
        <span className="font-bold">frontend development</span> with around{" "}
        <span className="font-bold">2 years</span> of{" "}
        <span className="font-bold">profesional</span> experience. I enjoy
        building <span className="italic">sites & apps</span>. My focus is{" "}
        <span className="underline">React (Next.js)</span>.
      </motion.h1>
      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.2,
        }}
      >
        <Link
          className="hover:z-20 group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110  focus:bggray-900 hover:bg-gray-900 active:scale-105 focus:outline-none transition"
          href="#contact"
          onClick={() => {
            setActive("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me
          <BsArrowRight className="group-hover:scale-110 group-hover:translate-x-2 transition" />{" "}
        </Link>

        <a
          href="/CV_Hridoy.pdf"
          download
          className="hover:z-20 group border border-black/10 bg-white cursor-pointer  px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110  focus:bggray-900  active:scale-105 focus:outline-none transition"
        >
          Download CV{" "}
          <HiDownload className=" group-hover:animate-bounce transition" />
        </a>

        <a
          href="https://www.linkedin.com/in/th-hridoy/"
          target="_blank"
          className="hover:z-20 bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110  focus:bggray-900  active:scale-105 focus:outline-none transition hover:text-gray-950 border border-black/10"
        >
          <BsLinkedin />
        </a>
        <a
          href="https://github.com/TanvirHasanHridoy"
          target="_blank"
          className=" hover:z-20 bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110  focus:bggray-900  active:scale-105 focus:outline-none transition hover:text-gray-950 border border-black/10"
        >
          <BsGithub />
        </a>
      </motion.div>
    </section>
  );
};

export default Intro;
