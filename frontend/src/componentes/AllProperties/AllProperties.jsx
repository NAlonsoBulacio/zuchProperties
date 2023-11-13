import React from "react";
import "./AllProperties.css"
const AllProperties = ({ imgUrl, name, price, path }) => {

  return (
    <div className="mx-auto text-center overflow-hidden">
      <a href={`/property/${path}`}>
        <h1
          className="font-poppins-500 text-center text-4xl p-4"
          style={{ color: "#1f1f1f", fontSize: "42px" }}
        >
          {name}
        </h1>
      </a>
      <div className="relative overflow-hidden">
        <a href={`/property/${path}`}>
        <img src={imgUrl} alt="img of property" className="w-full img-scale" /></a>
        <button
        className="button-place h-auto w-4/6 absolute font-poppins-400 text-xl mt-4"
      >
       Unidades desde <br/>{price}
      </button>
      </div>
    </div>
  );
};

export default AllProperties;