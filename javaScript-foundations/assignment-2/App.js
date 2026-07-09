import React from "react";

// THIS IS A APP:JSX FILE REPLACE IN MY-REACT-APP/SRC/APP.JSX FOR TEST
function App() {
  const movie = { title: "Inception", year: 2010, director: "Nolan" };
  const { title, year } = movie;

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <p>
        The movie "{title}" was released in {year}.
      </p>
    </div>
  );
}

export default App;
