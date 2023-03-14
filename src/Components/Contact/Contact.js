import React from 'react';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import "./Contact.css";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ContactImage from "../../images/contactimage.jpg"

const Contact = () => {
    return (
        <section className='contact-area'>
           <Container>
            <div className='contact-content'>
                <h5 className='text-center mb-3 contact-subheading'>\ Contact Us \</h5>
                <h2 className='text-center mb-5'>We Will Reach You Soon!</h2>
            <Row className='align-items-center'>
                <Col lg={6}>
                    <div className='contact-image'>
                        <img src={ContactImage} alt=''className='w-100'/>
                    </div>
                </Col>
                <Col lg={6}>
                    <div className='contact-form'>
                    <h3 className='mb-4'>Do You Want To Get In Touch?</h3>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Control as="textarea" placeholder="Write Your Messeage" className='my-3 text-area' />
                <Button type="submit" className='mt-2'>
                    Submit
                </Button>
                    </div>
                </Col>   
            </Row>
            </div>
           </Container>
        </section>
    );
};

export default Contact;