import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Service from "../Service/Service";
import "./Services.css";
import { getImageUrl } from "../../utils/getImage";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch(
      `https://business-website-strapi.onrender.com/api/services?populate=*`
    )
      .then((res) => res.json())
      .then((data) => {
        setServices(data.data);
      })
      .catch((err) => {
        console.error("Error fetching services:", err);
      });
  }, []);

  return (
    <section className="services-area">
      <Container>
        <div className="service-main-heading">
          <h4 className="text-center service-subheading">\ services \</h4>
          <h2 className="text-center mb-5 service-heading">
            We Serve the Best Work
          </h2>
        </div>
        <Row>
          {services.map((item) => (
            <Service key={item.id} item={item}></Service>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Services;
