import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

function Card({
  emoji, heading, detail, color,
}) {
  return (
    <div className="card" style={{ borderColor: color }}>
      <img src={emoji} alt="" />
      <span>{heading}</span>
      <span>{detail}</span>
      <button type="button" className="c-button">LEARN MORE</button>
    </div>
  );
}

Card.propTypes = {
  emoji: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  detail: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default Card;
