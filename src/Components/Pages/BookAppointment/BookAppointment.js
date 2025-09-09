import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Card,
  Alert,
} from "react-bootstrap";
import DatePicker from "react-datepicker";
import "./BookAppointment.css";

const BookAppointment = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
    preferredTime: "",
  });
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState("success");
  const [alertMessage, setAlertMessage] = useState("");

  const services = [
    "Business Consulting",
    "Content Creation and Management",
    "Website Development and Design",
    "IT Support and Maintenance",
    "Digital Marketing and Advertising",
    "Virtual Assistance",
  ];

  const timeSlots = [
    "09:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "01:00 PM",
    "02:00 PM",
    "03:00 PM",
    "04:00 PM",
    "05:00 PM",
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.phone ||
      !formData.service ||
      !formData.preferredTime
    ) {
      setAlertType("danger");
      setAlertMessage("Please fill in all required fields.");
      setShowAlert(true);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setAlertType("danger");
      setAlertMessage("Please enter a valid email address.");
      setShowAlert(true);
      return;
    }

    // Here you would typically send the data to your backend
    console.log("Appointment Data:", {
      ...formData,
      appointmentDate: selectedDate.toDateString(),
    });

    setAlertType("success");
    setAlertMessage(
      "Your appointment request has been submitted successfully! We will contact you within 24 hours to confirm."
    );
    setShowAlert(true);

    // Reset form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      company: "",
      service: "",
      message: "",
      preferredTime: "",
    });
    setSelectedDate(new Date());

    // Hide alert after 5 seconds
    setTimeout(() => {
      setShowAlert(false);
    }, 5000);
  };

  // Filter out past dates
  const filterPassedTime = (time) => {
    const currentDate = new Date();
    const selectedDateTime = new Date(selectedDate);

    if (selectedDateTime.toDateString() === currentDate.toDateString()) {
      return time.getTime() > currentDate.getTime();
    }
    return true;
  };

  return (
    <div className="book-appointment-area">
      <Container>
        <Row className="justify-content-center">
          <Col lg={10}>
            <div className="appointment-header text-center mb-5">
              <h1 className="appointment-title">Book Your Appointment</h1>
              <p className="appointment-subtitle">
                Schedule a consultation with our experts to discuss your
                business needs
              </p>
            </div>

            {showAlert && (
              <Alert
                variant={alertType}
                dismissible
                onClose={() => setShowAlert(false)}
              >
                {alertMessage}
              </Alert>
            )}

            <Row>
              <Col lg={8}>
                <Card className="appointment-form-card">
                  <Card.Header className="appointment-form-header">
                    <h3>
                      <i className="fa-solid fa-calendar-check me-2"></i>
                      Appointment Details
                    </h3>
                  </Card.Header>
                  <Card.Body>
                    <Form onSubmit={handleSubmit}>
                      <Row>
                        <Col md={6}>
                          <Form.Group className="mb-3">
                            <Form.Label>First Name *</Form.Label>
                            <Form.Control
                              type="text"
                              name="firstName"
                              value={formData.firstName}
                              onChange={handleInputChange}
                              placeholder="Enter your first name"
                              required
                            />
                          </Form.Group>
                        </Col>
                        <Col md={6}>
                          <Form.Group className="mb-3">
                            <Form.Label>Last Name *</Form.Label>
                            <Form.Control
                              type="text"
                              name="lastName"
                              value={formData.lastName}
                              onChange={handleInputChange}
                              placeholder="Enter your last name"
                              required
                            />
                          </Form.Group>
                        </Col>
                      </Row>

                      <Row>
                        <Col md={6}>
                          <Form.Group className="mb-3">
                            <Form.Label>Email Address *</Form.Label>
                            <Form.Control
                              type="email"
                              name="email"
                              value={formData.email}
                              onChange={handleInputChange}
                              placeholder="Enter your email"
                              required
                            />
                          </Form.Group>
                        </Col>
                        <Col md={6}>
                          <Form.Group className="mb-3">
                            <Form.Label>Phone Number *</Form.Label>
                            <Form.Control
                              type="tel"
                              name="phone"
                              value={formData.phone}
                              onChange={handleInputChange}
                              placeholder="Enter your phone number"
                              required
                            />
                          </Form.Group>
                        </Col>
                      </Row>

                      <Form.Group className="mb-3">
                        <Form.Label>Company/Organization</Form.Label>
                        <Form.Control
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          placeholder="Enter your company name (optional)"
                        />
                      </Form.Group>

                      <Form.Group className="mb-3">
                        <Form.Label>Service Required *</Form.Label>
                        <Form.Select
                          name="service"
                          value={formData.service}
                          onChange={handleInputChange}
                          required
                        >
                          <option value="">Select a service</option>
                          {services.map((service, index) => (
                            <option key={index} value={service}>
                              {service}
                            </option>
                          ))}
                        </Form.Select>
                      </Form.Group>

                      <Row>
                        <Col md={6}>
                          <Form.Group className="mb-3">
                            <Form.Label>Preferred Date *</Form.Label>
                            <div className="date-picker-wrapper">
                              <DatePicker
                                selected={selectedDate}
                                onChange={(date) => setSelectedDate(date)}
                                minDate={new Date()}
                                filterTime={filterPassedTime}
                                dateFormat="MMMM d, yyyy"
                                className="form-control"
                                placeholderText="Select a date"
                                required
                              />
                            </div>
                          </Form.Group>
                        </Col>
                        <Col md={6}>
                          <Form.Group className="mb-3">
                            <Form.Label>Preferred Time *</Form.Label>
                            <Form.Select
                              name="preferredTime"
                              value={formData.preferredTime}
                              onChange={handleInputChange}
                              required
                            >
                              <option value="">Select a time</option>
                              {timeSlots.map((time, index) => (
                                <option key={index} value={time}>
                                  {time}
                                </option>
                              ))}
                            </Form.Select>
                          </Form.Group>
                        </Col>
                      </Row>

                      <Form.Group className="mb-4">
                        <Form.Label>Additional Message</Form.Label>
                        <Form.Control
                          as="textarea"
                          rows={4}
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          placeholder="Tell us more about your requirements or any specific questions you have..."
                        />
                      </Form.Group>

                      <div className="form-submit-section text-center">
                        <Button
                          type="submit"
                          className="appointment-submit-btn"
                          size="lg"
                        >
                          <i className="fa-solid fa-paper-plane me-2"></i>
                          Submit Appointment Request
                        </Button>
                      </div>
                    </Form>
                  </Card.Body>
                </Card>
              </Col>

              <Col lg={4}>
                <div className="appointment-info">
                  <Card className="info-card mb-4">
                    <Card.Header className="info-card-header">
                      <h4>
                        <i className="fa-solid fa-info-circle me-2"></i>
                        Appointment Info
                      </h4>
                    </Card.Header>
                    <Card.Body>
                      <ul className="info-list">
                        <li>
                          <i className="fa-solid fa-clock me-2"></i>
                          <strong>Duration:</strong> 30-60 minutes
                        </li>
                        <li>
                          <i className="fa-solid fa-video me-2"></i>
                          <strong>Format:</strong> Video call or in-person
                        </li>
                        <li>
                          <i className="fa-solid fa-dollar-sign me-2"></i>
                          <strong>Cost:</strong> Free consultation
                        </li>
                        <li>
                          <i className="fa-solid fa-calendar-days me-2"></i>
                          <strong>Availability:</strong> Mon-Fri, 9 AM - 5 PM
                        </li>
                      </ul>
                    </Card.Body>
                  </Card>

                  <Card className="contact-card">
                    <Card.Header className="contact-card-header">
                      <h4>
                        <i className="fa-solid fa-headset me-2"></i>
                        Need Help?
                      </h4>
                    </Card.Header>
                    <Card.Body>
                      <p>
                        If you have any questions or need immediate assistance,
                        feel free to contact us:
                      </p>
                      <div className="contact-details">
                        <p>
                          <i className="fa-solid fa-phone me-2"></i>
                          <strong>Phone:</strong> +1 (555) 123-4567
                        </p>
                        <p>
                          <i className="fa-solid fa-envelope me-2"></i>
                          <strong>Email:</strong> appointments@business.com
                        </p>
                        <p>
                          <i className="fa-solid fa-clock me-2"></i>
                          <strong>Response Time:</strong> Within 24 hours
                        </p>
                      </div>
                    </Card.Body>
                  </Card>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BookAppointment;
