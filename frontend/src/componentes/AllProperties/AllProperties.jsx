import React from "react";
import "./AllProperties.css";
const AllProperties = ({ imgUrl, name, price, path, description }) => {
  return (
    <a href={`/property/${path}`}>
    <div className="mx-auto text-center overflow-hidden border-container ">
      <div className="img-div relative overflow-hidden shadow-bottom">
        <div className="relative">
          <a href={`/property/${path}`}>
            <img
              src={imgUrl}
              alt="img of property"
              className="w-full img-scale"
            />
          </a>
        </div>
      </div>
      <div className="px-4">
        <div className="py-4 px-2">
          <a href={`/property/${path}`}>
            <h1
              className="font-poppins-500 text-center md:text-left text-md md:text-4xl"
              style={{ color: "#1f1f1f", fontSize: "42px" }}
            >
              {name}
            </h1>
          </a>
          <p className="text-md md:text-lg text-left text-gray-700">
            {description}
          </p>
        </div>
        <div className="flex justify-end items-center py-4 px-3">
          <p className="text-md md:text-lg text-gray-500">Unidades desde {price}</p>
        </div>
      </div>
    </div>
    </a>
  );
};

export default AllProperties;
