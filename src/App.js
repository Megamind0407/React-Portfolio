import NavBar from './components/NavBar/NavBar';
import Intro from './components/Intro/intro';
import About from './components/About/about';
import Skills from './components/Skills/skill';
import Experience from "./components/Experience/experience"
import Projects from "./components/Projects/project"
import Contact from "./components/Contact/contact"
import Footer from "./components/Footer/footer"
import "./App.css"
function App() {
  
  return (
    <div className="App">
      <NavBar />
      <Intro />
      <About/>
      <Skills/>
      <Experience/>
      <Projects/>
      <Contact/>
      <Footer/>
      </div>
  );
}

export default App;
