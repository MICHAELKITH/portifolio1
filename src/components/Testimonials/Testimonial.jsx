import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";
import profilePic1 from "../../img/AMINE.jpg";
import profilePic2 from "../../img/9k=.jpeg";

const Testimonial = () => {
  const clients = [
    {
      img: profilePic1,
      review:
        "Michael is a highly skilled software developer that would be a great fit for any company. We worked together during our formation at Microverse an online school.",
    },
    {
      img: profilePic2,
      review:
        "He exhibits a transparent, productive, and unwavering approach throughout his working hours.",
    }
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>Review </span>
        <span>From</span>
        <span>Clients...</span>
      <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
      <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
