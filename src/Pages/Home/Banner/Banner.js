import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import "swiper/css/navigation";
import './Banner.css';

// import required modules
import { Navigation } from "swiper";

const Banner = () => {
  return <div className="banner">
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      navigation={true} modules={[Navigation]}
    >
      <SwiperSlide>
        <img src="manufacture-1.jpg"  alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="manufacture-2.jpg"   alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="manufacture-3.jpg"   alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="manufacture-4.jpg"  alt="" />
      </SwiperSlide>
    </Swiper>
  </div>;
};

export default Banner;
