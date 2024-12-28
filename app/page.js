import About from "./components/about/About";
import Navbar from "./components/navbar/Navbar";
import Portfolio from "./components/portfolio/Portfolio";

const Home = () => {
  return (
    <div className="app">
      <Navbar />
      <About />
      <Portfolio />
    </div>
  );
};

export default Home;
