import React from 'react'

export default function Education() {
  return (
        <section id="Education" className="education--section">
            <div>
                <p className='education--title'>Education</p>
            </div>
            <div className='education--container--box'>
                
                <div className="education--section--card">
                    <div className="education-box-in">
                        <span className="date">2022-2024</span>
                            <h2>Master of Technology</h2>
                        <span className="university">Guru gobind Singh Indraprastha University</span>
                    </div>
                </div>
                <div className="education--section--card">
                        <div className="education-box-in">
                            <span>2022-2024</span>
                                <h2>Bachalor of Technology</h2>
                            <span>PDM University</span>
                        </div>
                </div>

                <div className="education--animation">
                    
                    <dotlottie-player src="https://lottie.host/3c196b9a-d812-4c61-8be9-d3e2eb6f4057/Xucf9Yqci7.json" background="transparent" speed="1" style={{width: "300px", height: "300px"}} loop autoplay></dotlottie-player>

                </div>

            </div>
            
        </section>
  )
}
