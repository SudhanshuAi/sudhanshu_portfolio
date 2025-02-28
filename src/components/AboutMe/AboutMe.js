import React from "react";
import "../AboutMe/AboutMe.css";
import Slider from "../Slider/Slider";
const AboutMe = () => {
  return (
    <section style={{ paddingTop: "15vh" }} id="about">
      <h1 className="aboutMe-heading-wrapper">More About Me</h1>
      <div className="container">
        <div className="aboutMe-left-box">
          <div className="process"></div>
          <div className="right-img-box">
            <img
              className="right-img"
              src="https://ik.imagekit.io/mtmwll7w3/ayushShivhare/Vector(1).svg?updatedAt=1698566245571"
              alt=""
            ></img>
          </div>
          <div className="left-detail-wrapper">
            <h1>Development Process</h1>
            <p>
            Each team and organization follows a unique development and management workflow. I've been using this process in recent projects to improve efficiency.</p>
          </div>
        </div>
        <div className="aboutMe-right-box">
          <div className="right-img-box">
            <img
              alt=""
              className="right-img"
              src="https://ik.imagekit.io/mtmwll7w3/ayushShivhare/Vector.svg?updatedAt=1698564111650"
            ></img>
          </div>
          <div className="right-detail-wrapper">
            <h1>My Superpower</h1>
            <p>
            I have the ability to learn new things quickly and connect with people through storytelling. 🥷🏼
            </p>
          </div>
        </div>
      </div>
      <div className="iLove">
        <p>Other Projects 🚀</p>
        <Slider />
      </div>
    </section>
  );
};

export default AboutMe;
