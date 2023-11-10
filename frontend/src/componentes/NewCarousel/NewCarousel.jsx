import React, {useState, useEffect} from 'react';
import './NewCarousel.css';
const CarouselSlider = () => {
  const images = ["https://res.cloudinary.com/doczyujqf/image/upload/v1699444913/slide1_kwopte.jpg",
   "https://res.cloudinary.com/doczyujqf/image/upload/v1699444938/slide2_r91igj.jpg", "https://res.cloudinary.com/doczyujqf/image/upload/v1699444942/slide3_bz7to1.jpg",];
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(images[0]);

  useEffect(() => {
    const autoplayInterval = setInterval(() => {
      next();
    }, 8000);

    return () => {
      clearInterval(autoplayInterval);
    };
  }, [selectedIndex]);

  // const previous = () => {
  //   const condition = selectedIndex > 0;
  //   const nextIndex = condition ? selectedIndex - 1 : images.length -1;
  //   setSelectedImage(images[nextIndex]);
  //   setSelectedIndex(nextIndex);
  // };
  const next = () => {
    const condition = selectedIndex < images.length - 1;
    const nextIndex = condition ? selectedIndex + 1 : 0;
    setSelectedImage(images[nextIndex]);
    setSelectedIndex(nextIndex);
  };
  return (
    <div className="carousel-div w-full">
      <div className="carousel-slider overflow-hidden">
        <img
          key={selectedIndex}
          src={selectedImage}
          alt="Imagen carrusel"
          className="carousel-img image-fade-in-zoom"
        />
        <h2 className="title-over font-montserrat-300 tracking-">
          ZUCH PROPERTIES
        </h2>
        <h1 className="title-over-image font-raleway-700 text-8xl w-2/3">
          WE HELP YOU MAKE YOUR DREAMS <br />
          COME TRUE
        </h1>
        <button>
          Ver todas las propiedades
        </button>
      </div>
    </div>
  );
};

export default CarouselSlider;
