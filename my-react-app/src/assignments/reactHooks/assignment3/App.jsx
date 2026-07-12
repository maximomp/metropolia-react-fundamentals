import React from "react";
import "./styles.css";
import { ThemeProvider } from "./ThemeContext";
import ThemeDisplay from "./ThemeDisplay";

const App = () => {
  return (
    <ThemeProvider>
      <ThemeDisplay />
    </ThemeProvider>
  );
};

export default App;
