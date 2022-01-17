import React from "react";

export const About = () => {
  return (
    <div className="container col-xxl-8 px-4 py-5" id="About">
      <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div className="col-10 col-sm-8 col-lg-6">
          <img
            src="http://placekitten.com/700/500"
            className="d-block mx-lg-auto img-fluid rounded img-thumbnail"
            alt="Bootstrap Themes"
            width="700"
            height="500"
            loading="lazy"
          />
        </div>
        <div className="col-lg-6">
          <h1 className="display-5 fw-bold lh-1 mb-3">About</h1>
          <p className="lead">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam
            tempore alias unde voluptatem at modi eaque ullam sit deleniti
            excepturi aspernatur, mollitia provident eveniet quidem. Consequatur
            iusto eum sunt atque numquam? Qui obcaecati vitae maxime sit
            deserunt praesentium, iure repudiandae.
          </p>
        </div>
      </div>
    </div>
  );
};
