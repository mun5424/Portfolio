import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import './App.css'

function App() {
  return (
    <div className="container">
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </div>
  )
}

export default App;
