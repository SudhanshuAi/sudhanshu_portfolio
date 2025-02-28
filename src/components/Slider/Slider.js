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
              <h1 className="proj-title">Budget Tracker</h1>
              <p className="proj-desc">
              A financial management platform built using Next.js, PostgreSQL, and Prisma ORM, enabling users to efficiently track their expenses and categorize transactions.
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
              <h1 className="proj-title">Evently</h1>
              <p className="proj-desc">
              A comprehensive event management platform developed with Next.js, TypeScript, and MongoDB, offering secure authentication via Clerk and seamless event categorization.
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
              <h1 className="proj-title">Real Estate</h1>
              <p className="proj-desc">
              A MERN-stack-based real estate platform facilitating property listing, searching, renting, and purchasing. Designed and implemented advanced filtering for location, price, and property type.
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
              <h1 className="proj-title">Food Cart</h1>
              <p className="proj-desc">
              A responsive and user-friendly frontend for a food cart, enabling seamless menu browsing. Designed an intuitive UI optimized for mobile users, ensuring a smooth and engaging customer experience..
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
              <h1 className="proj-title">Banking Page</h1>
              <p className="proj-desc">
              Designed and developed a responsive, and user-friendly banking page. Focused on intuitive UI/UX, ensuring easy navigation and a smooth user experience.
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
              <h1 className="proj-title">Dashboard</h1>
              <p className="proj-desc">
              Developed a dynamic and responsive dashboard using React, featuring interactive data visualization. Designed an intuitive UI/UX for efficient data management and navigation.
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
