import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <ul className="flex justify-center items-center gap-x-1 text-(length:--text-nav-item)">
      <li>
        <NavLink to={"/sobre-mi"} className="px-3">
          Sobre mí
        </NavLink>
      </li>
      <li>
        <NavLink to={"/proyectos"} className="px-3">
          Proyectos
        </NavLink>
      </li>
      <li>
        <NavLink to={"/contacto"} className="px-3">
          Contacto
        </NavLink>
      </li>
      <li className="flex items-center border-l border-gray-200">
        <span className="material-symbols-outlined pl-2 hover:cursor-pointer">
          dark_mode
        </span>
        {/* <span className="material-symbols-outlined">wb_sunny</span> */}
      </li>
    </ul>
  );
};

export default NavBar;
