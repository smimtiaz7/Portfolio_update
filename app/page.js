import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Navbar from "./components/navbar/Navbar";
import Portfolio from "./components/portfolio/Portfolio";
import Skills from "./components/skills/Skills";
import Certifications from "./components/certification/Certifications";
import Contact from "./components/contact/Contact";

const Home = () => {
  return (
    <div className="app">
      <Navbar />
      <About />
      <Portfolio />
      <Skills />
      <Experience />
      <Certifications />
      <Contact />
    </div>
  );
};

export default Home;
