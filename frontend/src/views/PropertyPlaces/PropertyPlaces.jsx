import React from "react";
import TopBar from "../../componentes/TopBar/TopBar";
import Header from "../../componentes/Header/Header";
import Flyer1 from "../../componentes/Flyer1/Flyer1";
import PlacesContainer from "../../componentes/PlacesContainer/PlacesContainer";
import Footer from "../../componentes/Footer/Footer";
import ContactForm from "../../componentes/ContactForm/ContactForm";
import Flyer2 from "../../componentes/Flyer2/Flyer2";
import WhatsAppButton from '../../componentes/Whatsapp/WhatsappButton'
const PropertyPlaces = () => {
  return (
    <div>
      <TopBar />
      <Header />
      <Flyer1 />
      <PlacesContainer />
      <div className="py-12">
        <Flyer2 />
      </div>
      <div className="flex justify-center items-center py-12">
        <ContactForm />
      </div>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default PropertyPlaces;
