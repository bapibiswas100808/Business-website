import React from 'react';
import Button from 'react-bootstrap/esm/Button';
import { useSignInWithFacebook } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import "./FacebookSignUp.css"

const FacebookSignUp = () => {
    const [signInWithFacebook, user, loading, error] = useSignInWithFacebook(auth);
    if (error) {
        return (
          <div>
            <p>Something Wrong to Connect!</p>
          </div>
        );
      }
      if (loading) {
        return <p>Loading...</p>;
      }
      if (user) {
        return (
          <div>
            <p className='text-center color-red'>Registration Succesful!</p>
          </div>
        );
      }
    return (
        <div>
        <Button className='btn w-100 mt-3 facebook-button' onClick={() => signInWithFacebook()} type="submit">
                Continue With Facebook
            </Button>
            
        </div>
    );
};

export default FacebookSignUp;