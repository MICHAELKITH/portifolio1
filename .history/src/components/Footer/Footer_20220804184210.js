import React from 'react'
import './Footer.css'
import { RiMessengerLine } from 'react-icons/ri';
import {BsTwitter,BsInstagram  } from 'react-icons/bs';

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
                <a href="htpps://facebook.comhttps://www.youtube.com/redirect?event=comments&redir_token=QUFFLUhqbUxZcTBJOEpuT0tZdWRDbGtsdVhtVTRvLS1Nd3xBQ3Jtc0ttQlk5UGNPYkViSkVWTGMwN3h1SzJDek51US12c3lOVlVmUUgzZlI3ZEZPREp6RFA5Y1prakI3MkV4eDBLNXlNWk43bUR6Z3RaYmYzdTNEcjRsMjJ3cXVSY09jeXRRMjBrYm14cWZCUnNad2xXX2dvOA&q=https%3A%2F%2Fwww.facebook.com%2Fmichaelwa.kithinji&stzid=UgzvLjPwAooLvBFhrQB4AaABAg"><RiMessengerLine/></a>
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