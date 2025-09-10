import React from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import AboutImage from "../../images/about-image.jpg";
import "./AboutContent.css";
import Sign from "../../images/sign.png";

const AboutContent = () => {
  return (
    <section className="about-content-area">
      <Container>
        <Row>
          <Col lg={6}>
            <div className="about-image">
              <img className="w-100 p-3" src={AboutImage} alt="" />
            </div>
          </Col>
          <Col lg={6}>
            <div className="about-text ps-4 pt-3">
              <h5 className="pb-2">\ About Us \</h5>
              <h2>
                Digital Mix Agency: Your Trusted Partner in Digital Growth.
              </h2>
              <p>
                Welcome to Digital Mix Agency, a results-driven digital
                marketing powerhouse dedicated to scaling your business. With a
                proven track record of success, we specialize in delivering
                comprehensive digital solutions tailored to your unique goals.
                Our expert team excels in Search Engine Optimization (SEO) that
                ranks you higher, engaging Social Media Marketing, and high-ROI
                PPC Campaigns. We also build stunning, high-performance websites
                through our expert Web Development services, ensuring a seamless
                user experience. Our history is built on driving measurable
                growth and transforming our clients' digital presence into a
                powerful revenue-generating asset. Partner with us to create
                your success story.
              </p>
              <h4 className="ps-4">
                <b>
                  Helped Business <span>50</span> Projects in <span>3</span>{" "}
                  Countries, Benefiting Over <span>10k</span> to our clients.
                </b>
              </h4>
            </div>
            {/* <section className="sign d-flex ps-lg-5 pt-3 align-items-center">
              <div className="sign-image pe-3">
                <img className="w-100" src={Sign} alt="" />
              </div>
              <div className="sign-text ps-2">
                <h3>Richard E. Harrisona</h3>
                <h6>CEO & Founder</h6>
              </div>
            </section> */}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutContent;
