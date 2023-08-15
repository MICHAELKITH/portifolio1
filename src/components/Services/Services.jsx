import React, { useContext } from 'react';
import './Services.css';
import { motion } from 'framer-motion';
import Card from '../Card/Card';
import HeartEmoji from '../../img/heartemoji.png';
import Glasses from '../../img/glasses.png';
import Humble from '../../img/humble.png';
import { themeContext } from '../../Context';
import Resume from './resume.pdf';

const Services = () => {
  // context
  const theme = useContext(themeContext);
  const { darkMode } = theme.state;

  // transition
  const transition = {
    duration: 1,
    type: 'spring',
  };

  return (
    <div className="services" id="services">
      {/* left side */}
      <div className="awesome">
        {/* dark mode */}
        <span style={{ color: darkMode ? 'white' : '' }}>Services I Provide</span>
        <span>Expertise</span>
        <spane>
          <strong>
            <ol>
              <li>Creating responsive websites</li>
              <li>Incorporating payment gateways</li>
              <li>Technology Stack: JavaScript, React, Ruby on Rails,  PostgreSQL</li>
              <li>Executing user authentication</li>
            </ol>
          </strong>
        </spane>
        <a href={Resume} download>
          <button type="button" className="button s-button">Download CV</button>
        </a>
        <div className="blur s-blur1" style={{ background: '#ABF1FF94' }} />
      </div>
      {/* right */}
      <div className="cards">
        {/* first card */}
        <motion.div
          initial={{ left: '25rem' }}
          whileInView={{ left: '14rem' }}
          transition={transition}
        >
          <Card
            emoji={HeartEmoji}
            heading="Design"
            detail="Figma, Tailwind"
          />
        </motion.div>
        {/* second card */}
        <motion.div
          initial={{ left: '-11rem', top: '12rem' }}
          whileInView={{ left: '-4rem' }}
          transition={transition}
        >
          <Card
            emoji={Glasses}
            heading="Web Developer"
            detail=" JavaScript, Reactjs, Ruby on Rails, Nextjs"
          />
        </motion.div>
        {/* 3rd */}
        <motion.div
          initial={{ top: '19rem', left: '25rem' }}
          whileInView={{ left: '12rem' }}
          transition={transition}
        >
          <Card
            emoji={Humble}
            heading="Postgres"
            detail="Database Application"
            color="rgba(252, 166, 31, 0.45)"
          />
        </motion.div>
        <div
          className="blur s-blur2"
          style={{ background: 'var(--purple)' }}
        />
      </div>
    </div>
  );
};

export default Services;
