import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/esm/Container';
import Form from 'react-bootstrap/Form';
import "./Registration.css";
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Registration = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const messageDiv = document.getElementById("message-div");
    const [
      createUserWithEmailAndPassword,
      user,
      loading,
      error,
    ] = useCreateUserWithEmailAndPassword(auth);
      if (error) {
        messageDiv.innerHTML = error;
      }
      if (loading) {
        messageDiv.innerHTML = "Loading...";
      }
      if (user) {
        messageDiv.innerHTML = "Registration Succesful!";
      }
    return (
        <section className='reg-area'>
        <Container>
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
      <Button variant="primary" type="submit" button onClick={() => createUserWithEmailAndPassword(email, password)}>
        Submit
      </Button>
            </Container>
        </section>
    );
};

export default Registration;