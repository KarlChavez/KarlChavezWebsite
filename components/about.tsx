"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

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
        Coding has always been a passion for me since high school, but it wasn’t
        until my sophomore year of college that I specifically narrowed my
        expertise, which is web development. After doing some freelance work by
        creating free websites for friends and neighbors, I enrolled in a coding
        boot camp and learned front-end development. Later, I used my skills in
        an internship at Bass Pro Shops. I am currently a Front-end Developer
        Intern but am{" "}
        <span className="underline">
          looking for a full-time position in front-end or full-stack web
          development after graduating in May 2024.
        </span>
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy lifting
        weights, hiking, planning my next trip, and spending time with family
        and friends :) 🏋️🥾✈️👪
      </p>
    </motion.section>
  );
}
