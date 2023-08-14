import React, { useContext } from 'react';
import './Portfolio.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Sidebar from '../../img/javascrt.png';
import Budget from '../../img/budget app.png';
import Todo from '../../img/todo.png';
import Finance from '../../img/finance app.png';
import { themeContext } from '../../Context';

const Portfolio = () => {
  const theme = useContext(themeContext);
  const { darkMode } = theme.state;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{ color: darkMode ? 'white' : '' }}>Recent</span>
      <span>Projects</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor
        className="portfolio-slider"
      >
        <SwiperSlide>
          <a href="https://mike-bpc1.onrender.com/groups/11">
            <h1>Budget App</h1>
            <img src={Budget} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>

          <a href="https://michaelkith.github.io/Capstone-1-Project/">
            <h1>Learn Web Development</h1>
            <img src={Sidebar} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>

          <a href="https://michaelkith.github.io/To-do/">
            <h1>Todo list</h1>
            <img src={Todo} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://test-branch--deluxe-puffpuff-cd2d13.netlify.app/">
            <h1>Finance App</h1>
            <img src={Finance} alt="" />
          </a>
        </SwiperSlide>

      </Swiper>
    </div>
  );
};

export default Portfolio;
