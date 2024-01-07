import Navbar from "./navbar/navbar";
import Intro from "./intro/intro";
import About from "./about/about";
import Skills from "./skills/skills";
import Contact from "./contact/contact";
import Portfolio from "./portfolio/portfolio";
import Footer from "./footer/footer";
function App() {
  return (
    <div className="App">
     <Navbar />
      <Intro/>
      <About/>
      <Skills/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
