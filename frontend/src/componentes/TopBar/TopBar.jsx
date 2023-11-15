import React from "react";
import {
  AiTwotonePhone,
  AiFillClockCircle,
  AiOutlineInstagram,
} from "react-icons/ai";
import { BiLogoLinkedin, BiLogoFacebook } from "react-icons/bi";
import { BsPinMapFill } from "react-icons/bs";
const TopBar = () => {
  return (
    <div className="w-full h-12 flex justify-center items-center">
      <div className="phone-div flex justify-center items-center lg:hidden">
        <div className="flex justify-center items-center">
          <div className="flex justify-center items-center space-x-4">
            <button
              className="flex justify-center items-center rounded-full h-8 w-8 transition-transform transform hover:scale-105"
              style={{ backgroundColor: "#1f1f1f" }}
            >
              <AiOutlineInstagram
                className="text-white"
                style={{ height: "21px", width: "21px" }}
              />
            </button>
            <button
              className="flex justify-center items-center rounded-full h-8 w-8 transition-transform transform hover:scale-105"
              style={{ backgroundColor: "#1f1f1f" }}
            >
              <BiLogoFacebook
                className="text-white"
                style={{ height: "21px", width: "21px" }}
              />
            </button>
            <button
              className="flex justify-center items-center rounded-full h-8 w-8 transition-transform transform hover:scale-105"
              style={{ backgroundColor: "#1f1f1f" }}
            >
              <BiLogoLinkedin
                className="text-white"
                style={{ height: "21px", width: "21px" }}
              />
            </button>
          </div>
        </div>
      </div>
      <div className="full-div flex justify-center items-center hidden lg:flex">
        <div className="flex justify-center items-center space-x-10">
          <div className="flex justify-center items-center space-x-2">
            <AiTwotonePhone />
            <p>+52 984 113 6390</p>
          </div>
          <div className="flex justify-center items-center space-x-2">

            <BsPinMapFill />
            <p>
              Tulum, Cancún, Playa del Carmen, Cozumel .Riviera Maya
            </p>
          </div>
          <div className="flex justify-center items-center space-x-2">
          <AiFillClockCircle />
            <p>Lun - Vie: 10.00 am - 18.00 pm</p>
          </div>
          <div className="flex justify-center items-center space-x-2">
            <button
              className="flex justify-center items-center rounded-full h-8 w-8 transition-transform transform hover:scale-105"
              style={{ backgroundColor: "#1f1f1f" }}
            >
              <AiOutlineInstagram
                className="text-white"
                style={{ height: "21px", width: "21px" }}
              />
            </button>
            <button
              className="flex justify-center items-center rounded-full h-8 w-8 transition-transform transform hover:scale-105"
              style={{ backgroundColor: "#1f1f1f" }}
            >
              <BiLogoFacebook
                className="text-white"
                style={{ height: "21px", width: "21px" }}
              />
            </button>
            <button
              className="flex justify-center items-center rounded-full h-8 w-8 transition-transform transform hover:scale-105"
              style={{ backgroundColor: "#1f1f1f" }}
            >
              <BiLogoLinkedin
                className="text-white"
                style={{ height: "21px", width: "21px" }}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
