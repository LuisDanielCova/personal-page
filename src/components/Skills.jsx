import React from "react";
import HtmlImage from "./assets/images/skills/html.png";
import BootstrapImage from "./assets/images/skills/bootstrap.png";
import JavaScriptImage from "./assets/images/skills/js.png";
import ReactJSImage from "./assets/images/skills/reactjs.png";
import NodeJSImage from "./assets/images/skills/nodejs.png";
import ExpressImage from "./assets/images/skills/express.png";
import MongoDBImage from "./assets/images/skills/mongodb.png";
import MongooseImage from "./assets/images/skills/mongoose.png";
import GitImage from "./assets/images/skills/git.png";
import GitHubImage from "./assets/images/skills/github.png";
import HerokuImage from "./assets/images/skills/heroku.png";

export const Skills = () => {
  return (
    <div className="container px-4 py-5 col-xxl-8" id="featured-3" id="skills">
      <h2 className="pb-2 border-bottom">My Skills</h2>
      <div className="row g-4 py-2 row-cols-1 row-cols-lg-3">
        <div className="feature col">
          <h2>Front-End</h2>
          <ul className="lead fs-5">
            <li>
              HTML5 <img className="pb-1" src={HtmlImage} />
            </li>
            <li>
              Bootstrap{" "}
              <img src={BootstrapImage} height={26} className="pb-1" />
            </li>
            <li>
              JavaScript <img className="pb-1" src={JavaScriptImage} />
            </li>
            <li>
              ReactJS <img className="pb-1" src={ReactJSImage} />
            </li>
          </ul>
        </div>
        <div className="feature col">
          <h2>Back-End</h2>
          <ul className="lead fs-5">
            <li>
              NodeJS <img src={NodeJSImage} />
            </li>
            <li>
              Express <img src={ExpressImage} width={24} className="pb-1" />
            </li>
            <li>
              MongoDB <img src={MongoDBImage} className="pb-1" />
            </li>
            <li>
              Mongoose <img src={MongooseImage} width={30} className="pb-1" />
            </li>
          </ul>
        </div>
        <div className="feature col">
          <h2>Miscellaneous</h2>
          <ul className="lead fs-5">
            <li>
              Git <img className="pb-1" src={GitImage} />
            </li>
            <li>
              Github <img className="pb-1" src={GitHubImage} />
            </li>
            <li>
              Heroku <img src={HerokuImage} />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
