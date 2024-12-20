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
          <h2 className="title sub-title">
          currently focused on building software to solve real-world problems.
          </h2>
        </div>
        <div className="about-me-buttons">
          <button type="button" className="button text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">More About Me</button>
          <button type="button" className="button text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">See My Past Work</button>
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