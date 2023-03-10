import { signOut } from 'firebase/auth';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/esm/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink, Link } from 'react-router-dom';
import auth from '../../firebase.init';
import Logo from "../../images/logo.png";
import "./Header.css";

const Header = () => {
  const [user] = useAuthState(auth);
  const handleSignOut = () => {
    signOut(auth);
  }
    return (
      <header className='header-area fixed-top'>
      <Navbar expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/"> <img src={Logo} alt=''/></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto"
            style={{ maxHeight: '300px' }}
            navbarScroll
          >
            <NavLink to="/" className='me-4 nav-link'>
            <i class="fa-solid fa-house"></i>
              Home</NavLink>
            <NavLink to="/about" className='me-4 nav-link'>
            <i class="fa-solid fa-lightbulb"></i>
              About</NavLink>
            <NavLink to="/blog" className='me-4 nav-link'>
            <i class="fa-regular fa-envelope-open"></i>
              Blog</NavLink>
              {user?
              (<Button className='me-4' onClick={handleSignOut}>Sign Out</Button>)
              : (
                <NavLink to="/signin" className='me-4 nav-link header-sign'>Sign In</NavLink>
              )
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </header>
  
    );
};

export default Header;