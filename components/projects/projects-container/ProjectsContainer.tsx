import { projects } from "@/app/data/projects";
import { ProjectsCard } from "../project-card/ProjectsCard";

export const PersonalProjects = () => {
  return (
    <section id="proyectos" className="flex flex-col items-center">
      <h2 className="font-medium text-2xl pb-10">
        Proyectos
      </h2>
      {projects.map((item) => (
        <ProjectsCard key={item.name} {...item} />
      ))}
    </section>
  );
};
