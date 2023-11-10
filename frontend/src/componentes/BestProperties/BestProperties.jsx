import React from "react";

const BestProperties = ({ imgUrl, name, price }) => {
  return (
    <div className="mx-auto text-center">
      <a href="/">
        <h1
          className="font-poppins-500 text-center text-4xl p-4"
          style={{ color: "#001659", fontSize: "42px" }}
        >
          {name}
        </h1>
      </a>
      <a href="/">
        <img src={imgUrl} alt="img of property" />
      </a>
      <button
        className="w-full font-poppins-400 text-lg h-10 mt-4"
        style={{ backgroundColor: "#001659", color: "#FFFFFF" }}
      >
        Unidades desde {price}
      </button>
    </div>
  );
};

export default BestProperties;
