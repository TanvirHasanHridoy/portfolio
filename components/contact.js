"use client";

import React, { useState } from "react";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";
import SubmitBtn from "./submit-btn";
import { sendEmail } from "@/actions/sendEmail";
import toast from "react-hot-toast";
// import SubmitBtn from "./submit-btn";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSuccess = () => {
    // Your form submission logic

    // After successful submission, clear the name input
    setEmail("");
    setMessage("");
  };

  const { ref } = useSectionInView("Contact", 0);
  return (
    <section
      ref={ref}
      className="scroll-mt-28 mb-24 sm:mb-28 text-center w-[min(100%,38rem)]"
      id="contact"
    >
      <SectionHeading>Contact Me</SectionHeading>
      <p>
        You can contact me directly at{" "}
        <a
          className="font-semibold  px-1 py-2 rounded-full inline-block text-red-600 hover:scale-105"
          href="mailto:reach.hridoy@gmail.com"
        >
          reach.hridoy@gmail.com
        </a>{" "}
        or by using the from below.
      </p>

      <form
        className="mt-10 flex flex-col dark:text-black"
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            console.log("There was an error sending your email");
            console.log(error.message);
            return;
          }
          console.log("SUCceeded");
          handleSuccess();
          toast.success("Email sent successfully!");
        }}
      >
        <input
          className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          value={email}
          placeholder="Your email"
          onChange={(event) => setEmail(event.target.value)}
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="message"
          placeholder="Your message"
          required
          value={message}
          maxLength={5000}
          onChange={(event) => setMessage(event.target.value)}
        />
        <SubmitBtn />
      </form>
    </section>
  );
};

export default Contact;
