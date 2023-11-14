import React from "react";
import TopBar from "../../componentes/TopBar/TopBar";
import Header from "../../componentes/Header/Header";
import Footer from "../../componentes/Footer/Footer";
import PresentAboutUs from "../../componentes/PresentAboutUs/PresentAboutUs";
const AboutUs = () => {
  return (
    <div>
      <TopBar />
      <Header />
      <PresentAboutUs />
      <div className="w-full bg-gray-100 flex justify-center items-center">
        <div className="w-[300px] bg-white rounded-3xl space-y-4">
          <img className="w-full rounded-3xl" src="https://res.cloudinary.com/doczyujqf/image/upload/v1699970243/Zuch%20Properties/zach_ewiw86.jpg" alt="" />
          <div>
            <h1 className="text-2xl">
              Santiago Antunez CEO
            </h1>
          </div>
          <div>
            <p className="text-sm text-gray-600">
            "CREEMOS QUE TU HOGAR ES TU SANTUARIO, UN LUGAR DONDE LA SALUD EN TU VIDA EMPIEZA. ENCUENTRA EL HOGAR PERFECTO QUE RESUENA CON TU ALMA Y HAZ DE ESTE MUNDO UN MEJOR LUGAR."
            </p>
          </div>
          <div>
            <button className="text-xl text-white rounded-full bg-gray-700 px-4 py-3 my-2">
              Chatea conmigo.
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
