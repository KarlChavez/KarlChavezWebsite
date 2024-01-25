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
    title: "Product Detail Page",
    description:
      "Worked on pricing, availability, reviews, descriptions, and badges to showcase detailed information on SKU items",
    tags: ["Next.js", "React.js", "Node.js", "TypeScript", "SCSS", "Recoil", "Jest"],
    imageUrl: corpcommentImg,
  },
  {
    title: "Checkout Page",
    description:
      "Implemented shipping functionality, including forms, credit cards, gift cards, in-store pickup availability, fees, and other shipping details",
    tags: ["Next.js", "React.js", "Node.js", "TypeScript", "SCSS", "Recoil", "Jest"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Code To Image",
    description:
      "Built a program to convert code into images, enabling users to download customizable and stylish screenshots of code",
    tags: [
      "Next.js",
      "React.js",
      "Node.js",
      "TypeScript",
      "Tailwind",
      "Firebase",
    ],
    imageUrl: wordanalyticsImg,
  },
  {
    title: "Geolocation History Events",
    description:
      "Developed a map application with local storage to save favorited historic locations, providing users with trip ideas",
    tags: [
      "Next.js",
      "React.js",
      "Node.js",
      "TypeScript",
      "Tailwind",
    ],
    imageUrl: wordanalyticsImg,
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
  "Git",
  "GitHub",
  "GitLab",
  "Java",
  "C",
  "SQL",
] as const;
