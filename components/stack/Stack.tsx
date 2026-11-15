import Image from "next/image";

interface Skill {
  icon: string;
  name: string;
  invert?: boolean; // logos negros: se invierten en modo oscuro
}

const CDN = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

const skills: Skill[] = [
  { icon: `${CDN}/html5/html5-original.svg`, name: "HTML5" },
  { icon: `${CDN}/css3/css3-original.svg`, name: "CSS3" },
  { icon: `${CDN}/javascript/javascript-original.svg`, name: "JavaScript" },
  { icon: `${CDN}/react/react-original.svg`, name: "React" },
  { icon: `${CDN}/tailwindcss/tailwindcss-original.svg`, name: "Tailwind CSS" },
  { icon: `${CDN}/typescript/typescript-original.svg`, name: "TypeScript" },
  { icon: `${CDN}/nextjs/nextjs-original.svg`, name: "Next.js", invert: true },
  { icon: `${CDN}/postgresql/postgresql-original.svg`, name: "PostgreSQL" },
];

export const Stack = () => {
  return (
    <section className="flex flex-col items-center py-20">
      <h2 className="font-bold text-2xl md:text-[26px] pb-10">Stack</h2>

      <div className="w-full max-w-xl overflow-hidden mask-[linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex w-max marquee hover:[animation-play-state:paused]">
          {[...skills, ...skills].map((skill, index) => (
            <div
              key={`${skill.name}-${index}`}
              className="flex shrink-0 items-center justify-center mr-10"
              aria-hidden={index >= skills.length}
            >
              <Image
                src={skill.icon}
                alt={index >= skills.length ? "" : `Icono de ${skill.name}`}
                title={skill.name}
                width={55}
                height={55}
                className={skill.invert ? "dark:invert" : ""}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
