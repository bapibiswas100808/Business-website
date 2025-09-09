import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./BlogDetails.css";
import { getImageUrl } from "../../../utils/getImage";

const BlogDetails = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:1337/api/blogs/${id}?populate=*`)
      .then((res) => res.json())
      .then((data) => {
        setBlog(data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching blogs:", err);
      });
  }, []);

  if (loading) {
    return (
      <div className="loading-container">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }
  if (!blog) {
    return (
      <Container
        className="d-flex justify-content-center align-items-center"
        style={{ height: "100vh" }}>
        <Row>
          <Col md={12} className="text-center">
            <h2>Blog Post Not Found</h2>
            <p>The blog post you're looking for doesn't exist.</p>
            <Link to="/blog" className="btn btn-primary">
              Back to Blog
            </Link>
          </Col>
        </Row>
      </Container>
    );
  }

  return (
    <div className="blog-details-area">
      <Container>
        <Row className="justify-content-center">
          <Col lg={10}>
            <div className="blog-details-content">
              <div className="blog-header">
                <Link to="/blog" className="back-link">
                  <i className="fa-solid fa-arrow-left me-2"></i>
                  Back to Blog
                </Link>
              </div>

              <img
                src={getImageUrl(blog.image)}
                alt=""
                className="blog-details-image"
              />

              <div className="blog-content">
                <h1 className="blog-title">{blog.heading}</h1>

                <div className="blog-meta">
                  <span className="blog-date">
                    <i className="fa-regular fa-calendar me-2"></i>
                    Published on {new Date().toLocaleDateString()}
                  </span>
                  <span className="blog-category">
                    <i className="fa-solid fa-tag me-2"></i>
                    Business Strategy
                  </span>
                </div>

                <div className="blog-summary">
                  <p>{blog.text}</p>
                </div>

                <div className="blog-description">
                  {blog.description.split("\n").map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>

                <div className="blog-actions">
                  <div className="social-share">
                    <h5>Share this article:</h5>
                    <div className="share-buttons">
                      <Button variant="outline-primary" size="sm">
                        <i className="fa-brands fa-facebook-f me-2"></i>
                        Facebook
                      </Button>
                      <Button variant="outline-info" size="sm">
                        <i className="fa-brands fa-twitter me-2"></i>
                        Twitter
                      </Button>
                      <Button variant="outline-primary" size="sm">
                        <i className="fa-brands fa-linkedin me-2"></i>
                        LinkedIn
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>

        {/* <Row className="mt-5">
          <Col>
            <div className="related-articles">
              <h3>Related Articles</h3>
              <div className="navigation-buttons">
                <Link to="/blog" className="btn btn-outline-primary">
                  <i className="fa-solid fa-list me-2"></i>
                  View All Articles
                </Link>
                <Link to="/contact" className="btn btn-primary">
                  <i className="fa-solid fa-envelope me-2"></i>
                  Contact Us
                </Link>
              </div>
            </div>
          </Col>
        </Row> */}
      </Container>
    </div>
  );
};

export default BlogDetails;
