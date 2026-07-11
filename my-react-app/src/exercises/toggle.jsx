import React, { useState } from "react";
import "./styles.css";

const ToggleButton = () => {
  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    setIsOn((prev) => !prev);
  };

  return (
    <button
      onClick={handleToggle}
      className={`toggle-btn ${isOn ? "toggle-on" : "toggle-off"}`}
    >
      {isOn ? "ON" : "OFF"}
    </button>
  );
};

export default ToggleButton;
