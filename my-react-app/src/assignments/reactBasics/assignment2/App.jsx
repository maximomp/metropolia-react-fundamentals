import React from "react";

function App() {
  // Assign the JSX element with the required message to the greeting variable
  const greeting = <h1>Welcome to React Basics Course!</h1>;

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      {/* Render the greeting variable inside the return statement */}
      {greeting}
    </div>
  );
}

export default App;
