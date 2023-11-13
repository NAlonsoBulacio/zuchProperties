import React, { useEffect, useState } from "react";
import AllProperties from "../AllProperties/AllProperties";
const AllPropertiesContainer = ({
  id,
  propiedades,
  place_name,
  place_descripcion,
}) => {
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
      <div className="space-y-2">
        <h1
          className="font-outfit-600 text-center text-3xl sm:text-3xl md:text-7xl "
          style={{ color: "#1f1f1f" }}
        >
          {" "}
          Propiedades en {place_name}
        </h1>
        <div className="flex justify-center items-center">
          <p className="max-w-[1300px] text-2xl text-gray-700">{place_descripcion}</p>
        </div>
      </div>
      <div
        className="w-full flex items-start justify-center py-10"
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
