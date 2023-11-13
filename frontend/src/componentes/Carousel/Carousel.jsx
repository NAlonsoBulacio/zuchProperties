import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Carousel.css";
const MyCarousel = ({ photos }) => {
  return (
    <div className="carousel-container">
      <Carousel
        autoPlay={true}
        showArrows={true}
        showStatus={false}
        showIndicators={false}
        interval={5000}
        infiniteLoop={true}
        useKeyboardArrows={true}
      >
        {photos?.map((photo) => (
          <div className="carousel-slide">
            <div className="image-container">
              <img src={photo} alt="Imagen 1" className="carousel-image" />
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default MyCarousel;
