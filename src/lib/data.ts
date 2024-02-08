import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Fron-End Developer",
    location: "Kyiv, UA",
    description:
      "I'm now a front-end developer working on my own Pet Projects. My stack includes React, Next.js, TypeScript, Tailwind, and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "05.2023 - present",
  },
  {
    title: "Senior Trade Marketing Manager",
    location: "JSC «Farmak»",
    description: `I worked for ten years in the pharmacy market,
developing essential soft skills like attention to detail, analytical thinking, and effective
communication that could apply to my IT-specialist's professional journey.
`,
    icon: React.createElement(CgWorkAlt),
    date: "2018 - 2022",
  },
  {
    title: "Medical Sales Representative",
    location: "JSC «Farmak»",
    icon: React.createElement(CgWorkAlt),
    date: "2012 - 2018",
  },
  {
    title: "Pharmacy",
    location: "Ternopil State Medical University",
    icon: React.createElement(LuGraduationCap),
    // icon: <LuGraduationCap/>,
    date: "2002 - 2010",
  },
];

export const projectsData = [
  {
    title: "Berry-Bar",
    description: "A fullstack app for restaurant (In progress)",
    tags: [
      "MongoDB",
      "Express",
      "React",
      "Node.js",
      "TypeScript",
      "Material UI",
      "Redux Toolkit",
      "SCSS",
    ],
    imageUrl: "/Berry-Bar.png",
    Url: "https://github.com/OlegKvasn/Berry_Bar_app_MERN/tree/main",
  },
  {
    title: "Pets-Paw",
    description: "Project created for using all features of The Cat API.",
    tags: ["React", "Next.js", "TypeScript", "CSS Modules"],
    imageUrl: "/Pets-Paw.png",
    Url: "https://pets-paw-oleg.vercel.app/",
  },
  {
    title: "Muebles-Alonso",
    description: "A web app of spanish furniture shop.",
    tags: ["React", "Next.js", "TypeScript", "CSS Modules", "Contentful"],
    imageUrl: "/Muebles-Alonso.png",
    Url: "https://muebles-alonso-es.vercel.app/",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "SCSS",
  "Tailwind",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Express",
  "Git",
  // "Prisma",
  "MongoDB",
  // "Redux",
  // "GraphQL",
  // "Apollo",

  // "PostgreSQL",
  "Framer Motion",
  "Radix UI",
  "Contentful",
] as const;
