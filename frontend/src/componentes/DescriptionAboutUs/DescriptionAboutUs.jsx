import React from 'react'
import ContactForm from "../../componentes/ContactForm/ContactForm";
import {
  AiOutlineMail,
  AiTwotonePhone,
  AiFillClockCircle,
} from "react-icons/ai";
import './DescriptionAboutUs.css'
const DescriptionAboutUs = () => {
  return (
    <div className="w-full bg-gray-100 flex flex-wrap justify-center items-start space-x-0 md:space-x-8 space-y-12 py-12">
    <div className=' '>
      <div className="w-full md:w-[300px] bg-white rounded-3xl space-y-4 ">
        <img
          className="w-full rounded-3xl"
          src="https://res.cloudinary.com/doczyujqf/image/upload/v1699970243/Zuch%20Properties/zach_ewiw86.jpg"
          alt=""
        />
        <div>
          <h1 className="text-2xl">Santiago Antunez CEO</h1>
        </div>
        <div className='px-3'>
          <p className="text-sm text-gray-600">
            "CREEMOS QUE TU HOGAR ES TU SANTUARIO, UN LUGAR DONDE LA SALUD
            EN TU VIDA EMPIEZA. ENCUENTRA EL HOGAR PERFECTO QUE RESUENA CON
            TU ALMA Y HAZ DE ESTE MUNDO UN MEJOR LUGAR."
          </p>
        </div>
        <div>
          <button className="button-chat text-xl rounded-full px-6 py-3 my-2 mb-4">
            Hablemos!
          </button>
        </div>
      </div>
      <div className="w-full md:w-[300px] space-y-2 flex justify-center items-center ">
      <div className="space-y-4 py-8">
            <a href="https://wa.me/+529984112504" target="_blank">
              <div className="flex justify-center items-center space-x-2 ">
                <AiTwotonePhone style={{ height: "30px", width: "30px" }} />
                <p className="text-gray-800 text-lg">+52 998 411 2504</p>
              </div>
            </a>
            <div className="flex justify-center  items-center space-x-2">
              <AiOutlineMail style={{ height: "30px", width: "30px" }} />
              <p className="text-gray-800 text-lg">zuchproperties@gmail.com</p>
            </div>
            <div className="flex justify-center  items-center space-x-2">
              <AiFillClockCircle style={{ height: "30px", width: "30px" }} />
              <p className="text-gray-800 text-lg">Lun - Vie: 10.00 am - 18.00 pm</p>
            </div>
          </div>
      </div>
    </div>
    <ContactForm />
  </div>
  )
}

export default DescriptionAboutUs
