import React from "react";
import { projectImages } from "./assets/images.js";

export const Projects = () => {
  return (
    <div className="container px-4 py-5 col-xxl-8" id="projects">
      <h2 className="py-2 border-bottom">My Projects</h2>
      <div className="row featurette">
        <div className="col-md-6">
          <h3 className="featurette-heading">
            My thesis, <span className="text-muted">Virtual Classroom.</span>
          </h3>
          <p className="lead fs-4">
            This project consists of a virtual classroom that allows students to
            do their homework, review their notes, register courses, among other
            things. Teachers are also able to grade their student's works and
            create new activities.
          </p>
          <p className="lead fs-4">
            This is a React web application using Express in the server-side
            code with MongoDB as the database.
          </p>
          <div className="col">
            <a
              className="btn btn-primary me-1 mt-1"
              href="https://clever-kirch-3c5ec1.netlify.app/"
              target="_blank"
            >
              Visit Site
            </a>
            <a
              className="btn btn-secondary mt-1"
              href="https://github.com/LuisDanielCova/laboratorio-virtual"
              target="_blank"
            >
              Repository
            </a>
          </div>
        </div>
        <div className="col-md-6 my-auto">
          <img
            className="featurette-image img-fluid mx-auto rounded img-thumbnail"
            src={projectImages.Thesis}
            aria-label="Welcome page to a virtual classroom website"
          ></img>
        </div>
      </div>
      <hr className="featurette-divider" />
      <div className="row featurette">
        <div className="col-md-6 my-auto">
          <img
            className="featurette-image img-fluid mx-auto rounded img-thumbnail"
            src={projectImages.Wardrobe}
            aria-label="Welcome page to an e-commerce website"
          ></img>
        </div>
        <div className="col-md-6">
          <h3 className="featurette-heading">
            The Wardrobe, <span className="text-muted">E-Commerce.</span>
          </h3>
          <p className="lead fs-4">
            This project is an e-commerce, in this site, users are able to
            search products, view the different categories, add products to
            their cart and make a payment using a credit card.
          </p>
          <p className="lead fs-4">
            This is a React web application using the Django REST Framework in
            the server-side code with PostgreSQL as the database. The Stripe API
            was used for the payment method.
          </p>
          <div className="col">
            <a
              className="btn btn-primary me-1 mt-1"
              href="https://the-wardrobe.netlify.app/"
              target="_blank"
            >
              Visit Site
            </a>
            <a
              className="btn btn-secondary mt-1"
              href="https://github.com/LuisDanielCova/django-ecommerce"
              target="_blank"
            >
              Repository
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
