import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

export default function ProjItem({ myProj }) {
  const {
    title, info, tech, image, buttons,
  } = myProj;

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: -100,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      transition={{
        type: 'spring',
        stiffness: 100,
        damping: 50,
      }}
      className="proj-item inactive"
    >
      <div className="thumbnail">
        <img src={image} alt="N/A" />
      </div>
      <div className="primary-text">
        <h1 className="title">
          {title}
        </h1>
        <p className="description">
          {info}
        </p>
        <div className="showbuttons">
          <ul className="showtech">
            {
              tech.map((item) => (
                <li key={item}>
                  {item}
                </li>
              ))
            }
          </ul>
          <ul>
            <li>
              <a
                href={buttons[0][0]}
                target="_blank"
                rel="noopener noreferrer"
                data-item="true"
                className="item-btn"
              >
                <img src={buttons[1][0]} alt="" />
              </a>
            </li>
            <li>
              <a
                href={buttons[0][1]}
                target="_blank"
                rel="noopener noreferrer"
                data-item="true"
                className="item-btn"
              >
                <img src={buttons[1][1]} alt="" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
}

ProjItem.defaultProps = {
  myProj: {
    title: '',
    info: '',
    tech: [],
    image: '',
    buttons: [[], []],
  },
};

ProjItem.propTypes = {
  myProj: PropTypes.shape({
    title: PropTypes.string,
    info: PropTypes.string,
    tech: PropTypes.arrayOf(PropTypes.string),
    image: PropTypes.string,
    buttons: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)),
  }),
};
