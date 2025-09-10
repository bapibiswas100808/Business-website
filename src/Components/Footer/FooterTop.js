import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./FooterTop.css";
import Button from "react-bootstrap/esm/Button";
import { Link } from "react-router-dom";

const FooterTop = () => {
  return (
    <footer className="footer-top">
      <Container>
        <Row>
          <Col lg={4}>
            <div className="top-one">
              <h3>About Us</h3>
              <p className="mb-4">
                Welcome to Digital Mix Agency, a results-driven digital
                marketing powerhouse dedicated to scaling your business.
              </p>
              <a
                href="https://www.facebook.com/digitalmix247"
                target="_blank"
                rel="noreferrer">
                <i className="fa-brands fa-facebook-f facebook-icon"></i>
              </a>
              <a
                href="https://www.linkedin.com/company/digitalmix247"
                target="_blank"
                rel="noreferrer">
                <i className="fa-brands fa-linkedin-in linkedin-icon"></i>
              </a>
              <a
                href="https://www.youtube.com/@digitalmix247"
                target="_blank"
                rel="noreferrer">
                <i className="fa-brands fa-youtube youtube-icon"></i>
              </a>
              <a
                href="https://www.instagram.com/digitalmix247"
                target="_blank"
                rel="noreferrer">
                <i className="fa-brands fa-instagram instagram-icon"></i>
              </a>
            </div>
          </Col>
          <Col lg={4}>
            <div className="top-two">
              <h3>Services</h3>
              <ul>
                <li>Business Consulting</li>
                <li>Content Creation and Marketing</li>
                <li>Website Development and Design</li>
                <li>IT Support and Maintenance</li>
                <li>Marketing and Advertising</li>
                <li>Virtual Assistance</li>
              </ul>
            </div>
          </Col>
          <Col lg={4}>
            <div className="top-three">
              <h3>Book Appointment</h3>
              <p>
                Easily schedule your appointment online. Pick your date, time,
                and service — simple, quick, and hassle-free booking process!
              </p>
              <Button
                as={Link}
                to="/book-appointment"
                className="book-appointment-button"
                variant="primary">
                <i className="fa-solid fa-calendar-check pe-1"></i>
                Book Appointment
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default FooterTop;
