"use client";
import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="mb-28 max-w-[50rem] text-center sm:mb-40 leading-8  ">
      <h2 className=" text-3xl mb-10">About me </h2>

      <motion.p
        initial={{
          opacity: 0,
          y: 100,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
      >
        Hey, this is <span className="font-bold"> Hridoy</span> here 🙋‍♂️! I am a
        <span className="font-bold"> Software Engineer 💻</span> specializing in{" "}
        <span className="font-bold">Frontend development.</span> I currently
        have a bachelors degree 🎓 in{" "}
        <span className="font-bold">Computer science </span> from a renowned
        university in Bangladesh. After my graduation, I have worked in
        different companies in different roles. My favorite tech stack to work
        in is{" "}
        <span className="font-bold text-red-800 ">
          React, Next.js, Sanity.io, Tailwindcss.{" "}
        </span>{" "}
        I also feel confident coding in{" "}
        <span className="font-bold text-red-800 ">TypeScript </span> as well. I{" "}
        <span className="underline">love</span> learing new things and explore
        diffrent technologies. I <span className="underline">feel awesome</span>{" "}
        to complete tasks that{" "}
        <span className="italic font-bold"> challenges</span> me. Currently, I
        am doing my masters from a{" "}
        <span className="font-bold md:text-xl">German University</span> and I am
        looking for a <span className="font-bold md:text-xl">Part-time</span>{" "}
        job.
      </motion.p>

      <motion.p
        initial={{
          opacity: 0,
          y: 100,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        className="mt-6"
      >
        I love meeting new people and making new friends who are{" "}
        <span className="font-bold">authentic and honest</span> 🤝. I think am
        quite <span className="font-bold">sociable</span> with people as well.
        In my <span className="font-bold">free time</span> I love watcing{" "}
        <span className="font-bold">movies 🍿, football⚽ </span> and{" "}
        <span className="font-bold">playing games 🎮</span>. I also love learing
        about <span className="font-bold">history</span> and playing with my
        cat, <span className="font-bold"> Tom</span>! 😺
      </motion.p>
    </section>
  );
};

export default About;