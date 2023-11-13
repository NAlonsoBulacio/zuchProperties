import React, { useState } from "react";
import Place from "../Place/Place";
import AllPropertiesContainer from "../AllPropertiesContainer/AllPropertiesContainer";
import propiedades from "../../utils/propiedades";
const PlacesContainer = ({ properties }) => {
  const places = [
    {
      name: "Tulum",
      img: "https://res.cloudinary.com/doczyujqf/image/upload/v1699901380/Places/tulum_ipsnvz.jpg",
      id: "1",
    },
    {
      name: "Cozumel",
      img: "https://res.cloudinary.com/doczyujqf/image/upload/v1699901382/Places/cozumel_nzxwe7.jpg",
      id: "2",
    },
    {
      name: "Playa del Carmen",
      img: "https://res.cloudinary.com/doczyujqf/image/upload/v1699901371/Places/playadelcarmen_bsvzbb.jpg",
      id: "3",
    },
    {
      name: "Cancún",
      img: "https://res.cloudinary.com/doczyujqf/image/upload/v1699901372/Places/cancunn_ta2z64.jpg",
      id: "4",
    },
  ];
  const [selectedComponent, setSelectedComponent] = useState(null);

  const handleButtonClick = (component) => {
    setSelectedComponent(component);
    setTimeout(() => {
      scrollToNewComponent();
    }, 100);
  };

  const scrollToNewComponent = () => {
    const newComponentContainer = document.getElementById(
      "new-component-container"
    );
    if (newComponentContainer) {
      newComponentContainer.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="py-32">
      <div className="flex justify-center items-center">
        <div className="space-y-2">
        <div className="w-[1226px] flex justify-start items-center">
          <h1
            className="font-outfit-600 text-center md:text-left text-3xl sm:text-3xl md:text-7xl "
            style={{ color: "#1f1f1f" }}
          >
            Explora la Rivera Maya
          </h1>
        </div>
        <div className="w-[1226px] flex justify-start items-center">
          <p className="text-2xl text-gray-700">Encuentra los mejores inmuebles en venta en la Riviera Maya y sus alrededores.</p>
        </div>
        </div>
      </div>
      <div className="w-full flex items-center justify-center py-8">
        <div className="flex flex-wrap md:max-w-[1300px] items-center justify-center">
          {places.map((datos, index) => (
            <button
              key={index}
              className="w-full sm:w-1/2 md:w-1/2 p-4 mb-8"
              onClick={() =>
                handleButtonClick(
                  <AllPropertiesContainer
                    id={datos.id}
                    propiedades={propiedades}
                    place_name={datos.name}
                  />
                )
              }
            >
              <Place imgUrl={datos.img} name={datos.name} id={datos.id} />
            </button>
          ))}
        </div>
      </div>
      <div id="new-component-container">
        {selectedComponent && <div>{selectedComponent}</div>}
      </div>
    </div>
  );
};

export default PlacesContainer;
