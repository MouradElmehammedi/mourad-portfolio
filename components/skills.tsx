"use client";

import React from "react";
import {
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiNestjs,
  SiMysql,
  SiMongodb,
  SiExpress,
  SiGit,
  SiNodedotjs,
  SiReact,
  SiHtml5,
  SiCss3,
  SiSass,
  SiNextdotjs,
  SiPrisma,
  SiGraphql,
  SiPostgresql
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import { DiScrum } from "react-icons/di";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";



const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

const skillsData = [

    { name: "JAVASCRIPT", logo: <SiJavascript /> },
    { name: "TYPESCRIPT", logo: <SiTypescript /> },
    { name: "NODE.JS", logo: <SiNodedotjs /> },
  

    { name: "REACT.JS", logo: <SiReact /> },
    { name: "NEXT.JS", logo: <SiNextdotjs /> },
    {
      name: "REACT-NATIVE",
      logo: <TbBrandReactNative />,
    },
  

    { name: "HTML5", logo: <SiHtml5 /> },
    { name: "CSS3", logo: <SiCss3 /> },
    { name: "SASS", logo: <SiSass /> },
    { name: "TAILWIND CSS", logo: <SiTailwindcss /> },
  

    { name: "MySQL", logo: <SiMysql /> },
    { name: "NEST.JS", logo: <SiNestjs /> },
    { name: "MONGODB", logo: <SiMongodb /> },
    { name: "EXPRESS.JS", logo: <SiExpress /> }, 
    { name: "Prisma", logo: <SiPrisma /> },
    { name: "GraphQL", logo: <SiGraphql /> }, 
    { name: "PostgreSQL", logo: <SiPostgresql /> },

    { name: "GIT", logo: <SiGit /> },
    { name: "SCRUM", logo: <DiScrum /> },
  
];

export default function Skills() {
  const { ref } = useSectionInView("Skills");

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>My skills</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {skillsData.map((skill, index) => (
          <motion.li
            className="flex justify-between items-center gap-2 bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80"
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            <div>{skill.logo}</div>
            <div>{skill.name}</div>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
