import React from 'react';
import PropTypes from 'prop-types';

export default function WorkItem({ myProj }) {
  const {
    title, info, tech, image, buttons,
  } = myProj;

  return (
    <div
      data-aos="fade-right"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      className="work-item"
    >
      <div className="thumbnail">
        <img src={image} alt="N/A" />
      </div>
      <div className="primary-text">
        <h1
          data-aos="fade-left"
          data-aos-duration="2000"
          className="title"
        >
          {title}
        </h1>
        <p
          data-aos="fade-right"
          data-aos-delay="500"
          data-aos-duration="2000"
          className="description"
        >
          {info}
        </p>
        <li
          data-aos="fade-up"
          data-aos-delay="500"
          data-aos-duration="3000"
          className="showbuttons"
        >
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
              <a href={buttons[0][0]}
               target="_blank"
               rel="noopener noreferrer"
               data-item="true"
               className="item-btn">
                <img src={buttons[1][0]} alt="" />
              </a>
            </li>
            <li>
              <a href={buttons[0][1]}
               target="_blank"
               rel="noopener noreferrer"
               data-item="true"
               className="item-btn">
                <img src={buttons[1][1]} alt="" />
              </a>
            </li>
          </ul>
        </li>
      </div>
    </div>
  );
}

WorkItem.defaultProps = {
  myProj: {
    title: '',
    info: '',
    tech: '',
    image: '',
    buttons: '',
  },
};

WorkItem.propTypes = {
  myProj: PropTypes.shape({
    title: PropTypes.string,
    info: PropTypes.string,
    image: PropTypes.string,
    tech: PropTypes.oneOfType([PropTypes.array]),
    buttons: PropTypes.oneOfType([PropTypes.array]),
  }),
};
