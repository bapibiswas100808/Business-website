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
                        <a href='https://www.facebook.com/' target="_blank" rel='noreferrer'><i class="fa-brands fa-facebook-f" className='facebook-icon'></i></a>
                        <a href='https://www.linkedin.com/' target="_blank" rel='noreferrer'><i class="fa-brands fa-linkedin-in" className='linkedin-icon'></i></a>
                        <a href='https://twitter.com/'target="_blank" rel='noreferrer'><i class="fa-brands fa-twitter" className='twitter-icon'></i></a>
                        <a href='https://www.instagram.com/'target="_blank" rel='noreferrer'><i class="fa-brands fa-instagram" className='instagram-icon'></i></a>
                    </div>
                    </Col>
                    <Col lg={4}>
                    <div className='top-two'>
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
                    <div className='top-three'>
                    <h3>Subscribe Us</h3>
                    <p>Get each and every latest news & update about Essons without any delay by subscribing to us.</p>
                    <button>Subscribe!</button>
                    </div>
                    </Col>
                </Row>
            </Container>
            
        </footer>
    );
};

export default FooterTop;