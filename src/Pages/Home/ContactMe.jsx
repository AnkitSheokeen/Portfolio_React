import React, { useRef, useState, useEffect } from 'react';
import emailjs from 'emailjs-com';

export default function ContactMe() {
    const form = useRef();
    const [alertMessage, setAlertMessage] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState('success');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_u3wl45j', 'template_ue7zzcn', form.current, 'YaPyqmuLxogEe1mbw')
      .then((result) => {
        setAlertMessage('Message sent successfully!');
        setAlertType('success');
        setShowAlert(true);
      }, (error) => {
        setAlertMessage('Failed to send the message, please try again.');
        setAlertType('danger');
        setShowAlert(true);
      });

    // Reset the form after submission
    e.target.reset();
  };

  useEffect(() => {
    if (showAlert) {
      const timer = setTimeout(() => {
        setShowAlert(false);
      }, 2000); // 2 seconds

      return () => clearTimeout(timer); // Cleanup timer on component unmount
    }
  }, [showAlert]);

  return (
    <section className='ContactME' id='ContactME'>
        <div className="container">
            <div id="contact">
                <div className="contact-container">
                    <div className="text">
                        <h1>Send me a message!</h1>
                        <p>Got a question or proposal, or just want to say hello? Go ahead.</p>
                        <br/><br/><br/>
                    </div>
                    <div className="forum">
                        <form id="contact-form" ref={form} onSubmit={sendEmail}>
                            <div className="input-group">
                                <div className="form-group">
                                    <label htmlFor="name">Your Name</label>
                                    <input type="text" id="name" name="name" placeholder="Enter your name" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email" >Email Address</label>
                                    <input type="email" id="email" name="email" placeholder="Enter your email address" required />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="message" className="form-control">Your Message</label>
                                <textarea id="message" name="message" placeholder="Hi, I want to contact you regarding ---" required></textarea>
                            </div>
                            <button type="submit">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
            {showAlert && (
          <div className={`alert alert-${alertType} alert-dismissible fade show position-fixed`} style={{ top: '20px', right: '20px', zIndex: 10000 }}>
            {alertMessage}
            {/* <button type="button" className="btn-close" aria-label="Close" onClick={() => setShowAlert(false)}></button> */}
          </div>
        )}
        </div>
    </section>
  )
}
