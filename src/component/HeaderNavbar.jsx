import React from 'react'
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const HeaderNavbar = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="light" data-bs-theme="light">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="m-auto text-center">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="about">About Us</Nav.Link>
            <Nav.Link href="services">Services</Nav.Link>
            <Nav.Link href="portfolio">Portfolio</Nav.Link>
            <Nav.Link href="career">Career</Nav.Link>
            <Nav.Link href="blog">Blog</Nav.Link>
            <Nav.Link href="contact">Contact Us</Nav.Link> 
            
          </Nav>
          <Nav>
          <Button variant="primary">Primary</Button>{' '}
            {/* <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default HeaderNavbar
