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
              HTML5 <img className="pb-1" src="/images/skills/html.png" />
            </li>
            <li>
              Bootstrap{" "}
              <img
                src="/images/skills/bootstrap.png"
                height={26}
                className="pb-1"
              />
            </li>
            <li>
              JavaScript <img className="pb-1" src="/images/skills/js.png" />
            </li>
            <li>
              ReactJS <img className="pb-1" src="/images/skills/reactjs.png" />
            </li>
          </ul>
        </div>
        <div className="feature col">
          <h2>Back-End</h2>
          <ul className="lead fs-5">
            <li>
              NodeJS <img src="/images/skills/nodejs.png" />
            </li>
            <li>
              Express{" "}
              <img
                src="/images/skills/express.png"
                width={24}
                className="pb-1"
              />
            </li>
            <li>
              MongoDB <img src="/images/skills/mongodb.png" className="pb-1" />
            </li>
            <li>
              Mongoose{" "}
              <img
                src="/images/skills/mongoose.png"
                width={30}
                className="pb-1"
              />
            </li>
          </ul>
        </div>
        <div className="feature col">
          <h2>Miscellaneous</h2>
          <ul className="lead fs-5">
            <li>
              Git <img className="pb-1" src="/images/skills/git.png" />
            </li>
            <li>
              Github <img className="pb-1" src="/images/skills/github.png" />
            </li>
            <li>
              Heroku <img src="/images/skills/heroku.png" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
