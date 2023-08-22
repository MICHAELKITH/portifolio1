/* eslint-disable max-len */
import React from 'react';
import Navbar from '../components/Navbar';

import './Style.css';
import Skills from '../../skills';

const About = () => (
  <div className="wrapper">
    <header>
      <Navbar />
    </header>
    <section className="about" id="about-myself" style={{ marginTop: '2%' }}>
      <div className="personal-info">
        <h1>
          About
          {' '}
          <br />
          Myself
        </h1>
        <p className="body-text">
          Hi, I am Michael Kithinji. A Full-stack Developer with a combined experience of 1+ years with HTML, CSS, JavaScript, React, Ruby on Rails and remote web development. Apart from Full-stack development, I am also a lab instructor at the university of FAST-NUCES.
        </p>
        <a href="/" className="connect">
          Let&apos;s connect
        </a>
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
        <a className="resume-button" href="./docs/Michael Kithinji.pdf" download="Michael Kithinji Resume">Download CV</a>
      </div>
      <div className="skills">
        <h2>Skills</h2>
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
  </div>
);

export default About;
