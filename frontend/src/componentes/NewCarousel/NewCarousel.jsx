import React, { useState, useEffect } from "react";
import "./NewCarousel.css";
const CarouselSlider = () => {
  const images = [
    "https://res.cloudinary.com/doczyujqf/image/upload/v1700068022/Zuch%20Properties/Slides/slide1_kwopte_pior4j_11zon_udzjq7.webp",
    "https://res.cloudinary.com/doczyujqf/image/upload/v1700068022/Zuch%20Properties/Slides/slide2_r91igj_zllutk_11zon_jwegbb.webp",
    "https://res.cloudinary.com/doczyujqf/image/upload/v1700068022/Zuch%20Properties/Slides/slide3_bz7to1_xeg5wx_11zon_zwtfwt.webp",
  ];
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(images[0]);

  useEffect(() => {
    const preloadImages = () => {
      images.forEach((image) => {
        const img = new Image();
        img.src = image;
      });
    };
    preloadImages();
  }, [images]);
  
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
