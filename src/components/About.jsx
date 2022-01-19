import React from "react";
import AboutImage from "./assets/images/personal/about.png";

export const About = () => {
  return (
    <div className="container col-xxl-8 px-4 py-5" id="about">
      <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div className="col-10 col-sm-8 col-lg-6">
          <img
            src={AboutImage}
            className="d-block mx-lg-auto img-fluid rounded img-thumbnail"
            alt="Bootstrap Themes"
            width="700"
            height="500"
            loading="lazy"
          />
        </div>
        <div className="col-lg-6">
          <h1 className="display-5 fw-bold lh-1 mb-3">About</h1>
          <p className="lead fs-4">
            My name is Luis Daniel Cova and I'm a Fullstack Web Developer and an
            Informatics Engineer graduate. Right now I'm focusing on learning
            more about developing server-side code.
          </p>
          <p className="lead fs-4">
            I'm a confident and honest person, well-organized, and I always look
            at the bright side of things. I'm perpetually working on improving
            my skills with every project I participate on.
          </p>
          <p className="lead fs-4">
            Check out the projects I've worked on below.
          </p>
        </div>
      </div>
    </div>
  );
};
