import "./ProjectCard.css";
import { SquareArrowOutUpRight } from "lucide-react";

const style =
  "flex gap-2 justify-center items-center font-body border border-(--color-border) rounded-[10px] p-2 w-25 hover:bg-(--color-text) hover:text-(--color-bg)";

interface ProjectProps {
  name: string;
  description: string;
  img: string;
  tags: {
    name: string;
    icon: string;
  }[];
  preview: string;
  code: string;
}

const ProjectCard = ({
  name,
  description,
  img,
  tags,
  preview,
  code,
}: ProjectProps) => {
  return (
    <div data-aos="fade-up">
      <section className="grid justify-center items-center gap-10 grid-cols-[repeat(auto-fit,minmax(400px,1fr))] pb-10 project-card">
        <div className="overflow-hidden rounded-[10px]">
          <img
            src={img}
            alt={`Imagen del proyecto ${name}`}
            loading="lazy"
            className="transition-transform duration-500 hover:scale-110 hover:translate-y-2 w-screen"
          />
        </div>
        <div className="flex flex-col gap-4 px-5">
          <h3 className="text-(length:--text-project-title) font-body">
            {name}
          </h3>
          <div className="flex items-center gap-4">
            {tags.map((tag) => (
              <span
                key={tag.name}
                className="flex items-center text-(--color-text-subtle) text-(length:--text-tag) font-body span-icon"
              >
                <i
                  className={`${tag.icon} text-(length:--icon-tag-size) pr-1 icon`}
                ></i>
                {tag.name}
              </span>
            ))}
          </div>
          <p className="text-(length:--text-body) font-normal text-(--color-text-muted) wrap-break-word max-w-screen">
            {description}
          </p>
          <div className="flex gap-4 items-center">
            <a
              href={preview}
              target="_blank"
              rel="noopener noreferrer"
              className={style}
            >
              Preview
              <SquareArrowOutUpRight size={16} />
            </a>
            <a
              href={code}
              target="_blank"
              rel="noopener noreferrer"
              className={style}
            >
              <i className="devicon-github-original text-[20px]"></i>
              Code
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectCard;
