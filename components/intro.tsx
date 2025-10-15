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

  const startYear = 2020;
  const currentYear = new Date().getFullYear();
  const yearsOfExperience = currentYear - startYear;
  return (
    <section
      ref={ref}
      id="home"
      className="relative mx-auto max-w-6xl px-4 md:px-6 py-10 md:py-6 scroll-mt-24"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center gap-10 md:grid-cols-12">
        {/* Content */}
        <div className="md:order-1 order-2 md:col-span-7">
          {language === "fr" ? (
            <motion.h1
              className="mb-4 text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <span className="text-gray-900 dark:text-white">
                Développeur Full Stack
              </span>{" "}
              <br />{" "}
              <span className="bg-gradient-to-r from-indigo-500 to-cyan-500 bg-clip-text text-transparent">
                {yearsOfExperience}+ ans d’expérience
              </span>
            </motion.h1>
          ) : (
            <motion.h1
              className="mb-4 text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <span className="text-gray-900 dark:text-white">
                Full Stack Developer
              </span>{" "}
              <br />{" "}
              <span className="bg-gradient-to-r from-indigo-500 to-cyan-500 bg-clip-text text-transparent">
                {yearsOfExperience}+ years experience
              </span>
            </motion.h1>
          )}

          {/* Subcopy */}
          {language === "fr" ? (
            <motion.p
              className="mb-6 text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 }}
            >
              Je maîtrise{" "}
              <span className="font-medium">React, Next.js et TypeScript</span>{" "}
              pour le front-end, ainsi que{" "}
              <span className="font-medium">Node.js et Java/Spring Boot</span>{" "}
              pour le back-end. <br />
              Passionné par la création de solutions performantes et bien
              structurées, j’aime collaborer avec les équipes pour livrer des
              produits de qualité et faciles à maintenir.
            </motion.p>
          ) : (
            <motion.p
              className="mb-6 text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 }}
            >
              I’m skilled in{" "}
              <span className="font-medium">
                React, Next.js, and TypeScript
              </span>{" "}
              for front-end development, as well as{" "}
              <span className="font-medium">Node.js and Java/Spring Boot</span>{" "}
              for the back end. <br />
              Passionate about creating high-performance, well-structured
              solutions, I enjoy collaborating with teams to deliver quality,
              maintainable products.
            </motion.p>
          )}

          {/* CTAs */}
          <motion.div
            className="flex flex-wrap items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
          >
            <Link
              href="#contact"
              aria-label={
                language === "fr"
                  ? "Aller au formulaire de contact"
                  : "Go to contact form"
              }
              className="group inline-flex h-12 items-center justify-center rounded-full px-8 text-base font-semibold
                     bg-gray-900 text-white shadow-lg shadow-black/10 ring-1 ring-black/5
                     transition-transform duration-200 hover:scale-[1.03] active:scale-[0.98]
                     dark:bg-white dark:text-black dark:shadow-white/10"
              onClick={() => {
                setActiveSection("Contact");
                setTimeOfLastClick(Date.now());
              }}
            >
              {language === "fr" ? "Me contacter" : "Contact me"}
              <BsArrowRight className="ml-2 opacity-80 transition-transform group-hover:translate-x-1" />
            </Link>

            <a
              href="/resume-fr.pdf"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={
                language === "fr" ? "Télécharger mon CV" : "Download my resume"
              }
              className="inline-flex h-12 items-center justify-center rounded-full px-8 text-base font-semibold
                     bg-white text-gray-900 ring-1 ring-gray-200 shadow-sm
                     transition-transform duration-200 hover:scale-[1.03] active:scale-[0.98]
                     dark:bg-white/10 dark:text-white dark:ring-white/10"
            >
              {language === "fr" ? "Télécharger CV" : "Download CV"}
              <HiDownload className="ml-2 opacity-80 transition-transform group-hover:translate-y-0.5" />
            </a>

            <div className="ml-1 flex items-center gap-2">
              <a
                href="https://www.linkedin.com/in/mourad-el-mehammedi-47725a17a/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full
                       bg-white text-gray-700 ring-1 ring-gray-200 shadow-sm
                       transition-transform hover:scale-105 active:scale-95
                       dark:bg-white/10 dark:text-white/70 dark:ring-white/10"
              >
                <BsLinkedin />
              </a>

              <a
                href="https://github.com/MouradElmehammedi"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full
                       bg-white text-gray-700 ring-1 ring-gray-200 shadow-sm
                       transition-transform hover:scale-105 active:scale-95
                       dark:bg-white/10 dark:text-white/70 dark:ring-white/10"
              >
                <FaGithubSquare />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Portrait */}
        <div className="md:order-2 order-1 md:col-span-5 flex justify-center md:justify-end">
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ type: "tween", duration: 0.35 }}
            className="relative"
          >
            <Image
              src={myImage}
              alt="Mourad — portrait"
              width={480}
              height={480}
              priority
              quality={95}
              className="aspect-square w-full max-w-[420px] rounded-3xl object-cover
                     shadow-xl ring-1 ring-black/5 dark:ring-white/10"
            />
            {/* subtle glow */}
            <div className="pointer-events-none absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-r from-indigo-500/10 to-cyan-500/10 blur-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
