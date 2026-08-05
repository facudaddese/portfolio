import NavBar from "../navbar/NavBar";

const Nav = () => {
  return (
    <nav className="max-w-screen fixed top-5 left-1/2 -translate-x-1/2 z-1000 rounded-[30px] bg-(--color-surface)/60 backdrop-blur-md border border-(--color-border) p-2 shadow-[0px_0px_20px_-2px_rgba(0,0,0,0.15)]">
      <NavBar />
    </nav>
  );
};

export default Nav;
