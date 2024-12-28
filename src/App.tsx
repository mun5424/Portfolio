import About from "./components/About.tsx";
import Contact from "./components/Contact.tsx";
import Navbar from "./components/Navbar.tsx";
import Experience from "./components/Experience.tsx";
import Skills from "./components/Skills.tsx";
import Projects from "./components/Projects.tsx";
import './App.css'

function App() {
  return (
    <div className="container">
      <Navbar />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
      <footer>Developed by Charlie Oh with React and Vite, deployed with Github Pages</footer>
    </div>
  )
}

export default App;
