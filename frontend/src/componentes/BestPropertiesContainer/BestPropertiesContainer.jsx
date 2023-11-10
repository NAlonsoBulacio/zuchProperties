import React from "react";
import BestProperties from "../BestProperties/BestProperties"
const BestPropertiesContainer = () => {
  const projects = [
    {
      name: "Paam Cheel",
      img: "https://maxproperties.com.mx/wp-content/uploads/2021/09/paam.webp",
      price: "3.600.000 MXN",
    },
    {
      name: "Parques Zamá",
      img: "https://maxproperties.com.mx/wp-content/uploads/2022/05/INICIO-1.webp",
      price: "4.100.000 MXN",
    },
    {
      name: "Lik Organic",
      img: "https://maxproperties.com.mx/wp-content/uploads/2022/05/lik_orga_inicio.png",
      price: "3.860.000 MXN",
    },
    {
      name: "Vidaraa",
      img: "https://maxproperties.com.mx/wp-content/uploads/2022/09/vidara_inicio.png",
      price: "3.600.000 MXN",
    },
    {
      name: "Becán",
      img: "https://maxproperties.com.mx/wp-content/uploads/2022/07/BECAN_INDES.webp",
      price: "3.600.000 MXN",
    },
    {
      name: "Mar A'Bella",
      img: "https://maxproperties.com.mx/wp-content/uploads/2023/08/qwe.png",
      price: "3.600.000 MXN",
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
              />
            </div>
          ))}
        </div>
      </div>
      <div className="mb-8">
        <button
          className="w-1/2 h-16 text-3xl"
          style={{ backgroundColor: "#001659", color: "#FFFFFF" }}
        >
          Haz click aqui para ver todas las propiedades
        </button>
      </div>
    </div>
  );
};

export default BestPropertiesContainer;
