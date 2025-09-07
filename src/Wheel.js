import React, { useRef } from "react";

function Wheel({ onMenu, onNext, onPrev, onPlayPause, onSelect, setSelected, menuLength }) {
  const wheelRef = useRef(null);
  let lastAngle = null;

  const handleRotate = (e) => {
    const rect = wheelRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const dx = e.clientX - centerX;
    const dy = e.clientY - centerY;

    const angle = Math.atan2(dy, dx) * (360 / Math.PI);

    if (lastAngle !== null) {
      const diff = angle - lastAngle;
      if (diff > 15) {
        setSelected((prev) => (prev + 1) % menuLength); // scroll down
      } else if (diff < -15) {
        setSelected((prev) => (prev - 1 + menuLength) % menuLength); // scroll up
      }
    }
    lastAngle = angle;
  };

  return (
    <div className="wheel">
      <div
        ref={wheelRef}
        className="inner-wheel"
        onMouseMove={handleRotate}
      >
        <button className="menu-btn" onClick={onMenu}>MENU</button>
        <button className="next-btn" onClick={onNext}>▶▶</button>
        <button className="prev-btn" onClick={onPrev}>◀◀</button>
        <button className="play-btn" onClick={onPlayPause}>⏯</button>
        <div className="center-btn" onClick={onSelect}></div>
      </div>
    </div>
  );
}


export default Wheel;
