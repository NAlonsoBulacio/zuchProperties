import React from "react";
import TopBar from "../../componentes/TopBar/TopBar";
import Header from "../../componentes/Header/Header";
import Footer from "../../componentes/Footer/Footer";
import WhatsAppButton from "../../componentes/Whatsapp/WhatsappButton";
import DescriptionContact from "../../componentes/DescrptionContact/DescriptionContact";
const Contact = () => {
  return (
    <div>
      <TopBar />
      <Header />
      <DescriptionContact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Contact;
