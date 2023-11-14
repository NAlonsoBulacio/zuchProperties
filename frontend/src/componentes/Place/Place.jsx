import React from "react";
import "./Place.css";
const Place = ({ imgUrl, name }) => {
  return (
    <div className="mx-auto px-6 text-center overflow-hidden">
      <div className="relative overflow-hidden">
        <div className="shadow-place absolute h-full overflow-hidden"></div>
        <img src={imgUrl} alt="img of property" className="w-full h-1/4" />
        <h1
          className="title-place font-poppins-400 text-center text-lg md:text-4xl p-4 absolute left-1/2 right-3/2 md:right-1/2 bottom-4 md:bottom-10"
          style={{ color: "#ffffff" }}
        >
          {name}
        </h1>
      </div>
    </div>
  );
};

export default Place;
