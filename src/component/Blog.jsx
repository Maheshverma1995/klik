import React from 'react'
import { FaUserAlt, FaFacebook, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { Link } from 'react-router-dom';


const Blog = () => {
  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-12'>
          <img src="./Image/3d-randring.webp" alt="" />
        </div>
      </div>
      <div className="row d-flex justify-content-center">
        <div className="col-12 text-center fs-1 bold fw-bold text-decoration-underline">
          Blogs
        </div>
      </div>
      {/* ///////////////////////////////////////////////////////////////////////////// */}
      <div className="row mt-5 d-flex justify-content-start" id='frame' >
        <div className="col-lg-4 mt-2 mb-3" style={{ height: '450px' }}>
          <div className="card"  >
            <img src="./Image/web-2.jpg" className='mt-4 mb-4 img-fluid' style={{ width: '150px' }} alt="..." />
            <div className="card-body mt-4">
              <h5 className="card-title text-center">Card title</h5>
              <p className=' text-align fs-6'>Our mission is to augment business growth of our clients with creative design & Development to deliver their idea with high quality solutions which transform data into knowledge across the globe.</p>
              <div><Link className='text-decoration-none' href=""><div className='d-flex'>
                <h4 className='fs-5 ms-3'><FaUserAlt /></h4><h4 className='fs-5 ms-3'>AdminKlikPlus@gmail.com</h4></div></Link></div>
              <div>
                <Link className='text-decoration-none btn btn-primary mt-4' href="#" >Read more</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4 mt-2 mb-3" style={{ height: '450px' }}>
          <div className="card" >
            <img src="./Image/portoflio-151.jpg" className='mt-4 mb-4 img-fluid' style={{ width: '150px' }} alt="..." />
            <div className="card-body mt-4">
              <h5 className="card-title text-center">Card title</h5>
              <p className=' text-align fs-6'>Our mission is to augment business growth of our clients with creative design & Development to deliver their idea with high quality solutions which transform data into knowledge across the globe.</p>
              <div><Link className='text-decoration-none' href=""><div className='d-flex'>
                <h4 className='fs-5 ms-3'><FaUserAlt /></h4><h4 className='fs-5 ms-3'>AdminKlikPlus@gmail.com</h4></div></Link></div>
              <div>
                <Link className='text-decoration-none btn btn-primary mt-4' href="#"  >Read more</Link>

              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4 mt-2 mb-3" style={{ height: '450px' }}>
          <div className="card" >
            <img src="./Image/3 (1).webp" className='p-3 img-fluid' style={{ width: '150px' }} alt="..." />
            <div className="card-body">
              <h5 className="card-title text-center">Card title</h5>
              <p className=' text-align fs-6'>Our mission is to augment business growth of our clients with creative design & Development to deliver their idea with high quality solutions which transform data into knowledge across the globe.</p>
              <div><Link className='text-decoration-none' href=""><div className='d-flex'>
                <h4 className='fs-5 ms-3'><FaUserAlt /></h4><h4 className='fs-5 ms-3'>AdminKlikPlus@gmail.com</h4></div></Link></div>
              <div>
                <Link className='text-decoration-none btn btn-primary mt-4' href="#" >Read more</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 mt-2 mb-3" style={{ height: '450px' }}>
          <div className="card"  >
            <img src="./Image/4 (1).webp" className='mt-4 mb-4 img-fluid' style={{ width: '150px' }} alt="..." />
            <div className="card-body mt-4">
              <h5 className="card-title text-center">Card title</h5>
              <p className=' text-align fs-6'>Our mission is to augment business growth of our clients with creative design & Development to deliver their idea with high quality solutions which transform data into knowledge across the globe.</p>
              <div><Link className='text-decoration-none' href=""><div className='d-flex'>
                <h4 className='fs-5 ms-3'><FaUserAlt /></h4><h4 className='fs-5 ms-3'>AdminKlikPlus@gmail.com</h4></div></Link></div>
              <div>
                <Link className='text-decoration-none btn btn-primary mt-4' href="#" class="btn btn-primary mt-4 ">Read more</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4  mb-3" style={{ height: '450px' }}>
          <div className="card" >
            <img src="./Image/05.webp" className='mb-3 img-fluid' style={{ width: '150px' }} alt="..." />
            <div className="card-body">
              <h5 className="card-title text-center">Card title</h5>
              <p className=' text-align fs-6'>Our mission is to augment business growth of our clients with creative design & Development to deliver their idea with high quality solutions which transform data into knowledge across the globe.</p>
              <div><Link className='text-decoration-none' href=""><div className='d-flex'>
                <h4 className='fs-5 ms-3'><FaUserAlt /></h4><h4 className='fs-5 ms-3'>AdminKlikPlus@gmail.com</h4></div></Link></div>
              <div>
                <Link className='text-decoration-none btn btn-primary mt-4' href="#" class="btn btn-primary mt-4 ">Read more</Link>

              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4 mt-2 mb-3" style={{ height: '450px' }}>
          <div className="card" >
            <img src="./Image/6.webp" className='mt-4 mb-4 img-fluid' style={{ width: '150px' }} alt="..." />            <div className="card-body mt-4">
              <h5 className="card-title text-center">Card title</h5>
              <p className=' text-align fs-6'>Our mission is to augment business growth of our clients with creative design & Development to deliver their idea with high quality solutions which transform data into knowledge across the globe.</p>
              <div><Link className='text-decoration-none' href=""><div className='d-flex'>
                <h4 className='fs-5 ms-3'><FaUserAlt /></h4><h4 className='fs-5 ms-3'>AdminKlikPlus@gmail.com</h4></div></Link></div>
              <div>
                <Link className='text-decoration-none btn btn-primary mt-4' href="#" >Read more</Link>
              </div>
            </div>
          </div>
        </div>

      </div>
      {/* /////////////////////////////////////////////NEXT PAGE///////////////////////////////////// */}
      <div className="row my-5 d-flex justify-content-start">
        <div class="d-flex justify-content-center">
          <Link className='border mx-1 px-2 text-decoration-none fs-4' href="">1</Link>
          <Link className='border mx-1 px-2 text-decoration-none fs-4' href="">2</Link>
          <Link className='border mx-1 px-2 text-decoration-none fs-4' href="">Next</Link>
        </div>
      </div>
      {/* ////////////////////////////////////////////////////////////////////////////////////////// */}
      <div className="row">
        <div className="col-12 mb-">
          <Link className='fs-1 m-1 ' href=""><FaFacebook /></Link>
          <Link className='fs-1 m-1 ' href=""><FaLinkedinIn /></Link>
          <Link className='fs-1 m-1 ' href=""><FaTwitter /></Link>
          <Link className='fs-1 m-1 ' href=""><FaFacebook /></Link>
        </div>
      </div>
      {/* ////////////////////////////////////////////////////////////////////////////////////////////////// */}
      <div className="row bg-dark ">
        <div className="col-12 text-light d-flex justify-content-center mt-4 fs-1">Subscribe</div>
        <div className="col-12 text-light d-flex justify-content-center fs-2">Get all updates to your inbox</div>
        <div className="col-12 mb-5 d-flex justify-content-center">
          <form class="d-flex col-7">
            <input class="form-control me-2 border-3 fs-2  rounded-3 my-4" type="search" placeholder="Enter Email Address*" aria-label="Search" />
            <button class="btn btn-outline-success fs-2 my-4" type="submit">Search</button>
          </form>
        </div>
      </div>



    </div>
  )
}

export default Blog
