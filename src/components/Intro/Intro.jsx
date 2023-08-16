import React, { useContext } from 'react';
import './Intro.css';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
import boy from '../../img/mike.png';
import glassesimoji from '../../img/glassesimoji.png';
import thumbup from '../../img/thumbup.png';
import crown from '../../img/crown.png';
import FloatinDiv from '../FloatingDiv/FloatingDiv';
import Github from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';
import { themeContext } from '../../Context';

const Intro = () => {
  // Transition
  const transition = { duration: 2, type: 'spring' };

  // context
  const theme = useContext(themeContext);
  const { darkMode } = theme.state;

  return (
    <div className="Intro" id="Intro">
      {/* left name side */}
      <div className="i-left">
        <div className="i-name">
          {/* yahan change hy darkmode ka */}
          <span style={{ color: darkMode ? 'white' : '' }}>I Am</span>
          <span>Michael</span>
          <span className="intro-line">
            Software engineer with a background in developing
            efficient software applications in a global market.
            2+ years of industry experience, including mentoring 10+
            junior developers to achieve concrete goals on a strict deadline.
            Strong skills include Database management and PostgreSQL and , Ruby
          </span>
        </div>
        <Link to="contact" smooth spy>
          <button type="button" className="button i-button">Hire me</button>
        </Link>
        {/* social icons */}
        <div className="i-icons">
          <a href="https://github.com/MICHAELKITH">
            <img src={Github} alt="GitHub" />
          </a>
          <a href="https://www.linkedin.com/in/michaelkithinji/">
            <img src={LinkedIn} alt="LinkedIn" />
          </a>
          <a href="https://www.instagram.com/michael_senji/">
            <img src={Instagram} alt="Instagram" />
          </a>
        </div>
      </div>
      {/* right image side */}
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <div className="profile-container">
          <img className="profile" src={boy} alt="" />
        </div>
        {/* animation */}
        <motion.img
          initial={{ left: '-36%' }}
          whileInView={{ left: '-24%' }}
          transition={transition}
          src={glassesimoji}
          alt=""
        />
        <motion.div
          initial={{ top: '-15%', left: '74%' }}
          whileInView={{ left: '68%' }}
          transition={transition}
          className="floating-div"
        >
          <FloatinDiv img={crown} text1="Full-Stack " text2="Developer" />
        </motion.div>

        {/* animation */}
        <motion.div
          initial={{ left: '9rem', top: '18rem' }}
          whileInView={{ left: '0rem' }}
          transition={transition}
          className="floating-div"
        >
          {/* floatinDiv mein change hy dark mode ka */}
          <FloatinDiv img={thumbup} text1="Database" text2="Application" />
        </motion.div>

      </div>
    </div>
  );
};

export default Intro;
