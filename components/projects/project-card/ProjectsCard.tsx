import { styleSpan } from "@/components/about-me/AboutMe";
import { styles } from "@/components/about-me/ProfileLinks";
import { Carousel } from "@/components/carousel/Carousel";
import { ExternalLink } from "lucide-react";
import Image, { StaticImageData } from "next/image";

interface Tags {
  name: string;
  icon: string;
  invert?: boolean;
}

interface ProjectsCardProps {
  images: StaticImageData[];
  name: string;
  description: string;
  tags: Tags[];
  preview: string;
  code: string;
}

export const ProjectsCard = ({
  images,
  name,
  description,
  tags,
  preview,
  code,
}: ProjectsCardProps) => {
  return (
    <div className="grid w-full min-w-0 grid-layout gap-6 p-2 md:gap-10">
      <div className="flex min-w-0 flex-col gap-5">
        <div className="flex flex-col gap-4">
          <h2 className="text-xl text-center font-medium">
            {name}
          </h2>

          <Carousel
            images={images.map((image, index) => ({
              src: image.src,
              alt: `Captura ${index + 1} de ${name}`,
            }))}
          />

          <div className="grid grid-cols-2 justify-content-center sm:flex flex-wrap sm:justify-center sm:items-center gap-3">
            {tags.map((tag) => (
              <div key={tag.name} className="flex justify-center items-center gap-3">
                <Image
                  src={tag.icon}
                  alt={tag.name}
                  width={200}
                  height={200}
                  className={`h-5 w-5 object-contain ${
                    tag.invert ? "dark:invert" : ""
                  }`}
                />
                <span className={`${styleSpan}`}>
                  {tag.name}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-5 items-center justify-center">
          <p className="max-w-170 text-center text-[15px] sm:text-[16px] dark:text-gray-400">
            {description}
          </p>
          <div className="flex justify-center flex-wrap gap-3">
            <a
              href={preview}
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles}`}
            >
              Preview
              <ExternalLink />
            </a>
            <a
              href={code}
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles}`}
            >
              Code
              <i className="devicon-github-original text-[20px] mr-2"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
