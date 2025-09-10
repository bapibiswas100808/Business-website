import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/esm/Button";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink, Link } from "react-router-dom";
// import Logo from "../../images/logo.png";
import "./Header.css";
import { getImageUrl } from "../../utils/getImage";

const Header = () => {
  const [logoUrl, setLogoUrl] = useState("");

  useEffect(() => {
    fetch(`https://business-website-strapi.onrender.com/api/header?populate=*`)
      .then((response) => response.json())
      .then((data) => {
        setLogoUrl(data.data.logo);
      })
      .catch((err) => console.error("Error fetching header data:", err));
  }, []);

  return (
    <header className="header-area fixed-top">
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">
            {logoUrl ? (
              <img src={getImageUrl(logoUrl)} alt="Logo" className="h-12" />
            ) : (
              <span>Loading...</span>
            )}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="ms-auto"
              style={{ maxHeight: "300px" }}
              navbarScroll>
              <NavLink to="/" className="me-4 nav-link">
                <i className="fa-solid fa-house pe-1"></i>
                Home
              </NavLink>
              <NavLink to="/about" className="me-4 nav-link">
                <i className="fa-solid fa-lightbulb pe-1"></i>
                About
              </NavLink>
              <NavLink to="/blog" className="me-4 nav-link">
                <i className="fa-regular fa-envelope-open pe-1"></i>
                Blog
              </NavLink>
              <Button
                as={Link}
                to="/book-appointment"
                className="book-appointment-button"
                variant="primary">
                <i className="fa-solid fa-calendar-check pe-1"></i>
                Book Appointment
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
