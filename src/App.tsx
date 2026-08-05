import { useEffect, useState } from "react";
import { BeatLoader } from "react-spinners";
import AboutMe from "./components/about_me/AboutMe";
import Footer from "./components/footer/Footer";
import Nav from "./components/nav/Nav";
import ProjectsContainer from "./components/projects_container/ProjectsContainer";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-(--color-bg)">
        <BeatLoader color="var(--color-text)" />
      </div>
    );
  }

  return (
    <div className="bg-(--color-bg)">
      <div className="max-w-300 mx-auto px-5 min-h-screen">
        <Nav />
        <div data-aos="fade-down">
          <AboutMe />
          <ProjectsContainer />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
