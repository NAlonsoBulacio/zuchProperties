import React from "react";
import YouTube from "react-youtube";
import "./YoutubePlayer.css"
const YoutubePlayer = ({ videoId }) => {
  const opts = {
    height: "360",
    width: "100%",
    playerVars: {
      autoplay: 1, // Iniciar automáticamente
      mute: 1, // Iniciar con mute
    },
  };

  return (
    <div className="youtube-div">
      <YouTube videoId={videoId} opts={opts} />
    </div>
  );
};

export default YoutubePlayer;
