import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import "./ServiceDetails.css";
import { getImageUrl } from "../../../utils/getImage";

const ServiceDetails = () => {
  const { id } = useParams();
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      `https://business-website-strapi.onrender.com/api/services/${id}?populate=*`
    )
      .then((res) => res.json())
      .then((data) => {
        // const foundService = data.find((service) => service.id === id);
        setService(data.data);
        setLoading(false);
        // console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching service:", error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="loading-container">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (!service) {
    return (
      <Container className="not-found-container">
        <Row className="justify-content-center">
          <Col md={6} className="text-center">
            <h2>Service Not Found</h2>
            <p>The service you're looking for doesn't exist.</p>
            <Link to="/" className="btn btn-primary">
              Back to Home
            </Link>
          </Col>
        </Row>
      </Container>
    );
  }

  return (
    <div className="service-details-area">
      <Container>
        <Row className="justify-content-center">
          <Col lg={10}>
            <div className="service-details-content">
              <div className="service-header">
                <Link to="/" className="back-link">
                  <i className="fa-solid fa-arrow-left me-2"></i>
                  Back to Services
                </Link>
              </div>

              <div className="service-image-container">
                {/* <img
                  src={service.image}
                  alt={service.heading}
                  className="service-details-image"
                /> */}
                <img
                  src={getImageUrl(service.image)}
                  alt=""
                  className="blog-details-image"
                />
                <div className="service-overlay">
                  <div className="service-badge">
                    <i className="fa-solid fa-star me-1"></i>
                    Premium Service
                  </div>
                </div>
              </div>

              <div className="service-content">
                <h1 className="service-title">{service.heading}</h1>

                <div className="service-meta">
                  <span className="service-category">
                    <i className="fa-solid fa-briefcase me-2"></i>
                    Professional Service
                  </span>
                  <span className="service-availability">
                    <i className="fa-solid fa-clock me-2"></i>
                    Available 24/7
                  </span>
                </div>

                <div className="service-summary">
                  <h3>Service Overview</h3>
                  <p>{service.text}</p>
                </div>

                <div className="service-description">
                  <h3>Detailed Description</h3>
                  {service.description.split("\n").map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>

                <div className="service-features">
                  <h3>Key Features</h3>
                  <Row>
                    <Col md={6}>
                      <ul className="feature-list">
                        <li>
                          <i className="fa-solid fa-check-circle me-2"></i>
                          Expert Consultation
                        </li>
                        <li>
                          <i className="fa-solid fa-check-circle me-2"></i>
                          Customized Solutions
                        </li>
                        <li>
                          <i className="fa-solid fa-check-circle me-2"></i>24/7
                          Support
                        </li>
                      </ul>
                    </Col>
                    <Col md={6}>
                      <ul className="feature-list">
                        <li>
                          <i className="fa-solid fa-check-circle me-2"></i>
                          Proven Results
                        </li>
                        <li>
                          <i className="fa-solid fa-check-circle me-2"></i>
                          Competitive Pricing
                        </li>
                        <li>
                          <i className="fa-solid fa-check-circle me-2"></i>Quick
                          Turnaround
                        </li>
                      </ul>
                    </Col>
                  </Row>
                </div>

                <div className="service-cta">
                  <Card className="cta-card">
                    <Card.Body className="text-center">
                      <h4>Ready to Get Started?</h4>
                      <p>
                        Contact us today to discuss how we can help with your{" "}
                        {service.heading.toLowerCase()} needs.
                      </p>
                      <Button
                        as={Link}
                        to="/book-appointment"
                        className="book-appointment-button"
                        variant="primary">
                        <i className="fa-solid fa-calendar-check pe-1"></i>
                        Book Appointment
                      </Button>
                    </Card.Body>
                  </Card>
                </div>
              </div>
            </div>
          </Col>
        </Row>

        {/* <Row className="mt-5">
          <Col>
            <div className="related-services">
              <h3>Explore Our Other Services</h3>
              <div className="navigation-buttons">
                <Link to="/" className="btn btn-outline-primary">
                  <i className="fa-solid fa-grid me-2"></i>
                  View All Services
                </Link>
                <Link to="/contact" className="btn btn-primary">
                  <i className="fa-solid fa-envelope me-2"></i>
                  Contact Us
                </Link>
                <Link to="/about" className="btn btn-outline-secondary">
                  <i className="fa-solid fa-info-circle me-2"></i>
                  Learn About Us
                </Link>
              </div>
            </div>
          </Col>
        </Row> */}
      </Container>
    </div>
  );
};

export default ServiceDetails;
