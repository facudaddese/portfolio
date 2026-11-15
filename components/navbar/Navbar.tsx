"use client";

import { useTheme } from "@/hooks";
import Link from "next/link";
import { MdDarkMode, MdLightMode } from "react-icons/md";

const styles = "hover:text-gray-400 text-[13px] sm:text-[15px] ";

export const Navbar = () => {
  const { theme, handleTheme } = useTheme();

  return (
    <nav className="w-80 sm:w-auto fixed top-5 left-1/2 -translate-x-1/2 z-1000 rounded-[30px] backdrop-blur-md p-2 shadow-[0px_0px_20px_-2px_rgba(0,0,0,0.15)] border border-gray-800/10 mx-auto">
      <ul className="flex items-center justify-center gap-x-7 px-3 w-full">
        <li>
          <Link href="#sobre-mi" className={`${styles}`}>
            Sobre mí
          </Link>
        </li>
        <li>
          <Link href="#proyectos" className={`${styles}`}>
            Proyectos
          </Link>
        </li>
        <li>
          <Link href="#contacto" className={`${styles}`}>
            Contacto
          </Link>
        </li>
        <button
          className="border-l border-gray-200 cursor-pointer"
          onClick={handleTheme}
        >
          {theme === "light" ? (
            <MdDarkMode size={20} className="ml-2" />
          ) : (
            <MdLightMode size={20} className="ml-2" />
          )}
        </button>
      </ul>
    </nav>
  );
};
