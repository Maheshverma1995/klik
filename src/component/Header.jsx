import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebookF,FaTwitter,FaLinkedinIn,FaInstagram,FaYoutube,FaEnvelopeOpen } from "react-icons/fa";

const Header = () => {
  return (
    <div>
      <div class="container-fluid  bg-primary">
        <div className='container '>
          <div className='row d-flex justify-content-evenly navbar '>
            <div className='col-sm-2 mt-1 d-flex justify-content-evenly'>
              <Link><span className='social-icon'><FaFacebookF/></span></Link>
              <Link><span className='social-icon'><FaTwitter/></span></Link>
              <Link><span className='social-icon'><FaLinkedinIn/></span></Link>
              <Link><span className='social-icon'><FaInstagram/></span></Link>
              <Link><span className='social-icon'><FaYoutube/></span></Link>
            </div>
            <div className='col-lg-6 d-flex justify-content-center'>
            <Link class="navbar-brand"><span className='text-white pe-2'><FaEnvelopeOpen/></span><span className='text-white'>Email:share.klikplus@gmail.com</span></Link>
            </div>
            <div className='col-sm-4'id='get-quota'>
            <form class="d-flex" role="search">
              
              <button class="btn text-white border border-2" type="submit">Get Free Quota</button>
            </form>
            </div>
          </div>
          </div>
      </div>
    </div>
  )
}

export default Header
