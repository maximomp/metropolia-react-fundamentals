import React from "react";
import "./styles.css";
import { ThemeProvider } from "./ThemeContext";
import ThemeDisplay from "./ThemeDisplay";

const App = (props) => {
  const { toggleDarkMode } = props;
  return (
    <ThemeProvider toggleDarkMode={toggleDarkMode}>
      <ThemeDisplay />
    </ThemeProvider>
  );
};

export default App;
