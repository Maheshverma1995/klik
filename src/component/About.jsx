import React from 'react'
import './Portfolio.css'
import { Link } from 'react-router-dom'
import Coustumer from './Coustumer'



const About = () => {
  return (
    <div>
      <img src="./Image/about-us-baner.webp" className="img-fluid" alt="top-img" />
      <div className="container-fluid">
        <div className="row">
          <div className="d-flex upper-strip justify-content-Start">
            <Link className='border mx-1 px-2 text-decoration-none fs-4' href="">Home</Link>
            <Link className='border mx-1 px-2 text-decoration-none fs-4' href="">Services</Link>
            <Link className='border mx-1 px-2 text-decoration-none fs-4' href="">Portfolio</Link>
          </div>
        </div>
      </div>
      {/* /////////////////////////////////sec-row-End///////////////////////////////////////////////// */}
      <div className="row mt-5 d-flex justify-content-start" id='frame'>
        <div className="col-lg-6 ">
          <img src="./Image/Port-top2.png" className="img-fluid" alt="top-img" />

        </div>
        <div className="col-lg-6">
          <div className="fs-2 text-primary">Engaging New Audiences Through Smart Approach</div>
          <div className=" pen01">
            <div className='ball'></div>
          </div>
          <p className=" text-align">Klik Technologies is an established software and application development company with advantageous and proven accomplishments engaged in catering Mobile Apps Development, CMS Development, Web Development, IT Outsourcing solutions & Digital marketing Services to globally. We are the best software development service provider in India. We have successfully conceptualized, developed and launched many web portals across the diverse industries. We are continuously investing in the latest technologies, processes, and technical nerds to help our customers to achieve their business goals and stay ahead from competitors. With finite resources and infinite expertise in Agile methodology that ensures the great fusion of a high level of customer satisfaction and cost-effective services.</p>
          <Link to="#" className="btn btn-primary mt-3" >Our Certificates</Link>

        </div>
      </div>
      {/* /////////////////////////////////3rd-row-End///////////////////////////////////////////////// */}
      <div className='container mt-5 mb-5'>
        <div className='row mt-5'>
          <div className='col-lg-4 mt-3'>
            <div className="card" style={{ height: '400px' }}>
              <img src="./Image/visiion.webp" style={{ width: '200px' }} className="card-img-top mt-3 p-5" alt="..." />
              <h5 className="card-header w-100 text-center bg-1 text-white fs-3">Our Vision</h5>
              <div className="card-body">
                <p className="card-text fs-6 mb-5">Klik Plus is one of the protuberant software development companies that transform other businesses by innovatively connecting dots from design to development. It differentiates you from the market and provides healthier engagement with clienteles & partners.</p>
              </div>
            </div>
          </div>
          <div className='col-lg-4 mt-3'>
            <div className="card" style={{ height: '400px' }}>
              <img src="./Image/mission.webp" style={{ width: '200px' }} className="card-img-top mt-3 p-5" alt="..." />
              <h5 className="card-header w-100 text-center bg-1 text-white fs-3">Our Mission</h5>
              <div className="card-body">
                <p className="card-text fs-6 mb-5 mt-4">Our mission is to augment business growth of our clients with creative design & Development to deliver their idea with high quality solutions which transform data into knowledge across the globe.</p>
              </div>
            </div>
          </div>
          <div className='col-lg-4 mt-3'>
            <div className="card" style={{ height: '400px' }}>
              <img src="./Image/value-2.webp" style={{ width: '200px' }} className="card-img-top mt-3 p-5" alt="..." />
              <h5 className="card-header w-100 text-center bg-1 text-white fs-3">Our Value</h5>
              <div className="card-body">
                <p className="card-text fs-6 mb-5">Great builds come from organized teams that are responsible for themselves. We Focus on the client requirements and all else will follow. It’s best to do one thing really, really well. Integrity, Boldness and Honesty are our three pillars.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ////////////////////////////////////////////////////////////////////////////////////////// */}

      <div className="row ">
        <div className="col-12 fs-2 text-center text-primary">Our Products</div>
        <div className=" pen">
          <div className='ball'></div>
        </div>
      </div>

      <div className="row d-flex justify-content-start" id='frame'>

        <div className="col-md-6">
          <div className="fs-2 text-primary mt-5">The Launch Year</div>
          <p className="col-12 text-align mt-3">Klik Technologies is an established software and application development company with advantageous and proven accomplishments engaged in catering Mobile Apps Development, CMS Development, Web Development, IT Outsourcing solutions </p>

        </div>
        <div className="col-md-6 text-center ">
          <img src="./Image/Services-Mobile-Banner.webp" className="img-fluid w-75 p-3" alt="top-img" />

        </div>
      </div>

      {/* ////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      <div className="row">
        <div className="col-12 fs-2 text-center text-primary">Application Development Solutions</div>
        <div className=" pen">
          <div className='ball'></div>
        </div>
      </div>
      {/* //////////////////////////////////////////////////////////////////////////////////////////////////// */}
      <div className="row d-flex justify-content-center" id='frame' >
        <div className="col-sm-6 col-md-4 mb-3">
          <div className="card border-0" >
            <img src="./Image/Media-Streaming.svg" className="card-img-top p-2 image-fluid" style={{ height: "150px" }} alt="Rashmika" />
            <div className="card-body">
              <h5 className="card-title text-center ">Media Streaming</h5>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-4 mb-3">
          <div className="card border-0" >
            <img src="./Image/Digital-Content-Distribution.svg" className="card-img-top p-2 image-fluid" style={{ height: "150px" }} alt="Rashmika" />
            <dDigital Content Distributionme="card-body">
              <h5 className="card-title text-center ">Digital Content Distribution</h5>
            </dDigital>
          </div>
        </div>
        <div className="col-sm-6 col-md-4 mb-3">
          <div className="card border-0" >
            <img src="./Image/mCommerce.svg" className="card-img-top p-2 image-fluid" style={{ height: "150px" }} alt="Rashmika" />
            <div className="card-body">
              <h5 className="card-title text-center ">mCommerce</h5>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-4 mb-3">
          <div className="card border-0" >
            <img src="./Image/Mobile-Healthcare-1.svg" className="card-img-top p-2 image-fluid" style={{ height: "150px" }} alt="Rashmika" />
            <div className="card-body">
              <h5 className="card-title text-center ">Mobile Healthcare</h5>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-4 mb-3">
          <div className="card border-0" >
            <img src="./Image/Workflow.svg" className="card-img-top p-2 image-fluid" style={{ height: "150px" }} alt="Rashmika" />
            <div className="card-body">
              <h5 className="card-title text-center ">Workflow & Asset Management</h5>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-4 mb-3">
          <div className="card border-0" >
            <img src="./Image/game.svg" className="card-img-top p-2 image-fluid" style={{ height: "150px" }} alt="Rashmika" />
            <div className="card-body">
              <h5 className="card-title text-center ">Mobile Games</h5>
            </div>
          </div>
        </div>

        <div className="col-sm-6 col-md-4 mb-3">
          <div className="card border-0" >
            <img src="./Image/Fleet-Management.svg" className="card-img-top p-2 image-fluid" style={{ height: "150px" }} alt="Rashmika" />
            <div className="card-body">
              <h5 className="card-title text-center ">Fleet-Management</h5>
            </div>
          </div>
        </div>


      </div>

      {/* ////////////////////////////////////////////////////////////////////////////////////// */}

      <div className="row d-flex justify-content-center" >
        <div className="col-sm-6 col-md-3 mb-3">
          <div className="card border-0 " >
            <img src="./Image/about-2st.webp" className="img-responsive card-img-top p-2 image-fluid" style={{ height: "400px" }} alt="Rashmika" />
          </div>
        </div>
        <div className="col-sm-6 col-md-3 mb-3">
          <div className="card border-0" >
            <img src="./Image/b.webp" className="card-img-top img-responsive p-2 image-fluid" style={{ height: "400px" }} alt="Rashmika" />
          </div>
        </div>
        <div className="col-sm-6 col-md-3 mb-3">
          <div className="card border-0" >
            <img src="./Image/trsm.webp" className="card-img-top img-responsive p-2 image-fluid" style={{ height: "400px" }} alt="Rashmika" />
          </div>
        </div>
        <div className="col-sm-6 col-md-3 mb-3">
          <div className="card border-0" >
            <img src="./Image/f.webp" className="card-img-top img-responsive p-2 image-fluid" style={{ height: "400px" }} alt="Rashmika" />
          </div>
        </div>
        <div className="col-sm-6 col-md-3 mb-3">
          <div className="card border-0" >
            <img src="./Image/c.webp" className="card-img-top img-responsive p-2 image-fluid" style={{ height: "400px" }} alt="Rashmika" />
          </div>
        </div>
        <div className="col-sm-6 col-md-3 mb-3">
          <div className="card border-0" >
            <img src="./Image/g.webp" className="card-img-top img-responsive p-2 image-fluid" style={{ height: "400px" }} alt="Rashmika" />
          </div>
        </div>
        <div className="col-sm-6 col-md-3 mb-3">
          <div className="card border-0" >
            <img src="./Image/7.webp" className="card-img-top img-responsive p-2 image-fluid" style={{ height: "400px" }} alt="Rashmika" />
          </div>
        </div>
        <div className="col-sm-6 col-md-3 mb-3">
          <div className="card border-0" >
            <img src="./Image/8.webp" className="card-img-top img-responsive p-2 image-fluid" style={{ height: "400px" }} alt="Rashmika" />
          </div>
        </div>
      </div>

      {/* /////////////////////////////////////////////////////////////////////////////////////////// */}
      <div className="row">
        <div className="col-12 fs-2 text-center text-primary">Our Director Message</div>
        <div className=" pen">
          <div className='ball'></div>
        </div>
      </div>

      {/* ////////////////////////////////////////////carousel//////////////////////////////////////////////// */}
      {/* <div className="row mt-5 mb-3 ">
        <div id="carouselExampleIndicators" className="carousel  slide border-0" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="1000">
              <div className="card mb-3 d-block box m-auto" >
                <div className="row g-0" style={{ height: '500px' }}>
                  <div className="col-md-4">
                    <img src="./Image/1.webp" className="img-fluid" alt="..." />
                  </div>
                  <div className="col-md-8">

                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                      Klik technologies is a dynamic and fast-growing, performance- based agency. Our primary goal as a team is to provide the best value possible to every organizationwe work with and for us that begins by providing.

                    </p>
                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>

                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="card mb-3 d-block box m-auto" >
                <div className="row g-0" style={{ height: '500px' }}>
                  <div className="col-md-4">
                    <img src="./Image/1.webp" className="img-fluid" alt="..." />
                  </div>
                  <div className="col-md-8">

                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                      Klik technologies is a dynamic and fast-growing, performance- based agency. Our primary goal as a team is to provide the best value possible to every organizationwe work with and for us that begins by providing.

                    </p>
                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>

                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="card mb-3 d-block box m-auto" >
                <div className="row g-0" style={{ height: '500px' }}>
                  <div className="col-md-4">
                    <img src="./Image/4.webp" className="img-fluid" alt="..." />
                  </div>
                  <div className="col-md-8">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">It is our endeavor to become of the top IT software solution while still remaining grounded in moral values. We are moving ahead with innovative ideas, strategies and technologies and have achieved. important milestone in our journey.</p>
                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>

                  </div>
                </div>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div> */}
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <Coustumer/>
          </div>
        </div>
      </div>

      {/* ////////////////////////////////////Carousel-End///////////////////////////////////////// */}
      <div className="row">
        <div className="col-12 fs-2 text-center text-primary">Our Awesome Team</div>
        <div className=" pen">
          <div className='ball'></div>
        </div>
      </div>
      <div className="col-12  text-center mb-5">We believe in bringing together the professionals having vast experiences, different Skill Sets and passion for providing your business with the best experience.</div>

    <div className='container mt-3 mb-4'>
    <div className="row d-flex justify-content-center">
        <div className='col-lg-6 mt-3' style={{width:'400px'}}>
          <div className="card bg-2">
          <img src="./Image/ashish.webp" className="rounded-circle w-25 mt-3" alt="..."/>
            <div className="card-header bg-2 w-75 mt-3 text-white">
              <h4 className='text-center fs-3'>Ashish Kumar</h4>
              <h6 className='text-center'>Chief Operating Officer (COO)</h6>
            </div>
            <div className="card-body">
              <p className="card-text  text-white fs-5 mb-4 mt-2">It is great to work for a company that encourages new ideas and talents. At Klik, It is very satisfying that we are helping</p>
            </div>
          </div>
        </div>
        <div className='col-lg-6 mt-3' style={{width:'400px'}}>
          <div className="card bg-2">
          <img src="./Image/ashish.webp" className="rounded-circle w-25 mt-3" alt="..."/>
            <div className="card-header bg-2 w-75 mt-3 text-white">
              <h4 className='text-center fs-3'>Sandeep Gupta</h4>
              <h6 className='text-center'>BPM & Project Manager</h6>
            </div>
            <div className="card-body">
              <p className="card-text text-white fs-5 mb-4 mt-2">As a Software development company, we are responsible for driving our business.We serve our customers, quality, reliability,</p>
            </div>
          </div>
        </div>
      </div>
    </div>

      {/* ///////////////////////////////////Our Partners////////////////////////////////////////////////// */}
      <div className="row">
        <div className="col-12 fs-2 text-center text-primary">Our Partners</div>
        <div className=" pen">
          <div className='ball'></div>
        </div>
      </div>

      <div className="row ms-1 me-1">
        <div className="col-sm-6 col-md-3 mb-3">
          <div className="card  border-0" >
            <img src="./image/ernest.webp" className="team-image height03 m-auto rounded-circle  img-fluid card-img-top" alt="..." />
            <div className="card-body team-content">
              <h5 className="card-title text-center text-light ps-3 pe-3">Ernest M. Roberts</h5>
              <h5 className="card-title text-center text-light ps-3 pe-3">Director (UA Washington)</h5>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-3 mb-3">
          <div className="card border-0" >
            <img src="./image/fxmallen.webp" className="team-image height03 m-auto rounded-circle  img-fluid card-img-top" alt="..." />
            <div className="card-body team-content">
              <h5 className="card-title text-center text-light ps-3 pe-3">Fx Mallen</h5>
              <h5 className="card-title text-center text-light ps-3 pe-3">Director (France)</h5>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-3 mb-3">
          <div className="card border-0 " >
            <img src="./image/afanwi.webp" className="team-image height03 m-auto rounded-circle  img-fluid card-img-top" alt="..." />
            <div className="card-body team-content">
              <h5 className="card-title text-center text-light ps-3 pe-3">Afnawi Neba</h5>
              <h5 className="card-title text-center text-light ps-3 pe-3">Director (Cameroon)</h5>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-3 mb-3">
          <div className="card border-0" >
            <img src="./image/smallwood.webp" className="team-image height03 m-auto rounded-circle  img-fluid card-img-top" alt="..." />
            <div className="card-body team-content">
              <h5 className="card-title text-center text-light ps-3 pe-3">Derreck Landon</h5>
              <h5 className="card-title text-center text-light ps-3 pe-3">Director (USA)</h5>
            </div>
          </div>
        </div>
      </div>

      {/* //////////////////////////Our Associate Channel Partners/////////////////////// */}
      <div className="row ms-1 me-1">
        <div className="col-12 fs-2 text-center text-primary">Our Associate Channel Partners</div>
        <div className=" pen">
          <div className='ball'></div>
        </div>
      </div>

      <div className="row">
        <div className="col-sm-6 col-md-3 mb-3">
          <div className="card  border-0" >
            <img src="./image/lawal.webp" className="team-image height03 m-auto rounded-circle  img-fluid card-img-top" alt="..." />
            <div className="card-body team-content">
              <h5 className="card-title text-center text-light ps-3 pe-3">Lawal Rahman Artbeat</h5>
              <h5 className="card-title text-center text-light ps-3 pe-3">Nigeria</h5>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-3 mb-3">
          <div className="card border-0" >
            <img src="./image/husan.webp" className="team-image height03 m-auto rounded-circle  img-fluid card-img-top" alt="..." />
            <div className="card-body team-content">
              <h5 className="card-title text-center text-light ps-3 pe-3">Hassan Rucyemangabo</h5>
              <h5 className="card-title text-center text-light ps-3 pe-3">Rwanda</h5>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-3 mb-3">
          <div className="card border-0 " >
            <img src="./Image/johann.webp" className="team-image height03 m-auto rounded-circle  img-fluid card-img-top" alt="..." />
            <div className="card-body team-content">
              <h5 className="card-title text-center text-light ps-3 pe-3">Johann Bain</h5>
              <h5 className="card-title text-center text-light ps-3 pe-3">Johann Bain</h5>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-3 mb-3">
          <div className="card border-0" >
            <img src="./Image/arun.webp" className="team-image height03 m-auto rounded-circle  img-fluid card-img-top" alt="..." />
            <div className="card-body team-content">
              <h5 className="card-title text-center text-light ps-3 pe-3">Arun Luthra</h5>
              <h5 className="card-title text-center text-light ps-3 pe-3">Chandigarh</h5>
            </div>
          </div>
        </div>
      </div>
      {/* //////////////////////////////////Klik Group/////////////////////////////////////// */}
      <div className="row">
        <div className="col-12 fs-2 text-center text-primary">Klik Group</div>
        <div className=" pen">
          <div className='ball'></div>
        </div>
      </div>
      <div className="row d-flex justify-content-center">
        <div className='last-w img-fluid'><img src="./Image/Klik-Logo-.webp" alt="" /> </div>
        <div className='last-w img-fluid'><img src="./Image/slg.webp" alt="" /> </div>
        <div className='last-w img-fluid'><img src="./Image/golde.webp" alt="" /> </div>
        <div className='last-w img-fluid'><img src="./Image/bubunu.webp" alt="" /> </div>
      </div>


      {/* ///////////////////////////////A Unit Of Klik Technologies Pvt Ltd.///////////////////////////// */}
      <div className="row">
        <div className="col-12 fs-2 text-center text-primary">A Unit Of Klik Technologies Pvt Ltd.</div>
        <div className=" pen">
          <div className='ball'></div>
        </div>
      </div>
      <div className="row mb-4 d-flex justify-content-center">
        <div className='last-w img-fluid'><img src="./Image/golde.webp" alt="" /> </div>
        <div className='last-w img-fluid'><img src="./Image/golde.webp" alt="" /> </div>
        <div className='last-w img-fluid'><img src="./Image/golde.webp" alt="" /> </div>
        <div className='last-w img-fluid'><img src="./Image/golde.webp" alt="" /> </div>
        <div className='last-w img-fluid'><img src="./Image/golde.webp" alt="" /> </div>
      </div>


      {/* //////////////////////////////////////////////////////////// */}





    </div>

  )
}

export default About
