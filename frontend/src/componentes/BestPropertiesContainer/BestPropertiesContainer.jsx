import React from "react";
import BestProperties from "../BestProperties/BestProperties";
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
      price: "3.860.000 MXN",
      path: "lik-organic",
    },
    {
      name: "Vidaraa",
      img: "https://maxproperties.com.mx/wp-content/uploads/2022/09/vidara_inicio.png",
      price: "3.600.000 MXN",
      path: "vidaraa",
    },
    {
      name: "Becán",
      img: "https://maxproperties.com.mx/wp-content/uploads/2022/07/BECAN_INDES.webp",
      price: "3.600.000 MXN",
      path: "becan",
    },
    {
      name: "Mar A'Bella",
      img: "https://maxproperties.com.mx/wp-content/uploads/2023/08/AnyConv.com__mar-01.webp",
      price: "3.600.000 MXN",
      path: "mar-abella",
    },
  ];
  return (
    <div>
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
          <button
            className="w-2/3 md:w-1/2 h-16 text-xl md:text-3xl"
            style={{ backgroundColor: "#1f1f1f", color: "#FFFFFF" }}
          >
            Haz click aqui para ver todas las propiedades
          </button>
        </a>
      </div>
    </div>
  );
};

export default BestPropertiesContainer;
