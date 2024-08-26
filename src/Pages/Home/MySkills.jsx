import React from 'react';
// import C from '../img//C.png'
import Cpp from '../img//C++.png'
import python from '../img//python.png'
import js from '../img//js.png'
import html from '../img//html.png'
import css from '../img//CSS.png'
import react from '../img//react.png'
import mongodb from '../img//mongodb.png'
import mysql from '../img//mysql.png'
import git from '../img//git.png'
import github from '../img//github.png'
// import C from '../img//C++.png'

export default function MySkills() {
  return (
    <section className='skills--section' id='MySkills'>
        <div className='portfolio--container'>
            <p className='section--title'>Myskills</p>
            <h2 className="skills--section--heading">My Expertise</h2>
        </div>
        <div className="skills--section--container">
          
                <div className='skills--section--card animate-card'>
                    <div className="skills--section--img">
                        <img src={Cpp} alt="skill chain" />
                        <img src={Cpp} alt="skill chain" />
                        <img src={python} alt="skill chain" />
                        <img src={js} alt="skill chain" />
                    </div>
                    <div className="skill--section--card--content">
                        <h3 className="skills-section--title">C , C++ , Python , JavaScript</h3>
                        <p className="skills--section--description">Programming Languages</p>
                    </div>
                </div>
                <div className='skills--section--card animate-card'>
                    <div className="skills--section--img">
                        <img src={html} alt="skill chain" />
                        <img src={css} alt="skill chain" />
                        <img src={react} alt="skill chain" />
                        <img src={react} alt="skill chain" />
                    </div>
                    <div className="skill--section--card--content">
                        <h3 className="skills-section--title">HTML , CSS , ReactJS , Bootstrap</h3>
                        <p className="skills--section--description">Web-Development</p>
                    </div>
                </div>
                <div className='skills--section--card animate-card'>
                    <div className="skills--section--img">
                        <img src={mysql} alt="skill chain" />
                        <img src={mongodb} alt="skill chain" />
                    </div>
                    <div className="skill--section--card--content">
                        <h3 className="skills-section--title">MySQL , MongoDB</h3>
                        <p className="skills--section--description">Database Managment</p>
                    </div>
                </div>
                <div className='skills--section--card animate-card'>
                    <div className="skills--section--img">
                        <img src={git} alt="skill chain" />
                        <img src={github} alt="skill chain" />
                    </div>
                    <div className="skill--section--card--content">
                        <h3 className="skills-section--title">Git , GitHub</h3>
                        <p className="skills--section--description">Version Control</p>
                    </div>
                </div>
        </div>
    </section>
  )
}
