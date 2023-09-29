import React from 'react'
import '../component/Portfolio.css'
import { Link } from 'react-router-dom'

const Portfolio = () => {
  return (
    <div className="container-fluid ">
      <div className="row">
        <img src="./image/Port-top.png" className="img-fluid" alt="top-img" />
      </div>
      <div className="row ">
    <div class="d-flex upper-strip justify-content-Start">
      <Link className='border mx-1 px-2 text-decoration-none fs-4' href="">Home</Link>
      <Link className='border mx-1 px-2 text-decoration-none fs-4' href="">Services</Link>
      <Link className='border mx-1 px-2 text-decoration-none fs-4' href="">Portfolio</Link>
    </div>
   </div>
   
      <div className="row ">
        <div className="col-12 fs-2 text-center text-primary">Our Products</div>
        <div className=" pen">
          <div className='ball'></div>
        </div>
      </div>
      <div className="row d-flex justify-content-start" id='frame' >
        <div className="col-sm-6 col-md-3 mb-3">
          <div className="card" >
            <div className="outer">
              <div className="inner">
                <div className="front">
                  <div className="outer">
                    <div className="inner">
                      <div className="front">
                        <img src="./image/Rashmika.jpg" className="card-img-top p-2 image-fluid" style={{ height: "150px" }} alt="Rashmika" />
                      </div>
                      <div className="back">
                        <h3>Lorem ipsum adipisicing elit.</h3>
                        <h3>Lorem ipsum adipisicing elit.</h3>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="back">
                  <h3>Lorem ipsum adipisicing elit.</h3>
                  <h3>Lorem ipsum adipisicing elit.</h3>
                </div>
              </div>
            </div>
            <div className="card-body">
              <h5 className="card-title text-center ">Card title</h5>
              <Link to="#" className="btn btn-primary button">Details</Link>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-3 mb-3">
          <div className="card" >
            <div className="outer">
              <div className="inner">
                <div className="front">
                  <div className="outer">
                    <div className="inner">
                      <div className="front">
                        <img src="./image/Rashmika.jpg" className="card-img-top p-2 image-fluid" style={{ height: "150px" }} alt="Rashmika" />
                      </div>
                      <div className="back">
                        <h3>Lorem ipsum adipisicing elit.</h3>
                        <h3>Lorem ipsum adipisicing elit.</h3>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="back">
                  <h3>Lorem ipsum adipisicing elit.</h3>
                  <h3>Lorem ipsum adipisicing elit.</h3>
                </div>
              </div>
            </div>
            <div className="card-body">
              <h5 className="card-title text-center">Card title</h5>
              <Link to="#" className="btn btn-primary button">Details</Link>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-3 mb-3">
          <div className="card" >
            <div className="outer">
              <div className="inner">
                <div className="front">
                  <img src="./image/Rashmika.jpg" className="card-img-top p-2 image-fluid" style={{ height: "150px" }} alt="Rashmika" />
                </div>
                <div className="back">
                  <h3>Lorem ipsum adipisicing elit.</h3>
                  <h3>Lorem ipsum adipisicing elit.</h3>
                </div>
              </div>
            </div>
            <div className="card-body">
              <h5 className="card-title text-center">Card title</h5>
              <Link to="#" className="btn btn-primary button">Details</Link>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-3 mb-3">
          <div className="card" >
            <div className="outer">
              <div className="inner">
                <div className="front">
                  <img src="./image/Rashmika.jpg" className="card-img-top p-2 image-fluid" style={{ height: "150px" }} alt="Rashmika" />
                </div>
                <div className="back">
                  <h3>Lorem ipsum adipisicing elit.</h3>
                  <h3>Lorem ipsum adipisicing elit.</h3>
                </div>
              </div>
            </div>
            <div className="card-body">
              <h5 className="card-title text-center">Card title</h5>
              <Link to="#" className="btn btn-primary button">Details</Link>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-3 mb-3">
          <div className="card" >
            <div className="outer">
              <div className="inner">
                <div className="front">
                  <img src="./image/Rashmika.jpg" className="card-img-top p-2 image-fluid" style={{ height: "150px" }} alt="Rashmika" />
                </div>
                <div className="back">
                  <h3>Lorem ipsum adipisicing elit.</h3>
                  <h3>Lorem ipsum adipisicing elit.</h3>
                </div>
              </div>
            </div>
            <div className="card-body">
              <h5 className="card-title text-center">Card title</h5>
              <Link to="#" className="btn btn-primary button">Details</Link>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-3 mb-3">
          <div className="card" >
            <div className="outer">
              <div className="inner">
                <div className="front">
                  <img src="./image/Rashmika.jpg" className="card-img-top p-2 image-fluid" style={{ height: "150px" }} alt="Rashmika" />
                </div>
                <div className="back">
                  <h3>Lorem ipsum adipisicing elit.</h3>
                  <h3>Lorem ipsum adipisicing elit.</h3>
                </div>
              </div>
            </div>
            <div className="card-body">
              <h5 className="card-title text-center">Card title</h5>
              <Link to="#" className="btn btn-primary button">Details</Link>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-3 mb-3">
          <div className="card" >
            <div className="outer">
              <div className="inner">
                <div className="front">
                  <img src="./image/Rashmika.jpg" className="card-img-top p-2 image-fluid" style={{ height: "150px" }} alt="Rashmika" />
                </div>
                <div className="back">
                  <h3>Lorem ipsum adipisicing elit.</h3>
                  <h3>Lorem ipsum adipisicing elit.</h3>
                </div>
              </div>
            </div>
            <div className="card-body">
              <h5 className="card-title text-center">Card title</h5>
              <Link to="#" className="btn btn-primary button">Details</Link>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-3 mb-3">
          <div className="card" >
            <div className="outer">
              <div className="inner">
                <div className="front">
                  <img src="./image/Rashmika.jpg" className="card-img-top p-2 image-fluid" style={{ height: "150px" }} alt="Rashmika" />
                </div>
                <div className="back">
                  <h3>Lorem ipsum adipisicing elit.</h3>
                  <h3>Lorem ipsum adipisicing elit.</h3>
                </div>
              </div>
            </div>
            <div className="card-body">
              <h5 className="card-title text-center">Card title</h5>
              <Link to="///////////" className="btn btn-primary button">Details</Link>
            </div>
          </div>
        </div>

      </div>
       <div className="col-sm-6 col-md-3 mb-3">
        <div className="card" >
 <div className="outer">
        <div className="inner">
            <div className="front">
            <img src="./image/icon-img.png" className="card-img-top p-2 image-fluid" style={{height:"150px"}} alt="Rashmika"/>
</div>
            <div className="back">
                <h3>Lorem ipsum adipisicing elit.</h3>
                <h3>Lorem ipsum adipisicing elit.</h3>
        </div>
        </div>
    </div>
<div className="card-body">
  <h5 className="card-title text-center">Card title</h5>
  <Link to="#" className="btn btn-primary button">Details</Link>
</div>
</div>
      </div>
       <div className="col-sm-6 col-md-3 mb-3">
        <div className="card" >
 <div className="outer">
        <div className="inner">
            <div className="front">
            <img src="./image/icon-img.png" className="card-img-top p-2 image-fluid" style={{height:"150px"}} alt="Rashmika"/>
</div>
            <div className="back">
                <h3>Lorem ipsum adipisicing elit.</h3>
                <h3>Lorem ipsum adipisicing elit.</h3>
        </div>
        </div>
    </div>
<div className="card-body">
  <h5 className="card-title text-center">Card title</h5>
  <Link to="#" className="btn btn-primary button">Details</Link>
</div>
</div>
      </div>
       <div className="col-sm-6 col-md-3 mb-3">
        <div className="card" >
 <div className="outer">
        <div className="inner">
            <div className="front">
            <img src="./image/icon-img.png" className="card-img-top p-2 image-fluid" style={{height:"150px"}} alt="Rashmika"/>
</div>
            <div className="back">
                <h3>Lorem ipsum adipisicing elit.</h3>
                <h3>Lorem ipsum adipisicing elit.</h3>
        </div>
        </div>
    </div>
<div className="card-body">
  <h5 className="card-title text-center">Card title</h5>
  <Link to="#" className="btn btn-primary button">Details</Link>
</div>
</div>
      </div>
       <div className="col-sm-6 col-md-3 mb-3">
        <div className="card" >
 <div className="outer">
        <div className="inner">
            <div className="front">
            <img src="./image/icon-img.png" className="card-img-top p-2 image-fluid" style={{height:"150px"}} alt="Rashmika"/>
</div>
            <div className="back">
                <h3>Lorem ipsum adipisicing elit.</h3>
                <h3>Lorem ipsum adipisicing elit.</h3>
        </div>
        </div>
    </div>
<div className="card-body">
  <h5 className="card-title text-center">Card title</h5>
  <Link to="#" className="btn btn-primary button">Details</Link>
</div>
</div>
      </div>
       <div className="col-sm-6 col-md-3 mb-3">
        <div className="card" >
 <div className="outer">
        <div className="inner">
            <div className="front">
            <img src="./image/icon-img.png" className="card-img-top p-2 image-fluid" style={{height:"150px"}} alt="Rashmika"/>
</div>
            <div className="back">
                <h3>Lorem ipsum adipisicing elit.</h3>
                <h3>Lorem ipsum adipisicing elit.</h3>
        </div>
        </div>
    </div>
<div className="card-body">
  <h5 className="card-title text-center">Card title</h5>
  <Link to="///////////" className="btn btn-primary button">Details</Link>
</div>
</div>
      </div>
     
    </div>




  
  )
}

export default Portfolio
