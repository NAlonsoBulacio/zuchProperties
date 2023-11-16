import React from "react";
import ContactForm from "../../componentes/ContactForm/ContactForm";
import {
  AiOutlineMail,
  AiTwotonePhone,
  AiFillClockCircle,
} from "react-icons/ai";
const DescriptionContact = () => {
  return (
    <div className="w-full bg-gray-100 flex flex-wrap justify-center items-start space-x-0 md:space-x-8 py-12">
      <ContactForm />
      <div>
        <div className="w-full md:w-[400px] bg-white rounded-3xl py-4 space-y-4 ">
          <div>
            <h1 className="text-2xl">Información</h1>
          </div>
          <div className="px-3">
            <p className="text-sm  text-gray-600">
              "CREEMOS QUE TU HOGAR ES TU SANTUARIO, UN LUGAR DONDE LA SALUD EN
              TU VIDA EMPIEZA. ENCUENTRA EL HOGAR PERFECTO QUE RESUENA CON TU
              ALMA Y HAZ DE ESTE MUNDO UN MEJOR LUGAR."
            </p>
          </div>
          <div>
            <a href="https://wa.me/+529984112504" target="_blank">
              <button className="button-chat text-xl rounded-full px-4 py-3 my-2 mb-4">
                Chatea conmigo
              </button>
            </a>
          </div>
          <div className="w-full md:w-[400px] space-y-2 flex justify-center items-center ">
            <div className="space-y-4 py-8">
              <a href="https://wa.me/+529984112504" target="_blank">
                <div className="flex justify-center items-center space-x-2 ">
                  <AiTwotonePhone style={{ height: "35px", width: "35px" }} />
                  <p className="text-gray-800 text-xl">+54 3815305162</p>
                </div>
              </a>
              <div className="flex justify-center  items-center space-x-2">
                <AiOutlineMail style={{ height: "35px", width: "35px" }} />
                <p className="text-gray-800 text-xl">
                  zuchproperties@gmail.com
                </p>
              </div>
              <div className="flex justify-center  items-center space-x-2">
                <AiFillClockCircle style={{ height: "35px", width: "35px" }} />
                <p className="text-gray-800 text-xl">
                  Lun - Vie: 10.00 am - 18.00 pm
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DescriptionContact;
