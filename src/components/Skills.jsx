import React from "react";

export const Skills = () => {
  return (
    <div className="container px-4 py-5 col-xxl-8" id="featured-3" id="skills">
      <h2 className="pb-2 border-bottom">My Skills</h2>
      <div className="row g-4 py-2 row-cols-1 row-cols-lg-3">
        <div className="feature col">
          <h2>Front-End</h2>
          <ul className="lead fs-5">
            <li>
              HTML5 <img className="pb-1" src="/images/html.png" />
            </li>
            <li>
              Bootstrap{" "}
              <img src="/images/bootstrap.png" height={26} className="pb-1" />
            </li>
            <li>
              JavaScript <img className="pb-1" src="/images/js.png" />
            </li>
            <li>
              ReactJS <img className="pb-1" src="/images/reactjs.png" />
            </li>
          </ul>
        </div>
        <div className="feature col">
          <h2>Back-End</h2>
          <ul className="lead fs-5">
            <li>
              NodeJS <img src="/images/nodejs.png" />
            </li>
            <li>
              Express{" "}
              <img src="/images/express.png" width={24} className="pb-1" />
            </li>
            <li>
              MongoDB <img src="/images/mongodb.png" className="pb-1" />
            </li>
            <li>
              Mongoose{" "}
              <img src="/images/mongoose.png" width={30} className="pb-1" />
            </li>
          </ul>
        </div>
        <div className="feature col">
          <h2>Miscellaneous</h2>
          <ul className="lead fs-5">
            <li>
              Git <img className="pb-1" src="/images/git.png" />
            </li>
            <li>
              Github <img className="pb-1" src="/images/github.png" />
            </li>
            <li>
              Heroku <img src="/images/heroku.png" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
