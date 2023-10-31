import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import React from "react";
import Project from "./project";

export default function Projects() {
  return (
    <section className="scroll-mt-28 mb-28" id="projects">
      <SectionHeading>My projects</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
