import { Component } from "react";
import './../style/About.css'

export default class About extends Component {
    render() {
    return <section id="about">
    <div className="about-container">
      <div className="about-details">
        <h1 className="">
          Hi, I am Charlie Oh
        </h1>
        <p className="">
        I am passionate about building software and web applications. I am a Computer Science undergraduate from UC Irvine.
        </p>
        <div className="about-me-buttons">
          <button type="button" className="button text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">More About Me</button>
          <button type="button" className="button text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">See My Past Work</button>
        </div>
      </div>
      <div className="about-hero">
        <img src="https://fastly.picsum.photos/id/698/200/200.jpg?hmac=EElVlYPe8BAq1Btf4bWUxP9NoQP01_e8LTUzpbdKbgY" />
        <div className="about-links">

        <a className="text-sm text-gray-500 transition hover:text-gray-600" target="_blank" rel="noopener noreferrer" href="mailto:mun5424@gmail.com">
          <title>Mail</title>
          <svg className="svg" width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M20 4C21.6569 4 23 5.34315 23 7V17C23 18.6569 21.6569 20 20 20H4C2.34315 20 1 18.6569 1 17V7C1 5.34315 2.34315 4 4 4H20ZM19.2529 6H4.74718L11.3804 11.2367C11.7437 11.5236 12.2563 11.5236 12.6197 11.2367L19.2529 6ZM3 7.1688V17C3 17.5523 3.44772 18 4 18H20C20.5523 18 21 17.5523 21 17V7.16882L13.8589 12.8065C12.769 13.667 11.231 13.667 10.1411 12.8065L3 7.1688Z" fill="#FFFFFF"/>
          </svg>
        </a>
        
        <a className="text-sm text-gray-500 transition hover:text-gray-600" target="_blank" rel="noopener noreferrer" href="https://github.com/mun5424">
          <title>Github</title>
          <svg className="svg" xmlns="http://www.w3.org/2000/svg"  width="30px" height="30px" viewBox="0 0 30 30" version="1.1">
            <g id="surface1">
            <path fill-rule="evenodd" fill-opacity="1" fill="#FFF" d="M 14.957031 0 C 6.683594 0 0 6.875 0 15.378906 C 0 22.179688 4.285156 27.933594 10.226562 29.972656 C 10.96875 30.125 11.242188 29.640625 11.242188 29.234375 C 11.242188 28.875 11.214844 27.652344 11.214844 26.378906 C 7.054688 27.296875 6.191406 24.546875 6.191406 24.546875 C 5.523438 22.765625 4.53125 22.304688 4.53125 22.304688 C 3.167969 21.363281 4.628906 21.363281 4.628906 21.363281 C 6.140625 21.464844 6.933594 22.941406 6.933594 22.941406 C 8.269531 25.285156 10.425781 24.625 11.289062 24.214844 C 11.414062 23.222656 11.8125 22.535156 12.230469 22.152344 C 8.914062 21.796875 5.421875 20.472656 5.421875 14.566406 C 5.421875 12.882812 6.015625 11.507812 6.957031 10.441406 C 6.808594 10.058594 6.289062 8.480469 7.105469 6.367188 C 7.105469 6.367188 8.367188 5.957031 11.214844 7.945312 C 12.433594 7.609375 13.691406 7.4375 14.957031 7.433594 C 16.21875 7.433594 17.503906 7.613281 18.695312 7.945312 C 21.542969 5.957031 22.804688 6.367188 22.804688 6.367188 C 23.621094 8.480469 23.101562 10.058594 22.953125 10.441406 C 23.917969 11.507812 24.488281 12.882812 24.488281 14.566406 C 24.488281 20.472656 20.996094 21.773438 17.652344 22.152344 C 18.199219 22.636719 18.667969 23.554688 18.667969 25.003906 C 18.667969 27.066406 18.644531 28.722656 18.644531 29.234375 C 18.644531 29.640625 18.917969 30.125 19.660156 29.972656 C 25.601562 27.933594 29.886719 22.179688 29.886719 15.378906 C 29.910156 6.875 23.199219 0 14.957031 0 Z M 14.957031 0 "/>
            </g>
            </svg>
        </a>
        
        <a className="text-sm text-gray-500 transition hover:text-gray-600" target="_blank" rel="noopener noreferrer" href="https://github.com/mun5424">
          <title>Linkedin</title>
          <svg  width="30px" height="30px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
            <g>
              <path fill="#FFF" d="M113,145c-141.4,0-256,114.6-256,256s114.6,256,256,256s256-114.6,256-256S254.4,145,113,145z M272.8,560.7
                c-20.8,20.8-44.9,37.1-71.8,48.4c-27.8,11.8-57.4,17.7-88,17.7c-30.5,0-60.1-6-88-17.7c-26.9-11.4-51.1-27.7-71.8-48.4
                c-20.8-20.8-37.1-44.9-48.4-71.8C-107,461.1-113,431.5-113,401s6-60.1,17.7-88c11.4-26.9,27.7-51.1,48.4-71.8
                c20.9-20.8,45-37.1,71.9-48.5C52.9,181,82.5,175,113,175s60.1,6,88,17.7c26.9,11.4,51.1,27.7,71.8,48.4
                c20.8,20.8,37.1,44.9,48.4,71.8c11.8,27.8,17.7,57.4,17.7,88c0,30.5-6,60.1-17.7,88C309.8,515.8,293.5,540,272.8,560.7z"/>
              <rect x="-8.5" y="348.4" width="49.9" height="159.7"/>
              <path d="M15.4,273c-18.4,0-30.5,11.9-30.5,27.7c0,15.5,11.7,27.7,29.8,27.7h0.4c18.8,0,30.5-12.3,30.4-27.7
                C45.1,284.9,33.8,273,15.4,273z"/>
              <path d="M177.7,346.9c-28.6,0-46.5,15.6-49.8,26.6v-25.1H71.8c0.7,13.3,0,159.7,0,159.7h56.1v-86.3c0-4.9-0.2-9.7,1.2-13.1
                c3.8-9.6,12.1-19.6,27-19.6c19.5,0,28.3,14.8,28.3,36.4v82.6H241v-88.8C241,369.9,213.2,346.9,177.7,346.9z"/>
            </g>
          </svg>
        </a>
        
        </div>
      </div>
    </div>
  </section>
    }
}