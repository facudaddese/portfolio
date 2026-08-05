import AboutMe from "./components/about_me/AboutMe";
import Footer from "./components/footer/Footer";
import Nav from "./components/nav/Nav";
import ProjectsContainer from "./components/projects_container/ProjectsContainer";

function App() {
  return (
    <div className="bg-(--color-bg)">
      <div className="max-w-300 mx-auto px-5 min-h-screen">
        <Nav />
        <AboutMe />
        <ProjectsContainer />
        <Footer />
      </div>
    </div>
  );
}

export default App;
