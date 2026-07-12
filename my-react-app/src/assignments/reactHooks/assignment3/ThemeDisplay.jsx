import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import "./styles.css";

const ThemeDisplay = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={theme === "light" ? "lightTheme" : "darkTheme"}>
      <h1>Current theme: {theme}</h1>
      <button onClick={toggleTheme}>Switch Theme</button>
    </div>
  );
};

export default ThemeDisplay;
