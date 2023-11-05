import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import ecommerceStoreImg from "@/public/ecommerce-store.png";
import carQuestImg from "@/public/cars-showcase.png";
import aiGenuisImg from "@/public/ai-generation.png";
import navigram from "@/public/navigram.webp";
import fresh11 from "@/public/2.png";
import taxiApp from "@/public/1.png";
import compiler from "@/public/compiler.jpg";
import arabFit from "@/public/arabfit.png";
import hacker from "@/public/hacker.png";

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
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Education",
    hash: "#education",
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

export const educationsData = [
  {
    title: "Associate's degree in Computer Development",
    location: "ISTA, OUJDA, Morocco",
    description: "I dedicated two years of hard work and learning at ISTA, where I earned my Specialized Technician Associate's degree in Computer Development. This program equipped me with the skills and knowledge necessary to excel in the field of software development.",
    icon: React.createElement(LuGraduationCap),
    date: "2018 - 2020",
  },
  {
    title: "Engineer's degree",
    location: "SUPMTI, Oujda",
    description: "My journey in higher education led me to SUPMTI-OUJDA, where I had my Engineer's degree in Computer Software Engineering. This program allows me to deepen my understanding of software engineering and expand my technical expertise.",
    icon: React.createElement(LuGraduationCap),
    date: "2020 - 2023",
  },
] as const;

export const experiencesData = [
  {
    title: "React Native Developer",
    location: "FCPO, Oujda Morocco",
    description: `Developed multiple mobile applications using React Native in various domains,including taxi services,food delivery, sports, and e-commerce. This involved theend-to-end development process, from designto deployment.
    Created and published an NPM package, a React Native component that allowsfor interactive worldmaps with clickable continents. This package provided thecapability to configure colors and callbackfunctions for each continent.`,
    icon: React.createElement(CgWorkAlt),
    date: "October 2020 to june 2021",
  },
  {
    title: "Web Developer",
    location: "LIFETIME DEVELOPERS (Freelance)",
    description: "As a Web Developer at LIFETIME DEVELOPERS (Freelance), I specialized in creating web and mobile applications using the React.js Framework and React Native. I had the opportunity to work on diverse projects, applying my expertise to deliver high-quality solutions.",
    icon: React.createElement(CgWorkAlt),
    date: "04 May 2020 to present",
  },
  {
    title: "Full Stack Developer",
    location: "Navigram technologies",
    description: `
    Developed functionality using Navigram's internal 3D scripting language, VCL, toenhance theproduct. This included creating features such as measuringfunctions and cabinet configuration tools.
Utilized JavaScript to build modules, including a linear division module thatautomatically calculatedshelf placements in cabinets based on user-definedinput.
Worked on the front-end using HTML, CSS, UIKit, and JavaScript to implementuser interface (UI)features, enhancing the user experience of the product.
Employed PHP to build server-side maintenance tools for configuring user filesand managing thedownload and upload of drawings.
Utilized Docker to set up and maintain test servers, allowing for local applicationtesting anddevelopment with minimal commands.
Designed and implemented a compiler to convert VCLX scripting language intoJavaScript-like syntax,improving the flexibility and interoperability of theproduct.
    `,
    icon: React.createElement(FaReact),
    date: "June 2021 - Present",
  }
] as const;

export const projectsData = [
  {
    title: "Navigram Roomplanner",
    description: "online software for interior designe ",
    tags: ["HTML", "UIKIT", "MYSQL", "Javascript", "PHP", "3d scripting(VCL)"],
    imageUrl: navigram,
    href: 'https://www.navigram.com/',
  },
  {
    title: "Ecommerce  app",
    description:"A sleek and user-friendly e-commerce mobile app featuring a wide range of products.",
    tags: ["React Native", "Symfony", "Typescript", "MySQL"],
    imageUrl: fresh11,
    href: null
  },
  {
    title: "Taxi App",
    description:"a taxi order app contains 2 parts driver and costumer.",
    tags: ["React Native", "Symfony", "Typescript"],
    imageUrl: taxiApp,
    href: null
  },
  {
    title: "compiler",
    description:"navigram technologies has its own skripting language (vcl) originally written in delphi  this compiler convert it to JavaScript like syntax",
    tags: ["AST", "NodeJs"],
    imageUrl: compiler,
    href: null
  },
  {
    title: "Gym app",
    description:"an app guid you throw your fitness journey from exercise to healthy meals and more.",
    tags: ["React Native", "NodeJs", "MangoDB"],
    imageUrl: arabFit,
    href: null
  },
  {
    title: "hacker",
    description:"hacker is one of the biggest kitchen retailers in europe we built a 3d configurator to design kitchens for there customers",
    tags: ["HTML", "UIKIT", "Javascript", "PHP"],
    imageUrl: hacker,
    href: null
  },
] as const;
