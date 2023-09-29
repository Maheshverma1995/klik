import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
const ContrySlider = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 1000, 
        autoplay: true, 
        autoplaySpeed: 3000,
        slidesToShow: 6, 
        slidesToScroll: 2, 
        
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 3,
            },
          },
        ],
      };
  return (
    <div>
      <div className="container">
      <div className='row  '>
        <Slider {...settings}>
        <img src="./Image/australia.webp" class="rounded-circle w-25" alt="..."/>
        <img src="./Image/cameroon.webp" class="rounded-circle w-25" alt="..."/>
        <img src="./Image/dubai.webp" class="rounded-circle w-25" alt="..."/>
        <img src="./Image/france.webp" class="rounded-circle w-25" alt="..."/>
        <img src="./Image/rwanda.webp" class="rounded-circle w-25" alt="..."/>
        <img src="./Image/uk.webp" class="rounded-circle w-25" alt="..."/>
        <img src="./Image/usa.webp" class="rounded-circle w-25" alt="..."/>
        <img src="./Image/australia.webp" class="rounded-circle w-25" alt="..."/>
        <img src="./Image/cameroon.webp" class="rounded-circle w-25" alt="..."/>
        <img src="./Image/dubai.webp" class="rounded-circle w-25" alt="..."/>
        <img src="./Image/france.webp" class="rounded-circle w-25" alt="..."/>
        <img src="./Image/rwanda.webp" class="rounded-circle w-25" alt="..."/>
        <img src="./Image/uk.webp" class="rounded-circle w-25" alt="..."/>
        <img src="./Image/usa.webp" class="rounded-circle w-25" alt="..."/>
        </Slider>
      </div>
    </div>
    </div>
  )
}

export default ContrySlider
