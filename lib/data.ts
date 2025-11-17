import aiGenuisImg from "@/public/ai-generation.png";
import ecommerceAdminImg from "@/public/ecommerce-admin.png";
import ecommerceStoreImg from "@/public/ecommerce-store.png";
import chatviewMobileAppImg from "@/public/ichatview-mobile-app.png";
import noteWaveImg from "@/public/notewave.png";
import quickchatImg from "@/public/quickchat.png";
import savekitMobileAppImg from "@/public/savekit-mobile-app.png";
import trelloXImg from "@/public/trelloX.png";
import cityBikesImg from "@/public/CityBikesTracker.png";
import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";

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
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Education",
    hash: "#education",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;
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
    name: "Expérience",
    hash: "#experience",
  },
  {
    name: "Éducation",
    hash: "#education",
  },
  {
    name: "Projets",
    hash: "#projects",
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

export const experiencesDataEn = [
  {
    title: "Front-End Developer | Intern",
    location: "Institut Descartes d'Informatique, Nador, Morocco",
    description: [
      "• Developed an internal student management web app using React to automate administrative processes such as enrollment, grades, and record tracking.",
      "• Designed modern and responsive interfaces to enhance user experience.",
      "• Created REST APIs with Node.js, Express.js, and MySQL to ensure reliable data synchronization across application layers.",
      "",
      "Technologies: React, Node.js, Express.js, MySQL.",
    ],
    icon: React.createElement(CgWorkAlt),
    date: "March 2019 to April 2019",
  },
  {
    title: "Front-End Developer | Freelance",
    location: "LIFETIME DEVELOPERS, Nador, Morocco",
    description: [
      "• Developed a SaaS subscription management application for sports clubs.",
      "• Built the admin dashboard interfaces with React and improved the mobile app UI/UX using React Native.",
      "• Implemented subscription and payment flows with Stripe.",
      "• Integrated backend APIs developed in Spring Boot.",
      "• Participated in daily and weekly SCRUM meetings with the freelance team.",
      "",
      "Methodology: SCRUM",
      "Technologies: React, React Native, Spring Boot, Stripe.",
    ],
    icon: React.createElement(CgWorkAlt),
    date: "May 2020 to October 2020",
  },
  {
    title: "Front-End Developer | Intern",
    location: "H2C Development, Nador, Morocco",
    description: [
      "• Developed a real-time access control web solution for badge reading and monitoring.",
      "• Designed the front-end architecture with React and created admin modules for user, site, and access authorization management.",
      "• Built an interactive back-office for access supervision and reporting.",
      "• Integrated RESTful services developed in Java / Spring Boot.",
      "• Implemented secure user authentication with JWT.",
      "",
      "Technologies: React, Spring Boot, REST APIs, JWT.",
    ],
    icon: React.createElement(CgWorkAlt),
    date: "October 2020 to March 2021",
  },
  {
    title: "Full Stack Developer | Full-time",
    location: "H2C Development, Nador, Morocco",
    description: [
      "• Contributed to the full-stack development of multiple platforms: e-commerce, organizational management, and online booking systems.",
      "• Built dynamic and intuitive interfaces using React and Next.js, integrating animations for smooth navigation.",
      "• Styled responsive layouts with Tailwind CSS, CSS Grid, Flexbox, and media queries.",
      "• Developed secure RESTful APIs with Spring Boot and Node.js.",
      "• Implemented session management and authentication via JWT and OAuth2.",
      "• Integrated online payment gateways including Stripe, PayBox, and Monetico.",
      "• Collaborated with design and backend teams to ensure functional consistency.",
      "• Optimized application performance and improved overall user experience.",
      "",
      "Methodology: SCRUM",
      "Technologies: React, Next.js, Tailwind CSS, Spring Boot, Node.js, JWT, OAuth2, Stripe, PayBox, Monetico.",
    ],
    icon: React.createElement(CgWorkAlt),
    date: "March 2021 to Present",
  },
] as const;
export const experiencesDataFr = [
  {
    title: "Développeur Front-End | Stagiaire",
    location: "Institut Descartes d'Informatique, Nador, Maroc",
    description: [
      "• Développement d’une application interne de gestion des étudiants avec React pour automatiser les processus administratifs (inscriptions, notes, suivi des dossiers).",
      "• Conception d’interfaces modernes et responsives pour améliorer l’expérience utilisateur.",
      "• Création d’APIs REST avec Node.js, Express.js et MySQL pour garantir la fiabilité et la synchronisation des données.",
      "",
      "Technologies : React, Node.js, Express.js, MySQL.",
    ],
    icon: React.createElement(CgWorkAlt),
    date: "Mars 2019 à Avril 2019",
  },
  {
    title: "Développeur Front-End | Freelance",
    location: "LIFETIME DEVELOPERS, Nador, Maroc",
    description: [
      "• Développement d’une application SaaS de gestion d’abonnements pour clubs de sport.",
      "• Création des interfaces du tableau de bord administrateur avec React et amélioration de l’UI/UX mobile avec React Native.",
      "• Développement des fonctionnalités d’abonnement et de paiement via Stripe.",
      "• Intégration des APIs backend développées avec Spring Boot.",
      "• Participation aux réunions SCRUM quotidiennes et hebdomadaires avec l’équipe.",
      "",
      "Méthodologie : SCRUM",
      "Technologies : React, React Native, Spring Boot, Stripe.",
    ],
    icon: React.createElement(CgWorkAlt),
    date: "Mai 2020 à Octobre 2020",
  },
  {
    title: "Développeur Front-End | Stagiaire",
    location: "H2C Development, Nador, Maroc",
    description: [
      "• Développement d’une solution web de contrôle d’accès et de gestion des lectures de badges en temps réel.",
      "• Conception de l’architecture front-end avec React et création de modules d’administration (utilisateurs, établissements, autorisations).",
      "• Création d’un back-office interactif pour la supervision et le suivi des accès.",
      "• Intégration de services RESTful performants développés en Java / Spring Boot.",
      "• Mise en place d’une authentification sécurisée via JWT.",
      "",
      "Technologies : React, Spring Boot, REST APIs, JWT.",
    ],
    icon: React.createElement(CgWorkAlt),
    date: "Octobre 2020 à Mars 2021",
  },
  {
    title: "Développeur Full Stack | Temps plein",
    location: "H2C Development, Nador, Maroc",
    description: [
      "• Participation au développement full-stack de différentes plateformes (e-commerce, gestion d’organisations, réservations en ligne).",
      "• Création d’interfaces dynamiques et intuitives avec React et Next.js, intégrant des animations pour une navigation fluide.",
      "• Mise en page responsive avec Tailwind CSS, CSS Grid, Flexbox et media queries.",
      "• Développement d’APIs RESTful sécurisées avec Spring Boot et Node.js.",
      "• Gestion des sessions et authentification via JWT et OAuth2.",
      "• Intégration de solutions de paiement en ligne (Stripe, PayBox, Monetico).",
      "• Collaboration avec les équipes design et backend pour assurer la cohérence des fonctionnalités.",
      "• Optimisation des performances et amélioration de l’expérience utilisateur.",
      "",
      "Méthodologie : SCRUM",
      "Technologies : React, Next.js, Tailwind CSS, Spring Boot, Node.js, JWT, OAuth2, Stripe, PayBox, Monetico.",
    ],
    icon: React.createElement(CgWorkAlt),
    date: "Mars 2021 à Aujourd’hui",
  },
] as const;

export const projectsDataFr = [
  {
    title: "TrelloX",
    description: "Un clone de l'outil populaire de gestion de projet Trello.",
    tags: ["React", "Next.js", "Typescript", "Tailwind"],
    imageUrl: trelloXImg,
    href: "https://trellox-one.vercel.app/",
  },
  {
    title: "NoteWave",
    description:
      "Un clone de l'outil de productivité populaire Notion, offrant des fonctionnalités fluides de prise de notes et d'organisation.",
    tags: ["React", "Next.js", "Typescript", "Tailwind"],
    imageUrl: noteWaveImg,
    href: "https://notewave-app.vercel.app/",
  },
  {
    title: "E-commerce (tableau de bord)",
    description:
      "Un tableau de bord de gestion e-commerce pour gérer efficacement les commandes, les produits et la personnalisation du magasin.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: ecommerceAdminImg,
    href: "https://ecommerce-admin-tau-fawn.vercel.app/",
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
    title: "CityBikes Tracker",
    description:
      "Une application moderne en temps réel, permettant d’explorer les réseaux de vélos en libre-service à travers le monde.",
    tags: [
      "Next.js",
      "Typescript",
      "Tailwind CSS",
      "Leaflet",
      "SWR",
      "shadcn/ui",
    ],
    imageUrl: cityBikesImg,
    href: "https://citybikes-tracker.vercel.app/",
  },

  {
    title: "QuickChat",
    description:
      "Une application web de messagerie en temps réel permettant des conversations rapides et simples entre utilisateurs.",
    tags: ["React", "Next.js", "WebSocket", "Tailwind", "Prisma", "mongodb"],
    imageUrl: quickchatImg,
    href: "https://quickchat-app.vercel.app/",
  },

  {
    title: "SaveKit",
    description:
      "Une application mobile Android conçue pour aider les utilisateurs à atteindre leurs objectifs financiers.",
    tags: ["React Native", "React", "Firebase", "Tailwind CSS"],
    imageUrl: savekitMobileAppImg,
    href: "https://savekit.vercel.app/",
  },
  {
    title: "iChatView",
    description:
      "Une application Android qui permet aux utilisateurs de visualiser leurs discussions WhatsApp exportées depuis un iPhone sur n'importe quel appareil Android.",
    tags: ["React Native", "React", "Vite", "Tailwind CSS"],
    imageUrl: chatviewMobileAppImg,
    href: "https://ichatview.vercel.app/",
  },
] as const;
export const projectsDataEn = [
  {
    title: "TrelloX",
    description: "A clone of the popular project management tool Trello.",
    tags: ["React", "Next.js", "Typescript", "Tailwind"],
    imageUrl: trelloXImg,
    href: "https://trellox-one.vercel.app/",
  },
  {
    title: "NoteWave",
    description:
      "A clone of the popular productivity tool Notion, providing seamless note-taking and organization features.",
    tags: ["React", "Next.js", "Typescript", "Tailwind"],
    imageUrl: noteWaveImg,
    href: "https://notewave-app.vercel.app/",
  },
  {
    title: "Ecommerce (dashboard)",
    description:
      "An e-commerce management dashboard for efficiently managing orders, products, and store customization.",
    tags: ["React", "Next.js", "Tailwind", "Prisma", "Mongodb"],
    imageUrl: ecommerceAdminImg,
    href: "https://ecommerce-admin-tau-fawn.vercel.app/",
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
    title: "CityBikes Tracker",
    description:
      "A modern real-time application that allows you to explore bike-sharing networks around the world.",
    tags: [
      "Next.js",
      "Typescript",
      "Tailwind CSS",
      "Leaflet",
      "SWR",
      "shadcn/ui",
    ],
    imageUrl: cityBikesImg,
    href: "https://citybikes-tracker.vercel.app/",
  },
  {
    title: "QuickChat",
    description:
      "A real-time web messaging app designed for fast and simple conversations between users.",
    tags: ["React", "Next.js", "WebSocket", "Tailwind", "Prisma", "mongodb"],
    imageUrl: quickchatImg,
    href: "https://quickchat-app.vercel.app/",
  },

  {
    title: "SaveKit",
    description:
      "An Android mobile app designed to help users achieve their financial goals.",
    tags: ["React Native", "React", "Firebase", "Tailwind CSS"],
    imageUrl: savekitMobileAppImg,
    href: "https://savekit.vercel.app/",
  },
  {
    title: "iChatView",
    description:
      "An Android application that allows users to view their exported WhatsApp chats from iPhone on any Android device.",
    tags: ["React Native", "React", "TypeScript", "Vite", "Tailwind CSS"],
    imageUrl: chatviewMobileAppImg,
    href: "https://ichatview.vercel.app/",
  },
] as const;
