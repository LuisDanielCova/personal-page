import React from "react";

export const Contact = () => {
  return (
    <div className="container px-4 py-5 col-xxl-8" id="contact">
      <h2 className="py-2 border-bottom">Contact Me</h2>
      <div className="row">
        <div className="col">
          <p className="lead fs-4">
            If you wish to contact me, send me an email and I'll answer as soon
            as possible.
          </p>
          <ul className="lead fs-4">
            <li>Email: ldcn96@gmail.com</li>
            <li>Phone: +58 412-8779983</li>
            <li>
              Github:{" "}
              <a target="_blank" href="https://github.com/LuisDanielCova">
                LuisDanielCova
              </a>
            </li>
            <li>
              LinkedIn:{" "}
              <a
                target="_blank"
                href="https://www.linkedin.com/in/luis-daniel-cova/"
              >
                Luis Daniel Cova
              </a>
            </li>
          </ul>
        </div>
      </div>
      <br className="mb-5" />
    </div>
  );
};
