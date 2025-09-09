import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import SingleBlog from "../SingleBlog/SingleBlog";
import "./BlogContent.css";

const BlogContent = () => {
  const [blogs, setBlog] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:1337/api/blogs?populate=*`)
      .then((res) => res.json())
      .then((data) => {
        setBlog(data.data);
      })
      .catch((err) => {
        console.error("Error fetching blogs:", err);
      });
  }, []);
  return (
    <section className="blog-area">
      <Container>
        <h4 className="text-center service-subheading">\ Blogs \</h4>
        <h2 className="text-center mb-5 service-heading">
          We Serve the Best Information
        </h2>
        <Row>
          {blogs.map((item) => (
            <SingleBlog key={item.id} item={item}></SingleBlog>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default BlogContent;
