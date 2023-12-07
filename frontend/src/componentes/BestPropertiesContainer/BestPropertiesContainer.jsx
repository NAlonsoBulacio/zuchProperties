import React from "react";
import BestProperties from "../BestProperties/BestProperties";
import { motion } from "framer-motion";
const BestPropertiesContainer = () => {
  const projects = [
    {
      name: "Paam Cheel",
      img: "https://res.cloudinary.com/doczyujqf/image/upload/v1699986457/Zuch%20Properties/Propiedades/Paam%20Cheel/paam_cheel_07-1200x700_xjjlk4.webp",
      price: "3.600.000 MXN",
      path: "paam-cheel",
    },
    {
      name: "Parques Zamá",
      img: "https://maxproperties.com.mx/wp-content/uploads/2022/05/INICIO-1.webp",
      price: "4.100.000 MXN",
      path: "parques-zama",
    },
    {
      name: "Lik Organic",
      img: "https://maxproperties.com.mx/wp-content/uploads/2022/05/lik_orga_inicio.png",
      price: "2.235.477 MXN",
      path: "lik-organic",
    },
    {
      name: "Vidaraa",
      img: "https://maxproperties.com.mx/wp-content/uploads/2022/09/vidara_inicio.png",
      price: "4.328.658 MXN",
      path: "vidaraa",
    },
    {
      name: "Becán",
      img: "https://maxproperties.com.mx/wp-content/uploads/2022/07/BECAN_INDES.webp",
      price: "7.000.000 MXN",
      path: "becan",
    },
    {
      name: "Mar A'Bella",
      img: "https://maxproperties.com.mx/wp-content/uploads/2023/08/AnyConv.com__mar-01.webp",
      price: "7.890.000 MXN",
      path: "mar-abella",
    },
  ];
  const cardVariants = {
    offscreen: {
      opacity: 0,
    },
    onscreen: {
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1.8,
      },
    },
  };
  return (
    <div className="md:py-8">
      <div className="flex justify-center">
        <div className="w-full md:max-w-[1300px] flex flex-wrap justify-center items-center py-4 md:py-10 px-3 md:px-0">
          <div className="w-full">
            <h1 className="font-outfit-800 text-gray-800 text-xl md:text-5xl text-left">
              ENCUENTRA LA PROPIEDAD, CASA O DEPARTAMENTO DE TUS SUEÑOS
            </h1>
          </div>
          <div className="w-full flex justify-center md:justify-start ">
            <div className="w-1/2">
              <hr className="my-4 border-[1.5px] border-cyan-500" />
            </div>
          </div>
          <div className="w-full">
            <p className="text-center md:text-left text-lg md:text-2xl font-outfit-400 text-gray-700 ">
              Tenemos propiedades en venta por toda la Riviera Maya que se ajustan a tu
              presupuesto y estilo. 
            </p>
          </div>
        </div>
      </div>
      <div className="w-full flex items-center justify-center">
        <div className="flex flex-wrap md:max-w-[1300px] items-center justify-center">
          {projects.map((datos, index) => (
            <div key={index} className="w-full sm:w-1/2 md:w-1/3 p-4 mb-8">
              <BestProperties
                imgUrl={datos.img}
                name={datos.name}
                price={datos.price}
                path={datos.path}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="mb-8">
        <a href="/places">
          <motion.button
            className="w-2/3 md:w-1/2 h-16 text-xl md:text-3xl"
            style={{ backgroundColor: "#1f1f1f", color: "#FFFFFF" }}
            variants={cardVariants}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.2 }}
          >
            Haz click aqui para ver todas las propiedades
          </motion.button>
        </a>
      </div>
    </div>
  );
};

export default BestPropertiesContainer;
