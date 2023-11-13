import React from 'react'
import GoogleMapEmbed from '../GoogleMapEmbed/GoogleMapEmbed'
const Location = ({location_descriprion, location}) => {
  return (
    <div className="w-full flex justify-center items-center">
    <div className="max-w-[1200px] py-20">
      <div className="flex justify-center items-center py-10">
        <h1 className="font-raleway-700 text-center text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
          Ubicación
        </h1>
      </div>
      <div className="flex justify-center items-center">
        <p className="text-lg text-gray-500">{location_descriprion}</p>
      </div>
      <div className="flex justify-center items-center py-10">
        <GoogleMapEmbed lat={location.lat} lng={location.lng}/>
      </div>
    </div>
  </div>
  )
}

export default Location
