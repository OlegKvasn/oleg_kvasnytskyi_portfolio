"use client";

import { motion } from "framer-motion";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About", 0.75);

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I spent more than a decade in the{" "}
        <span className="font-medium">pharmaceutical industry</span>. Leveraging
        my strong analytical abilities and meticulous attention to detail, I've
        decided to make a career transition into the IT sector – a field that
        has captivated me for quite some time.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. <br />
        My core stack is{" "}
        <span className="font-medium">React, Next.js and TypeScript</span>. I am
        also familiar with Node.js, Express.js and MongoDB. I am always looking
        to learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a front-end
        developer.
      </p>
      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, visiting music concerts, traveling and playing with my cat.
      </p>
    </motion.section>
  );
}
