import React from "react";
import {
  AiOutlineMail,
  AiOutlineInstagram,
  AiTwotonePhone,
  AiFillClockCircle,
} from "react-icons/ai";
import { BiLogoLinkedin, BiLogoFacebook } from "react-icons/bi";
const FooterPhone = () => {
  return (
    <div>
      <div className="max-w-[340px] py-8 w-full flex flex-wrap justify-center items-center space-y-8">
        <div className="w-full space-y-3">
          <div>
            <h1 className="text-gray-400 text-xl">Nuestras redes sociales.</h1>
          </div>
          <div className="flex flex-wrap justify-center items-center space-x-4">
          <a href="https://www.instagram.com/zuchproperties/" target="_blank">
            <button
              className="flex justify-center items-center rounded-full h-10 w-10 transition-transform transform hover:scale-110"
              style={{ backgroundColor: "#1f1f1f" }}
            >
              <AiOutlineInstagram
                className="text-gray-300"
                style={{ height: "28px", width: "28px" }}
              />
            </button>
            </a>
            <button
              className="flex justify-center items-center rounded-full h-10 w-10 transition-transform transform hover:scale-110"
              style={{ backgroundColor: "#1f1f1f" }}
            >
              <BiLogoLinkedin
                className="text-gray-200"
                style={{ height: "28px", width: "28px" }}
              />
            </button>
            <a href="https://www.facebook.com/profile.php?id=100063976607904&mibextid=LQQJ4d" target="_blank">
            <button
              className="flex justify-center items-center rounded-full h-10 w-10 transition-transform transform hover:scale-110"
              style={{ backgroundColor: "#1f1f1f" }}
            >
              <BiLogoFacebook
                className="text-gray-200"
                style={{ height: "28px", width: "28px" }}
              />
            </button>
            </a>
          </div>
        </div>
        <div className="w-full space-y-2">
        <a href="https://wa.me/+529984112504" target="_blank">
          <div className="flex justify-center items-center space-x-2 ">
            <AiTwotonePhone
              className="text-white"
              style={{ height: "23px", width: "23px" }}
            />
            <p className="text-gray-300">+52 998 411 2504</p>
          </div>
          </a>
          <div className="flex justify-center  items-center space-x-2">
            <AiOutlineMail
              className="text-white"
              style={{ height: "23px", width: "23px" }}
            />
            <p className="text-gray-300">zuchproperties@gmail.com</p>
          </div>
          <div className="flex justify-center  items-center space-x-2">
            <AiFillClockCircle
              className="text-white"
              style={{ height: "23px", width: "23px" }}
            />
            <p className="text-gray-300">Lun - Vie: 10.00 am - 18.00 pm</p>
          </div>
        </div>
        <div className="w-full ">
          <div className="flex justify-center items-center ">
            <p className=" text-gray-400">
              © Copyright 2023 | {""}
              <span className="text-white">Zuch Properties </span>| <br/> All Rights
              Reserved <br /> Constructores de sueños. <br/> Creadores de realidades.
            </p>

          </div>
          <a href="/terms-condition" className="text-white">Terminos y Condiciones</a>
        </div>
      </div>
    </div>
  );
};

export default FooterPhone;
