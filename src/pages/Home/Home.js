import React from "react";
import "../Home/Home.css";
import Lander from "../../components/Lander/Lander";
import CaseStudies from "../../components/CaseStudies/CaseStudies";
import AboutMe from "../../components/AboutMe/AboutMe";
import WallofLove from "../../components/WallofLove/WallofLove";
const Home = () => {
  return (
    <>
      <Lander />
      <CaseStudies />
      <AboutMe />
      <WallofLove />
    </>
  );
};

export default Home;
