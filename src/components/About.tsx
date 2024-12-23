import { Component } from "react";
import './../style/About.css'
import portrait from '../assets/portrait.jpg'

export default class About extends Component {
    render() {
    return <section id="about">
    <div className="about-container">
      <div className="about-details">
        <div className="about-title"> 
          <h1 className="title main-title">
            Hi,<br/> I am Charlie Oh
          </h1>
          <h3 className="title sub-title">
          currently focused on building software to solve real-world problems.
          </h3>
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
  </section>
    }
}