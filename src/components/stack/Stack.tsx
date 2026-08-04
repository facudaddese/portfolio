interface Skill {
  icon: string;
  name: string;
}

const skills: Skill[] = [
  {
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg",
    name: "Icono de HTML5",
  },
  {
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg",
    name: "Icono de CSS3",
  },
  {
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    name: "Icono de JavaScript",
  },
  {
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg",
    name: "Icono de React",
  },
  {
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    name: "Icono de Tailwind CSS",
  },
  {
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
    name: "Icono de TypeScript",
  },
];

const Skills = () => {
  return (
    <section className="flex flex-col items-center pt-10">
      <h2 className="text-xl font-medium mb-5 text-gray-600">
        Stack
      </h2>
      <div className="w-full max-w-xl overflow-hidden mask-[linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
          {[...skills, ...skills].map((skill, index) => (
            <div
              key={index}
              className="flex shrink-0 items-center justify-center mr-10"
            >
              <img src={skill.icon} alt={skill.name} width={55} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
