import NavBar from "../navbar/NavBar";

const Nav = () => {
  return (
    <nav className="fixed top-5 left-1/2 -translate-x-1/2 z-1000 rounded-[30px] bg-neutral-100/60 backdrop-blur-md border border-gray-400 p-2 shadow-[0px_0px_20px_-2px_rgba(0,0,0,0.38)]">
      <NavBar />
    </nav>
  );
};

export default Nav;
