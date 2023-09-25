import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaYoutube } from "react-icons/fa";
const Footer = () => {
    return (
        <div>
        <div id='footer'>
            <div className='container '>
                <div className='row'>
                  <div className='col-12 text-center text-white'>
                  <h1>Newsletter</h1>
                    <h4>Get all updates to your inbox</h4>
                    <form class="d-flex justify-content-center" role="search">
              <input class="form-control w-25" type="search" placeholder="Search" aria-label="Search" />
              <button class="btn btn-success" type="submit">Subscribe</button>
            </form>
                  </div>
                </div>
                <div className='row'>
                    <div className='col-lg-3 text-white'>
                        <img className='img-fluid' src="./Image/logo.pnd" alt="" />
                        <h5>Head Office</h5>
                        <div><span></span><p>D-213, Ground Floor, Sector 63,
                            Noida - 201301</p></div>
                        <div><span></span><p>D-213, Ground Floor, Sector 63,
                            Noida - 201301</p></div>
                        <div>
                            <div className=' mt-1 d-flex justify-content-evenly'>
                                <Link><span className='social-icon'><FaFacebookF /></span></Link>
                                <Link><span className='social-icon'><FaTwitter /></span></Link>
                                <Link><span className='social-icon'><FaLinkedinIn /></span></Link>
                                <Link><span className='social-icon'><FaInstagram /></span></Link>
                                <Link><span className='social-icon'><FaYoutube /></span></Link>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-6 '>
                       <div className='row'>
                         <div className='col-sm-4'>
                       <ul><h5 className='text-white mt-3'>Quick links</h5>
                        <li className='footer-li'>
                           <span>&#x2907;</span> <Link className='footer-a' to=''>Home</Link>
                        </li>
                        <li className='footer-li'>
                           <span>&#x2907;</span> <Link className='footer-a' to=''>About Us</Link>
                        </li>
                        <li className='footer-li'>
                           <span>&#x2907;</span> <Link className='footer-a' to=''>Services</Link>
                        </li>
                        <li className='footer-li'>
                           <span>&#x2907;</span> <Link className='footer-a' to=''>Portfolio</Link>
                        </li>
                        <li className='footer-li'>
                           <span>&#x2907;</span> <Link className='footer-a' to=''>Career</Link>
                        </li>
                        <li className='footer-li'>
                           <span>&#x2907;</span> <Link className='footer-a' to=''>Contact us</Link>
                        </li>
                        </ul>
                        </div>
                        <div className='col-sm-8'>
                        <ul><h5 className='text-white mt-3'>Top Services</h5>
                        <li className='footer-li'>
                           <span>&#x2907;</span> <Link className='footer-a' to=''>Web Development</Link>
                        </li>
                        <li className='footer-li'>
                           <span>&#x2907;</span> <Link className='footer-a' to=''>Mobile App Development</Link>
                        </li>
                        <li className='footer-li'>
                           <span>&#x2907;</span> <Link className='footer-a' to=''>Outsourcing Software Development</Link>
                        </li>
                        <li className='footer-li'>
                           <span>&#x2907;</span> <Link className='footer-a' to=''>CMS Development</Link>
                        </li>
                        <li className='footer-li'>
                           <span>&#x2907;</span> <Link className='footer-a' to=''>ERP</Link>
                        </li>
                        <li className='footer-li'>
                           <span>&#x2907;</span> <Link className='footer-a' to=''>Digital Marketing</Link>
                        </li>
                        </ul>
                        </div>
                       </div>
                    </div>
                    <div className='col-lg-3'>
                        
                    </div>
                </div>
            </div>
        </div>
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-12 d-flex'>
                    <p>Copyright @2023 Klik Plus solutions Pvt. Ltd
                    </p><p><Link to=''>Terms and conditions</Link>
                   <Link to=''> Privacy policy</Link>
                    ,<Link to=''>Non-Refundable policy</Link></p>
                </div>
            </div>
             </div>
        </div>
    )
}

export default Footer
