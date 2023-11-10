import React from "react";

const YoutubePlayer = ({ link }) => {

  return (
    <iframe
      width="560"
      height="360"
      src={link}
      title="YouTube video player"
      frameborder="0"
      allow="autoplay"
      allowfullscreen
    ></iframe>
  );
};

export default YoutubePlayer;
