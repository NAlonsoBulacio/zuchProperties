import React from "react";

const YoutubePlayer = ({ link }) => {

  return (
    <iframe
    style={{ width: "100%", height: "360px" }}
      src={link}
      title="YouTube video player"
      frameborder="0"
      allow="autoplay"
      allowfullscreen
    ></iframe>
  );
};

export default YoutubePlayer;
