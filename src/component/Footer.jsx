import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaYoutube, FaGreaterThan } from "react-icons/fa";
import Iframe from 'react-iframe';
import ContrySlider from './ContrySlider';
const Footer = () => {
   return (
      <div className='container-fluid'>
         <div id='footer'>
            <div className='container mt-2 '>
               <div className='row mb-5'>
                  <div className='col-12 '>
                     <h1 className='text-center text-white'>Newsletter</h1>
                     <h4 className='text-center text-white'>Get all updates to your inbox</h4>
                     <form className="d-flex justify-content-center" >
                        <input className="form-control w-25" style={{ minWidth: '150px' }} type="Subscribe" placeholder="Subscribe" aria-label="Subscribe" />
                        <button className="btn btn-success" type="submit">Subscribe</button>
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

                  </div>
                  <div className='col-lg-6 '>
                     <div className='row'>
                        <div className='col-sm-4'>
                           <ul><h5 className='text-white mt-3'>Quick links</h5>
                              <li className='footer-li'>
                                 <span><FaGreaterThan /></span> <Link className='footer-a' to='/'>Home</Link>
                              </li>
                              <li className='footer-li'>
                                 <span><FaGreaterThan /></span> <Link className='footer-a' to='about'>About Us</Link>
                              </li> 
                              <li className='footer-li'>
                                 <span><FaGreaterThan /></span> <Link className='footer-a' to='services'>Services</Link>
                              </li>
                              <li className='footer-li'>
                                 <span><FaGreaterThan /></span> <Link className='footer-a' to='portfolio'>Portfolio</Link>
                              </li>
                              <li className='footer-li'>
                                 <span><FaGreaterThan /></span> <Link className='footer-a' to='career'>Career</Link>
                              </li>
                              <li className='footer-li'>
                                 <span><FaGreaterThan /></span> <Link className='footer-a' to='contact'>Contact us</Link>
                              </li>
                           </ul>
                        </div>
                        <div className='col-sm-8'>
                           <ul><h5 className='text-white mt-3'>Top Services</h5>
                              <li className='footer-li'>
                                 <span><FaGreaterThan /></span> <Link className='footer-a' to=''>Web Development</Link>
                              </li>
                              <li className='footer-li'>
                                 <span><FaGreaterThan /></span> <Link className='footer-a' to=''>Mobile App Development</Link>
                              </li>
                              <li className='footer-li'>
                                 <span><FaGreaterThan /></span> <Link className='footer-a' to=''>.Net Technology</Link>
                              </li>
                              <li className='footer-li'>
                                 <span><FaGreaterThan /></span> <Link className='footer-a' to=''>CMS Development</Link>
                              </li>
                              <li className='footer-li'>
                                 <span><FaGreaterThan /></span> <Link className='footer-a' to=''>ERP</Link>
                              </li>
                              <li className='footer-li'>
                                 <span><FaGreaterThan /></span> <Link className='footer-a' to=''>Digital Marketing</Link>
                              </li>
                           </ul>
                        </div>
                     </div>
                  </div>
                  <div className='col-lg-3'>
                     <Iframe url="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3502.0728819597907!2d77.37967607439563!3d28.627577684307674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjjCsDM3JzM5LjMiTiA3N8KwMjInNTYuMSJF!5e0!3m2!1sen!2sin!4v1695711300090!5m2!1sen!2sin" allowfullscreen="" loading="lazy" />
                     <div className='mt-5'>
                        <div className=' mt-1 d-flex justify-content-evenly'>
                           <Link><span className='social-icon'><FaFacebookF /></span></Link>
                           <Link><span className='social-icon'><FaTwitter /></span></Link>
                           <Link><span className='social-icon'><FaLinkedinIn /></span></Link>
                           <Link><span className='social-icon'><FaInstagram /></span></Link>
                           <Link><span className='social-icon'><FaYoutube /></span></Link>
                        </div>
                     </div>
                  </div>
               </div>
               <div className='row'>
                  <h1 className='text-center text-white mt-3 mb-5'>Our Global Presence</h1>
                 
                     <div className='col-12 mb-3'>
                     <ContrySlider/>
                     </div>
                  
               </div>
            </div>
         </div>
         <div className='container-fluid border-top' style={{background:'#031a39'}}>
            <div className='row'>
               <div className='col-md-5 p-3'>
                  <p className='fs-4 text-white'>Copyright @2023 Klik Plus solutions Pvt. Ltd
                  </p>
               </div>
               <div className='col-md-7 p-3'>
                  <p><Link className='text-decoration-none  fs-4 text-white ' to=''>Terms and conditions ,</Link>
                     <Link className='text-decoration-none  fs-4 text-white ' to=''> Privacy policy ,</Link>
                     ,<Link className='text-decoration-none  fs-4 text-white ' to=''>Non-Refundable policy</Link></p>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Footer
