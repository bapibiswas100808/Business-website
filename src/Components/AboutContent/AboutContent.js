import React from 'react';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import AboutImage from "../../images/about-image.jpg"
import "./AboutContent.css"
import Sign from "../../images/sign.png"

const AboutContent = () => {
    return (
        <section className='about-content-area'>
            <Container>
                <Row>
                    <Col lg={6}>
                        <div className='about-image'>
                            <img className='w-100 p-3' src={AboutImage} alt=''/>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className='about-text ps-5 pt-3'>
                            <h5>\ About Us \</h5>
                            <h2>One Of The Fastest Way To Gain Business Success</h2>
                            <p>Essons is a global management consulting service company. Corpkit has the trusted advisor to the world's leading businesses, finance, and institutions. Corpkit Business Consulting WP Theme is the most modern and feature-rich Theme. This Business Consulting WP Theme is designed for various business and consulting services.</p>
                            <h4 className='ps-4'><b>Helped Fund <span>78,743</span> Projects in <span>30</span>  Countries, Benefiting Over <span>7.6 m</span> Million People.</b></h4>
                        </div>
                        <section className='sign d-flex ps-5 pt-3 align-items-center'>
                            <div className='sign-image pe-3'>
                            <img className='w-100' src={Sign} alt=''/>
                            </div>
                            <div className='sign-text ps-2'>
                                <h3>Richard E. Harrisona</h3>
                                <h6>CEO & Founder</h6>
                            </div>
                        </section>
                    </Col>
                </Row>
            </Container>
            
        </section>
    );
};

export default AboutContent;