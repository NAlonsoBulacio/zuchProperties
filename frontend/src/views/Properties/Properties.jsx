import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import TopBar from "../../componentes/TopBar/TopBar";
import Header from "../../componentes/Header/Header";
import Flyer1 from "../../componentes/Flyer1/Flyer1";
import AllPropertiesContainer from "../../componentes/AllPropertiesContainer/AllPropertiesContainer";
import propiedades from "../../utils/propiedades";
import Footer from '../../componentes/Footer/Footer'
const Properties = () => {
  const [properties, setProperties] = useState(null);
  const { place } = useParams();

  useEffect(() => {
    let objetoEncontrado = null;

    for (let i = 0; i < propiedades.length; i++) {
      if (propiedades[i].place === place) {
        objetoEncontrado = propiedades[i];
        break;
      }
    }
    if (objetoEncontrado) {
      setProperties([objetoEncontrado]);
    } else {
      console.log("Objeto no encontrado");
    }
  }, [place, propiedades]);

  return (
    <>
      {properties ? (
        <div>
          <TopBar />
          <Header />
          <Flyer1 />
          <AllPropertiesContainer properties={properties} />
          <Footer />
        </div>
      ) : (
        <h1>cargando...</h1>
      )}
    </>
  );
};

export default Properties;
