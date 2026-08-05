import { useTheme } from "../../hooks/useTheme";

const style = "font-body hover:text-(--color-text-muted)";

const NavBar = () => {
  const { theme, handleTheme } = useTheme();

  return (
    <ul className="flex justify-center items-center gap-x-7 px-3 text-(length:--text-nav-item)">
      <li className="w-15">
        <a href="#sobre-mi" className={style}>
          Sobre mí
        </a>
      </li>
      <li className="w-15">
        <a href="#proyectos" className={style}>
          Proyectos
        </a>
      </li>
      <li className="w-15">
        <a href="#contacto" className={style}>
          Contacto
        </a>
      </li>
      <li className="flex items-center border-l pl-3 border-(--color-border)">
        <button className="flex cursor-pointer" onClick={handleTheme}>
          <span className="material-symbols-outlined ">
            {theme === "dark" ? "wb_sunny" : "dark_mode"}
          </span>
        </button>
      </li>
    </ul>
  );
};

export default NavBar;
