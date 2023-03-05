import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./FooterTop.css"

const FooterTop = () => {
    return (
        <footer className='footer-top'>
            <Container>
                <Row>
                    <Col lg={4}>
                    <div className='top-one'>
                    <h3>About Us</h3>
                        <p>Essons is the high-rated business Service Provider with well qualified advisors. No specialized qualifications is required to work with us.</p>
                    </div>
                    </Col>
                    <Col lg={4}>
                        <h3>Services</h3>
                        <ul>
                            <li>Business Consulting</li>
                            <li>Content Creation and Marketing</li>
                            <li>Website Development and Design</li>
                            <li>IT Support and Maintenance</li>
                            <li>Marketing and Advertising</li>
                            <li>Virtual Assistance</li>
                        </ul>
                    </Col>
                    <Col lg={4}>
                        <h3>Subscribe Us</h3>
                        <p>Get each and every latest news & update about our Corpkit without any delay by subscribing to us.</p>
                        <button>Subscribe!</button>
                    </Col>
                </Row>
            </Container>
            
        </footer>
    );
};

export default FooterTop;