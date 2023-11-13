import React from "react";
const Place = ({ imgUrl, name }) => {

  return (
    <div className="mx-auto text-center overflow-hidden">
        <h1
          className="font-poppins-500 text-center text-4xl p-4"
          style={{ color: "#001659", fontSize: "42px" }}
        >
          {name}
        </h1>
      <div className="relative overflow-hidden">
        <div className="shadow absolute"></div>
        <img src={imgUrl} alt="img of property" className="w-full" />
      </div>
    </div>
  );
};

export default Place;