import dbz1 from "../../public/projects/dbz/dbz1.png";
import dbz2 from "../../public/projects/dbz/dbz2.png";
import dbz3 from "../../public/projects/dbz/dbz3.png";
import dbz4 from "../../public/projects/dbz/dbz4.png";
import dbz5 from "../../public/projects/dbz/dbz5.png";
import dbz6 from "../../public/projects/dbz/dbz6.png";
import dbz7 from "../../public/projects/dbz/dbz7.png";
import dbz8 from "../../public/projects/dbz/dbz8.png";
import dbz9 from "../../public/projects/dbz/dbz9.png";

const CDN = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

export const projects = [
  {
    images: [dbz1, dbz2, dbz3, dbz4, dbz5, dbz6, dbz7, dbz8, dbz9],
    name: "Dragon Ball Explorer",
    description:
      "Dashboard del universo de Dragon Ball que permite buscar, filtrar personajes por raza, género y afiliación, y ordenarlos alfabéticamente. Incluye información detallada de cada personaje, sus transformaciones y niveles de Ki. Además, cuenta con secciones dedicadas a planetas, con sus habitantes, transformaciones y gestionar personajes favoritos.",
    tags: [
      { name: "React", icon: `${CDN}/react/react-original.svg` },
      {
        name: "Next.js",
        icon: `${CDN}/nextjs/nextjs-original.svg`,
        invert: true,
      },
      { name: "TypeScript", icon: `${CDN}/typescript/typescript-original.svg` },
      {
        name: "Tailwind CSS",
        icon: `${CDN}/tailwindcss/tailwindcss-original.svg`,
      },
    ],
    preview: "https://dragonball-explorer.vercel.app/dashboard/characters",
    code: "https://github.com/facudaddese/api-dbz",
  },
];
