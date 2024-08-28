import project1 from '../img//Project1.png'
import project2 from '../img//Project2.png'
import project3 from '../img//Project3.png'
import project4 from '../img//Project4.png'
import project5 from '../img//Project5.png'
import project6 from '../img//Project6.png'
import project7 from '../img//Project7.png'
import project8 from '../img//Project8.png'
import project9 from '../img//Project9.png'



export default function MyProjects() {
    return(
        <section className="project--section" id="Myprojects">
            <div className="project--container">
                <h2 className="section--heading">My Projects</h2>
            </div>
            <div>
                <a href="https://github.com/AnkitSheokeen" target="_blank" rel="noopener noreferrer">
                    <button className="btn btn-github">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 33 33"
                        fill="none"
                        >
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M16.3333 0.166748C7.50028 0.166748 0.333252 7.33378 0.333252 16.1667C0.333252 24.9997 7.50028 32.1667 16.3333 32.1667C25.1489 32.1667 32.3333 24.9997 32.3333 16.1667C32.3333 7.33378 25.1489 0.166748 16.3333 0.166748ZM26.9016 7.54202C28.8105 9.8674 29.9559 12.8348 29.9906 16.0452C29.5394 15.9585 25.0274 15.0387 20.4808 15.6114C20.3767 15.3858 20.2899 15.1428 20.1858 14.8999C19.9081 14.2405 19.5958 13.5637 19.2834 12.9216C24.3159 10.8739 26.6066 7.9238 26.9016 7.54202ZM16.3333 2.52684C19.804 2.52684 22.9797 3.82836 25.3919 5.96285C25.1489 6.30992 23.0838 9.06914 18.2248 10.8912C15.9862 6.77846 13.5047 3.41187 13.1229 2.89126C14.1467 2.64831 15.2227 2.52684 16.3333 2.52684ZM10.5199 3.811C10.8843 4.2969 13.3138 7.68085 15.5871 11.7068C9.20093 13.4075 3.56102 13.3728 2.95364 13.3728C3.83867 9.13855 6.70201 5.61577 10.5199 3.811ZM2.65863 16.1841C2.65863 16.0452 2.65863 15.9064 2.65863 15.7676C3.24865 15.7849 9.87772 15.8717 16.6977 13.824C17.0969 14.5875 17.4613 15.3684 17.8084 16.1493C17.6348 16.2014 17.4439 16.2535 17.2704 16.3055C10.2248 18.5788 6.47642 24.7914 6.16405 25.312C3.99485 22.8999 2.65863 19.6895 2.65863 16.1841ZM16.3333 29.8413C13.1749 29.8413 10.2595 28.7654 7.95147 26.9606C8.19442 26.4574 10.971 21.1125 18.676 18.4227C18.7107 18.4053 18.7281 18.4053 18.7628 18.388C20.689 23.3684 21.47 27.5506 21.6782 28.748C20.0296 29.4595 18.2248 29.8413 16.3333 29.8413ZM23.9515 27.4986C23.8127 26.6656 23.0838 22.6743 21.2964 17.7632C25.5828 17.0864 29.3311 18.1971 29.7997 18.3533C29.2097 22.1537 27.0231 25.4335 23.9515 27.4986Z"
                            fill="currentColor"
                        />
                        </svg>
                        Visit My GitHub
                    </button> 
                </a>
            </div>
            <div className="project--section--container">
                    {/* Portfolio */}
                    <div className="project--section--card">
                        <div className="project--section--img">
                            <img src={project9} alt="placeholder" />
                            <div className="overlay-text">A personal portfolio website, serving as a centralized space to showcase my projects, skills, and contact information</div>
                        </div>
                        <div className="project--section--card--content">
                            <div>
                                <h3 className="project--section--title">Portfolio</h3>
                                <p className="text-md">CSS, JS, ReactJs</p>
                            </div>
                            <div className='project--link'>
                                <a href="https://github.com/AnkitSheokeen/Portfolio_React" target="_blank" rel="noopener noreferrer" className="text-sn Project--link--live livelink">
                                    View in github
                                    <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 20 19"
                                    fill="none"
                                    >
                                    <path
                                        d="M4.66667 1.66675H18V15.0001M18 1.66675L2 17.6667L18 1.66675Z"
                                        stroke="currentColor"
                                        stroke-width="2.66667"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                    </svg>
                                </a>
                                <a href="https://ankitportfolioo.netlify.app/" rel="noopener noreferrer" className="text-sn Project--link--live livelink">
                                    Live
                                    <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 20 19"
                                    fill="none"
                                    >
                                    <path
                                        d="M4.66667 1.66675H18V15.0001M18 1.66675L2 17.6667L18 1.66675Z"
                                        stroke="currentColor"
                                        stroke-width="2.66667"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Linkdin clone */}
                    <div className="project--section--card">
                        <div className="project--section--img">
                            <img src={project2} alt="placeholder" />
                            <div className="overlay-text">A cross-platform LinkedIn clone application featuring multiple functionalities of Linkedin app</div>
                        </div>
                        <div className="project--section--card--content">
                            <div>
                                <h3 className="project--section--title">Linkdin-clone</h3>
                                <p className="text-md">ReactJS, Styled component, MongoDb</p>
                            </div>
                            <div className='project--link'>
                                <a href="https://github.com/AnkitSheokeen" target="_blank" rel="noopener noreferrer" className="text-sn Project--link--live livelink">
                                    View in github
                                    <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 20 19"
                                    fill="none"
                                    >
                                    <path
                                        d="M4.66667 1.66675H18V15.0001M18 1.66675L2 17.6667L18 1.66675Z"
                                        stroke="currentColor"
                                        stroke-width="2.66667"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                    </svg>
                                </a>
                                <a href="https://github.com/AnkitSheokeen" target="_blank" rel="noopener noreferrer" className="text-sn Project--link--live livelink">
                                    Live
                                    <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 20 19"
                                    fill="none"
                                    >
                                    <path
                                        d="M4.66667 1.66675H18V15.0001M18 1.66675L2 17.6667L18 1.66675Z"
                                        stroke="currentColor"
                                        stroke-width="2.66667"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Weather app */}
                    <div className="project--section--card">
                        <div className="project--section--img">
                            <img src={project8} alt="placeholder" />
                            <div className="overlay-text">A weather app using API</div>
                        </div>
                        <div className="project--section--card--content">
                            <div>
                                <h3 className="project--section--title">TextUtils</h3>
                                <p className="text-md">React, OpenWeatherMAP API</p>
                            </div>
                            <div className='project--link'>
                                <a href="https://github.com/AnkitSheokeen/TextUtils" target="_blank" rel="noopener noreferrer" className="text-sn Project--link--live livelink">
                                    View in github
                                    <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 20 19"
                                    fill="none"
                                    >
                                    <path
                                        d="M4.66667 1.66675H18V15.0001M18 1.66675L2 17.6667L18 1.66675Z"
                                        stroke="currentColor"
                                        stroke-width="2.66667"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                    </svg>
                                </a>
                                <a href="https://ankitsheokeen.github.io/TextUtils/" target="_blank" rel="noopener noreferrer" className="text-sn Project--link--live livelink">
                                    Live
                                    <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 20 19"
                                    fill="none"
                                    >
                                    <path
                                        d="M4.66667 1.66675H18V15.0001M18 1.66675L2 17.6667L18 1.66675Z"
                                        stroke="currentColor"
                                        stroke-width="2.66667"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Expanse ease */}
                    <div className="project--section--card">
                        <div className="project--section--img">
                            <img src={project1} alt="placeholder" />
                            <div className="overlay-text">A web application for tracking and managing expenses</div>
                        </div>
                        <div className="project--section--card--content">
                            <div>
                                <h3 className="project--section--title">Expense Ease</h3>
                                <p className="text-md">CSS, JS, ReactJs</p>
                            </div>
                            <div className='project--link'>
                                <a href="https://github.com/AnkitSheokeen/Expense-Ease" target="_blank" rel="noopener noreferrer" className="text-sn Project--link--live livelink">
                                    View in github
                                    <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 20 19"
                                    fill="none"
                                    >
                                    <path
                                        d="M4.66667 1.66675H18V15.0001M18 1.66675L2 17.6667L18 1.66675Z"
                                        stroke="currentColor"
                                        stroke-width="2.66667"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                    </svg>
                                </a>
                                <a href="https://expensetrackerappas.netlify.app/" target="_blank" rel="noopener noreferrer" className="text-sn Project--link--live livelink">
                                    Live
                                    <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 20 19"
                                    fill="none"
                                    >
                                    <path
                                        d="M4.66667 1.66675H18V15.0001M18 1.66675L2 17.6667L18 1.66675Z"
                                        stroke="currentColor"
                                        stroke-width="2.66667"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* TextUtils */}
                    <div className="project--section--card">
                        <div className="project--section--img">
                            <img src={project8} alt="placeholder" />
                            <div className="overlay-text">A multi Functional Text manipulation Web application</div>
                        </div>
                        <div className="project--section--card--content">
                            <div>
                                <h3 className="project--section--title">TextUtils</h3>
                                <p className="text-md">HTML, CSS, JavaScript</p>
                            </div>
                            <div className='project--link'>
                                <a href="https://github.com/AnkitSheokeen/TextUtils" target="_blank" rel="noopener noreferrer" className="text-sn Project--link--live livelink">
                                    View in github
                                    <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 20 19"
                                    fill="none"
                                    >
                                    <path
                                        d="M4.66667 1.66675H18V15.0001M18 1.66675L2 17.6667L18 1.66675Z"
                                        stroke="currentColor"
                                        stroke-width="2.66667"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                    </svg>
                                </a>
                                <a href="https://ankitsheokeen.github.io/TextUtils/" target="_blank" rel="noopener noreferrer" className="text-sn Project--link--live livelink">
                                    Live
                                    <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 20 19"
                                    fill="none"
                                    >
                                    <path
                                        d="M4.66667 1.66675H18V15.0001M18 1.66675L2 17.6667L18 1.66675Z"
                                        stroke="currentColor"
                                        stroke-width="2.66667"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Currency converter */}
                    <div className="project--section--card">
                        <div className="project--section--img">
                            <img src={project4} alt="placeholder" />
                            <div className="overlay-text">A WebApp to convert Currency to an another using API</div>
                        </div>
                        <div className="project--section--card--content">
                            <div>
                                <h3 className="project--section--title">Currency Converter</h3>
                                <p className="text-md">HTML, CSS, JavaScript</p>
                            </div>
                            <div className='project--link'>
                                <a href="https://github.com/AnkitSheokeen/Currency-converter" target="_blank" rel="noopener noreferrer" className="text-sn Project--link--live livelink">
                                    View in github
                                    <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 20 19"
                                    fill="none"
                                    >
                                    <path
                                        d="M4.66667 1.66675H18V15.0001M18 1.66675L2 17.6667L18 1.66675Z"
                                        stroke="currentColor"
                                        stroke-width="2.66667"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                    </svg>
                                </a>
                                <a href="https://ankitsheokeen.github.io/Currency-converter/" target="_blank" rel="noopener noreferrer" className="text-sn Project--link--live livelink">
                                    Live
                                    <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 20 19"
                                    fill="none"
                                    >
                                    <path
                                        d="M4.66667 1.66675H18V15.0001M18 1.66675L2 17.6667L18 1.66675Z"
                                        stroke="currentColor"
                                        stroke-width="2.66667"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Portfolio V1 */}
                    <div className="project--section--card">
                        <div className="project--section--img">
                            <img src={project3} alt="placeholder" />
                            <div className="overlay-text">A early version of this portfolio</div>
                        </div>
                        <div className="project--section--card--content">
                            <div>
                                <h3 className="project--section--title">Portfolio V1</h3>
                                <p className="text-md">HTML, CSS, JS</p>
                            </div>
                            <div className='project--link'>
                                <a href="https://github.com/AnkitSheokeen/Portfolio" target="_blank" rel="noopener noreferrer" className="text-sn Project--link--live livelink">
                                    View in github
                                    <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 20 19"
                                    fill="none"
                                    >
                                    <path
                                        d="M4.66667 1.66675H18V15.0001M18 1.66675L2 17.6667L18 1.66675Z"
                                        stroke="currentColor"
                                        stroke-width="2.66667"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                    </svg>
                                </a>
                                <a href="https://ankitsheokeen.github.io/Portfolio/" target="_blank" rel="noopener noreferrer" className="text-sn Project--link--live livelink">
                                    Live
                                    <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 20 19"
                                    fill="none"
                                    >
                                    <path
                                        d="M4.66667 1.66675H18V15.0001M18 1.66675L2 17.6667L18 1.66675Z"
                                        stroke="currentColor"
                                        stroke-width="2.66667"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* News Monkey */}
                    <div className="project--section--card">
                        <div className="project--section--img">
                            <img src={project6} alt="placeholder" />
                            <div className="overlay-text">A News App shows daily updated headlines and articles</div>
                        </div>
                        <div className="project--section--card--content">
                            <div>
                                <h3 className="project--section--title">News MOnkey</h3>
                                <p className="text-md">CSS, JS, ReactJs</p>
                            </div>
                            <div className='project--link'>
                                <a href="https://github.com/AnkitSheokeen" target="_blank" rel="noopener noreferrer" className="text-sn Project--link--live livelink">
                                    View in github
                                    <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 20 19"
                                    fill="none"
                                    >
                                    <path
                                        d="M4.66667 1.66675H18V15.0001M18 1.66675L2 17.6667L18 1.66675Z"
                                        stroke="currentColor"
                                        stroke-width="2.66667"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                    </svg>
                                </a>
                                <a href="https://github.com/AnkitSheokeen" target="_blank" rel="noopener noreferrer" className="text-sn Project--link--live livelink">
                                    Live
                                    <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 20 19"
                                    fill="none"
                                    >
                                    <path
                                        d="M4.66667 1.66675H18V15.0001M18 1.66675L2 17.6667L18 1.66675Z"
                                        stroke="currentColor"
                                        stroke-width="2.66667"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* RPS Game */}
                    <div className="project--section--card">
                        <div className="project--section--img">
                            <img src={project7} alt="placeholder" />
                            <div className="overlay-text">You vs Machine <br></br>Rock-Paper-Scissior Game</div>
                        </div>
                        <div className="project--section--card--content">
                            <div>
                                <h3 className="project--section--title">RPS-Game</h3>
                                <p className="text-md">HTML, CSS, JavaScript</p>
                            </div>
                            <div className='project--link'>
                                <a href="https://github.com/AnkitSheokeen/Game-RPS" target="_blank" rel="noopener noreferrer" className="text-sn Project--link--live livelink">
                                    View in github
                                    <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 20 19"
                                    fill="none"
                                    >
                                    <path
                                        d="M4.66667 1.66675H18V15.0001M18 1.66675L2 17.6667L18 1.66675Z"
                                        stroke="currentColor"
                                        stroke-width="2.66667"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                    </svg>
                                </a>
                                <a href="https://ankitsheokeen.github.io/Game-RPS/" target="_blank" rel="noopener noreferrer" className="text-sn Project--link--live livelink">
                                    Live
                                    <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 20 19"
                                    fill="none"
                                    >
                                    <path
                                        d="M4.66667 1.66675H18V15.0001M18 1.66675L2 17.6667L18 1.66675Z"
                                        stroke="currentColor"
                                        stroke-width="2.66667"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>

                
               </div>
        </section>
    )
}