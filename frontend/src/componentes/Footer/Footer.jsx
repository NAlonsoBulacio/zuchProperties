import React from "react";
import { AiOutlineInstagram } from "react-icons/ai";
import { BiLogoLinkedin, BiLogoFacebook } from "react-icons/bi";
const Footer = () => {
  return (
    <div
      className="w-full h-auto flex justify-center items-center"
      style={{ backgroundColor: "#1f1f1f" }}
    >
      <div className="max-w-[1450px] py-8 w-full flex flex-wrap justify-center items-center">
        <div className="w-2/3">
          <div className="flex justify-center items-center ">
            <p className=" text-gray-400">
              Copyright © 2023.{" "}
              <span className="text-white">Zuch Properties </span>- Constructores
              de sueños. Creadores de realidades.
            </p>
          </div>
        </div>
        <div className="w-1/3 flex flex-wrap justify-center items-center space-x-8">
          <button
            className="flex justify-center items-center rounded-full h-10 w-10 transition-transform transform hover:scale-110"
            style={{ backgroundColor: "#1f1f1f" }}
          >
            <AiOutlineInstagram className="text-gray-300" style={{height: "34px", width: "34px"}}/>
          </button>
          <button
            className="flex justify-center items-center rounded-full h-10 w-10 transition-transform transform hover:scale-110"
            style={{ backgroundColor: "#1f1f1f" }}
          >
            <BiLogoLinkedin className="text-gray-200" style={{height: "34px", width: "34px"}}/>
          </button>
          <button
            className="flex justify-center items-center rounded-full h-10 w-10 transition-transform transform hover:scale-110"
            style={{ backgroundColor: "#1f1f1f" }}
          >
            <BiLogoFacebook className="text-gray-200" style={{height: "34px", width: "34px"}}/>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
