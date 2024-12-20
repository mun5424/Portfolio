import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import './App.css'

function App() {
  return (
    <div className="container">
      <Navbar />
      <About />
      <Experience />
      <Skills />
      <Contact />
    </div>
  )
}

export default App;