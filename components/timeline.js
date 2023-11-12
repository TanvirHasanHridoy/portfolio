"use client";

import React from "react";
import SectionHeading from "./section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { timelineData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { InView, useInView } from "react-intersection-observer";

export default function Timeline() {
  const { ref } = useSectionInView("Timeline");

  // const {  inView } = useInView({
  //   threshold: 0.2,
  // });

  return (
    <section
      id="timeline"
      ref={ref}
      className="scroll-mt-28 mb-28 sm:mb-40 text-center"
    >
      <SectionHeading>Timeline</SectionHeading>
      <VerticalTimeline lineColor="#82a6ea">
        {timelineData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              // intersectionObserverProps={ref}
              className="vertical-timeline-element--work"
              visible={true}
              contentStyle={{
                background: "rgba(255, 0, 255, 0.05)",
                boxShadow: "none",
                border: "1px solid rgba(0, 230, 0, 0.05)",
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              contentArrowStyle={{
                borderRight: "0.4rem solid rgba(255, 255, 255, 0.5)",
              }}
              date={item.date}
              icon={item.icon}
              iconStyle={{
                background: "rgba(255, 255, 255, 0.15)",
                fontSize: "1.5rem",
                color: "#82a6ea",
              }}
            >
              <h3 className="font-semibold capitalize">{item.title}</h3>
              <p className="font-normal !mt-0">{item.location}</p>
              <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
                {item.description}
              </p>
              <div className="flex flex-wrap gap-x-3 mt-4">
                {item.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="inline-block px-2 py-0.5 text-xs rounded-full font-semibold uppercase bg-gray-200 dark:bg-gray-900"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}
