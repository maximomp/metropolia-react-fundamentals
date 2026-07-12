import React from "react";
import "./styles.css";
import useTimer from "./useTimer";

const App = () => {
  const currentTime = useTimer();

  return (
    <div className="timer-wrapper">
      <h1>Current Time</h1>
      <p className="timer-value">{currentTime}</p>
    </div>
  );
};

export default App;
