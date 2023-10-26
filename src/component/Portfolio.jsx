import React from 'react'
import './Portfolio.css'
import { Link } from 'react-router-dom'

const Portfolio = () => {
  return (
    <div className="container-fluid ">
      <div className="row">
        <img src="./Image/Port-top.png" className="img-fluid" alt="top-img" />
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
                        <img src="./Image/p01.webp" className="card-img-top p-2 image-fluid" style={{ height: "150px" }} alt=" " />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="back bg-2">
                <h2>Powerpoint</h2>
                <p>We work on Website and Mobile App.</p>
                </div>
              </div>
            </div>
            <div className="card-body">
              <h5 className="card-title text-center ">Powerpoint</h5>
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
                        <img src="./Image/p02.webp" className="card-img-top p-2 image-fluid" style={{ height: "150px" }} alt=" " />
                      </div>
                     
                    </div>
                  </div>
                </div>
                <div className="back bg-2">
                <h2>CRM Fixfella</h2>
                <p>We work on Website &amp; Mobile App</p>
                </div>
              </div>
            </div>
            <div className="card-body">
              <h5 className="card-title text-center">CRM Fixfella</h5>
              <Link to="#" className="btn btn-primary button">Details</Link>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-3 mb-3">
          <div className="card" >
            <div className="outer">
              <div className="inner">
                <div className="front">
                  <img src="./Image/p03.webp" className="card-img-top p-2 image-fluid" style={{ height: "150px" }} alt=" " />
                </div>
                <div className="back bg-2">
                <h2>Listen &amp; Heard</h2>
                <p>We work on Website &amp; Mobile App</p>
                </div>
              </div>
            </div>
            <div className="card-body">
              <h5 className="card-title text-center">Listen & Heard</h5>
              <Link to="#" className="btn btn-primary button">Details</Link>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-3 mb-3">
          <div className="card" >
            <div className="outer">
              <div className="inner">
                <div className="front">
                  <img src="./Image/p04.webp" class="card-img-top p-2 image-fluid" style={{ height: "150px" }} alt=" " />
                </div>
                <div className="back bg-2">
                <h2>Mesee</h2>
                  <p>We work on Website &amp; Mobile App</p>
                </div>
              </div>
            </div>
            <div className="card-body">
              <h5 className="card-title text-center">Mesee</h5>
              <Link to="#" className="btn btn-primary button">Details</Link>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-3 mb-3">
          <div className="card" >
            <div className="outer">
              <div className="inner">
                <div className="front">
                  <img src="./Image/p05.webp" className="card-img-top p-2 image-fluid" style={{ height: "150px" }} alt=" " />
                </div>
                <div className="back bg-2">
                <h2>Johnbull</h2>
                <p>Architect Engineer</p>
                </div>
              </div>
            </div>
            <div className="card-body">
              <h5 className="card-title text-center">Johnbull</h5>
              <Link to="#" className="btn btn-primary button">Details</Link>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-3 mb-3">
          <div className="card" >
            <div className="outer">
              <div className="inner">
                <div className="front">
                  <img src="./Image/p06.webp" className="card-img-top p-2 image-fluid" style={{ height: "150px" }} alt=" " />
                </div>
                <div className="back bg-2">
                <h2>Challenger App</h2>
                  <p>Architect &amp; Engineer</p>
                
                </div>
              </div>
            </div>
            <div className="card-body">
              <h5 className="card-title text-center">Challenger App</h5>
              <Link to="#" className="btn btn-primary button">Details</Link>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-3 mb-3">
          <div className="card" >
            <div className="outer">
              <div className="inner">
                <div className="front">
                  <img src="./Image/p07.webp" className="card-img-top p-2 image-fluid" style={{ height: "150px" }} alt=" " />
                </div>
                <div className="back bg-2">
                <h2>Junk Removal</h2>
                  <p>We work on Website &amp; Mobile App</p>
                
                </div>
              </div>
            </div>
            <div className="card-body">
              <h5 className="card-title text-center">Junk Removal</h5>
              <Link to="#" className="btn btn-primary button">Details</Link>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-3 mb-3">
          <div className="card" >
            <div className="outer">
              <div className="inner">
                <div className="front">
                  <img src="./Image/p08.webp" className="card-img-top p-2 image-fluid" style={{ height: "150px" }} alt=" " />
                </div>
                <div className="back bg-2">
                <h2>Dash-Global</h2>
                  <p>We work on Website &amp; Mobile App</p>
                </div>
              </div>
            </div>
            <div className="card-body">
              <h5 className="card-title text-center">Dash-Global</h5>
              <Link to="///////////" className="btn btn-primary button">Details</Link>
            </div>
          </div>
        </div>

      </div>
    
     
    </div>




  
  )
}

export default Portfolio
