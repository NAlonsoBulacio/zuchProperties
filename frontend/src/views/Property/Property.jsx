import React, { useState, useEffect } from "react";
import TopBar from "../../componentes/TopBar/TopBar";
import Header from "../../componentes/Header/Header";
import PresentProperty from "../../componentes/PresentProperty/PresentProperty";
import DescriptionProperty from "../../componentes/DescriptionProperty/DescriptionProperty";
import Amenidades from "../../componentes/Amenidades/Amenidades";
import Location from "../../componentes/Location/Location";
import Flyer2 from "../../componentes/Flyer2/Flyer2";
import ContactForm from "../../componentes/ContactForm/ContactForm";
import { useParams } from "react-router-dom";
import propiedades from "../../utils/propiedades";
import Footer from "../../componentes/Footer/Footer";
import WhatsAppButton from '../../componentes/Whatsapp/WhatsappButton'
const Property = () => {
  const [propiedad, setPropiedad] = useState(null);
  const { path } = useParams();
  useEffect(() => {
    let objetoEncontrado = null;

    for (let i = 0; i < propiedades.length; i++) {
      if (propiedades[i].path === path) {
        objetoEncontrado = propiedades[i];
        break;
      }
    }
    if (objetoEncontrado) {
      setPropiedad(objetoEncontrado);
    } else {
      console.log("Objeto no encontrado");
    }
  }, [path, propiedades]);

  return (
    <>
      {propiedad ? (
        <div>
          <TopBar />
          <Header />
          <PresentProperty
            name={propiedad.name}
            price={propiedad.price}
            photos={propiedad.photos}
            description={propiedad.description}
            date={propiedad.date}
          />
          <DescriptionProperty
            name={propiedad.name}
            full_description={propiedad.full_description}
            brochure_link={propiedad.brochure_link}
           youtube_link={propiedad.youtube_link}
           theasys_link={propiedad.theasys_link}
          />
          <Amenidades amenidades={propiedad.amenidades} />
          <Location
            location_descriprion={propiedad.location_descriprion}
            location={propiedad.location}
          />
          <Flyer2 />
          <div className="flex justify-center items-center py-20">
            <ContactForm />
          </div>
          <Footer />
          <WhatsAppButton />
        </div>
      ) : (
        <div>
          <h1>Cargando...</h1>
        </div>
      )}
    </>
  );
};

export default Property;
