import React from 'react';
import Button from 'react-bootstrap/esm/Button';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import "./GoogleSignUp.css";



const GoogleSignUp = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
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
            <p className='text-center color-red'>
              Registration Succesful!</p>
          </div>
        );
      }
    return (
        <div>
            <Button className='btn w-100 google-button' onClick={() => signInWithGoogle()} type="submit">
                Continue With Google
            </Button>
        </div>
    );
};

export default GoogleSignUp;