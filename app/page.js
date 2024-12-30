import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Navbar from "./components/navbar/Navbar";
import Portfolio from "./components/portfolio/Portfolio";
import Skills from "./components/skills/Skills";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import HomePage from "./components/home/Home";

const Home = () => {
  return (
    <div className="app">
      <Navbar />
      <HomePage />
      <About />
      <Portfolio />
      <Skills />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
