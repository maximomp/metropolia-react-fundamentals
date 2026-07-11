import React from "react";
import Message from "../../../exercises/greeting";

const App = () => {
  // Assign the JSX element with the required message to the greeting variable
  const greeting = <h1>Welcome to React Basics Course!</h1>;

  return <Message name="Maximo" />;
};

export default App;
