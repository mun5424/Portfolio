import './../style/Navbar.css'

const Navbar = () => {
    return (
        <div className="navbar-container">

            <nav className="navbar">
            <div className="navbar-logo">
            </div>
            <ul className="navbar-links">
                <li>
                <a href="#about-section">About</a>
                </li>
                <li>
                <a href="#experience-section">Experience</a>
                </li>
                <li>
                <a href="#projects-section">Projects</a>
                </li>
                <li>
                <a href="#contact-section">Contact</a>
                </li>
            </ul>
            

            </nav>
            
        </div>
            
    );
  };  

export default Navbar;