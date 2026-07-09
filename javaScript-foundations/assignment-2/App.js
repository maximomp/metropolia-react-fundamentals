// Use object destructuring to extract title and year in App.js

// const movie = { title: "Inception", year: 2010, director: "Nolan" };

// const /* Your code here */

// Now use destructed object to print out  // The movie "Inception" was released in 2010.
//Return screenshot from browser and copy of code from App.js

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
