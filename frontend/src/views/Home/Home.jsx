import React from "react";
import TopBar from "../../componentes/TopBar/TopBar";
import Header from "../../componentes/Header/Header";
import ContactUs from "../../componentes/ContactUs/ContactUs";
import FollowUs from "../../componentes/SocialMedia/FollowUs";
import BestPropertiesContainer from "../../componentes/BestPropertiesContainer/BestPropertiesContainer"
import NewCarousel from "../../componentes/NewCarousel/NewCarousel"
import Flyer1 from '../../componentes/Flyer1/Flyer1';
import Footer from "../../componentes/Footer/Footer";
const Home = () => {
  return (
    <div className="flex flex-col items-center">
      <TopBar />
      <Header />
      <NewCarousel />
      <Flyer1 />
      <div className="w-full">
        <BestPropertiesContainer />
      </div>
      <div className="w-full">
        <FollowUs />
      </div>
      <div className="text-center py-4 max-w-[1223px] mx-auto ">
        <ContactUs />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
