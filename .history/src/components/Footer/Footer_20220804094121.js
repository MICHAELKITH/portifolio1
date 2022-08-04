import React from 'react'
import './Footer.css'
import { RiMessengerLine } from 'react-icons/ri';
import {BsTwitter,BsInstagram  } from 'react-icons/bs';

function Footer() {
    return (
        <footer>
            <a href="" className='footer__logo'>Alpha</a>
            <ul className='permalinks'>
                <li><a href="#">Home</a></li>
                <li><a href="#products">About</a></li>
                <li><a href="#services">Service</a></li>
                <li><a href="#contact">Contact Us</a></li>
            </ul>
            <div className="footer__socials">
                <a href="htpps://facebook.com"><RiMessengerLine/></a>
                <a href="htpps://instagram.com"><BsInstagram/></a>
                <a href="htpps://twitter.com"><BsTwitter/></a>
            </div>
            <div className="footer__copyright">
                <small>&copy;  All rights reserved 2022</small>
            </div>

        </footer>

    )
}

export default Footer