import React from 'react';
import "./Slider.css";
import Carousel from 'react-bootstrap/Carousel';
import Slider1 from "../../images/slider-five.jpg";
import Slider2 from "../../images/Service13.jpg";
import Slider3 from "../../images/Service11.jpg";
import Slider4 from "../../images/slider-four.jpg";
import Slider5 from "../../images/Service8.jpg";



const Slider = () => {
    return (
      <section className='slider-area'>
        <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Slider1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h5>/ Make Business Easy /</h5>
            <h3>Develop a Strategic Plan</h3>
            {/* <p>To achieve long-term success, it's important to have a clear and focused strategy. We will regularly review and adjust your plan as necessary to ensure you stay on track.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Slider2}
            alt="Second slide"
          />
  
          <Carousel.Caption>
          <h5>/ Make Business Easy /</h5>
            <h3>Use suitable Technology</h3>
            {/* <p> we will use tools like social media, email marketing, and customer relationship management (CRM) software to improve efficiency and drive growth.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Slider3}
            alt="Third slide"
          />
  
          <Carousel.Caption>
          <h5>/ Make Business Easy /</h5>
            <h3> Get Your Target Market</h3>
            {/* <p>
            Understanding your target audience and their needs is essential. We will identify your ideal customer, conduct market research, and tailor your products or services to meet their needs.
            </p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Slider4}
            alt="Third slide"
          />
  
          <Carousel.Caption>
          <h5>/ Make Business Easy /</h5>
            <h3>Be Agile and Adaptable</h3>
            {/* <p>
               We will support to adjust your products or services, and experiment with new approaches as needed to stay ahead of the competition to adapt to change quickly.
            </p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Slider5}
            alt="Third slide"
          />
  
          <Carousel.Caption>
          <h5>/ Make Business Easy /</h5>
            <h3>Build Strong Relationships</h3>
            {/* <p>
            Business development is all about building relationships. We will maintain open lines of communication and follow up regularly to build trust and credibility. </p> */}
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </section>
    );
};

export default Slider;