import React from "react";
import "../AboutMe/AboutMe.css";
import Slider from "../Slider/Slider";
const AboutMe = () => {
  return (
    <section style={{ paddingTop: "15vh" }} id="about">
      <div className="tech-stack-container">
        <div className="tech-stack-content">
          <div className="tech-stack-header">
            <span className="tech-stack-icon">✦</span>
            <h1 className="tech-stack-heading">My Tech Stacks</h1>
          </div>
          <p className="tech-stack-description">
          Crafting scalable, high-performance applications with cutting-edge web technologies : from sleek frontends to robust backend
          </p>
          <div className="tech-stack-grid">
            {/* First row */}
            <div className="tech-stack-item">
              <img src="https://img.icons8.com/?size=100&id=wPohyHO_qO1a&format=png&color=000000" alt="GitHub" />
            </div>
            <div className="tech-stack-item">
              <img src="https://img.icons8.com/?size=100&id=54087&format=png&color=000000" alt="Skype" />
            </div>
            <div className="tech-stack-item">
              <img src="https://ik.imagekit.io/kyempw5oy/Icon/nextjs-icon-svgrepo-com.png?updatedAt=1743440318450" alt="Discord" />
            </div>
            <div className="tech-stack-item">
              <img src="https://img.icons8.com/?size=100&id=b6vIINYN0kfW&format=png&color=000000" alt="Discord" />
            </div>
            
            
            
            {/* Second row */}
            <div className="tech-stack-item">
              <img src="https://img.icons8.com/?size=100&id=bosfpvRzNOG8&format=png&color=000000" alt="GitHub" />
            </div>
            <div className="tech-stack-item">
              <img src="https://img.icons8.com/?size=100&id=38561&format=png&color=000000" alt="Skype" />
            </div>
            <div className="tech-stack-item">
              <img src="https://img.icons8.com/?size=100&id=cdYUlRaag9G9&format=png&color=000000" alt="Discord" />
            </div>
            <div className="tech-stack-item">
              <img src="https://img.icons8.com/?size=100&id=4PiNHtUJVbLs&format=png&color=000000" alt="Discord" />
            </div>
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
