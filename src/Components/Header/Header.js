import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from "../../images/logo.png";
import "./Header.css";

const Header = () => {
    return (
      <header className='header-area fixed-top'>
      <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#"> <img src={Logo} alt=''/></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto"
            style={{ maxHeight: '300px' }}
            navbarScroll
          >
            <Nav.Link href="#action1" className='me-4'>Home</Nav.Link>
            <Nav.Link href="#action2" className='me-4'>About</Nav.Link>
            <Nav.Link href="#action3" className='me-4'>Services</Nav.Link>
            <Nav.Link href="#action4" className='me-4'>Contact</Nav.Link>
            <Nav.Link href="#action5" className='me-4'>Blog</Nav.Link>
            <Button>Get In Touch</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </header>
  
    );
};

export default Header;