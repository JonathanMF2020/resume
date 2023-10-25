import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import '../styles/Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-custom p-4">
      <a className="navbar-brand text-white" href="#">Mi Portafolio</a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link text-white" href="#home">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="#projects">Projects</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="#stack">Technology Stack</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;