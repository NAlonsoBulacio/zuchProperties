import React from "react";
import {
  AiOutlineMail,
  AiOutlineInstagram,
  AiTwotonePhone,
  AiFillClockCircle,
} from "react-icons/ai";
import { BiLogoLinkedin, BiLogoFacebook } from "react-icons/bi";
import { BsPinMapFill } from "react-icons/bs";
const Footer = () => {
  return (
    <div
      className="w-full h-auto flex justify-center items-center"
      style={{ backgroundColor: "#1f1f1f" }}
    >
      <div className="max-w-[1450px] py-8 w-full flex flex-wrap justify-center items-center">
      <div className="w-1/3 space-y-2">
          <div className="flex justify-center items-center space-x-2 ">
            <AiTwotonePhone
              className="text-white"
              style={{ height: "23px", width: "23px" }}
            />
            <p className="text-gray-300">+52 984 113 6390</p>
          </div>
          <div className="flex justify-center  items-center space-x-2">
            <AiOutlineMail
              className="text-white"
              style={{ height: "23px", width: "23px" }}
            />
            <p className="text-gray-300">sach@gmail.com</p>
          </div>
          <div className="flex justify-center  items-center space-x-2">
            <AiFillClockCircle
              className="text-white"
              style={{ height: "23px", width: "23px" }}
            />
            <p className="text-gray-300">Lun - Vie: 10.00 am - 18.00 pm</p>
          </div>
        </div>
        <div className="w-1/3">
          <div className="flex justify-center items-center ">
            <p className=" text-gray-400">
              © Copyright 2023 | {""}
              <span className="text-white">Zuch Properties </span>| All Rights
              Reserved <br /> Constructores de sueños. Creadores de realidades.
            </p>
          </div>
        </div>
        <div className="w-1/3 space-y-3">
          <div>
            <h1 className="text-gray-400 text-xl">Nuestras redes sociales.</h1>
          </div>
          <div className="flex flex-wrap justify-center items-center space-x-4">
            <button
              className="flex justify-center items-center rounded-full h-10 w-10 transition-transform transform hover:scale-110"
              style={{ backgroundColor: "#1f1f1f" }}
            >
              <AiOutlineInstagram
                className="text-gray-300"
                style={{ height: "28px", width: "28px" }}
              />
            </button>
            <button
              className="flex justify-center items-center rounded-full h-10 w-10 transition-transform transform hover:scale-110"
              style={{ backgroundColor: "#1f1f1f" }}
            >
              <BiLogoLinkedin
                className="text-gray-200"
                style={{ height: "28px", width: "28px" }}
              />
            </button>
            <button
              className="flex justify-center items-center rounded-full h-10 w-10 transition-transform transform hover:scale-110"
              style={{ backgroundColor: "#1f1f1f" }}
            >
              <BiLogoFacebook
                className="text-gray-200"
                style={{ height: "28px", width: "28px" }}
              />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Footer;
