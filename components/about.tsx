"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");
  const startYear = 2019;
  const currentYear = new Date().getFullYear();
  const yearsOfExperience = currentYear - startYear;
  console.log(yearsOfExperience);
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
        As a passionate{" "}
        <span className="font-medium">Full Stack Developer</span>, I'm on a
        mission to transform creative ideas into seamless digital experiences.
        With expertise in <span className="underline">JavaScript</span>,{" "}
        <span className="underline">TypeScript</span>,{" "}
        <span className="underline">React.js</span>, and{" "}
        <span className="underline">Next.js</span>, I specialize in crafting
        elegant web solutions that users love. Currently contributing my skills
        at <span className="font-medium">H2C Development</span> for over{" "}
        <span className="font-medium">{yearsOfExperience} years</span>, I'm
        driven by a commitment to excellence. Holding an Engineer's degree in
        Computer Software Engineering from{" "}
        <span className="font-medium">SUPMTI-OUJDA</span> and a Bachelor's in
        Computer Development from the{" "}
        <span className="font-medium">
          Specialized Institute Of Applied Technology NTIC
        </span>
        , I've built a strong foundation for my career. Let's connect and
        explore innovative opportunities together.
      </p>

      {/* <p className="mb-3">
        After graduating with a degree in{" "}
        <span className="font-medium">Accounting</span>, I decided to pursue my
        passion for programming. I enrolled in a coding bootcamp and learned{" "}
        <span className="font-medium">full-stack web development</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          React, Next.js, Node.js, and MongoDB
        </span>
        . I am also familiar with TypeScript and Prisma. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p> */}

      {/* <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching movies, and playing with my dog. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">history and philosophy</span>. I'm also
        learning how to play the guitar.
      </p> */}
    </motion.section>
  );
}
