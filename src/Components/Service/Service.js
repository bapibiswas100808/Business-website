import React from "react";
import Col from "react-bootstrap/esm/Col";
import { Link } from "react-router-dom";
import "./Service.css";
import { getImageUrl } from "../../utils/getImage";
const Service = ({ item }) => {
  // console.log(item);
  return (
    <Col lg={4}>
      <div className="single-service">
        <div className="service-image">
          <img src={getImageUrl(item.image)} alt="" className="w-100" />
        </div>
        <div className="service-text">
          <h3>{item.heading}</h3>
          <p>{item.text}</p>
          <Link
            to={`/service/${item.documentId}`}
            className="service-button mt-3">
            Learn More
            <i className="fa-solid fa-arrow-right ms-2"></i>
          </Link>
        </div>
      </div>
    </Col>
  );
};

export default Service;
