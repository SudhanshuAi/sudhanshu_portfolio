import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "../Slider/Slider.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

const Slider = () => {
  return (
    <>
      <Swiper
        autoplay={{
          delay: 2000, // Increase the delay to 3000 milliseconds (3 seconds)
          disableOnInteraction: false,
        }}
        slidesPerView={3.5}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="click-wrapper1"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="click-wrapper2"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="click-wrapper3"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="click-wrapper4"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="click-wrapper5"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="click-wrapper6"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="click-wrapper7"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="click-wrapper8"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="click-wrapper9"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="click-wrapper10"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="click-wrapper11"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="click-wrapper12"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="click-wrapper13"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="click-wrapper14"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="click-wrapper15"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="click-wrapper16"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="click-wrapper17"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="click-wrapper18"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="click-wrapper19"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="click-wrapper20"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="click-wrapper21"></div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};
export default Slider;
