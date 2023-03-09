import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/esm/Container';
import Form from 'react-bootstrap/Form';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

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
        messageDiv.innerHTML = "Fill the Form correctly!";
      }
      if (loading) {
        messageDiv.innerHTML = "Loading...";
      }
      if (user) {
        messageDiv.innerHTML = "Welcome to Essons!";
      }
    return (
        <section className='reg-area'>
        <Container>
        <h2 className='text-center pb-3'>Log In Here</h2>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" value={email}  onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" value={password}  onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
      </Form.Group>
      <div id='message-div'></div>
      <Button variant="primary" type="submit" onClick={() => signInWithEmailAndPassword(email, password)}>
        Submit
      </Button>
            </Container>
        </section>
    );
};

export default SignIn;