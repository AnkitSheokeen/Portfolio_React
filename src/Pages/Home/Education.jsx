import React from 'react'

export default function Education() {
  return (
        <section id="Education" className="education--section">
            <div className='education--container'>
                <p className='education--title'>Education</p>
            </div>
            <div className='education--container--box'>
                <div className="education--section--box">
                    <div class="education-box-in">
                        <span class="date">2022-2024</span>
                            <h2>Master of Technology</h2>
                        <span class="university">GGSIPU</span>
                    </div>
                </div>
                <div className="education--section--box">
                        <div class="education-box-in">
                            <span>2022-2024</span>
                                <h2>Master of Technology</h2>
                            <span>GGSIPU</span>
                        </div>
                </div>
                <div className="education--animation">
                    <div>  
                    <dotlottie-player src="https://lottie.host/4cc44b9f-46d0-4bc4-b34c-5b869bb2e258/DifQvnSkmc.json" background="transparent" speed="1" style={{width: "300px", height: "300px"}} loop autoplay></dotlottie-player>
                    </div>
                </div>
            </div>
            
        </section>
  )
}
