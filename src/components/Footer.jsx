import React from "react";

export const Footer = () => {
  return (
    <div className="container mt-5">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <div className="col-md-4 d-flex align-items-center">
          <a
            href="/"
            className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"
          >
            <svg className="bi" width="30" height="24">
              <use href="#bootstrap"></use>
            </svg>
          </a>
          <span className="text-muted">© 2022 Luis Daniel Cova</span>
        </div>
      </footer>
    </div>
  );
};
