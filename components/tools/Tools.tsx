import Image from "next/image";

interface Tool {
  icon: string;
  name: string;
  invert?: boolean;
}

const CDN = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

const tools: Tool[] = [
  { icon: `${CDN}/vscode/vscode-original.svg`, name: "VS Code" },
  { icon: `${CDN}/git/git-original.svg`, name: "Git" },
  { icon: `${CDN}/github/github-original.svg`, name: "GitHub", invert: true },
  { icon: `${CDN}/vitejs/vitejs-original.svg`, name: "Vite" },
  { icon: `${CDN}/vercel/vercel-original.svg`, name: "Vercel", invert: true },
  { icon: `${CDN}/postman/postman-original.svg`, name: "Postman" },
];

export const Tools = () => {
  return (
    <section className="flex flex-col items-center pb-20">
      <h2 className="font-medium text-2xl md:text-[26px] pb-10">Herramientas</h2>
      <div className="w-full max-w-xl overflow-hidden mask-[linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex w-max marquee-reverse hover:[animation-play-state:paused]">
          {[...tools, ...tools].map((tool, index) => (
            <div
              key={`${tool.name}-${index}`}
              className="flex shrink-0 items-center justify-center mr-10"
              aria-hidden={index >= tools.length}
            >
              <Image
                src={tool.icon}
                alt={index >= tools.length ? "" : `Icono de ${tool.name}`}
                title={tool.name}
                width={55}
                height={55}
                className={tool.invert ? "dark:invert" : ""}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
