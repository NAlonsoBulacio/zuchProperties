import React from "react";
import './Place.css'
const Place = ({ imgUrl, name }) => {

  return (
    <div className="mx-auto px-6 text-center overflow-hidden">
        {/* <h1
          className="font-poppins-500 text-center text-4xl p-4"
          style={{ color: "#1f1f1f", fontSize: "42px" }}
        >
          {name}
        </h1> */}
      <div className="relative overflow-hidden">
        <div className="shadow-place absolute h-full overflow-hidden"></div>
        <img src={imgUrl} alt="img of property" className="w-full" />
        <h1
          className="font-poppins-400 text-center text-4xl p-4 absolute left-1/2 right-1/2 bottom-10"
          style={{ color: "#ffffff", fontSize: "50px" }}
        >
          {name}
        </h1>
      </div>
    </div>
  );
};

export default Place;