import React from "react";
import './BestProperties.css'
const BestProperties = ({ imgUrl, name, price, path }) => {
  return (
    <div className="mx-auto text-center">
      <a href={`/property/${path}`}>
        <h1
          className="font-poppins-500 text-center text-4xl p-4"
          style={{ color: "#1f1f1f", fontSize: "42px" }}
        >
          {name}
        </h1>
      </a>
      <a href="/">
        <img src={imgUrl} alt="img of property" className="img-best"/>
      </a>
      <button
        className="w-full font-poppins-400 text-lg h-10 mt-4"
        style={{ backgroundColor: "#1f1f1f", color: "#FFFFFF" }}
      >
        Unidades desde {price}
      </button>
    </div>
  );
};

export default BestProperties;
