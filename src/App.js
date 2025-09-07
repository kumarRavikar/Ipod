// App.js
import  { useState } from "react";
import Screen from "./screen";
import Wheel from "./Wheel";
import "./App.css";
function App() {
  const [menu, setMenu] = useState("Main Menu");

  const handleMenu = () => setMenu("Settings");
  const handleNext = () => setMenu("Next Song");
  const handlePrev = () => setMenu("Previous Song");
  const handlePlayPause = () => setMenu("Play/Pause");

  return (
    <div className="ipod">
      <Screen currentMenu={menu} />
      <Wheel
        onMenu={handleMenu}
        onNext={handleNext}
        onPrev={handlePrev}
        onPlayPause={handlePlayPause}
      />
    </div>
  );
}

export default App;
