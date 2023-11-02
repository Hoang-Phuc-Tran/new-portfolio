import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'
import React, { useRef } from 'react';
import emailjs from 'emailjs-com'

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_uthsyaq', 'template_6t8so0t', form.current, '3nLpvMF1Qo5hfP3PV')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option contact__email">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>hoangphuctran9102@gmail.com</h5>
            <a href="mailto:hoangphuctran9102@gmail.com" target='_blank' rel="noreferrer" className='btn btn-primary'>Send a message</a>
          </article>
          <article className="contact__option contact__whatsapp">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>(1) 519 781-5512</h5>
            <a href="https://api.whatsapp.com/send?phone=5197815512" target='_blank' rel="noreferrer" className='btn btn-primary'>Send a message</a>
          </article>
        </div>
        {/* END OF CONTACT SECTION */}
        <form ref={form} onSubmit={sendEmail} className="form-center">
          <h4 className='message_txt'>Send me direct message !!</h4>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" row="7" placeholder='Your Message'></textarea>
          <button type='submit' className="btn btn-primary btn-message">Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact