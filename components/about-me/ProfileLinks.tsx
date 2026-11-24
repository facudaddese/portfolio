import { MdArrowOutward } from "react-icons/md";

export const styles =
  "flex items-center justify-center gap-2 border border-gray-200 rounded-full transition-transform duration-200 ease-out hover:-translate-y-1 w-45 p-0.5 text-center hover:border-gray-400 dark:border-gray-600 dark:text-gray-300";

export const ProfileLinks = () => {
  return (
    <div className="flex flex-wrap sm:flex-nowrap justify-center md:justify-start items-center gap-3 w-full">
      <a
        href="https://drive.google.com/file/d/1dplrGFP7DhLXLQCuj2sA-66sAV0yER_g/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Ver CV"
        className={`${styles}`}
      >
        Currículum Vitae
        <MdArrowOutward size={20} className="inline-block" />
      </a>
      <a
        href="https://www.linkedin.com/in/facundodaddese/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className={`${styles}`}
      >
        LinkedIn
        <i className="devicon-linkedin-plain text-[20px] mr-2"></i>
      </a>
      <a
        href="https://github.com/facudaddese?tab=repositories"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
        className={`${styles}`}
      >
        GitHub
        <i className="devicon-github-original text-[20px] mr-2"></i>
      </a>
    </div>
  );
};
