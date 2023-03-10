import React from 'react';
import Button from 'react-bootstrap/esm/Button';
import { useSignInWithFacebook } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

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
        <Button className='btn btn-default w-100 mt-3' onClick={() => signInWithFacebook()} type="submit">
                Continue With Facebook
            </Button>
            
        </div>
    );
};

export default FacebookSignUp;