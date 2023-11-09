import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import ecommerceAdminImg from "@/public/ecommerce-admin.png";
import ecommerceStoreImg from "@/public/ecommerce-store.png";
import carQuestImg from "@/public/cars-showcase.png";
import aiGenuisImg from "@/public/ai-generation.png";

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
    title: "Baccalaureate",
    location: "ALMATAR high school, Nador, Morocco",
    description: "I successfully completed my Baccalaureate in Life and Earth Sciences (SVT) at ALMATAR high school in Nador, gaining a solid foundation in scientific principles and knowledge.",
    icon: React.createElement(LuGraduationCap),
    date: "2016 - 2017",
  },
  {
    title: "Associate's degree in Computer Development",
    location: "ISTA, Nador, Morocco",
    description: "I dedicated two years of hard work and learning at ISTA, where I earned my Specialized Technician Associate's degree in Computer Development. This program equipped me with the skills and knowledge necessary to excel in the field of software development.",
    icon: React.createElement(LuGraduationCap),
    date: "2017 - 2019",
  },
  {
    title: "Engineer's degree",
    location: "SUPMTI, Oujda",
    description: "My journey in higher education led me to SUPMTI-OUJDA, where I am currently pursuing an Engineer's degree in Computer Software Engineering. This program allows me to deepen my understanding of software engineering and expand my technical expertise.",
    icon: React.createElement(LuGraduationCap),
    date: "2021 - 2024",
  },
] as const;

export const experiencesData = [
  {
    title: "Internship",
    location: "Institute Descartes of Computer Science, Nador, Morocco",
    description: "During my internship at the Institute Descartes of Computer Science, I was responsible for the installation and maintenance of computer operating systems and hardware and software packages. I provided regular technical assistance and conducted compatibility checks for new hardware and software to ensure they integrated seamlessly with company systems.",
    icon: React.createElement(CgWorkAlt),
    date: "March 03, 2019 to April 04, 2019",
  },
  {
    title: "Web Developer",
    location: "LIFETIME DEVELOPERS (Freelance)",
    description: "As a Web Developer at LIFETIME DEVELOPERS (Freelance), I specialized in creating web and mobile applications using the React.js Framework and React Native. I had the opportunity to work on diverse projects, applying my expertise to deliver high-quality solutions.",
    icon: React.createElement(CgWorkAlt),
    date: "04 May 2020 to present",
  },
  {
    title: "Internship",
    location: "H2C-development, Nador, Morocco",
    description: "During my internship at H2C-development, I served as a Front-End developer on various projects, leveraging the React.js Framework to create engaging and user-friendly web applications. This experience allowed me to strengthen my front-end development skills.",
    icon: React.createElement(CgWorkAlt),
    date: "October 2020 to January 2021",
  },
  {
    title: "Full Stack Developer",
    location: "H2C-development, Nador, Morocco",
    description: "I have been working as a Full Stack Developer at H2C Development since March 2021. In this role, I've contributed significantly to various projects, gaining valuable experience in both front-end and back-end development. I've played a pivotal role in building robust web applications that meet client needs and exceed expectations.",
    icon: React.createElement(FaReact),
    date: "March 2021 - Present",
  }
] as const;

export const projectsData = [
  {
    title: "Ecommerce (dashboard)",
    description: "An e-commerce management dashboard for efficiently managing orders, products, and store customization.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma", "Mongodb"],
    imageUrl: ecommerceAdminImg,
    href: null
  },
  {
    title: "Ecommerce (store)",
    description:"A sleek and user-friendly e-commerce store featuring a wide range of products.",
    tags: ["React", "Next.js", "Typescript", "Tailwind"],
    imageUrl: ecommerceStoreImg,
    href: 'https://ecommerce-store-gilt-two.vercel.app/'
  },
  {
    title: "CarQuest",
    description:"A car exploration website that allows users to explore detailed information about various car models, making it easy to find the perfect vehicle.",
    tags: ["React", "Next.js", "Typescript", "Tailwind"],
    imageUrl: carQuestImg,
    href: 'https://cars-showcase-iota-navy.vercel.app/'
  },
  {
    title: "Genius",
    description:"AI-powered web platform that offers a diverse range of cutting-edge features and tools, showcased for exploration and utilization.",
    tags: ["React", "Next.js", "Typescript", "Tailwind", "Prisma", "mongodb"],
    imageUrl: aiGenuisImg,
    href: 'https://genius-olive-mu.vercel.app/'
  },
] as const;
