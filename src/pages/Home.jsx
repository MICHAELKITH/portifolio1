/* eslint-disable max-len */
import React from 'react';
import './Style.css';

import Navbar from '../components/Navbar';
import Works from '../components/works';
import Footer from '../components/Footer';
import Skills from '../../skills';

const Home = () => {
  const errDisplay = document.querySelector('.message');
  const form = document.querySelector('#myform');
  const html = document.querySelector('html');

  const generateLinks = () => (
    <ul className="socials">
      <li className="icons">
        <a
          href="https://twitter.com/DevMichael11"
          target="_blank"
          rel="noopener noreferrer"
          data-item="true"
          className="item-btn"
        >
          <img src="./images/Twitter.png" alt="Twitter" />
        </a>
      </li>
      <li className="icons">
        <a
          href="https://github.com/MICHAELKITH"
          target="_blank"
          rel="noopener noreferrer"
          data-item="true"
          className="item-btn"
        >
          <img src="../images/GitHub.png" alt="GitHub" />
        </a>
      </li>
      <li className="icons">
        <a
          href="https://www.linkedin.com/in/michaelkithinji/"
          target="_blank"
          rel="noopener noreferrer"
          data-item="true"
          className="item-btn"
        >
          <img src="../images/LinkedIn.png" alt="LinkedIn" />
        </a>
      </li>
    </ul>
  );

  html.onclick = () => {
    if (errDisplay) {
      errDisplay.classList.remove('active');
    }
  };

  const handleSubmit = () => {
    form.submit();
  };

  return (
    <div className="wrapper">
      <header>
        <Navbar />
      </header>
      <section className="headline">
        <div className="left-head">
          <h2>Hello!</h2>
          <h4>I&apos;m Michael Kithinji </h4>
          <p className="body-text">
            Certified Software Developer with a background in developing efficient software applications in a global market.
            {' '}
            <br />
            3+ years of industry experience, including mentoring 10+ junior developers to achieve concrete goals on a strict deadline.
            {' '}
            <br />
            Strong skills include JavaScript, React, Database Management, PostgreSQL and Ruby On Rails.
          </p>
          <a className="contact-btn" href="#contact">Contact Me</a>
          <p href="/" className="connect">
            Let&apos;s connect
          </p>
          {generateLinks()}
        </div>
        <div className="right-head">
          <div className="thumbnail">
            <img src="./images/mike1.png" alt="myPicture" id="head-img" />
          </div>
        </div>
      </section>
      {/* <!-- Works Section --> */}
      <Works />
      {/* <!-- about myself --> */}
      <section className="about" id="about-myself">
        <div className="personal-info">
          <h1>
            About
            {' '}
            <br />
            Myself
          </h1>
          <p className="body-text">
            I hold a certification as a full-stack developer from Microverse and possess a Bachelor's degree in Mathematics.
            I also have practical experience in UX and Customer Success.
            I have a strong affinity for problem-solving and excel at debugging.
            I'm enthusiastic about acquiring new skills and staying up-to-date with emerging technologies.
          </p>
          <a href="/" className="connect">
            Let&apos;s connect
          </a>
          {generateLinks()}
          <a className="resume-button" href="./docs/Michael_Kithinji_Resume.pdf" download="Michael Kithinji Resume">Download CV</a>
        </div>
        <div className="skills">
          <h2>Skills & Tools</h2>
          <ul>
            {
              Skills.map((skill) => (
                <li key={skill}>
                  {skill}
                </li>
              ))
            }
          </ul>
        </div>
      </section>
      {/* <!-- contact section --> */}
      <footer className="contact-me" id="contact">
        <div className="content">
          <h1>
            Get in Touch
          </h1>
          <p className="contact-text">
            If you have an application you are interested in developing, a feature that you need built or a project that needs coding. I’d love to help with it
          </p>
          <form action="https://formspree.io/f/mvoyeelg" id="myform" className="my-form" method="post" onSubmit={handleSubmit}>
            <div className="inputs">
              <input name="user_name" type="text" placeholder="Name" maxLength="30" required />
              <input id="email" name="user_email" type="email" placeholder="Email" required />
            </div>
            <textarea name="message" cols="30" rows="10" placeholder="Write your message here" maxLength="500" required />
            <button type="submit" className="form-btn">Send</button>
          </form>
        </div>
      </footer>
      <Footer />
    </div>
  );
};

export default Home;
