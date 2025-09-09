import { useEffect, useState } from "react";
import "./Slider.css";
import Carousel from "react-bootstrap/Carousel";
import { getImageUrl } from "../../utils/getImage";

const Slider = () => {
  const [sliderData, setSliderData] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:1337/api/sliders?populate=*`)
      .then((res) => res.json())
      .then((data) => {
        setSliderData(data.data);
        console.log(data.data);
      })
      .catch((err) => {
        console.error("Error fetching slider data:", err);
      });
  }, []);

  return (
    <section className="slider-area">
      <Carousel fade>
        {sliderData.map((slide) => (
          <Carousel.Item key={slide.id}>
            <img
              className="d-block w-100"
              src={getImageUrl(slide.image)}
              alt={slide.alt}
            />
            <Carousel.Caption>
              <h5 className="subtitle">{slide.subtitle}</h5>
              <h3>{slide.title}</h3>
              <p className="text-white">{slide.description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </section>
  );
};

export default Slider;
