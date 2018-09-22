import React from "react";
import { Link } from "gatsby";

const Navi = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="container">
          <Link to="/" className="navbar-brand">
            This is the Brand Title
          </Link>
          <button
            className="navbar-toggler"
            data-toggle="collapse"
            data-target="#navbarCollapse"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Blog
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navi;
