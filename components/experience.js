"use client";
import React, { useContext, useEffect } from "react";
import SectionHeading from "./section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experience } from "@/lib/data";
import { useInView } from "react-intersection-observer";
import { activeSectionContext } from "@/context/active-section-context";
import { useSectionInView } from "@/lib/hooks";

const Experience = () => {
  const { ref } = useSectionInView("Timeline");

  return (
    <section
      ref={ref}
      id="timeline"
      className="mb-28 max-w-[50rem] text-center sm:mb-40 leading-8 scroll-m-24 sm:scroll-mt-28 "
    >
      <SectionHeading>Experience</SectionHeading>
      <VerticalTimeline className="">
        {experience.map((item, index) => (
          <VerticalTimelineElement
            key={index}
            icon={item.icon}
            date={item.date}
          >
            <h3>{item.title}</h3>
            <div></div>
            <p>{item.location}</p>
            <p>{item.description}</p>
          </VerticalTimelineElement>
        ))}

        {/* <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#85CCCC" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="2011 - present"
        >
          <h3 className="vertical-timeline-element-title">Creative Director</h3>
          <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
          <p>
            Creative Direction, User Experience, Visual Design, Project
            Management, Team Leading
          </p>
        </VerticalTimelineElement> */}
      </VerticalTimeline>
    </section>
  );
};

export default Experience;
