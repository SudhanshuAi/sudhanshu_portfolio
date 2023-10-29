import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "../SliderTest1/SliderTest1.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

const SliderTest1 = () => {
  return (
    <>
      <Swiper
        autoplay={{
          delay: 3000, // Increase the delay to 3000 milliseconds (3 seconds)
          disableOnInteraction: false,
        }}
        slidesPerView={3.5}
        spaceBetween={120}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay]}
        className="mySwiper1"
      >
        <SwiperSlide>
          <div className="test-wrapper">
            <img
              className="userImg"
              src="https://ik.imagekit.io/mtmwll7w3/ayushShivhare/q-f9bd42b4.png.png?updatedAt=1698526291196"
            ></img>
            <div className="user-wrapper">
              <h1>Lorem Ipsum</h1>
              <p>@Lorm</p>
            </div>
            <div className="review-wrapper">
              <p>
                Really, really liking{" "}
                <span
                  style={{
                    color: "#9382FF",
                    fontFamily: "Inter",
                    fontSize: "13px",
                    fontStyle: "normal",
                    fontQWight: "400",
                    lineHeight: "24px",
                  }}
                >
                  @reflectnotes
                </span>{" "}
                so far. It's just the right amount of simple/fast for a personal
                note taking app and does most of the hard work of organizing in
                the background.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="test-wrapper">
            <img
              className="userImg"
              src="https://ik.imagekit.io/mtmwll7w3/ayushShivhare/q-f9bd42b4.png.png?updatedAt=1698526291196"
            ></img>
            <div className="user-wrapper">
              <h1>Lorem Ipsum</h1>
              <p>@Lorm</p>
            </div>
            <div className="review-wrapper">
              <p>
                Don’t take it from me:{" "}
                <span
                  style={{
                    color: "#9382FF",
                    fontFamily: "Inter",
                    fontSize: "13px",
                    fontStyle: "normal",
                    fontQWight: "400",
                    lineHeight: "24px",
                  }}
                >
                  @reflectnotes
                </span>{" "}
                is magic.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="test-wrapper">
            <img
              className="userImg"
              src="https://ik.imagekit.io/mtmwll7w3/ayushShivhare/q-f9bd42b4.png.png?updatedAt=1698526291196"
            ></img>
            <div className="user-wrapper">
              <h1>Lorem Ipsum</h1>
              <p>@Lorm</p>
            </div>
            <div className="review-wrapper">
              <p>
                Playing around with{" "}
                <span
                  style={{
                    color: "#9382FF",
                    fontFamily: "Inter",
                    fontSize: "13px",
                    fontStyle: "normal",
                    fontQWight: "400",
                    lineHeight: "24px",
                  }}
                >
                  @reflectnotes.
                </span>{" "}
                I’m back logging key thoughts, details and soundbites from
                episodes, books, meetings, articles, etc from the past week. So
                far, it’s a knowledge worker’s dream come true.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="test-wrapper">
            <img
              className="userImg"
              src="https://ik.imagekit.io/mtmwll7w3/ayushShivhare/q-f9bd42b4.png.png?updatedAt=1698526291196"
            ></img>
            <div className="user-wrapper">
              <h1>Lorem Ipsum</h1>
              <p>@Lorm</p>
            </div>
            <div className="review-wrapper">
              <p>
                Really, really liking{" "}
                <span
                  style={{
                    color: "#9382FF",
                    fontFamily: "Inter",
                    fontSize: "13px",
                    fontStyle: "normal",
                    fontQWight: "400",
                    lineHeight: "24px",
                  }}
                >
                  @reflectnotes
                </span>{" "}
                so far. It's just the right amount of simple/fast for a personal
                note taking app and does most of the hard work of organizing in
                the background.
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};
export default SliderTest1;
