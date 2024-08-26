import React from 'react'

export default function Education() {
  return (
        <section id="Education" className="education--section">
            <div>
                <p className='education--title'>Experience</p>
            </div>
            <div className='education--container--box'>
                
                <div className="education--section--card">
                        <div className="education-box-in">
                            <span>August 2024</span>
                                <h2>Frontend Developer Intern</h2>
                            <span>DigiGlobe Solutions</span>
                        </div>
                </div>
                
                <div className="education--section--card">
                    <div className="education-box-in">
                        <span className="date">Feburary 2021 - August 2021</span>
                            <h2>Digital Marketing Intern</h2>
                        <span className="university">IIFEM</span>
                    </div>
                </div>

                <div className="education--animation">
                    
                    <dotlottie-player src="https://lottie.host/e13c1c34-3f19-4f80-b91d-5a9065073d30/oAQLrd5Eek.json" background="transparent" speed="1" style={{width: "300px", height: "300px"}} loop autoplay></dotlottie-player>

                </div>

            </div>
            
        </section>
  )
}
