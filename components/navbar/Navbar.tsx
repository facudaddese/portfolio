"use client";

import { useTheme } from "@/hooks";
import { MdDarkMode, MdLightMode } from "react-icons/md";

const styles =
  "hover:text-gray-400 dark:hover:text-gray-500 text-[13px] sm:text-[15px]";

export const Navbar = () => {
  const { handleTheme } = useTheme();

  return (
    <nav className="w-82 sm:w-auto fixed top-5 left-1/2 -translate-x-1/2 z-1000 rounded-[30px] backdrop-blur-md p-2 shadow-[0px_0px_20px_-2px_rgba(0,0,0,0.15)] border border-gray-600/15 mx-auto dark:shadow-[0px_0px_20px_-2px_rgba(0,0,0,0.6)] dark:border-white/50">
      <ul className="flex items-center justify-center gap-x-7 px-3 w-full">
        <li>
          <a href="#sobre-mi" className={`${styles}`}>
            Sobre mí
          </a>
        </li>
        <li>
          <a href="#proyectos" className={`${styles}`}>
            Proyectos
          </a>
        </li>
        <li>
          <a href="#contacto" className={`${styles}`}>
            Contacto
          </a>
        </li>
        <button
          className="border-l border-gray-200 cursor-pointer"
          onClick={handleTheme}
          aria-label="Cambiar tema"
        >
          <MdDarkMode className="text-lg sm:text-xl ml-2 block dark:hidden" />
          <MdLightMode className="text-lg sm:text-xl ml-2 hidden dark:block" />
        </button>
      </ul>
    </nav>
  );
};
