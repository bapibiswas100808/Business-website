import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import SubHeader from '../../SubHeader/SubHeader';
import "./Error.css"

const Error = () => {
    return (
        <section>
            <SubHeader/>
            <Container>
            <div className='error-text'>
            <h3 className='text-center'>404 <br/>
                Page Not Found
            </h3>
            <a href='/'> Back to Home</a>
                </div>            

            </Container>
            
        </section>
    );
};

export default Error;