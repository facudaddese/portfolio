import { SquareArrowOutUpRight } from "lucide-react";
import type { Project } from "../../interface/ProjectInterface";
import { useState } from "react";

const style =
  "flex gap-2 justify-center items-center border border-gray-200 rounded-[10px] p-2 w-25 hover:bg-black hover:text-white";

const ProjectCard = ({
  name,
  description,
  img,
  tags,
  preview,
  code,
}: Project) => {
  const [hover, setHover] = useState(false);

  return (
    <div data-aos="fade-up">
      <section className="grid justify-center items-center gap-10 grid-cols-[repeat(auto-fit,minmax(400px,1fr))] pb-8">
        <div className="overflow-hidden rounded-[10px]">
          <img
            src={img}
            alt={`Imagen del proyecto ${name}`}
            loading="lazy"
            className="transition-transform duration-500 hover:scale-110 hover:translate-y-2"
          />
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="text-(length:--text-project-title) font-semibold text-gray-900">
            {name}
          </h3>
          <div className="flex items-center gap-4">
            {tags.map((tag) => (
              <span key={tag.name} className="flex items-center text-gray-400 font-medium">
                <i className={`${tag.icon} text-[25px] pr-1`}></i>
                {tag.name}
              </span>
            ))}
          </div>
          <p className="text-(length:--text-body) font-normal text-gray-600">
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
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
            >
              {hover ? (
                <i className="devicon-github-original"></i>
              ) : (
                <i className="devicon-github-original colored text-[20px]"></i>
              )}
              Code
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectCard;
