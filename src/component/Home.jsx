import React from 'react'
import Slider from './Slider'
import { Button, Col, Container, Image, Row } from 'react-bootstrap'
import Carousel from 'react-bootstrap/Carousel';

const Home = () => {
    return (
        <div>
            <Slider />
            <Container fluid>
                <Container>
                    <Row>
                        <Col className='mt-5'><h3>Klil Plus Technologies – Software, Web & Mobile app Development Company</h3></Col>
                    </Row>
                </Container>
                <Container>
                    <Row>
                        <Col md={6} >
                            <p className='mb-5 mt-5'>Klik Plus is global software service and website design company in Noida, India, focused on helping you make an impact on business and drive value through your IT investment.</p>
                            <p>Our expertise and commitment in delivering complex IT projects is the reason why we are a trusted service provider across the globe in the software product development and enterprise business segment. It’s a matter of great pride to us that many of these relationships have continued over decades. In India, we are one of the largest software systems integrators with an array of front-end technology deployment services to help client maximize the effectiveness and productivity of their investment in software.</p>
                        </Col>
                        <Col md={6} className='mb-5 mt-5' >
                            <Image className='img-fluid' src="./Image/slider-1.png" rounded />
                        </Col>
                    </Row>
                </Container>
                <Container>
                    <Row className='mt-5 mb-5'>
                        <h5 className='mb-3' style={{ fontSize: '30px' }}>Our Service Highlights</h5>
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
                </Container>
                <Container>
                    <Row className='mt-5 mb-5'>
                        <h1>Our Featured Solutions</h1>
                        <p>Our skilled team, along with our worldwide network, permit us to offer the help and support you.Our featured Solutions are intended for adding more value to businesses, gear up the productivity and attain the new business heights.</p>
                        <Row className='mt-5 mb-4'>
                            <Carousel >
                                <Carousel.Item>
                                    <Row>
                                        <Col><img
                                            className="d-block w-100"
                                            src="./Image/slider-3.png"
                                            alt="Third slide"
                                        /></Col>
                                        <Col><img
                                            className="d-block w-100"
                                            src="./Image/slider-3.png"
                                            alt="Third slide"
                                        /></Col>
                                        <Col><img
                                            className="d-block w-100"
                                            src="./Image/slider-3.png"
                                            alt="Third slide"
                                        /></Col>
                                    </Row>

                                </Carousel.Item>
                                <Carousel.Item>
                                    <Row>
                                        <Col> <img
                                            className="d-block w-100"
                                            src="./Image/slider-3.png"
                                            alt="Third slide"
                                        />
                                        </Col>
                                        <Col><img
                                            className="d-block w-100"
                                            src="./Image/slider-3.png"
                                            alt="Third slide"
                                        /></Col>
                                        <Col><img
                                            className="d-block w-100"
                                            src="./Image/slider-3.png"
                                            alt="Third slide"
                                        /></Col>
                                    </Row>

                                </Carousel.Item>
                                <Carousel.Item>
                                    <Row>
                                        <Col><img
                                            className="d-block w-100"
                                            src="./Image/slider-3.png"
                                            alt="Third slide"
                                        /></Col>
                                        <Col><img
                                            className="d-block w-100"
                                            src="./Image/slider-3.png"
                                            alt="Third slide"
                                        /></Col>
                                        <Col><img
                                            className="d-block w-100"
                                            src="./Image/slider-3.png"
                                            alt="Third slide"
                                        /></Col>
                                    </Row>

                                </Carousel.Item>
                            </Carousel>

                        </Row>
                    </Row>
                </Container>
                <Container>
                    <Row>
                        <Col md={6}>
                            <img className='img-fluid h-100' src="./Image/slider-2.png" alt="" />
                        </Col>
                        <Col md={6}>
                            <h1>Engaging New Audiences Through Smart Approach</h1>
                            <span>ewf</span>
                            <p>We are a leading software development company in india that offers unique, efficient and affordable web-based systems & mobile apps which helps enterprises to automate their processes, increase productivity and facilitate workflow management. Alobha Technologies is dedicated for meeting Client’s expectations through our team of highly-skilled developers, creative project managers and top-notch technologies.</p>
                            <Button variant="secondary">Secondary</Button>{' '}
                        </Col>
                    </Row>
                </Container>
                <Container>
                    <Row style={{ backgroundColor: '#f7fafd' }}>
                        <h1>Our Services</h1>
                        <span>asds</span>
                        <Col md={6}>
                            <p>Klik Plus solution offers wide range of services to assist large organisations or associations to work smarter and make them arrive at their objectives. Explore the professional and expert services we offer.</p>
                            <Row>
                                <Col md={6}><div className='Our-services-span'><p>Web Development</p></div></Col>
                                <Col md={6}><div className='Our-services-span'><p>.Net Technology</p></div></Col>
                                <Col md={6}><div className='Our-services-span'><p>Mobile App Development
                                </p></div></Col>
                                <Col md={6}><div className='Our-services-span'><p>Software Development</p></div></Col>
                                <Col md={6}><div className='Our-services-span'><p>CMS Development</p></div></Col>
                                <Col md={6}><div className='Our-services-span'><p>ERP</p></div></Col>
                                <Col md={6}><div className='Our-services-span'><p>Digital Marketing</p></div></Col>
                                <Col md={6}><div className='Our-services-span'><p>Internet Of Things (IOT)</p></div></Col>
                                <Col md={6}><div className='Our-services-span'><p>Machine Learning</p></div></Col>
                                <Col md={6}><div className='Our-services-span'><p>IVR Services</p></div></Col>
                            </Row>
                        </Col>
                        <Col md={6}>
                            <img className='img-fluid h-100' src="./Image/slider-1.png" alt="" />
                        </Col>
                    </Row>
                </Container>
                <Container>
                    <Row >
                        <h1>Design & Development</h1>
                        <span>asds</span>
                        <Col md={6}>
                            <img className='img-fluid h-100' src="./Image/slider-1.png" alt="" />
                        </Col>
                        <Col md={6}>
                            <p>A design can improve with the contribution of a developer, and code can be better written with the assistance of a designer. With the years of experience, we are able to deliver the perfect web design and development solutions to you.</p>
                            <Row>

                                <Col md={6}><div className='Our-services-span'><p>Responsive Design</p></div></Col>
                                <Col md={6}><div className='Our-services-span'><p>React Web Development</p></div></Col>
                                <Col md={6}><div className='Our-services-span'><p>Android Apps Development
                                </p></div></Col>
                                <Col md={6}><div className='Our-services-span'><p>Laravel Web Development</p></div></Col>
                                <Col md={6}><div className='Our-services-span'><p>.Net Web Development
                                </p></div></Col>
                                <Col md={6}><div className='Our-services-span'><p>iOS Apps Development
                                </p></div></Col>
                                <Col md={6}><div className='Our-services-span'><p>UX/UI Design</p></div></Col>
                                <Col md={6}><div className='Our-services-span'><p>E-commerce Developmen</p></div></Col>
                                {/* <Col md={6}><div className='Our-services-span'><p>Machine Learning</p></div></Col>
                            <Col md={6}><div className='Our-services-span'><p>IVR Services</p></div></Col> */}
                            </Row>
                        </Col>

                    </Row>
                </Container>
                <Container>
                    <Row>
                        <h1>What Users Saying</h1>
                        <p>We love what we do and we do what our clients love & work with great clients all over the world to create thoughtful and purposeful websites.</p>
                        <Col></Col>
                    </Row>
                </Container>
                <Container>
                    <Row>
                        <Col>
                            <h1>We Always Try To Understand Users Expectation</h1>
                            <p>We help our clients to solve their hardest issues. We provide proficient ITES Development services according to your necessities in reasonable expense. Few facts which explore us most.</p>
                        </Col>
                        <Col>
                            <img src="./Image/client.png" alt="" />
                        </Col>
                        <Col className='d-flex mt-5 mb-5'>
                            <div><h3>Have any question about us?</h3>
                                <p>Don't hesitate to contact us</p></div>
                            <div className='mt-3'><Button variant="primary">Primary</Button>{' '}</div>
                        </Col>
                    </Row>
                </Container>
                <Container fluid>
                            <Row>
                                <h1>Our Client</h1>
                            </Row>
                </Container>
            </Container>
        </div>
    )
}

export default Home
