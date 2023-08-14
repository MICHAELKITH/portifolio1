import React from 'react';
import PropTypes from 'prop-types';
import './FloatingDiv.css';

function FloatingDiv({ img, text1, text2 }) {
  return (
    <div className="floating-div">
      <img src={img} alt="" />
      <span>
        {text1}
        <br />
        {text2}
      </span>
    </div>
  );
}

FloatingDiv.propTypes = {
  img: PropTypes.string.isRequired,
  text1: PropTypes.string.isRequired,
  text2: PropTypes.string.isRequired,
};

export default FloatingDiv;
