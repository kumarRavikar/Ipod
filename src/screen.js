
import React from "react";
function Screen({ currentMenu, menuItems, selected, isPlaying, inMenuScreen }) {
  return (
    <div className="screen">
      {inMenuScreen ? (
        <ul>
          {menuItems.map((item, index) => (
            <li
              key={index}
              style={{
                background: index === selected ? "#007bff" : "transparent",
                color: index === selected ? "white" : "black",
                padding: "5px",
                borderRadius: "5px"
              }}
            >
              {item}
            </li>
          ))}
        </ul>
      ) : (
        <div style={{ textAlign: "center" }}>
          {currentMenu === "songs" ? (
            <h2>{isPlaying ? `▶ Playing ${menuItems[selected]}` : `⏸ Paused`}</h2>
          ) : (
            <h2>{menuItems[selected]}</h2>
          )}
        </div>
      )}
    </div>
  );
}
export default Screen;
