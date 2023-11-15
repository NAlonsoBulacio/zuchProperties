import React, { useEffect, useState } from "react";
import AllProperties from "../AllProperties/AllProperties";
const AllPropertiesContainer = ({
  id,
  propiedades,
  place_name,
  place_descripcion,
}) => {
  const [properties, setProperties] = useState(null);
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
        <div className="space-y-2">
          <h1
            className="font-outfit-600 text-center text-4xl md:text-7xl "
            style={{ color: "#1f1f1f" }}
          >
            {" "}
            Propiedades en {place_name}
          </h1>
          <div className="flex justify-center items-center">
            <p className="max-w-[1300px] text-lg md:text-2xl text-gray-700">
              {place_descripcion}
            </p>
          </div>
        </div>
        <div className="w-full flex items-start justify-center py-10">
          <div className="flex flex-wrap md:max-w-[1300px] items-center justify-center">
            {properties?.map((datos, index) => (
              <div key={index} className={properties.length === 1 ? "w-full p-4 px-8 mb-8": "w-full md:w-1/2 p-4 px-8 mb-8"}>
                <AllProperties
                  imgUrl={datos.photo}
                  description={datos.description}
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
