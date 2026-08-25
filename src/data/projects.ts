import mcdonaldsImg from "../assets/img/projects/img-mc.webp";
import rickmortyImg from "../assets/img/projects/img-r_m.webp";

interface Project {
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

export const projects: Project[] = [
  {
    name: "McDonald's clone",
    description:
      "E-commerce inspirado en McDonald's desarrollado en React y TypeScript, con carrito de compras persistente, navegación por categorías y diseño completamente responsive. Los usuarios pueden explorar el menú por secciones, agregar productos al carrito ajustando cantidades, y ver el total actualizado en tiempo real.",
    img: mcdonaldsImg,
    tags: [
      {
        name: "React",
        icon: "devicon-react-original colored",
      },
      {
        name: "TypeScript",
        icon: "devicon-typescript-plain colored",
      },
      {
        name: "Tailwind CSS",
        icon: "devicon-tailwindcss-original colored",
      },
    ],
    preview: "https://clon-mcdonalds.vercel.app/",
    code: "https://github.com/facudaddese/clon-mcdonalds",
  },
  {
    name: "Rick And Morty",
    description:
      "Aplicación web desarrollada en React y TypeScript que permite explorar el universo de Rick and Morty. Los usuarios pueden buscar y filtrar personajes por nombre, estado, especie y género, navegar entre páginas de resultados y consultar información detallada de episodios y ubicaciones de la serie.",
    img: rickmortyImg,
    tags: [
      {
        name: "React",
        icon: "devicon-react-original colored",
      },
      {
        name: "TypeScript",
        icon: "devicon-typescript-plain colored",
      },
      {
        name: "Tailwind CSS",
        icon: "devicon-tailwindcss-original colored",
      },
    ],
    preview: "https://rickmorty-multiverse.vercel.app/",
    code: "https://github.com/facudaddese/api-rick-morty",
  },
];
