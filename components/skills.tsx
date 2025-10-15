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
  SiPostgresql,
  SiAngular,
} from "react-icons/si";
import { FaJava } from "react-icons/fa6";
import { BiLogoSpringBoot } from "react-icons/bi";
import { TbBrandReactNative } from "react-icons/tb";
import { DiScrum } from "react-icons/di";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/lang-switch-context";

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
  { name: "JavaScript", logo: <SiJavascript /> },
  { name: "TypeScript", logo: <SiTypescript /> },
  { name: "Java", logo: <FaJava /> },

  { name: "React", logo: <SiReact /> },
  { name: "NextJS", logo: <SiNextdotjs /> },
  {
    name: "React Native",
    logo: <TbBrandReactNative />,
  },

  { name: "NodeJS", logo: <SiNodedotjs /> },
  { name: "Spring Boot", logo: <BiLogoSpringBoot /> },

  { name: "Express", logo: <SiExpress /> },
  { name: "MySQL", logo: <SiMysql /> },
  { name: "MongoDB", logo: <SiMongodb /> },
  { name: "PostgreSQL", logo: <SiPostgresql /> },

  { name: "Tailwind CSS", logo: <SiTailwindcss /> },

  { name: "Git", logo: <SiGit /> },
  { name: "Scrum", logo: <DiScrum /> },
];

export default function Skills() {
  const { ref } = useSectionInView("Compétences");
  const { language } = useLanguage();

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>
        {language === "fr" ? "Compétences technique" : "Technical skills"}
      </SectionHeading>
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
