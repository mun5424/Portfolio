import './../style/Navbar.css'
import { useState } from 'react'
import hamburger from './../assets/hamburger.png'

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
      setMenuOpen(!menuOpen);
    };

    return (
        <div className="navbar-container">

            <nav className="navbar">
            <div className="navbar-logo">
            </div>
            
            
            <div className="navbar-hamburger">
                
            </div>
            <div className="hamburger" onClick={toggleMenu}>
                <a><img width="30px" height="30px" src={hamburger} /> </a>
            </div>


            <div className={`menu ${menuOpen ? 'active' : ''}`}>
            <ul className="navbar-links">
                <li>
                <a className="navbar-button" href="#experience-section">Experience </a>
                </li>
                <li>
                <a href="#projects-section">Projects</a>
                </li>
                <li>
                <a href="#contact-section">Contact</a>
                </li>
            </ul>

            </div>
            </nav>
            
        </div>
            
    );
  };  

export default Navbar;