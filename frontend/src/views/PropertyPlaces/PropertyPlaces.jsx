import React from 'react'
import TopBar from "../../componentes/TopBar/TopBar";
import Header from "../../componentes/Header/Header"
import Flyer1 from '../../componentes/Flyer1/Flyer1';
import PlacesContainer from '../../componentes/PlacesContainer/PlacesContainer';
const PropertyPlaces = () => {
  return (
    <div>
      <TopBar />
      <Header />
      <Flyer1 />
      <PlacesContainer />
    </div>
  )
}

export default PropertyPlaces