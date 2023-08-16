import React, { useContext } from 'react';
import './Portfolio.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Pagination } from 'swiper';
import 'swiper/css/pagination';
import Sidebar from '../../img/javascrt.png';
import Budget from '../../img/budget app.png';
import Todo from '../../img/todo.png';
import Finance from '../../img/finance app.png';
import { themeContext } from '../../Context';

const Portfolio = () => {
  const theme = useContext(themeContext);
  const { darkMode } = theme.state;
  const swiperParams = {
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    slidesPerView: 1,
    grabCursor: true,
    className: 'portfolio-slider',
    pagination: {
      clickable: true,
      renderBullet(index, className) {
        return `<span class="${className}"></span>`;
      },
    },
  };

  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{ color: darkMode ? 'white' : '' }}>Recent</span>
      <span>Projects</span>

      {/* slider */}
      {/* eslint-disable-next-line */}
      <Swiper modules={[Pagination]} {...swiperParams}>
        <SwiperSlide>

          <h1>Budget App</h1>
          <img src={Budget} alt="" />

          <p className="desc">
            {/* eslint-disable-next-line */}
            {'A budget management app built with Rails and Devise gem with a clean and user-friendly interface'}
            <br />
            <div className="btn-live">
              <a href="https://mike-bpc1.onrender.com/groups/11">
                <button className="btn-1" type="button">Demo</button>
              </a>
              <a href="https://github.com/MICHAELKITH/budget_app.git">
                <button className="btn-2" type="button">Source Code</button>
              </a>
            </div>
          </p>
        </SwiperSlide>
        <SwiperSlide>

          <h1>Web Development</h1>
          <img src={Sidebar} alt="" />

          <p className="desc">
            {/* eslint-disable-next-line */}
            {' This project was made with JavaScript, HTML, and CSS. The project is responsive to mobile devices'}
            <br />
            <div className="btn-live">
              <a href="https://michaelkith.github.io/Capstone-1-Project/">
                <button className="btn-1" type="button">Demo</button>
              </a>
              <a href="https://github.com/MICHAELKITH/Capstone-1-Project.git">
                <button className="btn-2" type="button">Source Code</button>
              </a>
            </div>
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <h1>Todo list</h1>
          <img src={Todo} alt="" />
          <p className="desc">
            Easy, free, and simple-to-use HTML, CSS, and JavaScript
            {' project that may be used to schedule your daily activities'}
            <br />
            <div className="btn-live">
              <a href="https://michaelkith.github.io/To-do/">
                <button className="btn-1" type="button">Demo</button>
              </a>
              <a href="https://github.com/MICHAELKITH/To-do.git">
                <button className="btn-2" type="button">Source Code</button>
              </a>
            </div>
          </p>
        </SwiperSlide>
        <SwiperSlide>

          <h1>Finance App</h1>
          <img src={Finance} alt="" />
          <p className="desc">
            React app that displays a list of stocks and services;
            {'when a user clicks on a stock, the app displays a list of companies '}
            <br />
            {' that can be filtered using the search bar'}
            <br />
            <div className="btn-live">
              <a href="https://test-branch--deluxe-puffpuff-cd2d13.netlify.app/">
                <button className="btn-1" type="button">Demo</button>
              </a>
              <a href="https://github.com/MICHAELKITH/Finance_app.git">
                <button className="btn-2" type="button">Source Code</button>
              </a>
            </div>
          </p>
        </SwiperSlide>

      </Swiper>
    </div>
  );
};

export default Portfolio;
