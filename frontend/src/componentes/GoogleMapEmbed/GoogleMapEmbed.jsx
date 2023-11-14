import React from "react";
import './GoogleMapEmbed.css'
const GoogleMapEmbed = ({lat, lng}) => {
  const apiKey = "AIzaSyBu-e2OBM1eyAudbRyVSa8spxztumlhlkc";
  const latitude = lat;
  const longitude = lng;
console.log(apiKey);
  const embedUrl = `https://www.google.com/maps/embed/v1/place?q=${latitude},${longitude}&key=${apiKey}`;

  return (
    <div className="">
      <iframe
      className="mapa"
        title="Google Map"
        frameBorder="0"
        style={{ border: 0 }}
        src={embedUrl}
        allowFullScreen
      />
    </div>
  );
};

export default GoogleMapEmbed;