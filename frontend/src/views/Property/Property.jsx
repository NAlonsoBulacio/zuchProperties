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
import WhatsAppButton from "../../componentes/Whatsapp/WhatsappButton";
import { FaArrowLeftLong } from "react-icons/fa6";
const Property = () => {
  const [propiedad, setPropiedad] = useState(null);
  const [place, setPlace] = useState(null);
  const { path } = useParams();
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
    let objetoEncontrado = null;

    for (let i = 0; i < propiedades.length; i++) {
      if (propiedades[i].path === path) {
        objetoEncontrado = propiedades[i];
        break;
      }
    }
    if (objetoEncontrado) {
      setPropiedad(objetoEncontrado);
      const lugarEncontrado = places.find(place => place.id === objetoEncontrado.place_id);
      setPlace(lugarEncontrado);

    } else {
      console.log("Objeto no encontrado");
    }
  }, [path, propiedades]);
  
  
  return (
    <>
      {propiedad && place ? (
        <div>
          <TopBar />
          <Header />
          <div className="flex justify-center items-center ">
            <div className="relative w-full md:w-[1200px]">
              <a
                href={`/properties/${place.id}`}
                className="absolute top-2 left-2 flex items-center space-x-2 hover:border-b-2 hover:border-gray-600"
              >
                <FaArrowLeftLong className="text-gray-600 text-lg"/><p className="text-gray-600 text-xl font-outfit-500">Ver más propiedades de {place.name}</p>
              </a>
            </div>
          </div>
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
          <div className="flex justify-center items-center ">
            <div className="relative w-full md:w-[1200px]">
              <a
                href={`/properties/${place.id}`}
                className="absolute top-0 md:bottom-32 left-2 flex items-center space-x-2 hover:border-b-2 hover:border-gray-600"
              >
                <FaArrowLeftLong className="text-gray-600 text-xl"/><p className="text-gray-600 text-xl font-outfit-500">Ver más propiedades de {place.name}</p>
              </a>
            </div>
          </div>
          <div className="w-full h-10 md:h-6 bg-white">

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
