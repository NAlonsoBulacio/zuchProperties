import React from "react";
import TopBar from "../../componentes/TopBar/TopBar";
import Header from "../../componentes/Header/Header";
import Footer from "../../componentes/Footer/Footer";
import PresentAboutUs from "../../componentes/PresentAboutUs/PresentAboutUs";
import DescriptionAboutUs from "../../componentes/DescriptionAboutUs/DescriptionAboutUs";
const AboutUs = () => {
  return (
    <div>
      <TopBar />
      <Header />
      <PresentAboutUs />
      <DescriptionAboutUs />
      <Footer />
    </div>
  );
};

export default AboutUs;
