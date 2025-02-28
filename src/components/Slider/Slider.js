import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { LinkOutlined, GithubOutlined } from "@ant-design/icons";
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
        slidesPerView={4.3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
        {" "}
        <a>
        <div className="card">
              <div className="proj-img0"></div>
              <div className="proj-details">
              <h1 className="proj-title">Profill</h1>
              <p className="proj-desc">
                  Live and operational, Profill reduces students’ application
                  time by 60%, enhancing efficiency and streamlining the college
                  application process.
                </p>
              </div>
            </div>
            </a>
        </SwiperSlide>
        <SwiperSlide>
        {" "}
        <a>
        <div className="card">
              <div className="proj-img1"></div>
              <div className="proj-details">
              <h1 className="proj-title">Profill</h1>
              <p className="proj-desc">
                  Live and operational, Profill reduces students’ application
                  time by 60%, enhancing efficiency and streamlining the college
                  application process.
                </p>
              </div>
            </div>
            </a>
        </SwiperSlide>
        <SwiperSlide>
        {" "}
        <a>
        <div className="card">
              <div className="proj-img2"></div>
              <div className="proj-details">
              <h1 className="proj-title">Profill</h1>
              <p className="proj-desc">
                  Live and operational, Profill reduces students’ application
                  time by 60%, enhancing efficiency and streamlining the college
                  application process.
                </p>
              </div>
            </div>
            </a>
        </SwiperSlide>
        <SwiperSlide>
        {" "}
        <a>
        <div className="card">
              <div className="proj-img3"></div>
              <div className="proj-details">
              <h1 className="proj-title">Profill</h1>
              <p className="proj-desc">
                  Live and operational, Profill reduces students’ application
                  time by 60%, enhancing efficiency and streamlining the college
                  application process.
                </p>
              </div>
            </div>
            </a>
        </SwiperSlide>
        <SwiperSlide>
        {" "}
        <a>
        <div className="card">
              <div className="proj-img4"></div>
              <div className="proj-details">
              <h1 className="proj-title">Profill</h1>
              <p className="proj-desc">
                  Live and operational, Profill reduces students’ application
                  time by 60%, enhancing efficiency and streamlining the college
                  application process.
                </p>
              </div>
            </div>
            </a>
        </SwiperSlide>
        <SwiperSlide>
        {" "}
        <a href="">
        <div className="card">
              <div className="proj-img5"></div>
              <div className="proj-details">
              <h1 className="proj-title">Profill</h1>
              <p className="proj-desc">
                  Live and operational, Profill reduces students’ application
                  time by 60%, enhancing efficiency and streamlining the college
                  application process.
                </p>
              </div>
            </div>
            </a>
        </SwiperSlide>
      </Swiper>
    </>
  );
};
export default Slider;
