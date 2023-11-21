import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import TopBar from "../../componentes/TopBar/TopBar";
import Header from "../../componentes/Header/Header";
import Flyer1 from "../../componentes/Flyer1/Flyer1";
import AllPropertiesContainer from "../../componentes/AllPropertiesContainer/AllPropertiesContainer";
import propiedades from "../../utils/propiedades";
import Footer from "../../componentes/Footer/Footer";
import { FaArrowLeftLong } from "react-icons/fa6";
const Properties = () => {
  const [properties, setProperties] = useState(null);
  const [place, setPlace] = useState(null);
  const { place_id } = useParams();

  useEffect(() => {
    let arrayFounded = [];

    for (let i = 0; i < propiedades.length; i++) {
      if (propiedades[i].place_id === place_id) {
        arrayFounded.push(propiedades[i]);
      }
    }
    if (arrayFounded) {
      setProperties(arrayFounded);
    } else {
      console.log("Objeto no encontrado");
    }
  }, [place_id, propiedades]);

  const places = [
    {
      name: "Tulum",
      img: "https://res.cloudinary.com/doczyujqf/image/upload/v1699901380/Places/tulum_ipsnvz.jpg",
      id: "1",
      place_descripcion:
        "Tulum es una ciudad en donde abunda la fauna marina, desde este lugar se organizan excursiones de buceo a la famosa Barrera de Coral Mesoamericana.",
    },
    {
      name: "Cozumel",
      img: "https://res.cloudinary.com/doczyujqf/image/upload/v1699901382/Places/cozumel_nzxwe7.jpg",
      id: "2",
      place_descripcion:
        "Cozumel es una isla mexicana en el Caribe, es un puerto popular para cruceros y famosa por sus sitios de buceo.",
    },
    {
      name: "Playa del Carmen",
      img: "https://res.cloudinary.com/doczyujqf/image/upload/v1699901371/Places/playadelcarmen_bsvzbb.jpg",
      id: "3",
      place_descripcion:
        "Playa del Carmen es un balneario costero de México que se ubica a lo largo de la costa caribeña de la Riviera Maya, en la Península de Yucatán. Pertenece al estado de Quintana Roo y es famosa por sus playas bordeadas de palmeras y los arrecifes de coral.",
    },
    {
      name: "Cancún",
      img: "https://res.cloudinary.com/doczyujqf/image/upload/v1699901372/Places/cancunn_ta2z64.jpg",
      id: "4",
      place_descripcion:
        "Cancún es una ciudad de México ubicada en la península de Yucatán que limita con el mar Caribe y que es conocida por sus playas, los numerosos centros turísticos y la vida nocturna.",
    },
  ];
  useEffect(() => {
    let placeFounded = {};
    for (let i = 0; i < places.length; i++) {
      if (places[i].id === place_id) {
        placeFounded = places[i];
        break;
      }
    }
    if (Object.keys(placeFounded).length !== 0) {
      setPlace(placeFounded);
    } else {
      console.log("Objeto no encontrado");
    }
  }, [place_id, places]);
  return (
    <>
      {properties ? (
        <div>
          <TopBar />
          <Header />
          <Flyer1 />
          <div className="flex justify-center items-center ">
            <div className="relative w-full md:w-[1200px]">
              <a
                href={`/places`}
                className="absolute top-2 left-2 flex items-center space-x-2 hover:border-b-2 hover:border-gray-600"
              >
                <FaArrowLeftLong className="text-gray-600 text-lg"/><p className="text-gray-600 text-xl font-outfit-500">Volver a las locaciones</p>
              </a>
            </div>
          </div>
          <AllPropertiesContainer
            propiedades={properties}
            place_name={place.name}
            id={place.id}
            place_descripcion={place.place_descripcion}
          />
          <Footer />
        </div>
      ) : (
        <h1>cargando...</h1>
      )}
    </>
  );
};

export default Properties;
