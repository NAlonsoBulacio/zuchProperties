import React from "react";
import TopBar from "../../componentes/TopBar/TopBar";
import Header from "../../componentes/Header/Header";
import Footer from "../../componentes/Footer/Footer";
import PresentAboutUs from "../../componentes/PresentAboutUs/PresentAboutUs";
import DescriptionAboutUs from "../../componentes/DescriptionAboutUs/DescriptionAboutUs";
import WhatsAppButton from '../../componentes/Whatsapp/WhatsappButton'
const AboutUs = () => {
  return (
    <div>
      <TopBar />
      <Header />
      <PresentAboutUs />
      <DescriptionAboutUs />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default AboutUs;
