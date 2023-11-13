import React, { useState } from "react";
import Place from "../Place/Place";
import AllPropertiesContainer from "../AllPropertiesContainer/AllPropertiesContainer";
import propiedades from "../../utils/propiedades";
const PlacesContainer = ({ properties }) => {
  const places = [
    {
      name: "Tulum",
      img: "https://maxproperties.com.mx/wp-content/uploads/2021/09/paam.webp",
      id: "1",
    },
    {
      name: "Cozumel",
      img: "https://maxproperties.com.mx/wp-content/uploads/2021/09/paam.webp",
      id: "2",
    },
    {
      name: "Playa del Carmen",
      img: "https://maxproperties.com.mx/wp-content/uploads/2021/09/paam.webp",
      id: "3",
    },
    {
      name: "Cancún",
      img: "https://maxproperties.com.mx/wp-content/uploads/2021/09/paam.webp",
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
    <div>
      <div className="w-full flex items-center justify-center">
        <div className="flex flex-wrap md:max-w-[1300px] items-center justify-center">
          {places.map((datos, index) => (
            <button key={index} className="w-full sm:w-1/2 md:w-1/2 p-4 mb-8"
            onClick={() => handleButtonClick(<AllPropertiesContainer id={datos.id} propiedades={propiedades}/>)}
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
