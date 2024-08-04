import React from 'react';
import data from '../../Data/index.json';

export default function MySkills() {
  return (
    <section className='skills--section' id='mySkills'>
        <div className='portfolio--container'>
            <p className='section--title'>Myskills</p>
            <h2 className="skills--section--heading">My Expertise</h2>
        </div>
        <div className="skills--section--container">
            {data?.skills?.map((item, index) => (
                <div key={index} className='skills--section--card'>
                    <div className="skills--section--img">
                        <img src={item.src} alt="skill chain" />
                    </div>

                </div>
            ))}
        </div>
    </section>
  )
}
