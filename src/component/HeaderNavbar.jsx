import React from 'react';
import { Link } from 'react-router-dom';

const HeaderNavbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg  sticky-top">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img style={{ width: '100px' }} className="img-fluid" src="./Image/logo.png" alt="" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link fs-5 text-white active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fs-5 text-white" to="/about">
                  About Us
                </Link>
              </li>
              <li className="nav-item" id="service-link">
                <Link className="nav-link fs-5 text-white" to="/services">
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fs-5 text-white" to="/portfolio">
                  Portfolio
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fs-5 text-white" to="/career">
                  Career
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fs-5 text-white" to="/blog">
                  Blog
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fs-5 text-white" to="/contact">
                  Contact Us
                </Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <button className="btn nav-link fs-5 text-white border p-2 bg-danger" type="submit">
                Get Free Quote
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default HeaderNavbar;
