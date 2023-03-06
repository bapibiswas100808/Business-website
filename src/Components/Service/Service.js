import React from 'react';
import Col from 'react-bootstrap/esm/Col';
import "./Service.css"
const Service = ({item}) => {
    return (
        <Col lg={4}>
        <div className='single-service'>
            <div className='service-image'>
            <img src={item.image} alt=''className='w-100'/>
            </div>
            <div className='service-text'>
            <h3>{item.heading}</h3>
            <p>{item.text}</p> 
            <button className='service-button mt-3'>Learn More</button>  
            </div>
        </div>
        </Col>
    );
};

export default Service;