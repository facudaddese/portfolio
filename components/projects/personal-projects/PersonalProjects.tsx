"use client";

import { useState } from "react";
import { projects } from "@/app/data/projects";
import { ProjectsCard } from "../project-card/ProjectsCard";

export const PersonalProjects = () => {
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((i) => (i === 0 ? projects.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === projects.length - 1 ? 0 : i + 1));

  const project = projects[index];

  return (
    <div data-aos="fade-down" suppressHydrationWarning>
      <section id="proyectos" className="flex flex-col items-center">
        <h2 className="font-medium text-2xl pb-10">Proyectos</h2>
        <ProjectsCard
          key={project.name}
          {...project}
          onPrev={prev}
          onNext={next}
          position={`${index + 1} / ${projects.length}`}
        />
      </section>
    </div>
  );
};
