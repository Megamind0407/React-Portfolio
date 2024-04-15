import NavBar from './components/NavBar/NavBar';
import Intro from './components/Intro/intro';
import About from './components/About/about';
import Skills from './components/Skills/skill';
import Experience from "./components/Experience/experience"
import Projects from "./components/Projects/project"


function App() {
  return (
    <div className="App">
      <NavBar />
      <Intro />
      <About/>
      <Skills/>
      <Experience/>
      <Projects/>
    </div>
  );
}

export default App;
