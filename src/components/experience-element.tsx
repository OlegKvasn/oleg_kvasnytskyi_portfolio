"use client";

import { VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { useInView } from "react-intersection-observer";
import { experiencesData } from "@/lib/data";

type ExperienceElementProps = (typeof experiencesData)[number];

export default function ExperienceElement({
  element,
}: {
  element: ExperienceElementProps;
}) {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });
  return (
    <div ref={ref} className="vertical-timeline-element">
      <VerticalTimelineElement
        visible={inView}
        contentStyle={{
          background: "#f3f4f6",
          boxShadow: "none",
          border: "1px solid rgba(0, 0, 0, 0.05)",
          textAlign: "left",
          padding: "1.3rem 2rem",
        }}
        contentArrowStyle={{
          borderRight: "0.4rem solid #9ca3af",
        }}
        date={element.date}
        icon={element.icon}
        iconStyle={{
          background: "white",
          fontSize: "1.5rem",
        }}
      >
        <h3 className="font-semibold capitalize">{element.title}</h3>
        <p className="font-normal !mt-0">{element.location}</p>
        <p className="!mt-1 !font-normal text-gray-700">
          {element.description}
        </p>
      </VerticalTimelineElement>
    </div>
  );
}
