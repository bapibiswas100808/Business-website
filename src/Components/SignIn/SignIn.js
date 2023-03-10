import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Form from 'react-bootstrap/Form';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { NavLink } from 'react-router-dom';
import auth from '../../firebase.init';
import "./SignIn.css";
import Row from 'react-bootstrap/esm/Row';

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const messageDiv = document.getElementById("message-div");
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
      if (error) {
        messageDiv.innerHTML = "Register first or Fill the Form correctly!";
      }
      if (loading) {
        messageDiv.innerHTML = "Loading...";
      }
      if (user) {
        messageDiv.innerHTML = "Welcome to Essons!";
      }
    return (
        <section className='sign-area py-lg-5'>
        <Container>
            <div className='sign-in-area'>
        <h2 className='text-center pb-3'>Sign In Here</h2>
        <Row>
          <Col lg={{span:6, offset:3}}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" value={email}  onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" value={password}  onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
      </Form.Group>
      <div id='message-div'></div>
      <p> <span>Not registered yet?  </span>
      <NavLink to="/registration" className='me-4 nav-link reg-link'>Register Here</NavLink></p>
      <Button variant="primary" type="submit" onClick={() => signInWithEmailAndPassword(email, password)}>
        Sign In
      </Button>
          </Col>
        </Row>
            </div>
            </Container>
        </section>
    );
};

export default SignIn;