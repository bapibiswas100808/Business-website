import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Service from '../Service/Service';
import "./Services.css"

const Services = () => {
    const[services, setService]= useState([]);
    useEffect(()=>{
        fetch("Service.json")
        .then(res => res.json())
        .then(data => setService(data))
    },[]);
    return (
        <section className='services-area'>
            <Container>
                <h4 className='text-center service-subheading'>\ services \</h4>
                <h2 className='text-center mb-4 service-heading'>We Serve the Best Work</h2>
                <Row>
                {services.map((item) => (<Service key={item.id} item={item}></Service> ) )}
                </Row>
            </Container>
            
        </section>
    );
};

export default Services;
