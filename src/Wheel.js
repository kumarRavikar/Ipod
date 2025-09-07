// Wheel.js
import React from "react";

function Wheel({ onMenu, onNext, onPrev, onPlayPause }) {
  return (
    <div className="wheel">
      <button onClick={onMenu}>Menu</button>
      <button onClick={onPrev}>⏮</button>
      <button onClick={onPlayPause}>⏯</button>
      <button onClick={onNext}>⏭</button>
    </div>
  );
}

export default Wheel;
