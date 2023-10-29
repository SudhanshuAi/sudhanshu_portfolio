import React from "react";
import "../CaseStudies/CaseStudies.css";
const CaseStudies = () => {
  return (
    <section style={{ paddingTop: "15vh" }} id="work">
      <h1 className="case-heading-wrapper">Case Studies</h1>
      <div className="case-study-wrapper">
        <a
          style={{ textDecoration: "none" }}
          target="_blank"
          href="https://medium.com/@ayushshivhare02/zomato-meals-770fdda02cd2"
        >
          <div className="cases">
            <div className="link">
              <img
                alt=""
                src="https://ik.imagekit.io/mtmwll7w3/ayushShivhare/link-icon.png.png?updatedAt=1698502979937"
              ></img>
            </div>
            <p>Internship Work</p>
            <h1>Being an Intern At PropReturns YC - S21</h1>
            <hr />
          </div>
        </a>
        <a
          style={{ textDecoration: "none" }}
          target="_blank"
          href="https://medium.com/@ayushshivhare02/zomato-meals-770fdda02cd2"
        >
          <div className="cases">
            <div className="link">
              <img
                alt=""
                style={{ top: "16vh" }}
                src="https://ik.imagekit.io/mtmwll7w3/ayushShivhare/link-icon.png.png?updatedAt=1698502979937"
              ></img>
            </div>
            <p>Personal Project</p>
            <h1 style={{ marginBottom: "0px" }}>
              Introducing Zomato Meals- A Hassle
            </h1>
            <h1 style={{ marginTop: "0px" }}> Free Subscription Plans</h1>
            <hr />
          </div>
        </a>
        <a
          style={{ textDecoration: "none" }}
          target="_blank"
          href="https://medium.com/@ayushshivhare02/case-study-redesigning-rgipt-alumni-portal-92f19c3bae1f"
        >
          <div className="cases">
            <div className="link">
              <img
                alt=""
                src="https://ik.imagekit.io/mtmwll7w3/ayushShivhare/link-icon.png.png?updatedAt=1698502979937"
              ></img>
            </div>
            <p>Personal Project</p>
            <h1>Redesigning RGIPT Alumni Portal</h1>
            <hr />
          </div>
        </a>
      </div>
    </section>
  );
};

export default CaseStudies;
