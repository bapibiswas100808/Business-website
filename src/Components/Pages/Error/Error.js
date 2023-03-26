import React from "react";
import Container from "react-bootstrap/esm/Container";
import "./Error.css";

const Error = () => {
  return (
    <section>
      <div className="error-area">
        <Container>
          <div className="error-text">
            <h3 className="text-center">
              404 <br />
              Page Not Found
            </h3>
            <a href="/"> Back to Home</a>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default Error;
