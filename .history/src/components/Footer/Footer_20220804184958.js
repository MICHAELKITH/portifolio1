import React from 'react'
import './Footer.css'
import { RiMessengerLine } from 'react-icons/ri';
import {BsTwitter,BsInstagram,BsLinkedin  } from 'react-icons/bs';

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
            </ul>
            <div className="footer__socials">
                
                <a href="https://www.facebook.com/michaelwa.kithinji"><RiMessengerLine/></a>
                <a href="htpps://instagram.com"><BsInstagram/></a>
                <a href="htpps://twitter.com"><BsTwitter/></a>
                <a href="linkedin.com/in/dev-mike-5a09ab167"><BsLinkedin/></a>
            </div>
            <div className="footer__copyright">
                <small>&copy;  All rights reserved 2022</small>
            </div>

        </footer>

    )
}

export default Footer