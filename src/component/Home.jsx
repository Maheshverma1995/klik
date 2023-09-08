import React from 'react'
import Slider from './Slider'
import { Col, Container, Image, Row } from 'react-bootstrap'
import AutoCardSlider from './AutoCardSlider';


const Home = () => {
    const data = [
        { title: 'Card 1', description: 'This is the first card' },
        { title: 'Card 2', description: 'This is the second card' },
        { title: 'Card 3', description: 'This is the third card' },
        { title: 'Card 1', description: 'This is the first card' },
        { title: 'Card 2', description: 'This is the second card' },
        { title: 'Card 3', description: 'This is the third card' },
        { title: 'Card 1', description: 'This is the first card' },
        { title: 'Card 2', description: 'This is the second card' },
        { title: 'Card 3', description: 'This is the third card' },
        { title: 'Card 1', description: 'This is the first card' },
        { title: 'Card 2', description: 'This is the second card' },
        { title: 'Card 3', description: 'This is the third card' },
        
      ];
  return (
    <div>
        <Slider/>
        <Container>
      <Row>
        <Col className='mt-5'><h3>Klil Plus Technologies – Software, Web & Mobile app Development Company</h3></Col>
      </Row>
      <Row>
        <Col md={6} >
            <p className='mb-5 mt-5'>Klik Plus is global software service and website design company in Noida, India, focused on helping you make an impact on business and drive value through your IT investment.</p>
            <p>Our expertise and commitment in delivering complex IT projects is the reason why we are a trusted service provider across the globe in the software product development and enterprise business segment. It’s a matter of great pride to us that many of these relationships have continued over decades. In India, we are one of the largest software systems integrators with an array of front-end technology deployment services to help client maximize the effectiveness and productivity of their investment in software.</p>
        </Col>
        <Col md={6} className='mb-5 mt-5' >
        <Image className='img-fluid' src="./Image/slider-1.png" rounded />
        </Col>
      </Row>
      <Row className='mt-5 mb-5'>
            <h5 className='mb-3' style={{fontSize:'30px'}}>Our Service Highlights</h5>
        <Col md={4}>
            <li className='Services-li'>
                <p>Cutting Edge and Functional Websites</p>
            </li>
            <li className='Services-li'>
                <p>Intelligent Marketing Strategies</p>
            </li>
            <li className='Services-li'>
                <p>Experienced, Skilled Designers & Programmers</p>
            </li>
            <li className='Services-li'>
                <p>Business Intelligence</p>
            </li>
        </Col>
        <Col md={4}>
            <li className='Services-li'>
                <p>Intelligent and Attractive Applications</p>
            </li>
            <li className='Services-li'>
                <p>24X7 Customer Support</p>
            </li>
            <li className='Services-li'>
                <p>Game Development</p>
            </li>
            <li className='Services-li'>
                <p>Digital Marketing</p>
            </li>
        </Col>
        <Col md={4}>
            <li className='Services-li'>
                <p>Far Reaching Marketing Campaigns</p>
            </li>
            <li className='Services-li'>
                <p>Professional Approach & Prompt Communication</p>
            </li>
            <li className='Services-li'>
                <p>Block Chain Development</p>
            </li>
            
        </Col>
      </Row>
      <Row className='mt-5 mb-5'>
        <h1>Our Featured Solutions</h1>
        <p>Our skilled team, along with our worldwide network, permit us to offer the help and support you.Our featured Solutions are intended for adding more value to businesses, gear up the productivity and attain the new business heights.</p>
        <Col>
        <div className="App">
      <AutoCardSlider data={data} />
    </div>
        </Col>
      </Row>
    </Container>
    </div>
  )
}

export default Home
