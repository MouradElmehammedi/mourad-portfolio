import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import ecommerceAdminImg from "@/public/ecommerce-admin.png";
import ecommerceStoreImg from "@/public/ecommerce-store.png";
import carQuestImg from "@/public/cars-showcase.png";
import aiGenuisImg from "@/public/ai-generation.png";
import trelloXImg from "@/public/trelloX.png";
import noteWaveImg from "@/public/notewave.png";

// Locale English "En"
export const linksEn = [
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

export const educationsDataEn = [
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

export const experiencesDataEn = [
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
    icon: React.createElement(CgWorkAlt),
    date: "March 2021 - Present",
  },
] as const;

export const projectsDataEn = [
  {
    title: "Ecommerce (dashboard)",
    description:
      "An e-commerce management dashboard for efficiently managing orders, products, and store customization.",
    tags: ["React", "Next.js", "Tailwind", "Prisma", "Mongodb"],
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
  {
    title: "TrelloX",
    description: "A clone of the popular project management tool Trello.",
    tags: ["React", "Next.js", "Typescript", "Tailwind"],
    imageUrl: trelloXImg,
    href: 'https://trellox-one.vercel.app/'
  },
  {
    title: "NoteWave",
    description:"A clone of the popular productivity tool Notion, providing seamless note-taking and organization features.",
    tags: ["React", "Next.js", "Typescript", "Tailwind"],
    imageUrl: noteWaveImg,
    href: 'https://notewave-app.vercel.app/'
  }
] as const;

// Locale French "Fr"
export const linksFr = [
  // {
  //   name: "Accueil",
  //   hash: "#home",
  // },
  {
    name: "À propos",
    hash: "#home",
  },
  {
    name: "Compétences",
    hash: "#skills",
  },
  {
    name: "Projets",
    hash: "#projects",
  },
  {
    name: "Éducation",
    hash: "#education",
  },
  {
    name: "Expérience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const educationsDataFr = [
  {
    title: "Baccalauréat",
    location: "Lycée ALMATAR, Nador, Maroc",
    description:
      "J'ai obtenu mon Baccalauréat en Sciences de la Vie et de la Terre (SVT) au Lycée ALMATAR à Nador.",
    icon: React.createElement(LuGraduationCap),
    date: "2016 - 2017",
  },
  {
    title: "Diplôme de Technicien Spécialisé",
    location: "ISTA, Nador, Maroc",
    description:
      "J'ai consacré deux années d'apprentissage intensif à l'ISTA, où j'ai obtenu mon diplôme de Technicien Spécialisé en Développement Informatique.",
    icon: React.createElement(LuGraduationCap),
    date: "2017 - 2019",
  },
  {
    title: "Diplôme d'Ingénieur",
    location: "SUPMTI, Oujda, Maroc",
    description:
      "J'ai obtenu mon diplôme d'Ingénieur en Génie Logiciel à SUPMTI-Oujda.",
    icon: React.createElement(LuGraduationCap),
    date: "2021 - 2024",
  },
] as const;

export const experiencesDataFr = [
  {
    title: "Développeur .NET | Stage",
    location: "Institut Descartes d'Informatique, Nador, Maroc",
    description:
      "Membre d'une équipe ayant développé une nouvelle application pour l'institut en utilisant C#. Responsable de l'installation matérielle, du développement d'applications, de la gestion de bases de données et de la sécurité des serveurs.",
    icon: React.createElement(CgWorkAlt),
    date: "Mars 2019 à Avril 2019",
  },
  {
    title: "Développeur Full Stack | Freelance",
    location: "LIFETIME DEVELOPERS",
    description:
      "Collaboration avec une équipe freelance sur un projet MERN Stack pour développer une application SaaS de gestion des abonnements dans les clubs sportifs.",
    icon: React.createElement(CgWorkAlt),
    date: "Mai 2020 à Octobre 2020",
  },
  {
    title: "Développeur Full Stack | Stage",
    location: "H2C-development, Nador, Maroc",
    description:
      "Mise en œuvre d'un système de contrôle d'accès avec React et Node.js pour suivre l'état en temps réel de chaque badge. Développement de fonctionnalités pour détecter et afficher les accès autorisés ou refusés.",
    icon: React.createElement(CgWorkAlt),
    date: "Octobre 2020 à Janvier 2021",
  },
  {
    title: "Développeur Full Stack | Temps plein",
    location: "H2C-development, Nador, Maroc",
    description:
      "Contribution au développement de plateformes d'e-commerce, de gestion et de réservation. Création d'interfaces utilisateur dynamiques avec React.js et Angular, assurant leur réactivité. Mise en œuvre d'API RESTful avec Spring Boot et intégration de solutions de paiement sécurisées comme Stripe.",
    icon: React.createElement(CgWorkAlt),
    date: "Mars 2021 - Présent",
  },
] as const;

export const projectsDataFr = [
  {
    title: "E-commerce (tableau de bord)",
    description:
      "Un tableau de bord de gestion e-commerce pour gérer efficacement les commandes, les produits et la personnalisation du magasin.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: ecommerceAdminImg,
    href: null,
  },
  {
    title: "E-commerce (boutique)",
    description:
      "Une boutique e-commerce élégante et conviviale proposant une large gamme de produits.",
    tags: ["React", "Next.js", "Typescript", "Tailwind"],
    imageUrl: ecommerceStoreImg,
    href: "https://ecommerce-store-gilt-two.vercel.app/",
  },
  {
    title: "CarQuest",
    description:
      "Un site d'exploration automobile permettant aux utilisateurs de découvrir des informations détaillées sur divers modèles de voitures pour trouver le véhicule idéal.",
    tags: ["React", "Next.js", "Typescript", "Tailwind"],
    imageUrl: carQuestImg,
    href: "https://cars-showcase-iota-navy.vercel.app/",
  },
  {
    title: "Genius",
    description:
      "Une plateforme web alimentée par l'IA offrant une gamme diversifiée de fonctionnalités et outils avancés, à explorer et à utiliser.",
    tags: ["React", "Next.js", "Typescript", "Tailwind", "Prisma", "mongodb"],
    imageUrl: aiGenuisImg,
    href: "https://genius-olive-mu.vercel.app/",
  },
  {
    title: "TrelloX",
    description: "Un clone de l'outil populaire de gestion de projet Trello.",
    tags: ["React", "Next.js", "Typescript", "Tailwind"],
    imageUrl: trelloXImg,
    href: 'https://trellox-one.vercel.app/'
  },
  {
    title: "NoteWave",
    description: "Un clone de l'outil de productivité populaire Notion, offrant des fonctionnalités fluides de prise de notes et d'organisation.",
    tags: ["React", "Next.js", "Typescript", "Tailwind"],
    imageUrl: noteWaveImg,
    href: 'https://notewave-app.vercel.app/'
  }
] as const;
