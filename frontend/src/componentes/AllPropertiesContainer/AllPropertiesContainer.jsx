import React, { useEffect, useState } from "react";
import AllProperties from "../AllProperties/AllProperties";
const AllPropertiesContainer = ({ id, propiedades, place_name }) => {
  // const properties = [
  //   {
  //     name: "Paam Cheel",
  //     img: "https://maxproperties.com.mx/wp-content/uploads/2021/09/paam.webp",
  //     price: "3.600.000 MXN",
  //     path: "paam-cheel",
  //   },
  //   {
  //     name: "Parques Zamá",
  //     img: "https://maxproperties.com.mx/wp-content/uploads/2022/05/INICIO-1.webp",
  //     price: "4.100.000 MXN",
  //     path: "parques-zama",
  //   },
  //   {
  //     name: "Lik Organic",
  //     img: "https://maxproperties.com.mx/wp-content/uploads/2022/05/lik_orga_inicio.png",
  //     price: "3.860.000 MXN",
  //     path: "lik-organic",
  //   },
  //   {
  //     name: "Vidaraa",
  //     img: "https://maxproperties.com.mx/wp-content/uploads/2022/09/vidara_inicio.png",
  //     price: "3.600.000 MXN",
  //     path: "vidaraa",
  //   },
  //   {
  //     name: "Becán",
  //     img: "https://maxproperties.com.mx/wp-content/uploads/2022/07/BECAN_INDES.webp",
  //     price: "3.600.000 MXN",
  //     path: "becan",
  //   },
  //   {
  //     name: "Mar A'Bella",
  //     img: "https://maxproperties.com.mx/wp-content/uploads/2023/08/qwe.png",
  //     price: "3.600.000 MXN",
  //     path: "mar-abella",
  //   },
  // ];
  const [properties, setProperties] = useState(null);

  console.log(id);
  console.log(propiedades);
  useEffect(() => {
    const objetosEncontrados = [];

    for (let i = 0; i < propiedades.length; i++) {
      if (propiedades[i].place_id === id) {
        objetosEncontrados.push(propiedades[i]);
      }
    }
    if (objetosEncontrados) {
      setProperties(objetosEncontrados);
    } else {
      console.log("Objeto no encontrado");
    }
  }, [id, propiedades]);
  return (
    <div className="bg-gray-100 w-full py-14">
      <div className="max">
        <h1
          className="font-outfit-600 text-center text-3xl sm:text-3xl md:text-7xl "
          style={{ color: "#1f1f1f" }}
        >
          {" "}
          Propiedades en {place_name}
        </h1>
      </div>
      <div
        className="w-full flex items-start justify-center py-10"
        style={{ height: "60vw" }}
      >
        <div className="flex flex-wrap md:max-w-[1300px] items-center justify-center">
          {properties?.map((datos, index) => (
            <div key={index} className="w-full sm:w-1/2 md:w-1/3 p-4 mb-8">
              <AllProperties
                imgUrl={datos.photo}
                name={datos.name}
                price={datos.price}
                path={datos.path}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllPropertiesContainer;
