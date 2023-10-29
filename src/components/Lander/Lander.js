import React from "react";
import "../Lander/Lander.css";
const Lander = () => {
  return (
    <>
      <div className="lander-wrapper">
        <div className="lander-grid-wrapper">
          <div className="polygon-wrapper">
            <svg
              width="102"
              height="92"
              viewBox="0 0 102 92"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="polygon"
            >
              <path
                d="M51 -4.37822e-06L0.91894 92L35.2289 69.6571L49.6861 41.619L64.5814 69.6571L101.081 92L51 -4.37822e-06Z"
                fill="#4537E4"
              />
            </svg>
          </div>
          <img
            src="https://ik.imagekit.io/mtmwll7w3/ayushShivhare/lander-grid.png?updatedAt=1698487743564"
            alt="lander-grid"
          ></img>
        </div>
        <div className="name-wrapper">
          <h1 className="name">Ayush Shivhare</h1>
          <h2 className="prod-des">a product designer Based in india</h2>
        </div>
        <div className="short-about-wrapper">
          <div className="short-about">
            <span>
              Petroleum Engineer turned Product Designer specializing in UI/UX,
              always eager to
            </span>
            <span> explore, design, and connect.</span>
          </div>
        </div>
        <div className="land-btn-wrapper">
          <button className="get-in-touch">Get In Touch</button>
        </div>
        <div className="companies-wrapper">
          <p>Companies I have worked or collaborated with</p>
          <img
            className="comp1"
            src="https://ik.imagekit.io/mtmwll7w3/ayushShivhare/propreturns.png?updatedAt=1698489467669"
          ></img>
          <img
            className="comp2"
            src="https://ik.imagekit.io/mtmwll7w3/ayushShivhare/KOMET%20fONT%201.png?updatedAt=1698489774803"
          ></img>
          <img
            className="comp3"
            src="https://ik.imagekit.io/mtmwll7w3/ayushShivhare/C6PcTasNLdJWQSkB1P0luqvKxM.png.png?updatedAt=1698489854910"
          ></img>
        </div>
      </div>
    </>
  );
};

export default Lander;
