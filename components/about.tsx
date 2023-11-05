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
      I'm Majid El Mehammedy, a dedicated and passionate software developer
      with 5 years of experience in software development.
      My journey has taken me from React Native mobile app development,
      both as a full-time developer and freelancer, 
      to a role as a Software Engineer specializing in 3D design software. 
      With a background in Computer Software Engineering and 
      Computer Science, I have honed my skills in JavaScript, React, NodeJs,
      and more. I thrive on challenges, actively seeking opportunities
      to apply my expertise and contribute to innovative projects. 
      Let's connect and explore the possibilities in the dynamic world
      of software development.
      </p>




    </motion.section>
  );
}
