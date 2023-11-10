import React from "react";
import "./AllProperties.css"
const AllProperties = ({ imgUrl, name, price }) => {

  return (
    <div className="mx-auto text-center overflow-hidden">
      <a href="/">
        <h1
          className="font-poppins-500 text-center text-4xl p-4"
          style={{ color: "#001659", fontSize: "42px" }}
        >
          {name}
        </h1>
      </a>
      <div className="relative overflow-hidden">
        <div className="shadow absolute"></div>
        <img src={imgUrl} alt="img of property" className="w-full" />
        <button
        className="button-place w-3/6 absolute font-poppins-400 text-lg h-10 mt-4"
      >
        Ver mas
      </button>
      </div>
    </div>
  );
};

export default AllProperties;