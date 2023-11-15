import React from "react";
import YouTube from "react-youtube";

const YoutubePlayer = ({ videoId }) => {
  const opts = {
    height: "360",
    width: "640",
    playerVars: {
      autoplay: 1, // Iniciar automáticamente
      mute: 1, // Iniciar con mute
    },
  };

  return (
    <div>
      <YouTube videoId={videoId} opts={opts} />
    </div>
  );
};

export default YoutubePlayer;
