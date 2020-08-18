import React from "react";
import Gif from "../../../assets/videos/gif.mp4";
import ReactPlayer from "react-player";
import "./preLaunchContent.styles.scss";

const PreLaunchContent = () => {
  return (
    <div className="player-wrapper">
      <ReactPlayer
        className="react-player"
        url={Gif}
        loop={true}
        playsInline={true}
        width="100%"
        height="100%"
        playing={true}
        muted={true}
      />
    </div>
  );
};

export default PreLaunchContent;
