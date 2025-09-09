import React, { useState, useEffect } from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import "./Contact.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import ContactImage from "../../images/contactimage.jpg";
import { sendEmail, initEmailJS } from "../../utils/emailService";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertVariant, setAlertVariant] = useState("success");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Initialize EmailJS when component mounts
  useEffect(() => {
    initEmailJS();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setAlertMessage("Please fill in all fields.");
      setAlertVariant("danger");
      setShowAlert(true);
      setIsSubmitting(false);
      return;
    }

    try {
      // Send email using EmailJS
      await sendEmail(formData);

      setAlertMessage(
        "Your message has been sent successfully! We will contact you soon."
      );
      setAlertVariant("success");
      setShowAlert(true);

      // Reset form
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      setAlertMessage(
        "Sorry, there was an error sending your message. Please try again."
      );
      setAlertVariant("danger");
      setShowAlert(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact-area">
      <Container>
        <div className="contact-content">
          <h5 className="text-center mb-3 contact-subheading">
            \ Contact Us \
          </h5>
          <h2 className="text-center mb-5">We Will Reach You Soon!</h2>
          <Row className="align-items-center">
            <Col lg={6}>
              <div className="contact-image">
                <img src={ContactImage} alt="" className="w-100" />
              </div>
            </Col>
            <Col lg={6}>
              <div className="contact-form">
                <h3 className="mb-4">Do You Want To Get In Touch?</h3>

                {showAlert && (
                  <Alert
                    variant={alertVariant}
                    onClose={() => setShowAlert(false)}
                    dismissible
                    className="mb-3">
                    {alertMessage}
                  </Alert>
                )}

                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3" controlId="formName">
                    <Form.Control
                      type="text"
                      placeholder="Your Name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formEmail">
                    <Form.Control
                      type="email"
                      placeholder="Your Email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formMessage">
                    <Form.Control
                      as="textarea"
                      rows={4}
                      placeholder="Write Your Message"
                      className="text-area"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                    />
                  </Form.Group>

                  <Button
                    type="submit"
                    className="mt-2"
                    disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Submit"}
                  </Button>
                </Form>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
