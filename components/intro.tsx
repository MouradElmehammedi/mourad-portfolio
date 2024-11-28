"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import myImage from "@/public/about.png";
import { useLanguage } from "@/context/lang-switch-context";

export default function Intro() {
  const { ref } = useSectionInView("À propos", 0.5);
  const { language } = useLanguage();
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  const [selectedCV, setSelectedCV] = useState("en");

  const handleCVChange = (event: any) => {
    setSelectedCV(event.target.value);
  };

  const cvLinks = {
    en: "/resume-en.pdf",
    fr: "/resume-fr.pdf",
  };
  const startYear = 2019;
  const currentYear = new Date().getFullYear();
  const yearsOfExperience = currentYear - startYear;
  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src={myImage}
              alt="Ricardo portrait"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>

          <motion.span
            className="absolute bottom-0 right-0 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>

      {language === "fr" ? (
        <motion.h1
          className="mb-10 mt-4 px-4 text-md font-light !leading-[1.5] sm:text-2xl"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {" "}
          <span className="font-medium">Développeur Full Stack</span> avec{" "}
          <span className="font-medium">{yearsOfExperience} années</span>{" "}
          d'expérience dans la conception et la mise en œuvre d'{" "}
          <span>applications web</span> en utilisant des technologies modernes.
          Spécialisé dans le développement front-end et back-end, avec un fort
          accent sur <span className="underline">React.js</span>,{" "}
          <span className="underline">Angular</span>,{" "}
          <span className="underline">TypeScript</span> pour le front-end, et{" "}
          <span className="underline">Java</span>,{" "}
          <span className="underline">Spring Boot</span>,{" "}
          <span className="underline">Node.js</span> pour le back-end.
        </motion.h1>
      ) : (
        <motion.h1
          className="mb-10 mt-4 px-4 text-md font-light !leading-[1.5] sm:text-2xl"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="font-medium">Full Stack Developer</span> with{" "}
          <span className="font-medium">{yearsOfExperience} years</span> of
          experience in designing and implementing <span>web applications</span>{" "}
          using modern technologies. Specialized in front-end and back-end
          development, with a strong focus on{" "}
          <span className="underline">React.js</span>,{" "}
          <span className="underline">Angular</span>,{" "}
          <span className="underline">TypeScript</span> for the front-end, and{" "}
          <span className="underline">Java</span>,{" "}
          <span className="underline">Spring Boot</span>,{" "}
          <span className="underline">Node.js</span> for the back-end.
        </motion.h1>
      )}

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          {language === "fr" ? "Contactez-moi ici" : "Contact me here"}{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>

        <a
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
          href={language === "fr" ? "/resume-fr.pdf" : "/resume-en.pdf"}
          target="_blank"
        >
          {language === "fr" ? "Télécharger CV" : "Download CV"}{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>

        <div className="flex flex-row items-center justify-center gap-4">
          <a
            className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
            href="https://www.linkedin.com/in/mourad-el-mehammedi-47725a17a/"
            target="_blank"
          >
            <BsLinkedin />
          </a>

          <a
            className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
            href="https://github.com/MouradElmehammedi"
            target="_blank"
          >
            <FaGithubSquare />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
