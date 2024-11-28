"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { projectsDataFr, projectsDataEn } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";
import { useLanguage } from "@/context/lang-switch-context";

export default function Projects() {
  const { ref } = useSectionInView("Projets", 0.5);
  const { language } = useLanguage();

  const projectsData = language === "fr" ? projectsDataFr : projectsDataEn;

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading>{language === "fr" ? "Mes projets" : "My projects"}</SectionHeading>
      <div className="xl:grid xl:grid-cols-2">
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
