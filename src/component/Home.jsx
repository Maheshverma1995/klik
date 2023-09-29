import React from 'react'
import Slider from './Slider'
import '../component/Portfolio.css'
import CardSlider from './Card';

const Home = () => {
  return (
    <div >
      <Slider />
      <div className='container-fluid contact-row-1'>
        <div className='container contact-row-1'>
          <div className='row mt-3 mb-2'>
            <h1 className='text-center fs-3 mt-5 mb-5'>Klil Plus Technologies – Software, Web & Mobile app Development Company</h1>
            <div className='col-lg-6'>
              <p className='p-2'>
                Klil Plus is global software service and website design company in Noida, India, focused on helping you make an impact on business and drive value through your IT investment.

                Our expertise and commitment in delivering complex IT projects is the reason why we are a trusted service provider across the globe in the software product development and enterprise business segment. It’s a matter of great pride to us that many of these relationships have continued over decades. In India, we are one of the largest software systems integrators with an array of front-end technology deployment services to help client maximize the effectiveness and productivity of their investment in software.
              </p>
              <button type="button" className="btn btn-primary">Read-more</button>
            </div>
            <div className='col-lg-6'>
              <img className='img-fluid mt-3 p-3' src="./Image/Port-top2.png" alt="" />
            </div>
          </div>
          <div className='container-fluid contact-row-1 contact-row-1'>
            <div className='row mt-3 mb-2'>

              <div className='col-lg-4'>
                <ul>
                  <li className='Our-Services'>Cutting Edge and Functional Websites</li>
                  <li className='Our-Services'>Intelligent Marketing Strategies</li>
                  <li className='Our-Services'>Experienced, Skilled Designers & Programmers</li>
                  <li className='Our-Services'>Business Intelligence</li>
                </ul>
              </div>
              <div className='col-lg-4'>
                <ul>
                  <li className='Our-Services'>Intelligent and Attractive Applications</li>
                  <li className='Our-Services'>
                    24X7 Customer Support</li>
                  <li className='Our-Services'>Game Development</li>
                  <li className='Our-Services'>Digital Marketing</li>
                </ul>
              </div>
              <div className='col-lg-4'>
                <ul>
                  <li className='Our-Services'>
                    Far Reaching Marketing Campaigns</li>
                  <li className='Our-Services'>Professional Approach & Prompt Communication</li>
                  <li className='Our-Services'>Block Chain Development</li>
                  <li className='Our-Services'>Cutting Edge and Functional Websites</li>
                </ul>
              </div>
            </div>
          </div>
          <div className='row mt-3 mb-2'>
            <h2 className='text-center mt-4 '>Our Featured Solutions
              <div className=" pen">
                <div className='ball'></div>
              </div>
            </h2>
            <p>Our skilled team, along with our worldwide network, permit us to offer the help and support you.Our featured Solutions are intended for adding more value to businesses, gear up the productivity and attain the new business heights.</p>
          </div>
          <div className='row'>
            <CardSlider/>
          </div>
          <div className='row mt-3 mb-2'>
            <div className='col-lg-6'>
              <img className='img-fluid mt-3 p-3' src="./Image/Port-top2.png" alt="" />
            </div>
            <div className='col-lg-6'>
              <h1 className='text-center fs-5 mt-4 mb-4'>Engaging New Audiences Through Smart Approach</h1>
              <div className=" pen01">
                <div className='ball '></div>
              </div>
              <p className='mt-4 p-2'>We are a leading software development company in india that offers unique, efficient and affordable web-based systems & mobile apps which helps enterprises to automate their processes, increase productivity and facilitate workflow management. Klik Plus is dedicated for meeting Client’s expectations through our team of highly-skilled developers, creative project managers and top-notch technologies.</p>
              <button type="button" className="btn btn-primary">Discover more</button>
            </div>

          </div>
        </div>
        <div className='container-fluid contact-row-1 contact-row-1'>
          <div className='container contact-row-1'>
            <div className='row mt-3 mb-2'>
              <div className='col-lg-6'>
                <h1>Our Services</h1>
                <div className=" pen01">
                  <div className='ball'></div>
                </div>
                <p>Klik Plus offers wide range of services to assist large organisations or associations to work smarter and make them arrive at their objectives. Explore the professional and expert services we offer.</p>
                <div className='row mt-3 mb-2'>
                  <div className='col-lg-6'>
                    <ul>
                      <li className='Our-Services'>Web Development </li>
                      <li className='Our-Services'>Mobile App Development</li>
                      <li className='Our-Services'>CMS DevelopmentERP</li>
                      <li className='Our-Services'>Digital Marketing</li>
                      <li className='Our-Services'>Machine Learning</li>
                    </ul>
                  </div>
                  <div className='col-lg-6'>
                    <ul>
                      <li className='Our-Services'>.Net Technology </li>
                      <li className='Our-Services'>Software Development</li>
                      <li className='Our-Services'>ERP</li>
                      <li className='Our-Services'>Internet Of Things (IOT)</li>
                      <li className='Our-Services'>IVR Services</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className='col-lg-6'>
                <img className='img-fluid mt-3 p-3' src="./Image/Port-top2.png" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className='container contact-row-1'>
          <div className='row mt-3 mb-2'>
            <div className='col-lg-6'>
              <img className='img-fluid mt-3 p-3' src="./Image/Port-top2.png" alt="" />
            </div>
            <div className='col-lg-6'>
              <h1 className='text-center'>Design & Development
              </h1>
              <div className=" pen01">
                <div className='ball'></div>
              </div>
              <p>Klik Plus Design & Development
                A design can improve with the contribution of a developer, and code can be better written with the assistance of a designer. With the years of experience, we are able to deliver the perfect web design and development solutions to you.</p>
              <div className='row mt-3 mb-2'>
                <div className='col-lg-6'>
                  <ul>
                    <li className='Our-Services'>Responsive Design </li>
                    <li className='Our-Services'>React Web Development</li>
                    <li className='Our-Services'>Android Apps Development</li>
                    <li className='Our-Services'>Laravel Web Development</li>

                  </ul>
                </div>
                <div className='col-lg-6'>
                  <ul>
                    <li className='Our-Services'>iOS Apps Development</li>
                    <li className='Our-Services'>UX/UI Design</li>
                    <li className='Our-Services'>CMS DevelopmentERP</li>
                    <li className='Our-Services'>.Net Web Development</li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </div>
        <div className='container-fluid contact-row-1'>
          <div className='container contact-row-1'>
            <h1 className='text-center mt-2 mb-4'>
              What Users Saying
              <div className=" pen">
                <div className='ball'></div>
              </div>
            </h1>

            <p className='text-center mb-2 mt-1'>We love what we do and we do what our clients love & work with great clients all over the world to create thoughtful and purposeful websites.</p>
            <div className='row mt-3 mb-2'>
              <div className="card mb-3">
                <div className="row g-0">
                  <div className="col-md-4">
                    <img src="./Image/client4.png" className="img-fluid mt-3 p-3 rounded-circle" alt="..." />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                      <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='row mt-3 mb-2'>

            </div>
          </div>
        </div>
        <div className='container'>
          <div className='row mb-5'>
            <h1 className='m-auto p-2 col-6'>We Always Try To Understand Users Expectation</h1>

            <p className='mt-4'>We help our clients to solve their hardest issues. We provide proficient ITES Development services according to your necessities in reasonable expen01se. Few facts which explore us most.</p>
          </div>
          <div className='row m-auto border rounded mt-3 mb-2 bg-white p-3' style={{ maxWidth: '500px' }}>
            <div className='col-sm-6 mt-2 mb-3'><h6>Have any question about us?</h6>
              <p>Don't hesitate to contact us</p>
            </div>
            <div className='col-sm-6 mt-4 mb-3 ps-5'> <button type="button" className="btn btn-primary">Contact US</button></div>
          </div>
        </div>
        <div className='container-fluid bg-1'>
          <div className='container'>
            <div className='row mt-3'>
              <h1 className='text-center text-white mt-2 mb-4'>Our Client</h1>
              <div className=" pen">
                <div className='ball'></div>
              </div>
              <div className='col-12'>
                <img className='img-fluid mt-3 mb-5' src="./Image/client1.png" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className='container contact-row-1'>
          <div className='row mt-3 mb-2'>
            {/* <h3>Our Certifications & Accreditation</h3> */}

            <div className='col-12'>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
