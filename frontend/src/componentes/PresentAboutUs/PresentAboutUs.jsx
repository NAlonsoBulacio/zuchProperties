import React from 'react'
import img1 from "../../multimedia/induccion.png";
import img2 from "../../multimedia/poblacion.png";
import img3 from "../../multimedia/precision.png";
import img4 from "../../multimedia/presentacion.png";
const PresentAboutUs = () => {
  return (
    <div className="w-full flex justify-center items-center py-8">
    <div className="w-1/2 px-8">
      <img
        src="https://res.cloudinary.com/doczyujqf/image/upload/v1699970685/Zuch%20Properties/happy-cancun_nrfvf3.jpg"
        alt=""
      />
    </div>
    <div className="w-1/2">
      <div className="max-w-[700px]">
        <h1 className="font-raleway-700 text-center text-4xl md:text-6xl">
          Zuch Properties
        </h1>
        <p>
          Somos una agencia inmobiliaria líder en Playa del Carmen, Tulum y
          la Riviera Maya, <br/>nos distinguimos por nuestra ética profesional y
          honestidad.
        </p>
      </div>
      <div className="w-full flex flex-wrap justify-center items-center py-8">
        <div className="w-1/2 px-16 ">
          <div className="w-full flex justify-start items-center space-x-6 mb-4">
            <img
              src={img2}
              className=""
              style={{ height: "45px", width: "45px" }}
            />
            <h1 className="font-raleway-700 text-center text-2xl ">
              Asistencia
            </h1>
          </div>
          <div className="w-full">
            <p>
              Negociaremos y presentaremos ofertas en tu nombre, dándote una
              experiencia sin estrés y haciendo que todo sea simples,
              eficientes y agradables.
            </p>
          </div>
        </div>
        <div className="w-1/2 px-16">
          <div className="w-full flex justify-start items-center space-x-6">
            <img
              src={img1}
              className=""
              style={{ height: "45px", width: "45px" }}
            />
            <h1 className="font-raleway-700 text-center text-2xl ">
              Asistencia
            </h1>
          </div>
          <div className="w-full">
            <p>
              Negociaremos y presentaremos ofertas en tu nombre, dándote una
              experiencia sin estrés y haciendo que todo sea simples,
              eficientes y agradables.
            </p>
          </div>
        </div>
        <div className="w-1/2 px-16">
          <div className="w-full flex justify-start items-center space-x-6">
            <img
              src={img4}
              className=""
              style={{ height: "45px", width: "45px" }}
            />
            <h1 className="font-raleway-700 text-center text-2xl ">
              Asistencia
            </h1>
          </div>
          <div className="w-full">
            <p className="text-gray-600">
              Negociaremos y presentaremos ofertas en tu nombre, dándote una
              experiencia sin estrés y haciendo que todo sea simples,
              eficientes y agradables.
            </p>
          </div>
        </div>
        <div className="w-1/2 px-16">
          <div className="w-full flex justify-start items-center space-x-6">
            <img
              src={img3}
              className=""
              style={{ height: "45px", width: "45px" }}
            />
            <h1 className="font-raleway-700 text-center text-2xl ">
              Asistencia
            </h1>
          </div>
          <div className="w-full">
            <p>
              Negociaremos y presentaremos ofertas en tu nombre, dándote una
              experiencia sin estrés y haciendo que todo sea simples,
              eficientes y agradables.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default PresentAboutUs
