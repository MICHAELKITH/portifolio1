import './Footer.css';
import React from 'react';
import {
  BsTwitter, BsLinkedin, BsGithub, BsYoutube,
} from 'react-icons/bs';

function Footer() {
  return (
    <footer className="footer">
      <a href="https://github.com/MICHAELKITH">
        <button type="button" className="footer-logo" aria-label="Go to Dev Mike's website">Dev Mike</button>
      </a>
      <ul className="permalinks">
        <li><a href="#home">Home</a></li>
        {' '}
        {/* Provide valid href values */}
        <li><a href="#intro">About</a></li>
        <li><a href="#services">Service</a></li>
        <li><a href="#works">Works</a></li>
        <li><a href="#testimonial">Testimonials</a></li>
        <li><a href="#contact">Contact me</a></li>
      </ul>
      <div className="footer-socials">
        <a href="https://www.youtube.com/channel/UCFqOJyco8diCLJ7vQwyfIXw" aria-label="YouTube"><BsYoutube /></a>
        <a href="https://twitter.com/DevMichael11" aria-label="Twitter"><BsTwitter /></a>
        <a href="https://www.linkedin.com/in/michael-kithinji-5a09ab167/" aria-label="LinkedIn"><BsLinkedin /></a>
        <a href="https://github.com/MICHAELKITH" aria-label="GitHub"><BsGithub /></a>
      </div>
      <div className="footer-copyright">
        <p>
          {' '}
          ©
          {new Date().getFullYear()}
          {' '}
          All rights reserved
        </p>
      </div>
    </footer>
  );
}

export default Footer;
