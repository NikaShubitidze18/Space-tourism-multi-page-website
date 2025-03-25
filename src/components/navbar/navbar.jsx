import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css"; // Ensure correct path

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg fixed-top">
      <div className="container-fluid">
        {/* Logo (Refresh on Click) */}
        <a href="/" className="navbar-brand">
          <img src="src/assets/shared/logo.svg" alt="Logo" className="nav-logo" />
        </a>

        {/* Mobile Menu Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {/* Home */}
            <li className="nav-item">
              <Link to="/" className="nav-link">
                <span>00</span> Home
              </Link>
            </li>

            {/* Destination */}
            <li className="nav-item">
              <Link to="/destination" className="nav-link">
                <span>01</span> Destination
              </Link>
            </li>

            {/* Crew */}
            <li className="nav-item">
              <Link to="/crew" className="nav-link">
                <span>02</span> Crew
              </Link>
            </li>

            {/* Technology */}
            <li className="nav-item">
              <Link to="/technology" className="nav-link">
                <span>03</span> Technology
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
