import './../style/About.css'
import portrait from '../assets/portrait.jpg'

const About = () => {
    return <div className="about-container">
      <div className="about-details">
        <div className="about-title"> 
          <h1 className="title main-title">
            Hi,<br/> I am Charlie Oh
          </h1>
          <div className="typewriter">
          <h3 className="title sub-title">
            Software Engineer and Full-Stack Developer 
          </h3>
          </div>
          <div className="about-paragraph">
          <p>
            I am an avid programmer, collaborator and listener. I like building software to solve problems - I consider software as an art in that anyone can exercise many ways to solve one problem.
            <br />
            I have experience with various object-oriented programming languages. I've worked with backend technologies such as Java, Python, and C#, and frontend technologies such as Angular, Node, and React.
            <br />
            On my free time, I like playing video games, scoping out new places for delicious food, and practice piano.
          </p>
          </div>
        </div>
        <div className="about-me-buttons">
          <button type="button" className="button">More About Me</button>
          <button type="button" className="button">See My Past Work</button>
        </div>
      </div>
      <div className="about-hero">
        <div className="mugshot-container"> 
          <img src={portrait} />
        </div>
      </div>
  </div>
}

export default About;