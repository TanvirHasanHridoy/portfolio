"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";
import SubmitBtn from "./submit-btn";

const Contact = () => {
  const { ref } = useSectionInView("Contact", 0);
  return (
    <section
      ref={ref}
      className="scroll-mt-28 mb-28 sm:mb-40 text-center "
      id="contact"
    >
      <SectionHeading>Contact Me</SectionHeading>
    </section>
  );
};

export default Contact;
