
import "../style/Contact.css";
import resume from "./../assets/resume.png"; 

const Contact = () => {
    return (
        <div id="contact-section">
            <h1 className="title">Contact</h1> 
            <div className="contact-container">
                <div className="contact-card">
                    <div className="contact-resume">
                        <h3>Resume</h3> 
                        <img src={resume}></img>
                    </div>
                    <div className="contact-info">
                        <h3>My Socials</h3> 
                        <div className="about-links">
                            <a className="icon text-sm text-gray-500 transition hover:text-gray-600" target="_blank" rel="noopener noreferrer" href="mailto:mun5424@gmail.com">
                            <title>Mail</title>
                            <svg className="icon svg" width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 4C21.6569 4 23 5.34315 23 7V17C23 18.6569 21.6569 20 20 20H4C2.34315 20 1 18.6569 1 17V7C1 5.34315 2.34315 4 4 4H20ZM19.2529 6H4.74718L11.3804 11.2367C11.7437 11.5236 12.2563 11.5236 12.6197 11.2367L19.2529 6ZM3 7.1688V17C3 17.5523 3.44772 18 4 18H20C20.5523 18 21 17.5523 21 17V7.16882L13.8589 12.8065C12.769 13.667 11.231 13.667 10.1411 12.8065L3 7.1688Z" fill="#FFFFFF"/>
                            </svg>
                            </a>

                            <a className="icon text-sm text-gray-500 transition hover:text-gray-600" target="_blank" rel="noopener noreferrer" href="https://github.com/mun5424">
                            <title>Github</title>
                            <svg className="icon svg" xmlns="http://www.w3.org/2000/svg"  width="30px" height="30px" viewBox="0 0 30 30" version="1.1">
                                <g id="surface1">
                                <path fill="#FFF" d="M 14.957031 0 C 6.683594 0 0 6.875 0 15.378906 C 0 22.179688 4.285156 27.933594 10.226562 29.972656 C 10.96875 30.125 11.242188 29.640625 11.242188 29.234375 C 11.242188 28.875 11.214844 27.652344 11.214844 26.378906 C 7.054688 27.296875 6.191406 24.546875 6.191406 24.546875 C 5.523438 22.765625 4.53125 22.304688 4.53125 22.304688 C 3.167969 21.363281 4.628906 21.363281 4.628906 21.363281 C 6.140625 21.464844 6.933594 22.941406 6.933594 22.941406 C 8.269531 25.285156 10.425781 24.625 11.289062 24.214844 C 11.414062 23.222656 11.8125 22.535156 12.230469 22.152344 C 8.914062 21.796875 5.421875 20.472656 5.421875 14.566406 C 5.421875 12.882812 6.015625 11.507812 6.957031 10.441406 C 6.808594 10.058594 6.289062 8.480469 7.105469 6.367188 C 7.105469 6.367188 8.367188 5.957031 11.214844 7.945312 C 12.433594 7.609375 13.691406 7.4375 14.957031 7.433594 C 16.21875 7.433594 17.503906 7.613281 18.695312 7.945312 C 21.542969 5.957031 22.804688 6.367188 22.804688 6.367188 C 23.621094 8.480469 23.101562 10.058594 22.953125 10.441406 C 23.917969 11.507812 24.488281 12.882812 24.488281 14.566406 C 24.488281 20.472656 20.996094 21.773438 17.652344 22.152344 C 18.199219 22.636719 18.667969 23.554688 18.667969 25.003906 C 18.667969 27.066406 18.644531 28.722656 18.644531 29.234375 C 18.644531 29.640625 18.917969 30.125 19.660156 29.972656 C 25.601562 27.933594 29.886719 22.179688 29.886719 15.378906 C 29.910156 6.875 23.199219 0 14.957031 0 Z M 14.957031 0 "/>
                                </g>
                                </svg>
                            </a>

                            <a className="icon text-sm text-gray-500 transition hover:text-gray-600" target="_blank" rel="noopener noreferrer" href="https://linkedin.com/in/mun5424">
                            <title>Linkedin</title>
                            <svg className="icon" fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="30px" height="30px">    
                            <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"/></svg>
                            </a>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Contact;