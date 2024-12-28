import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Navbar from "./components/navbar/Navbar";
import Portfolio from "./components/portfolio/Portfolio";
import Skills from "./components/skills/Skills";

const Home = () => {
  return (
    <div className="app">
      <Navbar />
      <About />
      <Portfolio />
      <Skills />
      <Experience />
    </div>
  );
};

export default Home;
