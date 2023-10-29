import React from "react";
import "../WallofLove/WallofLove.css";
import SliderTest1 from "../SliderTest1/SliderTest1";
import SliderTest2 from "../SliderTest2/SliderTest2";
const WallofLove = () => {
  return (
    <section style={{ paddingTop: "15vh" }} id="testimonial">
      <h1 className="wall-heading-wrapper">Wall of Love</h1>
      <p>Here’s what people are saying about me</p>
      <div className="slider-container">
        <img
          className="overlap-image"
          src="https://ik.imagekit.io/mtmwll7w3/ayushShivhare/pseudo.png?updatedAt=1698524991199"
        ></img>
        <SliderTest1 />
        <SliderTest2 />
      </div>
    </section>
  );
};

export default WallofLove;
