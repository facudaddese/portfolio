"use client";

import { styleSpan } from "@/components/about-me/AboutMe";
import { styles } from "@/components/about-me/ProfileLinks";
import { Carousel } from "@/components/carousel/Carousel";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
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
  onPrev: () => void;
  onNext: () => void;
  position: string;
}

const arrow =
  "flex h-9 w-9 shrink-0 cursor-pointer items-center justify-center rounded-full border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors";

export const ProjectsCard = ({
  images,
  name,
  description,
  tags,
  preview,
  code,
  onPrev,
  onNext,
  position,
}: ProjectsCardProps) => {
  return (
    <div className="grid w-full min-w-0 grid-layout gap-6 md:gap-10 mb-5">
      <div className="flex min-w-0 flex-col gap-5">
        <div className="flex flex-col gap-4">
          <div className="mx-auto flex w-full max-w-4xl items-center justify-between gap-3">
            <button
              type="button"
              onClick={onPrev}
              aria-label="Proyecto anterior"
              className={arrow}
            >
              <ChevronLeft size={20} />
            </button>

            <div className="flex flex-col items-center">
              <h2 className="text-xl text-center font-medium text-gray-600 dark:text-gray-300">
                {name}
              </h2>
              <span className="text-xs text-gray-500 dark:text-gray-400">
                {position}
              </span>
            </div>

            <button
              type="button"
              onClick={onNext}
              aria-label="Proyecto siguiente"
              className={arrow}
            >
              <ChevronRight size={20} />
            </button>
          </div>

          <Carousel
            images={images.map((image, index) => ({
              src: image.src,
              alt: `Captura ${index + 1} de ${name}`,
              width: image.width,
              height: image.height,
            }))}
          />

          <div className="max-xs:grid flex justify-center flex-wrap gap-4 sm:gap-6">
            {tags.map((tag) => (
              <div
                key={tag.name}
                className="flex items-center gap-2"
              >
                <Image
                  src={tag.icon}
                  alt={tag.name}
                  width={200}
                  height={200}
                  className={`h-5 w-5 object-contain ${
                    tag.invert ? "dark:invert" : ""
                  }`}
                />
                <span className={`${styleSpan} text-[13px] sm:text-[13px]`}>
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
