import React from 'react'
import { Link } from 'react-router-dom'

const Blog = () => {
  return (
    <div className='container-fluid'>
      <div className="row d-flex justify-content-center">
        <div className="col-12 text-center fs-1 bold fw-bold text-decoration-underline">
          Blogs
        </div>
      </div>
      {/* ///////////////////////////////////////////////////////////////////////////// */}
      <div className="row mt-5 d-flex justify-content-start"  id='frame' >
    <div className="col-sm-6 col-md-4 mb-3">
        <div className="card"  >
        <img src="./image/Rashmika.jpg" className=" height card-img-top img-fluid" alt="..."/>
        <div>UNCATEGORIZED</div>

<div className="card-body">
<h5 className="card-title text-center  py-2 ">Card title</h5>
  <p className=' text-align  '>Our mission is to augment business growth of our clients with creative design & Development to deliver their idea with high quality solutions which transform data into knowledge across the globe.</p>
  <Link to=""><i class="fa-regular fa-user"></i>AdminKlikPlus@gmail.com</Link>
  <div>
  <Link to="#" class="btn btn-primary">Read more</Link>
  </div>
</div>
</div>
      </div>

      <div className="col-sm-6 col-md-4 mb-3">
        <div className="card" >
        <img src="./image/Rashmika.jpg" class="height img-fluid card-img-top" alt="..."/>
        <div>UNCATEGORIZED</div>

<div className="card-body">
<h5 className="card-title text-center  py-2 ">Card title</h5>
  <p className=' text-align  '>Our mission is to augment business growth of our clients with creative design & Development to deliver their idea with high quality solutions which transform data into knowledge across the globe.</p>
  <Link to="">AdminKlikPlus@gmail.com</Link>
  <div>
  <Link to="#" class="btn btn-primary">Read more</Link>
  </div>
</div>
</div>
      </div>

      <div className="col-sm-6 col-md-4 mb-3">
        <div className="card" >
        <img src="./image/Rashmika.jpg" class=" height img-fluid card-img-top" alt="..."/>
        <div>UNCATEGORIZED</div>
<div className="card-body">
<h5 className="card-title text-center  py-2 ">Card title</h5>
  <p className=' text-align  '>Our mission is to augment business growth of our clients with creative design & Development to deliver their idea with high quality solutions which transform data into knowledge across the globe.</p>
  <Link to="">AdminKlikPlus@gmail.com</Link>
  <div>
  <Link to="#" class="btn btn-primary">Read more</Link>
  </div>
</div>
</div>
      </div>
      <div className="col-sm-6 col-md-4 mb-3">
        <div className="card"  >
        <img src="./image/Rashmika.jpg" className=" height card-img-top img-fluid" alt="..."/>
        <div>UNCATEGORIZED</div>

<div className="card-body">
<h5 className="card-title text-center  py-2 ">Card title</h5>
  <p className=' text-align  '>Our mission is to augment business growth of our clients with creative design & Development to deliver their idea with high quality solutions which transform data into knowledge across the globe.</p>
  <a className='text-decoration-none' href=""><FaUserAlt/>AdminKlikPlus@gmail.com</a>
  <div>
  <a className='text-decoration-none'  href="#" class="btn btn-primary mt-3 ">Read more</a>
  </div>
</div>
</div>
      </div>

      <div className="col-sm-6 col-md-4 mb-3">
        <div className="card" >
        <img src="./image/Rashmika.jpg" class="height img-fluid card-img-top" alt="..."/>
        <div>UNCATEGORIZED</div>

<div className="card-body">
<h5 className="card-title text-center  py-2 ">Card title</h5>
  <p className=' text-align  '>Our mission is to augment business growth of our clients with creative design & Development to deliver their idea with high quality solutions which transform data into knowledge across the globe.</p>
  <a className='text-decoration-none' href=""><FaUserAlt/>AdminKlikPlus@gmail.com</a>
  <div>
  <a className='text-decoration-none'  href="#" class="btn btn-primary mt-3 ">Read more</a>
 
  </div>
</div>
</div>
      </div>

      <div className="col-sm-6 col-md-4 mb-3">
        <div className="card" >
        <img src="./image/Rashmika.jpg" class=" height img-fluid card-img-top" alt="..."/>
        <div>UNCATEGORIZED</div>
<div className="card-body">
<h5 className="card-title text-center  py-2 ">Card title</h5>
  <p className=' text-align  '>Our mission is to augment business growth of our clients with creative design & Development to deliver their idea with high quality solutions which transform data into knowledge across the globe.</p>
  <a className='text-decoration-none' href=""><FaUserAlt/>AdminKlikPlus@gmail.com</a>
  <div>
  <a className='text-decoration-none'  href="#" class="btn btn-primary mt-3">Read more</a>
  </div>
</div>
</div>
      </div>
      
    </div>
    {/* /////////////////////////////////////////////NEXT PAGE///////////////////////////////////// */}
   <div className="row my-5 d-flex justify-content-start">
    <div class="d-flex justify-content-center">
      <a className='border mx-1 px-2 text-decoration-none fs-4' href="">1</a>
      <a className='border mx-1 px-2 text-decoration-none fs-4' href="">2</a>
      <a className='border mx-1 px-2 text-decoration-none fs-4' href="">Next</a>
    </div>
   </div>
   {/* ////////////////////////////////////////////////////////////////////////////////////////// */}
  <div className="row">
    <div className="col-12 mb-3">
      <a className='fs-1 m-1 ' href=""><FaFacebook/></a>
      <a className='fs-1 m-1 ' href=""><FaLinkedinIn/></a>
      <a className='fs-1 m-1 ' href=""><FaTwitter/></a>
      <a className='fs-1 m-1 ' href=""><FaFacebook/></a>
    </div>
  </div>
{/* ////////////////////////////////////////////////////////////////////////////////////////////////// */}
<div className="row bg-dark ">
  <div className="col-12 text-light d-flex justify-content-center mt-4 fs-1">Subscribe</div>
  <div className="col-12 text-light d-flex justify-content-center fs-2">Get all updates to your inbox</div>
  <div className="col-12 mb-5 d-flex justify-content-center">
  <form class="d-flex col-7">
        <input class="form-control me-2 border-3 fs-2  rounded-3 my-4" type="search" placeholder="Enter Email Address*" aria-label="Search"/>
        <button class="btn btn-outline-success fs-2 my-4" type="submit">Search</button>
      </form>
  </div>
</div>



    </div>
  )
}

export default Blog
