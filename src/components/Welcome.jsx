import React from "react";

export const Welcome = () => {
  return (
    <div className="px-4 m-5 py-5 text-center">
      <img
        className="d-block mx-auto mb-4 rounded img-thumbnail"
        src="http://placekitten.com/300/300"
        alt=""
        width="300"
        height="300"
      />
      <h1 className="display-5 fw-bold">Welcome</h1>
      <div className="col-lg-6 mx-auto">
        <p className="lead mb-4">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta illum
          dolor nesciunt totam consequatur officiis eum consectetur, temporibus
          hic minima.
        </p>
      </div>
    </div>
  );
};
