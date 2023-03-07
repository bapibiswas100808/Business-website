import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
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
            <NavLink to="/" className='me-4 nav-link'>Home</NavLink>
            <NavLink to="/about" className='me-4 nav-link'>About</NavLink>
            <NavLink to="/" className='me-4 nav-link'>Services</NavLink>
            <NavLink to="/" className='me-4 nav-link'>Contact</NavLink>
            <NavLink to="/blog" className='me-4 nav-link'>Blog</NavLink>
            <Button>Get In Touch</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </header>
  
    );
};

export default Header;