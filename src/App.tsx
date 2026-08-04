import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import MainLayout from "./components/main_layout/MainLayout";

function App() {
  return (
    <div className="max-w-300 mx-auto px-5 bg-white bg-[linear-gradient(180deg,rgba(251,251,255,1)_0%,transparent_100%)]">
      <Header />
      <MainLayout />
      <Footer />
    </div>
  );
}

export default App;
