import React from "react";
import { skillImages } from "./assets/images.js";

export const Skills = () => {
  return (
    <div className="container px-4 py-5 col-xxl-8" id="featured" id="skills">
      <h2 className="pb-2 border-bottom">My Skills</h2>
      <div className="row g-4 py-2 row-cols-1 row-cols-lg-3">
        <div className="feature col">
          <h2>Front-End</h2>
          <ul className="lead fs-5">
            <li>
              HTML5{" "}
              <img alt="HTML5 logo" className="pb-1" src={skillImages.Html} />
            </li>
            <li>
              Bootstrap{" "}
              <img
                alt="Bootstrap logo"
                src={skillImages.Bootstrap}
                height={26}
                className="pb-1"
              />
            </li>
            <li>
              JavaScript{" "}
              <img
                alt="Javascript logo"
                className="pb-1"
                src={skillImages.JavaScript}
              />
            </li>
            <li>
              ReactJS{" "}
              <img
                alt="ReactJS logo"
                className="pb-1"
                src={skillImages.ReactJS}
              />
            </li>
          </ul>
        </div>
        <div className="feature col">
          <h2>Back-End</h2>
          <ul className="lead fs-5">
            <li>
              NodeJS <img alt="NodeJS logo" src={skillImages.NodeJS} />
            </li>
            <li>
              Express{" "}
              <img
                alt="Express logo"
                src={skillImages.Express}
                width={24}
                className="pb-1"
              />
            </li>
            <li>
              MongoDB{" "}
              <img
                alt="MongoDB logo"
                src={skillImages.MongoDB}
                className="pb-1"
              />
            </li>
            <li>
              Mongoose{" "}
              <img
                alt="Mongoose logo"
                src={skillImages.Mongoose}
                width={30}
                className="pb-1"
              />
            </li>
            <li>
              Django{" "}
              <img
                alt="Django logo"
                src={skillImages.Django}
                className="pb-1"
              />
            </li>
          </ul>
        </div>
        <div className="feature col">
          <h2>Miscellaneous</h2>
          <ul className="lead fs-5">
            <li>
              Git <img alt="Git logo" className="pb-1" src={skillImages.Git} />
            </li>
            <li>
              Github{" "}
              <img
                alt="Github logo"
                className="pb-1"
                src={skillImages.GitHub}
              />
            </li>
            <li>
              Heroku <img alt="Heroku logo" src={skillImages.Heroku} />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
