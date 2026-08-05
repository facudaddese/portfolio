import { projects } from "../../data/projects";
import ProjectCard from "../project_card/ProjectCard";

const ProjectsContainer = () => {
  return (
    <section id="proyectos" className="flex flex-col items-center pt-30">
      <h2 className="text-(length:--text-subtitle) font-heading font-semibold pb-15">
        Proyectos personales
      </h2>
      {projects.map((p, index) => (
        <ProjectCard
          key={index}
          name={p.name}
          description={p.description}
          img={p.img}
          tags={p.tags}
          preview={p.preview}
          code={p.code}
        />
      ))}
    </section>
  );
};

export default ProjectsContainer;
