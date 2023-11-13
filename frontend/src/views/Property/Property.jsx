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
      setPropiedad(objetoEncontrado)
    } else {
      console.log("Objeto no encontrado");
    }
  }, [path, propiedades]);

  // const propiedad = {
  //   name: "Athimar",
  //   description:
  //     "Desarrollo de24 departamentos de 1, 2 y 3 habitaciones, 1 Penthouse y 8 Locales Comerciales",
  //   price: "$ 170,000 USD",
  //   date: "Abril 2024",
  //   photo:
  //     "https://maxproperties.com.mx/wp-content/uploads/2022/03/102_-1667x903.webp",
  //   full_description: [
  //     "Athimar es un desarrollo de lujo con el diseño y la arquitectura pensados minuciosamente para brindar ambientes con estilo, lujo y confort. La premisa del diseño fue generar vistas inigualables desde cada una de sus unidades, regalando una obra de arte en tonos turquesa sólo con mirar por tu ventana.",
  //     "¡Vivir en Athimar, será hacer un sueño realidad! Tendrás a tu alcance todas las comodidades y el confort de la vida ideal que siempre imaginaste.",
  //     "Athimar es un edificio de 6 niveles. Cuenta con 25 unidades conformadas por 8 tipologías diferentes entre las que podrás encontrar departamentos de 1 a 3 recámaras, con terraza, rooftop o jacuzzi e increíbles amenidades.",
  //   ],
  //   youtube_link:
  //     "https://www.youtube.com/embed/6iRB6KGgxoQ?si=WNAdurNdT_AsJqy7?mute=1",
  //   brochure_link:
  //     "https://drive.google.com/drive/folders/1KcZ4JoNOfac1LtJOutqzqup3mRfNL_n4",
  //   amenidades: [
  //     {
  //       type: "Estacionamiento",
  //       imgUrl:
  //         "https://res.cloudinary.com/doczyujqf/image/upload/v1699622948/amenidades/garaje_nfdfcw.png",
  //     },
  //     {
  //       type: "Bar",
  //       imgUrl:
  //         "https://res.cloudinary.com/doczyujqf/image/upload/v1699622947/amenidades/bar_fgogsz.svg",
  //     },
  //     {
  //       type: "Estacionamiento bicicletas",
  //       imgUrl:
  //         "https://res.cloudinary.com/doczyujqf/image/upload/v1699627214/amenidades/bicicleta_r70tsf.png",
  //     },
  //     {
  //       type: "Sala de juntas",
  //       imgUrl:
  //         "https://res.cloudinary.com/doczyujqf/image/upload/v1699622952/amenidades/salon_rp3nts.png",
  //     },
  //     {
  //       type: "Centro de negocios",
  //       imgUrl:
  //         "https://res.cloudinary.com/doczyujqf/image/upload/v1699622950/amenidades/maletin_xqyxvg.png",
  //     },
  //     {
  //       type: "Vestíbulo",
  //       imgUrl:
  //         "https://res.cloudinary.com/doczyujqf/image/upload/v1699622947/amenidades/bell_d3f1d0.png",
  //     },
  //     {
  //       type: "Gimnasio",
  //       imgUrl:
  //         "https://res.cloudinary.com/doczyujqf/image/upload/v1699622948/amenidades/gym_g5kdim.png",
  //     },
  //     {
  //       type: "Alberca",
  //       imgUrl:
  //         "https://res.cloudinary.com/doczyujqf/image/upload/v1699622951/amenidades/pool_so7axz.png",
  //     },
  //     {
  //       type: "Asoleadores",
  //       imgUrl:
  //         "https://res.cloudinary.com/doczyujqf/image/upload/v1699627439/amenidades/sombrilla-de-playa_muoss9.png",
  //     },
  //     {
  //       type: "Área de asesores",
  //       imgUrl:
  //         "https://res.cloudinary.com/doczyujqf/image/upload/v1699622951/amenidades/parrilla_gldpkq.png",
  //     },
  //   ],
  //   path: "athimar",
  //   location_descriprion:
  //     "Cozumel es la isla más grande del Caribe Mexicano. Rico en historia, vestigios mayas y maravillas naturales; un auténtico paraíso en medio del mar con playas blancas, bellos atardeceres y famosa a nivel mundial por sus arrecifes de coral. Es un destino de aventura y relajación en donde se realizan todo tipo de actividades en impresionantes escenarios naturales.",
  //   location: {
  //     lat: "20.505026584870738",
  //     lng: "-86.95708744018279",
  //   },
  // };
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
