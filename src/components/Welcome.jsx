import React from "react";
import ProfileImage from "./assets/images/personal/profile.png";

export const Welcome = () => {
  return (
    <div className="px-4 m-5 py-5 text-center">
      <img
        className="d-block mx-auto mb-4 rounded img-thumbnail"
        src={ProfileImage}
        alt=""
        width="300"
        height="300"
      />
      <h1 className="display-5 fw-bold">Welcome, I'm Luis Daniel Cova</h1>
      <div className="col-lg-6 mx-auto">
        <p className="display-6 lead mb-4">I'm a Fullstack Web Developer</p>
      </div>
    </div>
  );
};
