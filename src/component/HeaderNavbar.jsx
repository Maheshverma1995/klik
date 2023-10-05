import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const HeaderNavbar = () => {
  const [Top, setTop] = useState(false);
  const [close, setclose] = useState(true);

  const toolgal = () => {
    setclose(!close);
  };

  const closeNav = () => {
    setclose(true);
  };

  useEffect(() => {
    // Function to handle scroll event
    const scroll = () => {
      if (window.scrollY ===0) {
        setTop(false);
      } else {
        setTop(true);
      }
    };

    window.addEventListener('scroll', scroll);
    return () => {
      window.removeEventListener('scroll', scroll);
    };
  }, []);

  return (
    <div style={{overflowX:'hidden'}}>
      <nav className={`navbar navbar-expand-lg navbar-dark bg-2 ${Top ? 'fixed-top' : ''}`}>
        <div className="container">
          <Link className="navbar-brand" onClick={closeNav} to="/">
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
            onClick={toolgal}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className={`collapse navbar-collapse ${close ? '' : 'show'}` } id="navbarSupportedContent">
            <ul className="navbar-nav m-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link id='nav-link-a' className="nav-link  text-white active" aria-current="page" onClick={closeNav} to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link id='nav-link-a' className="nav-link  text-white" onClick={closeNav} to="/about">
                  About Us
                </Link>
              </li>
              <li className="nav-item" id="service-link">
                <Link id='nav-link-a' className="nav-link  text-white" onClick={closeNav} to="/services">
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link id='nav-link-a' className="nav-link  text-white" onClick={closeNav} to="/portfolio">
                  Portfolio
                </Link>
              </li>
              <li className="nav-item">
                <Link id='nav-link-a' className="nav-link  text-white" onClick={closeNav} to="/career">
                  Career
                </Link>
              </li>
              <li className="nav-item">
                <Link id='nav-link-a' className="nav-link  text-white" onClick={closeNav} to="/blog">
                  Blog
                </Link>
              </li>
              <li className="nav-item">
                <Link id='nav-link-a' className="nav-link  text-white" onClick={closeNav} to="/contact">
                  Contact Us
                </Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <button className="btn nav-link  text-white border p-2 bg-danger" type="submit">
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
