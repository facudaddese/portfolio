import mcdonaldsImg from "../assets/img/projects/img-mc.webp";
import rickmortyImg from "../assets/img/projects/img-r_m.webp";
import calculatorImg from "../assets/img/projects/img-tdee.webp";

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
    name: "Calculadora TDEE",
    description:
      "Calculadora de gasto calórico diario que, a partir de los datos del usuario, recomienda cuántas calorías consumir según el objetivo elegido: bajar, mantener o subir de peso. Muestra además el índice de masa corporal, el peso ideal, y un desglose visual de los macronutrientes recomendados para ese objetivo.",

    img: calculatorImg,
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
    preview: "https://calculadora-tdee.vercel.app/",
    code: "https://github.com/facudaddese/calculadora-tdee",
  },
  {
    name: "McDonald's clone",
    description:
      "E-commerce inspirado en McDonald's donde los usuarios pueden explorar el menú por categorías, agregar productos al carrito ajustando cantidades y ver el total actualizado en tiempo real. El carrito persiste entre sesiones, y el diseño está completamente adaptado a dispositivos móviles.",
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
      "Explorador del universo de Rick and Morty que permite buscar y filtrar personajes por nombre, estado, especie y género, navegando entre páginas de resultados. También incluye información detallada de episodios y ubicaciones de la serie.",
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
