import "./ProfileLinks.css";
import { ArrowUpRight } from "lucide-react";

const style =
  "flex items-center p-2.5 font-body border border-(--color-border) rounded-full transition-transform duration-300 ease-out hover:-translate-y-1";

const ProfileLinks = () => {
  return (
    <div className="flex flex-wrap items-center gap-4 profile-links">
      <a
        href="https://drive.google.com/file/d/1dplrGFP7DhLXLQCuj2sA-66sAV0yER_g/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        className={style}
      >
        Currículum Vitae
        <ArrowUpRight size={20} className="ml-1" />
      </a>
      <a
        href="https://www.linkedin.com/in/facundodaddese/"
        target="_blank"
        rel="noopener noreferrer"
        className={style}
      >
        <i className="devicon-linkedin-plain text-[20px] mr-2"></i>
        LinkedIn
      </a>
      <a
        href="https://github.com/facudaddese?tab=repositories"
        target="_blank"
        rel="noopener noreferrer"
        className={style}
      >
        <i className="devicon-github-original text-[20px] mr-2"></i>
        GitHub
      </a>
    </div>
  );
};

export default ProfileLinks;
