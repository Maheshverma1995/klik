import React from 'react'

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

<div className="card-body">
<h5 className="card-title text-center  py-2 ">Card title</h5>
  <p className=' text-align  '>Our mission is to augment business growth of our clients with creative design & Development to deliver their idea with high quality solutions which transform data into knowledge across the globe.</p>
  <a href=""><i class="fa-regular fa-user"></i>AdminKlikPlus@gmail.com</a>
  <div>
  <a href="#" class="btn btn-primary">Read more</a>
  </div>
</div>
</div>
      </div>

      <div className="col-sm-6 col-md-4 mb-3">
        <div className="card" >
        <img src="./image/Rashmika.jpg" class="height img-fluid card-img-top" alt="..."/>

<div className="card-body">
<h5 className="card-title text-center  py-2 ">Card title</h5>
  <p className=' text-align  '>Our mission is to augment business growth of our clients with creative design & Development to deliver their idea with high quality solutions which transform data into knowledge across the globe.</p>
  <a href="">AdminKlikPlus@gmail.com</a>
  <div>
  <a href="#" class="btn btn-primary">Read more</a>
  </div>
</div>
</div>
      </div>

      <div className="col-sm-6 col-md-4 mb-3">
        <div className="card" >
        <img src="./image/Rashmika.jpg" class=" height img-fluid card-img-top" alt="..."/>
<div className="card-body">
<h5 className="card-title text-center  py-2 ">Card title</h5>
  <p className=' text-align  '>Our mission is to augment business growth of our clients with creative design & Development to deliver their idea with high quality solutions which transform data into knowledge across the globe.</p>
  <a href="">AdminKlikPlus@gmail.com</a>
  <div>
  <a href="#" class="btn btn-primary">Read more</a>
  </div>
</div>
</div>
      </div>
    </div>



    </div>
  )
}

export default Blog
