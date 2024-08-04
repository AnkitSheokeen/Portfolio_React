import React from 'react'

export default function ContactMe() {
  return (
    <section className='ContactME' id='ContactME'>
        <div class="container">
            <div id="contact">
                <div class="contact-container">
                    <div class="text">
                        <h1>Send me a message!</h1>
                        <p>Got a question or proposal, or just want to say hello? Go ahead.</p>
                        <br/><br/><br/>
                    </div>
                    <div class="forum">
                        <form id="contact-form">
                            <div class="input-group">
                                <div class="form-group">
                                    <label for="name">Your Name</label>
                                    <input type="text" id="name" name="name" placeholder="Enter your name" required />
                                </div>
                                <div class="form-group">
                                    <label for="email" >Email Address</label>
                                    <input type="email" id="email" name="email" placeholder="Enter your email address" required />
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="message" class="form-control">Your Message</label>
                                <textarea id="message" name="message" placeholder="Hi, I want to contact you regarding ---" required></textarea>
                            </div>
                            <button type="submit">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
