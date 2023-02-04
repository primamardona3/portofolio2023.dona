import NavBar from "./components/NavBar";
import Home from "./components/Home";
import SocialLinks from "./components/SocialLinks";
import About from "./components/About";
import Portofolio from "./components/Portofolio";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

function App() {
  return(
    <div>
      <NavBar />
      <Home />
      <SocialLinks />
      <About />
      <Portofolio />
      <Experience />
      <Contact />
    </div>
  );

};

export default App;