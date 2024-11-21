import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import ecommerceAdminImg from "@/public/ecommerce-admin.png";
import ecommerceStoreImg from "@/public/ecommerce-store.png";
import carQuestImg from "@/public/cars-showcase.png";
import aiGenuisImg from "@/public/ai-generation.png";

export const links = [
  // {
  //   name: "Home",
  //   hash: "#home",
  // },
  {
    name: "About",
    hash: "#home",
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
    description:
      "I successfully completed my Baccalaureate in Life and Earth Sciences (SVT) at ALMATAR high school in Nador.",
    icon: React.createElement(LuGraduationCap),
    date: "2016 - 2017",
  },
  {
    title: "Associate's degree",
    location: "ISTA, Nador, Morocco",
    description:
      "I dedicated two years of hard work and learning at ISTA, where I earned my Specialized Technician Associate's degree in Computer Development.",
    icon: React.createElement(LuGraduationCap),
    date: "2017 - 2019",
  },
  {
    title: "Engineer's degree",
    location: "SUPMTI, Oujda, Morocco",
    description:
      "I completed my Engineer's degree in Computer Software Engineering at SUPMTI-OUJDA.",
    icon: React.createElement(LuGraduationCap),
    date: "2021 - 2024",
  },
] as const;

export const experiencesData = [
  {
    title: "Developer .NET | Internship",
    location: "Institute Descartes of Computer Science, Nador, Morocco",
    description:
      "Part of a team that developed a new application for the institute using C#. Responsible for hardware installation, application development, database management, and server security.",
    icon: React.createElement(CgWorkAlt),
    date: "March 2019 to April 2019",
  },
  {
    title: "Full Stack Developer | Freelance",
    location: "LIFETIME DEVELOPERS",
    description:
      "Collaborated with a freelance team on a MERN Stack project to develop a SaaS application for managing user subscriptions in sports clubs.",
    icon: React.createElement(CgWorkAlt),
    date: "May 2020 to October 2020",
  },
  {
    title: "Full Stack Developer | Internship",
    location: "H2C-development, Nador, Morocco",
    description:
      "Implemented an access control system with React and Node.js to track the real-time status of each badge. Developed features to detect and display authorized or denied access.",
    icon: React.createElement(CgWorkAlt),
    date: "October 2020 to January 2021",
  },
  {
    title: "Full Stack Developer | Full-time",
    location: "H2C-development, Nador, Morocco",
    description:
      "Contributed to the development of e-commerce, management, and booking platforms. Built dynamic user interfaces with React.js and Angular, ensuring responsiveness. Implemented RESTful APIs with Spring Boot and integrated secure payment solutions like Stripe.",
    icon: React.createElement(FaReact),
    date: "March 2021 - Present",
  },
] as const;

export const projectsData = [
  {
    title: "Ecommerce (dashboard)",
    description:
      "An e-commerce management dashboard for efficiently managing orders, products, and store customization.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma", "Mongodb"],
    imageUrl: ecommerceAdminImg,
    href: null,
  },
  {
    title: "Ecommerce (store)",
    description:
      "A sleek and user-friendly e-commerce store featuring a wide range of products.",
    tags: ["React", "Next.js", "Typescript", "Tailwind"],
    imageUrl: ecommerceStoreImg,
    href: "https://ecommerce-store-gilt-two.vercel.app/",
  },
  {
    title: "CarQuest",
    description:
      "A car exploration website that allows users to explore detailed information about various car models, making it easy to find the perfect vehicle.",
    tags: ["React", "Next.js", "Typescript", "Tailwind"],
    imageUrl: carQuestImg,
    href: "https://cars-showcase-iota-navy.vercel.app/",
  },
  {
    title: "Genius",
    description:
      "AI-powered web platform that offers a diverse range of cutting-edge features and tools, showcased for exploration and utilization.",
    tags: ["React", "Next.js", "Typescript", "Tailwind", "Prisma", "mongodb"],
    imageUrl: aiGenuisImg,
    href: "https://genius-olive-mu.vercel.app/",
  },
] as const;
