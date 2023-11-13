import React from "react";

const GoogleMapEmbed = ({lat, lng}) => {
  const apiKey = "AIzaSyBu-e2OBM1eyAudbRyVSa8spxztumlhlkc"; 

  const latitude = lat;
  const longitude = lng;

  const embedUrl = `https://www.google.com/maps/embed/v1/place?q=${latitude},${longitude}&key=${apiKey}`;

  return (
    <div>
      <iframe
        title="Google Map"
        width="1200"
        height="550"
        frameBorder="0"
        style={{ border: 0 }}
        src={embedUrl}
        allowFullScreen
      />
    </div>
  );
};

export default GoogleMapEmbed;