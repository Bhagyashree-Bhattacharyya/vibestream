import React from "react";
import "../styles/player.css";
import Sidebar from "./Sidebar";
import Body from "./Body";
import Footer from "./Footer";

function Player({ vibestream }) {
  return (
    <div className="player">
      <div className="player__body">
        <Sidebar />
        <Body vibestream = {vibestream} />
      </div>
      <Footer />
    </div>
  );
}

export default Player;