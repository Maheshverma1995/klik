import React from 'react'
import { Link } from 'react-router-dom'
import Hiring from './Hiring'

const Career = () => {

  return (
    <div className='container-fluid contact-row-1'>
      <div className="row">
        <img src="./image/Career-Banner.webp" className="img-fluid" alt="top-img" />
      </div>


      {/* /////////////////////////////////////////////////////////////////////////////////////////// */}

      <div className="row ">
        <div className="d-flex upper-strip justify-content-Start">
          <Link className='border mx-1 px-2 text-decoration-none fs-4' to="">Home</Link>
          <Link className='border mx-1 px-2 text-decoration-none fs-4' to="">Services</Link>
          <Link className='border mx-1 px-2 text-decoration-none fs-4' to="">Portfolio</Link>
        </div>
      </div>

      {/* ////////////////////////////////////////////////////////////////////////////////////////// */}
      <div className="row d-flex justify-content-start" id='frame'>
        <div className="col-lg-6 ">
          <img src="./image/Port-top2.png" className="img-fluid" alt="top-img" />

        </div>
        <div className="col-lg-6">
          <div className="fs-2 text-primary">Information</div>
          <div className=" pen01">
            <div className='ball'></div>
          </div>
          <p className=" text-align">The main thrust of the Human Resources function is to foster individual development, career development and thereby organizational development. We believe measuring performance is the key to success. A Performance Management System driven by the company helps us focus on the important task and hit our targets. We interview experienced professionals and also freshers continuously across locations in order to seek top talent – to drive growth of our organization. We believe in developing a motivating work culture that encourages responsibility and to work in team. We focus on success of every individual by ensuring meaningful jobs that allow our employees to make a difference. “Our mission is to guide companies through the process of strategic change. We support strategic and tactical corporate responses to the challenges and opportunities posed by globalization, technology and competition”. We take forward our core values and respect for diversity with the hope to become an employer of choice.</p>
        </div>
      </div>
      {/* /////////////////////////////////////////////////////////////////////////////////////// */}

      <div className="row " style={{ backgroundColor: "#f0f8ff" }}>
        <div className="col-12 fs-1 d-flex justify-content-center">Company Recruitment Test  </div>
        <div className="col-12 d-flex justify-content-center mb-4"> <Link to="#" className="btn btn-primary mt-3" >Our Certificates</Link></div>
      </div>
      {/* ///////////////////////////////////////////////////////////////////////////// */}
      <div className='container'>
        <div className='row'>
          <div className='col-lg-7  mt-4 mb-5'>
            <h3 className='text-center mb-5'>We Are Hiring</h3>
            <div className="accordion accordion-flush" id="accordionFlushExample">
              <div className="accordion-item mt-3">
                <h2 className="accordion-header">
                  <button className="border border-0 bg-1 text-white collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                    <span className='p-2'>+</span>
                  </button>
                  <span className='fs-5 ps-2'>Mobile Application Developer</span>
                  <span className='urgent-hiring'> URGENT HIRING</span>
                </h2>
                <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
                </div>
              </div>
              <div className="accordion-item mt-3">
                <h2 className="accordion-header">
                  <button className=" border border-0 bg-1 text-white collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                  <span className='p-2'>+</span>
                  </button>
                  <span className='fs-5 ps-2'>Graphic Designer</span>
                  <span className='urgent-hiring'> URGENT HIRING</span>
                </h2>
                <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
                </div>
              </div>
              <div className="accordion-item mt-3">
                <h2 className="accordion-header">
                  <button className=" border border-0 bg-1 text-white collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                  <span className='p-2'>+</span>
                  </button>
                  <span className='fs-5 ps-2'>Node JS Developer</span>
                  <span className='urgent-hiring'> URGENT HIRING</span>
                </h2>
                <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                </div>
              </div>
              <div className="accordion-item mt-3">
                <h2 className="accordion-header">
                  <button className=" border border-0 bg-1 text-white collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFoue" aria-expanded="false" aria-controls="flush-collapseFoue">
                  <span className='p-2'>+</span>
                  </button>
                  <span className='fs-5 ps-2'>React JS Developer</span>
                  <span className='urgent-hiring'> URGENT HIRING</span>
                </h2>
                <div id="flush-collapseFoue" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                </div>
              </div>
              <div className="accordion-item mt-3">
                <h2 className="accordion-header">
                  <button className=" border border-0 bg-1 text-white collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                  <span className='p-2'>+</span>
                  </button>
                  <span className='fs-5 ps-2'>Mobile Application Developer</span>
                  <span className='urgent-hiring'> URGENT HIRING</span>
                </h2>
                <div id="flush-collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                </div>
              </div>
              <div className="accordion-item mt-3">
                <h2 className="accordion-header">
                  <button className=" border border-0 bg-1 text-white collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseSix">
                  <span className='p-2'>+</span>
                  </button>
                  <span className='fs-5 ps-2'>Business Development Executive</span>
                  <span className='urgent-hiring'> URGENT HIRING</span>
                </h2>
                <div id="flush-collapseSix" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                </div>
              </div>
              <div className="accordion-item mt-3">
                <h2 className="accordion-header">
                  <button className=" border border-0 bg-1 text-white collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSeven" aria-expanded="false" aria-controls="flush-collapseSeven">
                  <span className='p-2'>+</span>
                  </button>
                  <span className='fs-5 ps-2'>Flutter Developer</span>
                  <span className='urgent-hiring'> URGENT HIRING</span>
                </h2>
                <div id="flush-collapseSeven" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                </div>
              </div>
              <div className="accordion-item mt-3">
                <h2 className="accordion-header">
                  <button className=" border border-0 bg-1 text-white collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseEight" aria-expanded="false" aria-controls="flush-collapseEight">
                  <span className='p-2'>+</span>
                  </button>
                  <span className='fs-5 ps-2'>Project Manager</span>
                  <span className='urgent-hiring'> URGENT HIRING</span>
                </h2>
                <div id="flush-collapseEight" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-lg-5'>
            <h3 className='text-center mt-4 mb-5'>Apply Here</h3>
            <div >
              <Hiring/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Career
