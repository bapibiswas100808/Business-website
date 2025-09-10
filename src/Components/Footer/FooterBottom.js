import React from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import FooterLogo from "../../images/logo.jpg";
import "./FooterBottom.css";

const FooterBottom = () => {
  return (
    <div className="footer-bottom">
      <Container>
        <Row className="bottom-elements">
          <Col md={6}>
            <div className="footer-logo">
              <h2 className="fs-4">Digital Mix</h2>
              {/* <img src={FooterLogo} alt="" /> */}
            </div>
          </Col>
          <Col md={6}>
            <p>
              Copyrights © 2023<span>Essons</span>. Designed by Esson Family{" "}
              <span>♥</span>
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FooterBottom;
