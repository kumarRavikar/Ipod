
import React, { useState } from "react";
import Screen from "./screen";
import Wheel from "./Wheel";
import './App.css';

function App() {
 const menus = {
    main: ["Music", "Settings", "Now Playing"],
    music: ["Songs", "Artists", "Albums"],
    songs: ["Song 1", "Song 2", "Song 3"]
  };

  const [currentMenu, setCurrentMenu] = useState("main");
  const [selected, setSelected] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [inMenuScreen, setInMenuScreen] = useState(true);

  // Menu button = back
  const handleMenu = () => {
    if (!inMenuScreen) {
      setInMenuScreen(true); // go back to menu list
    } else if (currentMenu === "songs") setCurrentMenu("music");
    else if (currentMenu === "music") setCurrentMenu("main");
  };

  // Next/Prev scrolling
  const handleNext = () => {
    setSelected((prev) => (prev + 1) % menus[currentMenu].length);
  };
  const handlePrev = () => {
    setSelected((prev) =>
      prev === 0 ? menus[currentMenu].length - 1 : prev - 1
    );
  };

  // Center button = select
  const handleSelect = () => {
    const option = menus[currentMenu][selected];
    if (currentMenu === "main" && option === "Music") {
      setCurrentMenu("music");
      setSelected(0);
    } else if (currentMenu === "music" && option === "Songs") {
      setCurrentMenu("songs");
      setSelected(0);
    } else {
      // Open screen for that option
      setInMenuScreen(false);
    }
  };

  // Play/Pause
  const handlePlayPause = () => {
    setIsPlaying((prev) => !prev);
  };

  return (
    <div className="ipod">
      <Screen
        currentMenu={currentMenu}
        menuItems={menus[currentMenu]}
        selected={selected}
        isPlaying={isPlaying}
        inMenuScreen={inMenuScreen}
      />
      <Wheel
        onMenu={handleMenu}
        onNext={handleNext}
        onPrev={handlePrev}
        onPlayPause={handlePlayPause}
        onSelect={handleSelect}
        setSelected={setSelected}
        menuLength={menus[currentMenu].length}
      />
    </div>
  );
}

export default App;
