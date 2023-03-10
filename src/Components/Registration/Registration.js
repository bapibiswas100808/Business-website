import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/esm/Container';
import Form from 'react-bootstrap/Form';
import "./Registration.css";
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { NavLink } from 'react-router-dom';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import GoogleSignUp from '../GoogleSignUp/GoogleSignUp';
import FacebookSignUp from '../FacebookSignUp/FacebookSignUp';

const Registration = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const messageDiv = document.getElementById("message-div");
    const [
      createUserWithEmailAndPassword,
      user,
      loading,
      error,
    ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});
      if (error) {
        messageDiv.innerHTML = "Fill the form correctly!";
      }
      if (loading) {
        messageDiv.innerHTML = "Loading...";
      }
      if (user) {
        messageDiv.innerHTML = "Registration Succesful!";
      }
    return (
        <section className='reg-area py-lg-5 px-lg-3'>
        <Container>
          <div className='reg-in-area'>
        <Row>
          <Col lg={{span:6, offset:3}}>
          <h2 className='text-center pb-3'>Register Here</h2>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" value={email}  onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" value={password}  onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
      </Form.Group>
      <div id='message-div'></div>
      <p>Already Have an Account?
      <NavLink to="/signin" className='nav-link reg-link'>Login Here</NavLink></p>
      <Button variant="primary" type="submit" button onClick={() => createUserWithEmailAndPassword(email, password)}>
        Register
      </Button>
      <span className='or-style'>Or</span>
      <GoogleSignUp/>
      <FacebookSignUp/>
          </Col>
        </Row>
      </div>
            </Container>
        </section>
    );
};

export default Registration;