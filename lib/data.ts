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
import chatviewMobileAppImg from "@/public/ichatview-mobile-app.png";

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
    description: "I successfully completed my Baccalaureate in Life and Earth Sciences (SVT) at ALMATAR high school in Nador.",
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
    description: "I completed my Engineer's degree in Computer Software Engineering at SUPMTI-OUJDA.",
    icon: React.createElement(LuGraduationCap),
    date: "2021 - 2024",
  },
] as const;
export const educationsDataFr = [
  {
    title: "Baccalauréat",
    location: "Lycée ALMATAR, Nador, Maroc",
    description: "J'ai obtenu mon Baccalauréat en Sciences de la Vie et de la Terre (SVT) au Lycée ALMATAR à Nador.",
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
    description: "J'ai obtenu mon diplôme d'Ingénieur en Génie Logiciel à SUPMTI-Oujda.",
    icon: React.createElement(LuGraduationCap),
    date: "2021 - 2024",
  },
] as const;

export const experiencesDataEn = [
  {
    title: ".NET Developer | Intern",
    location: "Institut Descartes d'Informatique, Nador, Morocco",
    description: [
      "• Developed an internal student management application using C#/.NET, automating administrative processes (enrollments, student grades).",
      "• Managed the SQL Server database (schemas, complex queries).",
      "• Configured the hardware infrastructure (servers, networks) and documented the deployment for the IT team.",
      "",
      "Technologies: C#, .NET Framework, SQL Server, Windows Server.",
    ],
    icon: React.createElement(CgWorkAlt),
    date: "March 2019 to April 2019",
  },
  {
    title: "Front-End Developer | Freelance",
    location: "LIFETIME DEVELOPERS, Nador, Morocco",
    description: [
      "• Collaborated with a freelance team to develop a SaaS subscription management application for sports clubs.",
      "• Improved user interfaces (admin dashboard and mobile app using React Native).",
      "• Developed the landing website (subscriptions, Stripe payments) using React.",
      "• Integrated backend APIs (Spring Boot) to sync data.",
      "",
      "Methodology: SCRUM",
      "Technologies: ReactJS, React Native, Spring Boot",
    ],
    icon: React.createElement(CgWorkAlt),
    date: "May 2020 to October 2020",
  },
  {
    title: "Front-End Developer | Intern",
    location: "H2C-development, Nador, Morocco",
    description: [
      "• Participated in the development of a complete real-time access control web application using ReactJS and Node.js.",
      "• Worked with a designer and consultant to create an intuitive interface and a full-featured back-office.",
      "• Implemented user authentication, center and role management via secure APIs.",
      "",
      "Technologies: ReactJS, NodeJS, REST APIs, JWT, Redux, Material-UI.",
    ],
    icon: React.createElement(CgWorkAlt),
    date: "October 2020 to March 2021",
  },
  {
    title: "Full Stack Developer | Full-time",
    location: "H2C-development, Nador, Morocco",
    description: [
      "• Contributed to full-stack development of various platforms: e-commerce solutions, organizational management, and online bookings.",
      "• Built dynamic interfaces with ReactJS and NextJS, including animations and smooth navigation.",
      "• Ensured responsive design using CSS Grid, Flexbox, and media queries.",
      "• Created RESTful APIs with NestJS and NodeJS, implementing security and session management (JWT, OAuth2).",
      "• Integrated secure payment solutions such as Stripe and PayBox.",
      "",
      "Methodology: SCRUM",
      "Technologies: ReactJS, NextJS, NestJS, NodeJS",
    ],
    icon: React.createElement(CgWorkAlt),
    date: "March 2021 to Present",
  },
] as const;
export const experiencesDataFr = [
  {
    title: "Développeur .NET | Stagiaire",
    location: "Institut Descartes d'Informatique, Nador, Maroc",
    description: [
      "• Développé une application interne de gestion des étudiants avec C#/.NET., en automatisant les processus administratifs (inscriptions, notes des étudiants)",
      "• Géré la base de données SQL Server (schémas, requêtes complexes).",
      "• Configuré l’infrastructure matérielle (serveurs, réseaux) et documenté le déploiement pour l’équipe IT.",
      "",
      "Technologies : C#, .NET Framework, SQL Server, Windows Server.",
    ],
    icon: React.createElement(CgWorkAlt),
    date: "Mars 2019 à Avril 2019",
  },
  {
    title: "Développeur Front-End | Freelance",
    location: "LIFETIME DEVELOPERS, Nador, Maroc",
    description: [
      "• Collaboré avec une équipe freelance pour développer une application SaaS de gestion d'abonnements pour clubs de sport.",
      "• Amélioration des interfaces utilisateur (dashboard admin et application mobile avec React Native).",
      "• Développement du site vitrine (abonnements, paiements Stripe) avec React.",
      "• Intégration des APIs backend (Spring Boot) pour la synchronisation des données.",
      "",
      "Méthodologie : SCRUM",
      "Technologies : ReactJS, React Native, Spring Boot",
    ],
    icon: React.createElement(CgWorkAlt),
    date: "Mai 2020 à Octobre 2020",
  },
  {
    title: "Développeur Front-End | Stagiaire",
    location: "H2C-development, Nador, Maroc",
    description: [
      "• Participé au développement d’une application web complète de contrôle d’accès en temps réel avec ReactJS et Node.js.",
      "• Collaboration avec un designer et un consultant pour concevoir une interface intuitive et un back-office complet.",
      "• Implémenté l’authentification, la gestion des établissements et des profils utilisateurs via des APIs sécurisées.",
      "",
      "Technologies : ReactJS, NodeJS, REST APIs, JWT, Redux, Material-UI.",
    ],
    icon: React.createElement(CgWorkAlt),
    date: "Octobre 2020 à Mars 2021",
  },
  {
    title: "Développeur Full Stack | Temps plein",
    location: "H2C-development, Nador, Maroc",
    description: [
      "• Contribué au développement full-stack de diverses plateformes : solutions e-commerce, gestion des organisations, réservations en ligne.",
      "• Création d’interfaces dynamiques avec ReactJS et NextJS, avec animations et navigation fluide.",
      "• Interfaces responsives avec CSS Grid, Flexbox et media queries.",
      "• Création d’APIs RESTful avec NestJS et NodeJS, intégrant sécurité et gestion des sessions (JWT, OAuth2).",
      "• Intégration de solutions de paiement comme Stripe et PayBox.",
      "",
      "Méthodologie : SCRUM",
      "Technologies : ReactJS, NextJS, NestJS, NodeJS,",
    ],

    icon: React.createElement(CgWorkAlt),
    date: "Mars 2021 à Aujourd'hui",
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
    description: "Un clone de l'outil de productivité populaire Notion, offrant des fonctionnalités fluides de prise de notes et d'organisation.",
    tags: ["React", "Next.js", "Typescript", "Tailwind"],
    imageUrl: noteWaveImg,
    href: "https://notewave-app.vercel.app/",
  },
  {
    title: "E-commerce (tableau de bord)",
    description: "Un tableau de bord de gestion e-commerce pour gérer efficacement les commandes, les produits et la personnalisation du magasin.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: ecommerceAdminImg,
    href: null,
  },
  {
    title: "E-commerce (boutique)",
    description: "Une boutique e-commerce élégante et conviviale proposant une large gamme de produits.",
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
    description: "A clone of the popular productivity tool Notion, providing seamless note-taking and organization features.",
    tags: ["React", "Next.js", "Typescript", "Tailwind"],
    imageUrl: noteWaveImg,
    href: "https://notewave-app.vercel.app/",
  },
  {
    title: "Ecommerce (dashboard)",
    description: "An e-commerce management dashboard for efficiently managing orders, products, and store customization.",
    tags: ["React", "Next.js", "Tailwind", "Prisma", "Mongodb"],
    imageUrl: ecommerceAdminImg,
    href: null,
  },
  {
    title: "Ecommerce (store)",
    description: "A sleek and user-friendly e-commerce store featuring a wide range of products.",
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
    description: "AI-powered web platform that offers a diverse range of cutting-edge features and tools, showcased for exploration and utilization.",
    tags: ["React", "Next.js", "Typescript", "Tailwind", "Prisma", "mongodb"],
    imageUrl: aiGenuisImg,
    href: "https://genius-olive-mu.vercel.app/",
  },
  {
    title: "iChatView",
    description: "An Android application that allows users to view their exported WhatsApp chats from iPhone on any Android device.",
    tags: ["React Native", "React", "TypeScript", "Vite", "Tailwind CSS"],
    imageUrl: chatviewMobileAppImg,
    href: "https://ichatview.vercel.app/",
  },
] as const;
