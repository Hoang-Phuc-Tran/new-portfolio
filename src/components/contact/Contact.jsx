import "./contact.css";
import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";

function Contact() {
  const form = useRef();
  const [messageSent, setMessageSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_uthsyaq", "template_6t8so0t", form.current, "3nLpvMF1Qo5hfP3PV").then(
      (result) => {
        console.log(result.text);
        setMessageSent(true);
        setTimeout(() => setMessageSent(false), 3000); // Hide after 3 seconds
      },
      (error) => {
        console.log(error.text);
      }
    );

    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <form
          ref={form}
          onSubmit={sendEmail}
          className="form-center"
          style={{ position: "relative" }}
        >
          <h4 className="message_txt">Send me a direct message !!</h4>
          <input type="text" name="name" placeholder="Your Full Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" rows="7" placeholder="Your Message"></textarea>
          <button type="submit" className="btn btn-primary btn-message">
            Send Message
          </button>
          <p className={`confirmation-message ${messageSent ? "show" : ""}`}>
            Your message has been sent!
          </p>
        </form>
      </div>
    </section>
  );
}

export default Contact;
