import React from 'react';
import Col from 'react-bootstrap/esm/Col';
import "./SingleBlog.css"

const SingleBlog = ({item}) => {
    return (
        <Col lg={6}>
            <div className='single-blog'>
            <div className='blog-image'>
            <img src={item.image} alt=''className='w-100'/>
            </div>
            <div className='blog-text'>
            <h3>{item.heading}</h3>
            <p>{item.text}</p> 
            <button className='service-button mt-3'>Learn More</button>  
            </div>
            </div>
        </Col>

    );
};

export default SingleBlog;