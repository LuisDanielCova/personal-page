import React from "react";

export const Projects = () => {
  return (
    <div className="container px-4 py-5 col-xxl-8" id="Projects">
      <h2 className="py-2 border-bottom">My Projects</h2>
      <div className="row featurette">
        <div className="col-md-7">
          <h3 className="featurette-heading">
            My thesis, <span className="text-muted">Virtual Laboratory.</span>
          </h3>
          <p className="lead">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla
            explicabo tempora illum dicta. Fuga fugiat animi nesciunt atque
            corrupti voluptas consequuntur eos rem veritatis eum officiis quis,
            rerum ducimus commodi quos. Veniam repellat reprehenderit dolorum
            distinctio deserunt ipsa odio provident.
          </p>
        </div>
        <div className="col-md-5">
          <img
            className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
            width="500"
            height="500"
            src="http://placekitten.com/500/500"
            aria-label="Placeholder: 500x500"
          ></img>
        </div>
      </div>
      <hr className="featurrete-divider" />
      <div className="row featurette">
        <div className="col-md-5">
          <img
            className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
            width="400"
            height="400"
            src="http://placekitten.com/400/400"
            aria-label="Placeholder: 500x500"
          ></img>
        </div>
        <div className="col-md-7">
          <h3 className="featurette-heading">
            Odinbook, <span className="text-muted">Facebook Clone.</span>
          </h3>
          <p className="lead">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea dicta
            ducimus, animi voluptate adipisci totam? Odio iste a voluptatum
            mollitia vel blanditiis. Repudiandae, esse omnis.
          </p>
        </div>
      </div>
    </div>
  );
};
