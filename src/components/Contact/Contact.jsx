// eslint-disable-next-line
import React, { useContext, useState, useRef } from 'react';
import './Contact.css';
import emailjs from '@emailjs/browser';
// eslint-disable-next-line
import { themeContext } from '../../Context';

function Contact() {
  const theme = useContext(themeContext);
  const { darkMode } = theme.state;
  const form = useRef();
  const [done, setDone] = useState(false);
  const [errorState, setErrorState] = useState(null); // Declare an error state
  const sendEmail = async (e) => {
    e.preventDefault();

    try {
      await emailjs.sendForm(
        'service_tamuv7m',
        'template_sy2xj0r',
        form.current,
        'z73TRkhxuk508oI51',
      );

      setDone(true);
      form.current.reset();
      setErrorState(errorState); // Clear any previous error state
    } catch (error) {
      // Handle error here by setting an error state
      setErrorState('An error occurred. Please try again.');
    }
  };

  return (
    <div className="contact-form" id="contact">
      {/* left side copy and paste from work section */}
      <div className="w-left">
        <div className="awesome">
          {/* darkMode */}
          <span style={{ color: darkMode ? 'white' : '' }}>Get in Touch</span>
          <span>Contact me</span>
          <div
            className="blur s-blur1"
            style={{ background: '#ABF1FF94' }}
          />
        </div>
      </div>
      {/* right side form */}
      <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" className="user" placeholder="John Doe" required />
          <input type="email" name="email" className="user" placeholder="johndoe@gmail.com" required />
          <textarea name="message" className="user" placeholder="How can I help you?" required />
          <input type="submit" value="Send" className="button" />
          <span>{done && 'Thanks for Contacting me'}</span>
          <div
            className="blur c-blur1"
            style={{ background: 'var(--purple)' }}
          />
        </form>
      </div>
    </div>
  );
}

export default Contact;
