import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const CardSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000, // Slide transition speed in milliseconds
    autoplay: true, // Enable auto play
    autoplaySpeed: 3000, // Auto play speed in milliseconds (3 seconds)
    slidesToShow: 4, // Number of slides to show at once
    slidesToScroll: 1, // Number of slides to scroll at once
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
     
    ],
  };

  return (
    <div className="container">
      <div className='row mt-2 mb-3'>
        <Slider {...settings}>
          <div className="card bg-1 border border-5" id='card-slider'>
            <div class="d-flex justify-content-center"> <img style={{ height: '100px', width: '100px', display: 'flex', justifyContent: 'center' }} src="./Image/1.webp" className="card-img-top p-2" alt="..." /></div>
            <div className="card-body">
              <h5 className="card-title text-center text-white fs-6 text-uppercase">Loyalty Management System</h5>
              <p className="card-text text-dark text-white mt-2 " style={{fontSize:'15px'}}>
                Our Top Rated &amp; Robust System designed to Boost Repeat Sales &amp; Improving Customer Interaction. Create, Manage &amp; Ensure your Bonding with Existing customers with personalized Loyalty Program.
              </p>

            </div>
          </div>
          <div className="card bg-1 border border-5" id='card-slider'>
            <div class="d-flex justify-content-center"> <img style={{ height: '100px', width: '100px', display: 'flex', justifyContent: 'center' }} src="./Image/1.webp" className="card-img-top p-2" alt="..." /></div>
            <div className="card-body">
              <h5 className="card-title text-center text-white fs-6 text-uppercase">E-Commrece Services</h5>
              <p className="card-text text-dark text-white mt-2 " style={{fontSize:'15px'}}>
                We develop best customized E Commerce solutions to simply user journeys, increase customer/seller outreach, and deliver exceptional experiences with our proven time-cost customized approaches.
              </p>

            </div>
          </div>
          <div className="card bg-1 border border-5" id='card-slider'>
            <div class="d-flex justify-content-center"> <img style={{ height: '100px', width: '100px', display: 'flex', justifyContent: 'center' }} src="./Image/1.webp" className="card-img-top p-2" alt="..." /></div>
            <div className="card-body">
              <h5 className="card-title text-center text-white fs-6 text-uppercase">On-demand Service Apps</h5>
              <p className="card-text text-dark text-white mt-2 " style={{fontSize:'15px'}}>
                Our fully customizable On-demand service apps serves as a mediator between a business and a customer,  allowing them to find each other in the first place and engage in a customer-provider relationship on mutually satisfactory terms.
              </p>

            </div>
          </div>
          <div className="card bg-1 border border-5" id='card-slider'>
            <div class="d-flex justify-content-center"> <img style={{ height: '100px', width: '100px', display: 'flex', justifyContent: 'center' }} src="./Image/1.webp" className="card-img-top p-2" alt="..." /></div>
            <div className="card-body">
              <h5 className="card-title text-center text-white fs-6 text-uppercase">OTT Platform</h5>
              <p className="card-text text-dark text-white mt-2 " style={{fontSize:'15px'}}>
                Enjoy our featured &amp; scalable OTT platform with superior user experience and user interface. Solution offers unparalleled flexibility, affordable cost &amp; an end-to-end platform for sharing, recording &amp; playback your video content.
              </p>

            </div>
          </div>
          <div className="card bg-1 border border-5" id='card-slider'>
            <div class="d-flex justify-content-center"> <img style={{ height: '100px', width: '100px', display: 'flex', justifyContent: 'center' }} src="./Image/1.webp" className="card-img-top p-2" alt="..." /></div>
            <div className="card-body">
              <h5 className="card-title text-center text-white fs-6 text-uppercase">Hospital Management System</h5>
              <p className="card-text text-dark text-white mt-2 " style={{fontSize:'15px'}}>
                A Complete Web Based Solutions that covers the management of all the domains of Medical Institutions and can be easily customizable as per the need of any hospital or Health Care Institution.
              </p>

            </div>
          </div>
          <div className="card bg-1 border border-5" id='card-slider'>
            <div class="d-flex justify-content-center"> <img style={{ height: '100px', width: '100px', display: 'flex', justifyContent: 'center' }} src="./Image/1.webp" className="card-img-top p-2" alt="..." /></div>
            <div className="card-body">
              <h5 className="card-title text-center text-white fs-6 text-uppercase">School Management System</h5>
              <p className="card-text text-dark text-white mt-2 " style={{fontSize:'15px'}}>
                Meet our School Management ERP to Automate, Track &amp; Manage all the aspects of Your Educational Institution and Ensure Quick &amp; Accurate Results.
              </p>

            </div>
          </div>
          <div className="card bg-1 border border-5" id='card-slider'>
            <div class="d-flex justify-content-center"> <img style={{ height: '100px', width: '100px', display: 'flex', justifyContent: 'center' }} src="./Image/1.webp" className="card-img-top p-2" alt="..." /></div>
            <div className="card-body">
              <h5 className="card-title text-center text-white fs-6 text-uppercase">Loyalty Management System</h5>
              <p className="card-text text-dark text-white mt-2 " style={{fontSize:'15px'}}>
                Our Top Rated &amp; Robust System designed to Boost Repeat Sales &amp; Improving Customer Interaction. Create, Manage &amp; Ensure your Bonding with Existing customers with personalized Loyalty Program.
              </p>

            </div>
          </div>
          <div className="card bg-1 border border-5" id='card-slider'>
            <div class="d-flex justify-content-center"> <img style={{ height: '100px', width: '100px', display: 'flex', justifyContent: 'center' }} src="./Image/1.webp" className="card-img-top p-2" alt="..." /></div>
            <div className="card-body">
              <h5 className="card-title text-center text-white fs-6 text-uppercase">E-Commrece Services</h5>
              <p className="card-text text-dark text-white mt-2 " style={{fontSize:'15px'}}>
                We develop best customized E Commerce solutions to simply user journeys, increase customer/seller outreach, and deliver exceptional experiences with our proven time-cost customized approaches.
              </p>

            </div>
          </div>
          <div className="card bg-1 border border-5" id='card-slider'>
            <div class="d-flex justify-content-center"> <img style={{ height: '100px', width: '100px', display: 'flex', justifyContent: 'center' }} src="./Image/1.webp" className="card-img-top p-2" alt="..." /></div>
            <div className="card-body">
              <h5 className="card-title text-center text-white fs-6 text-uppercase">On-demand Service Apps</h5>
              <p className="card-text text-dark text-white mt-2 " style={{fontSize:'15px'}}>
                Our fully customizable On-demand service apps serves as a mediator between a business and a customer,  allowing them to find each other in the first place and engage in a customer-provider relationship on mutually satisfactory terms.
              </p>

            </div>
          </div>
          <div className="card bg-1 border border-5" id='card-slider'>
            <div class="d-flex justify-content-center"> <img style={{ height: '100px', width: '100px', display: 'flex', justifyContent: 'center' }} src="./Image/1.webp" className="card-img-top p-2" alt="..." /></div>
            <div className="card-body">
              <h5 className="card-title text-center text-white fs-6 text-uppercase">OTT Platform</h5>
              <p className="card-text text-dark text-white mt-2 " style={{fontSize:'15px'}}>
                Enjoy our featured &amp; scalable OTT platform with superior user experience and user interface. Solution offers unparalleled flexibility, affordable cost &amp; an end-to-end platform for sharing, recording &amp; playback your video content.
              </p>

            </div>
          </div>
          <div className="card bg-1 border border-5" id='card-slider'>
            <div class="d-flex justify-content-center"> <img style={{ height: '100px', width: '100px', display: 'flex', justifyContent: 'center' }} src="./Image/1.webp" className="card-img-top p-2" alt="..." /></div>
            <div className="card-body">
              <h5 className="card-title text-center text-white fs-6 text-uppercase">Hospital Management System</h5>
              <p className="card-text text-dark text-white mt-2 " style={{fontSize:'15px'}}>
                A Complete Web Based Solutions that covers the management of all the domains of Medical Institutions and can be easily customizable as per the need of any hospital or Health Care Institution.
              </p>

            </div>
          </div>
          <div className="card bg-1 border border-5" id='card-slider'>
            <div class="d-flex justify-content-center"> <img style={{ height: '100px', width: '100px', display: 'flex', justifyContent: 'center' }} src="./Image/1.webp" className="card-img-top p-2" alt="..." /></div>
            <div className="card-body">
              <h5 className="card-title text-center text-white fs-6 text-uppercase">School Management System</h5>
              <p className="card-text text-dark text-white mt-2 " style={{fontSize:'15px'}}>
                Meet our School Management ERP to Automate, Track &amp; Manage all the aspects of Your Educational Institution and Ensure Quick &amp; Accurate Results.
              </p>

            </div>
          </div>
          <div className="card bg-1 border border-5" id='card-slider'>
            <div class="d-flex justify-content-center"> <img style={{ height: '100px', width: '100px', display: 'flex', justifyContent: 'center' }} src="./Image/1.webp" className="card-img-top p-2" alt="..." /></div>
            <div className="card-body">
              <h5 className="card-title text-center text-white fs-6 text-uppercase">Loyalty Management System</h5>
              <p className="card-text text-dark text-white mt-2 " style={{fontSize:'15px'}}>
                Our Top Rated &amp; Robust System designed to Boost Repeat Sales &amp; Improving Customer Interaction. Create, Manage &amp; Ensure your Bonding with Existing customers with personalized Loyalty Program.
              </p>

            </div>
          </div>

        </Slider>
      </div>
    </div>
  );
};

export default CardSlider;
