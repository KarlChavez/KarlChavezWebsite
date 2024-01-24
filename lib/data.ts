import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

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
    title: "Freelance Web Developer",
    location: "Remote",
    description:
      "During my sophomore year of college, I decided to explore web development. I began by watching YouTube videos about HTML, CSS, and JavaScript to create basic websites. Then, I opened a Fiverr account, a freelance service marketplace, and crafted websites for friends and neighbors for free!",
    icon: React.createElement(LuGraduationCap),
    date: "2022 (July - Aug)",
  },
  {
    title: "Front-End Bootcamp",
    location: "Remote",
    description:
      'I loved creating websites over the summer, so I decided to buy a Front-end bootcamp from Scrimba called "The Front-End Developer Career Path." It includes 70+ hours of tutorials, hundreds of coding challenges, and dozens of real-world projects using HTML, CSS, JS, React.js, Firebase, Responsive Design, and many more web tools.',
    icon: React.createElement(CgWorkAlt),
    date: "2022 - 2023 (Nov - July)",
  },
  {
    title: "Front-end Developer Internship at Bass Pro Shops",
    location: "Springfield, MO",
    description:
      "I worked full-time with the Buying Team, responsible for the checkout/shopping cart and payment system on the Bass Pro Shop e-commerce website. I extensively utilized React.js, Next.js, Recoil (for state management), SCSS, and TypeScript.",
    icon: React.createElement(FaReact),
    date: "2023 (May - Aug)",
  },
  {
    title: "Continued Front-end Developer Internship at Bass Pro Shops",
    location: "Remote",
    description:
      "I currently work part-time remotely with the Shopping Team, focusing on the 'shopping aspect' of a website. This involves tasks such as browsing through items, enhancing search functionality, and curating a selection of items tailored to meet customer needs. I am currently working part-time as I finish my last semester as a full-time student",
    icon: React.createElement(FaReact),
    date: "2023 - Present (Aug - )",
  },
] as const;

export const projectsData = [
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;
