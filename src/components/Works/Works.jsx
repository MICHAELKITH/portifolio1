import React, { useContext } from 'react';
import './Works.css';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import Upwork from '../../img/Upwork.png';
import Fiverr from '../../img/fiverr.png';
import Facebook from '../../img/Facebook.png';
import { themeContext } from '../../Context';

const Works = () => {
  // context
  const theme = useContext(themeContext);
  const { darkMode } = theme.state;

  // transition
  return (
    <div className="works" id="works">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          <span style={{ color: darkMode ? 'white' : '' }}>
            Technical
          </span>
          <span>Skills.</span>
          <spane>
            <strong>Skills:</strong>
            <ol>
              <li>Web Development (HTML, CSS, JavaScript)</li>
              <li>Database Management ( PostgreSQL)</li>
              <li>Frontend Frameworks (React)</li>
              <li>Backend (Ruby on Rails)</li>
              <li>Project Management</li>
              <li>Mentoring and Training</li>
            </ol>
            <br />

          </spane>
          <Link to="contact" smooth spy>
            <button type="button" className="button s-button">Hire Me</button>
          </Link>
          <div
            className="blur s-blur1"
            style={{ background: '#ABF1FF94' }}
          />
        </div>

        {/* right side */}
      </div>
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: '-40px' }}
          transition={{ duration: 3.5, type: 'spring' }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img src={Upwork} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Fiverr} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Facebook} alt="" />
          </div>
        </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle" />
        <div className="w-backCircle yellowCircle" />
      </div>
    </div>
  );
};

export default Works;
