import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import './Style.css';

const Contact = () => {
  const [isDone, setIsDone] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Your form submission logic here

    // For demonstration purposes, I'm simulating a successful submission with a timeout
    setTimeout(() => {
      setIsDone(true);
    }, 1000);
  };

  return (
    <div className="wrapper">
      <header>
        <Navbar />
      </header>
      <section className="contact-me" id="contact">
        <div className="content">
          <h1>Contact me</h1>
          <p className="contact-text">
            If you have an application you are interested in developing,
            a feature that you need built,
            or a project that needs coding, I’d love to help with it.
          </p>
          <form
            action="https://formspree.io/f/mvoyeelg"
            id="myform"
            className="my-form"
            method="post"
            onSubmit={handleSubmit}
          >
            <div className="inputs">
              <input
                name="user_name"
                type="text"
                placeholder="Your Name"
                maxLength="30"
                required
              />
              <input
                id="email"
                name="user_email"
                type="email"
                placeholder="Your Email"
                required
              />
            </div>
            <textarea
              name="message"
              cols="30"
              rows="10"
              placeholder="Write your message here"
              maxLength="500"
              required
            />
            <button type="submit" className="form-btn">
              Send
            </button>
          </form>
          {isDone && (
            <span>Thanks for contacting me!</span>
          )}
        </div>
      </section>
    </div>
  );
};

export default Contact;
