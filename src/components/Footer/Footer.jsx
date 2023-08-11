import React from 'react';
import './Footer.css';
import { BsTwitter, BsLinkedin, BsGithub, BsYoutube} from 'react-icons/bs';

function Footer() {
  return (
        <footer>
            <a href="" className='footer__logo'>Dev Mike</a>
            <ul className='permalinks'>
                <li><a href="#">Home</a></li>
                <li><a href="#Intro">About</a></li>
                <li><a href="#services">Service</a></li>
                <li><a href="#works">Works</a></li>
                <li><a href="#testimonial">Testimonials</a></li>
                <li><a href="#contact">Contact me</a></li>
            </ul>
            <div className="footer__socials">
                <a href="https://www.youtube.com/channel/UCFqOJyco8diCLJ7vQwyfIXw"><BsYoutube/></a>
                <a href="https://twitter.com/DevMichael11"><BsTwitter/></a>
                <a href="https://www.linkedin.com/in/michael-kithinji-5a09ab167/"><BsLinkedin/></a>
                <a href="https://github.com/MICHAELKITH"><BsGithub/></a>
            </div>
            <div className="footer__copyright">
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