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
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        <p className="body-text">
          I am a certified full-stack developer, having successfully completed
          the program at Microverse. In addition to my development skills, I
          have practical experience in UX (User Experience) and Customer
          Success. I have a natural aptitude for problem-solving and excel at
          debugging. I'm highly motivated to acquire new skills and keep myself
          updated with emerging technologies in the field.
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
        <a
          className="resume-button"
          href="./docs/Michael_Kithinji_Resume.pdf"
          download="Michael Kithinji Resume"
        >
          Download CV
        </a>
      </div>
      <div className="skills">
        <h2>Skills</h2>
        <ul>
          {Skills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </div>
    </section>
  </div>
);

export default About;
