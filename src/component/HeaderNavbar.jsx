import React from 'react'
import { Link } from 'react-router-dom'

const HeaderNavbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container">
          <Link class="navbar-brand" to="#">Navbar</Link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav m-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link fs-5 active" aria-current="page" to="">Home</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link fs-5" to="about">About Us</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link fs-5" to="services">Services</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link fs-5" to="portfolio">Portfolio</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link fs-5" to="career">Career</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link fs-5" to="blog">Blog</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link fs-5" to="contact">Contact Us</Link>
              </li>
            </ul>
            <form class="d-flex" role="search">
              
              <button class="btn btn-outline-success" type="submit">Get Free Quota</button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default HeaderNavbar
