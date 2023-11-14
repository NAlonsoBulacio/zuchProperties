import React, { useState, useEffect } from "react";
import "./NewCarousel.css";
const CarouselSlider = () => {
  const images = [
    "https://res.cloudinary.com/doczyujqf/image/upload/v1699640063/slides/slide1_kwopte_pior4j.webp",
    "https://res.cloudinary.com/doczyujqf/image/upload/v1699640026/slides/slide2_r91igj_zllutk.webp",
    "https://res.cloudinary.com/doczyujqf/image/upload/v1699639874/slides/slide3_bz7to1_xeg5wx.webp",
  ];
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
        <h2 className="title-over font-montserrat-300 ">
          ZUCH PROPERTIES
        </h2>
        <div className="max-w-[1300px]">
        <h1 className="title-over-image w-full font-raleway-700 text-5xl md:text-8xl md:w-2/3">
          WE HELP YOU MAKE YOUR DREAMS <br />
          COME TRUE
        </h1>
        </div>
        <button>Ver todas las propiedades</button>
      </div>
    </div>
  );
};

export default CarouselSlider;
