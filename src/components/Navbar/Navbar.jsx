import React from "react";
import Toggle from "../Toggle/Toggle";
import "./Navbar.css";
import { Link } from "react-scroll";
const navbar = () => {
  return (
    <div className="n-wrapper" id="Navbar">
      {/* left */}
      <div className="n-left">
        <div className="n-name">Dev Mike</div>
        <Toggle />
      </div>
      {/* right */}
      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyleType: "none" }}>
            <li>
              <Link activeClass="active" to="Navbar" spy={true} smooth={true}>
                Home
              </Link>
            </li>
            <li>
              <Link to="Services" spy={true} smooth={true}>
                Services
              </Link>
            </li>
            <li>
              <Link to="Works" spy={true} smooth={true}>
                Experience
              </Link>
            </li>
            <li>
              <Link to="Portfolio" spy={true} smooth={true}>
                Portfolio
              </Link>
            </li>
            <li>
              <Link to="Testimonial" spy={true} smooth={true}>
                Testimonials
              </Link>
            </li>
          </ul>
        </div>
        <Link to="contact" spy={true} smooth={true}>
        <button className="button n-button">Contact</button>
        </Link>
      </div>
    </div>
  );
};

export default navbar;
