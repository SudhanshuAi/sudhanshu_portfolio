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
              <h1>Shashidhar Pande</h1>
              <p>Sr. Business Analyst</p>
            </div>
            <div className="review-wrapper">
              <p>
              Sudhanshu showcased excellent technical and problem-solving skills while working with our team. A dedicated and reliable professional, they would be a great addition to any team.
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
              <h1>Ashutosh Mishra</h1>
              <p>Project Manager</p>
            </div>
            <div className="review-wrapper">
              <p>
              Sudhanshu was an exceptional intern during the development of the Fantail P application. Their strong frontend skills, problem-solving ability, and dedication made them a valuable asset.
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
              <h1>Prathamesh Bhagat</h1>
              <p>Application Support Lead</p>
            </div>
            <div className="review-wrapper">
              <p>
              Sudhanshu was a reliable and skilled developer, always proactive in solving challenges. Their collaboration and technical expertise made a positive impact on the team.
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
              <h1>Sanjeev Pathak</h1>
              <p>Delivery Head</p>
            </div>
            <div className="review-wrapper">
              <p>
              Sudhanshu consistently delivered high-quality work with great attention to detail. Their technical expertise and problem-solving skills made them a valuable asset to the team.
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};
export default SliderTest2;
