import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "../SliderTest2/SliderTest2.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

const SliderTest2 = () => {
  return (
    <>
      <Swiper
        autoplay={{
          delay: 4000, // Increase the delay to 3000 milliseconds (3 seconds)
          disableOnInteraction: false,
        }}
        slidesPerView={3}
        spaceBetween={90}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay]}
        className="mySwiper2"
      >
        <SwiperSlide>
          <div className="test2-wrapper">
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
          <div className="test2-wrapper">
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
          <div className="test2-wrapper">
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
          <div className="test2-wrapper">
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
          <div className="test2-wrapper">
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
      </Swiper>
    </>
  );
};
export default SliderTest2;
